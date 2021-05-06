const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        C_NAME: 'https://informativecoding.github.io',
        ROOT_PAGE: '/programming',
        GITHUB_CONTENT_API_URI: 'https://api.github.com/repos/InformativeCoding/data/contents',
        GITHUB_AUTH_API_TOKEN: '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',
        IS_COURSE_COMPLETED: 'false',
    },
    assetPrefix: isProd ? '/programming' : '',
    basePath: isProd ? '/programming' : '',
};
