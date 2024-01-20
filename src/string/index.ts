import { camelCase as _camelCase } from "./camelCase.ts";
import { deburr as _deburr } from "./deburr.ts";
import { endsWith as _endsWith } from "./endsWith.ts";
import { escapeHtml as _escapeHtml } from "./escapeHtml.ts";
import { escapeRegExp as _escapeRegExp } from "./escapeRegExp.ts";
import { kebabCase as _kebabCase } from "./kebabCase.ts";
import { lowerCase as _lowerCase } from "./lowerCase.ts";
import { lowerFirst as _lowerFirst } from "./lowerFirst.ts";
import { pad as _pad } from "./pad.ts";
import { padEnd as _padEnd } from "./padEnd.ts";
import { padStart as _padStart } from "./padStart.ts";
import { pascalCase as _pascalCase } from "./pascalCase.ts";
import { repeat as _repeat } from "./repeat.ts";
import { replaceLast as _replaceLast } from "./replaceLast.ts";
import { stringSize } from "./size.ts";
import { snakeCase as _snakeCase } from "./snakeCase.ts";
import { splitWords as _splitWords } from "./splitWords.ts";
import { startsWith as _startsWith } from "./startsWith.ts";
import { titleCase as _titleCase } from "./titleCase.ts";
import { trim as _trim } from "./trim.ts";
import { trimEnd as _trimEnd } from "./trimEnd.ts";
import { trimStart as _trimStart } from "./trimStart.ts";
import { unescapeHtml as _unescapeHtml } from "./unescapeHtml.ts";
import { upperCase as _upperCase } from "./upperCase.ts";
import { upperFirst as _upperFirst } from "./upperFirst.ts";

export namespace str {
	export const camelCase = _camelCase;
	export const deburr = _deburr;
	export const endsWith = _endsWith;
	export const escapeHtml = _escapeHtml;
	export const escapeRegExp = _escapeRegExp;
	export const kebabCase = _kebabCase;
	export const lowerCase = _lowerCase;
	export const lowerFirst = _lowerFirst;
	export const pad = _pad;
	export const padEnd = _padEnd;
	export const padStart = _padStart;
	export const pascalCase = _pascalCase;
	export const repeat = _repeat;
	export const replaceLast = _replaceLast;
	export const size = stringSize;
	export const snakeCase = _snakeCase;
	export const splitWords = _splitWords;
	export const startsWith = _startsWith;
	export const titleCase = _titleCase;
	export const trim = _trim;
	export const trimEnd = _trimEnd;
	export const trimStart = _trimStart;
	export const unescapeHtml = _unescapeHtml;
	export const upperCase = _upperCase;
	export const upperFirst = _upperFirst;
}

export {
	_camelCase as camelCase,
	_deburr as deburr,
	_endsWith as endsWith,
	_escapeHtml as escapeHtml,
	_escapeRegExp as escapeRegExp,
	_kebabCase as kebabCase,
	_lowerCase as lowerCase,
	_lowerFirst as lowerFirst,
	_pad as pad,
	_padEnd as padEnd,
	_padStart as padStart,
	_pascalCase as pascalCase,
	_repeat as repeat,
	_replaceLast as replaceLast,
	stringSize,
	_snakeCase as snakeCase,
	_splitWords as splitWords,
	_startsWith as startsWith,
	_titleCase as titleCase,
	_trim as trim,
	_trimEnd as trimEnd,
	_trimStart as trimStart,
	_unescapeHtml as unescapeHtml,
	_upperCase as upperCase,
	_upperFirst as upperFirst,
};
