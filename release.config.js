module.exports = {
    branches: ["master"],
    repositoryUrl: "https://github.com/trivao/react-antd-ui-kit.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        [
            "@semantic-release/github",
            {
                assets: [{ path: "dist/*.tgz", label: "Distribution File" }],
            },
        ],
    ],
};
