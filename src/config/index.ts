import * as tags from "./tags.ts";

const { cloneableTags: _, ...otherTags } = tags;

export namespace config {
	export const tags = otherTags;
}

export { otherTags as tags };
