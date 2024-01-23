import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

type Result = {
	string: string;
	score: number;
	index: number;
	original: string;
};

/**
 * Test if a string matches a pattern for fuzzy searching.
 *
 * @private
 * @param pattern The search input string
 * @param string The string to match with the pattern
 * @param opts (Optional) Options object
 * @param opts.extract (Optional) Function to extract a string from an element in the array
 * @param opts.pre (Optional) String to put before a matching character
 * @param opts.post (Optional) String to put after a matching character
 * @returns An object with the rendered string and the score, or null if it doesn't match
 *
 * @category Array
 */
export function fuzzySearchMatch(
	pattern: string,
	string: string,
	opts?: {
		extract?: (...args: any) => string;
		pre?: string;
		post?: string;
		caseSensitive?: boolean;
	},
) {
	let result = "";
	let score = 0;
	let stepScore = 0;

	const pre = opts?.pre ?? "";
	const post = opts?.post ?? "";
	const compareStr = opts?.caseSensitive ? string : string.toLowerCase();
	pattern = opts?.caseSensitive ? pattern : pattern.toLowerCase();

	let i = 0;
	let j = 0;
	for (let char of string) {
		if (compareStr[i] === pattern[j]) {
			char = pre + char + post;
			stepScore += 1 + stepScore;
			j++;
		} else stepScore = 0;
		score += stepScore;
		result += char;
		i++;
	}

	if (j === pattern.length) {
		score = compareStr === pattern ? Infinity : score;
		return { result, score };
	}

	return null;
}

/**
 * Fuzzy search an array of strings.
 * It uses a scoring system to determine the best matches.
 * The best matches are returned first.
 *
 * *Based on [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search).*
 *
 * @example
 * ```ts
 * fuzzySearch("abc", ["abc", "acb", "bac", "bca", "cab", "cba"])
 * // => [
 * //   { string: "abc", score: Infinity, index: 0, original: "abc" },
 * //   { string: "acb", score: 6, index: 1, original: "acb" },
 * //   { string: "cab", score: 6, index: 4, original: "cab" },
 * //   { string: "bac", score: 5, index: 2, original: "bac" },
 * //   { string: "bca", score: 5, index: 3, original: "bca" },
 * //   { string: "cba", score: 4, index: 5, original: "cba" },
 * // ]
 * ```
 *
 * @param pattern The search input string
 * @param array The array to search through
 * @param opts (Optional) Options object
 * @param opts.extract (Optional) Function to extract a string from an element in the array
 * @param opts.pre (Optional) String to put before a matching character
 * @param opts.post (Optional) String to put after a matching character
 * @template T The type of array
 * @returns An array of matches
 *
 * @category Array
 */
export function fuzzySearch<T extends any[] | ArrayLike<any> = string[]>(
	pattern: string,
	array: T,
	opts?: T extends string[] | ArrayLike<string>
		? {
				extract?: (arg: string) => string;
				pre?: string;
				post?: string;
				caseSensitive?: boolean;
		  }
		: {
				extract: (arg: T[number]) => string;
				pre?: string;
				post?: string;
				caseSensitive?: boolean;
		  },
): Result[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length || typeof pattern !== "string")
		return [] as {
			string: string;
			score: number;
			index: number;
			original: string;
		}[];

	const options =
		opts ??
		({} as {
			extract?: (arg: unknown) => string;
			pre?: string;
			post?: string;
			caseSensitive?: boolean;
		});

	return arr
		.reduce((prev, elem, i) => {
			let str: string;
			if (options.extract) str = options.extract(elem);
			else str = `${elem}`;

			const rendered = fuzzySearchMatch(pattern, str, options);

			if (rendered)
				prev.push({
					string: rendered.result,
					score: rendered.score,
					index: i,
					original: `${elem}`,
				});

			return prev;
		}, [] as Result[])
		.toSorted((a: Result, b: Result) => {
			const compare = b.score - a.score;
			if (compare) return compare;
			return a.index - b.index;
		});
}
