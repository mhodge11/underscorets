export default {
	extends: [
		"@commitlint/config-conventional", // scoped packages are not prefixed
	],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"build",
				"chore",
				"chore(release)",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"proposal",
				"refactor",
				"release",
				"revert",
				"style",
				"test",
				"wip",
			],
		],
	},
};
