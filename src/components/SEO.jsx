/**
 * Date:24/04/2021
 * Author: Muhammad Minhaj
 * Title: Website Seo
 * Description: This is a seo component for website
 * * */

const data = {
    title: 'Informative Coding | Learn Programming',
    description:
        'This is a non-profit organization for learning programming-related topics. You can learn on this platform all about Programming, Data Structures & Algorithms, and New Technologies.',
    keywords:
        'Informative Coding, Learn Programming, Data Structures, Algorithms, JavaScript, Programming Languages',
    url: 'https://informativecoding.github.io',
    altForImage: 'Muhammad Minhaj',
    siteName: 'informativecoding.github.io',
    fbAppId: '3242641772502117',
    twitterSiteUsername: '@InformativeCode',
    author: 'Muhammad Minhaj',
    image: '/static/logo.png',
    favicon: '/static/favicon.ico',
};

const SEO = ({ title }) => (
    <>
        <title>{title || data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={data.description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content={data.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content="https://informativecoding.github.io/static/logo.png" />
        <meta name="twitter:creator" content={data.twitterSiteUsername} />
        <meta name="twitter:image:alt" content={data.altForImage} />
        <meta name="twitter:site" content={data.twitterSiteUsername} />

        {/* Open Graph */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.siteName} />
        <meta property="fb:app_id" content={data.fbAppId} />
        <link rel="canonical" href={data.url} />
        <link rel="icon" type="image/png" sizes="48x48" href={data.favicon} />
    </>
);

export default SEO;
