export const validPathRegex =
	/^[^.[\]]+(?:\.[^.[\]]+)*(?:\[\d+])*(?:\.[^.[\]]+(?:\[\d+])*)*$/;
export const pathSplitRegex = /\.|(?=\[)/g;
export const matchBracketsRegex = /[[\]]/g;
