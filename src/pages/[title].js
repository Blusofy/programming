import {
    Box,
    Button,
    Divider,
    Fade,
    Grid,
    Paper,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import { Edit as EditIcon, Print as PrintIcon, YouTube as YouTubeIcon } from '@material-ui/icons';
import { Base64 } from 'js-base64';
import Head from 'next/head';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import printStyle from '../../styles/print.module.css';
import AlertInfo from '../components/AlertInfo';
import ContentList from '../components/Content/List';
import ContentView from '../components/Content/View';
import Layout from '../components/Layout';
import PrintHead from '../components/PrintHead';
import SocialLinks from '../components/SocialLinks';

function Content({ content, source, title }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const componentRef = useRef();
    const [isPrint, setPrint] = useState(false);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${process.env.C_NAME}${process.env.ROOT_PAGE}/${title}`,
        bodyClass: printStyle.mediaPrint,
        onBeforeGetContent: () => {
            setPrint(true);
        },
        onAfterPrint: () => {
            setPrint(false);
        },
    });
    return (
        <>
            <Head>
                <title>
                    {`${title} (${
                        process.env.ROOT_PAGE.slice(1)[0].toUpperCase() +
                        process.env.ROOT_PAGE.slice(2)
                    })`}{' '}
                    | Informative Coding - ইনফরমেটিভ কোডিং
                </title>
                <link
                    rel="canonical"
                    href={`${process.env.C_NAME}${process.env.ROOT_PAGE}/${title}`}
                />
            </Head>
            <Layout>
                <Box
                    padding={isMobile ? '0rem' : '1rem'}
                    paddingTop="1rem"
                    marginTop="5rem"
                    marginBottom="2rem"
                >
                    {/* Content Body */}
                    <Grid container spacing={2}>
                        <Grid item sm={3}>
                            {!isMobile && (
                                <Paper style={{ position: 'sticky', top: '8%' }}>
                                    <ContentList />
                                    <Box padding="0.5rem">
                                        <Button
                                            size="large"
                                            startIcon={<YouTubeIcon />}
                                            fullWidth
                                            variant="outlined"
                                        >
                                            <Typography variant="subtitle1">
                                                সাবস্ক্রাইব করুন
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Paper>
                            )}
                        </Grid>
                        <Grid item sm={9} style={{ width: '100%' }}>
                            <Fade in>
                                <Box padding={isMobile ? '0rem' : '1rem'}>
                                    {process.env.IS_COURSE_COMPLETED === 'false' && <AlertInfo />}

                                    <div ref={componentRef}>
                                        {isPrint && <PrintHead />}
                                        <ContentView content={content} source={source} />
                                    </div>
                                </Box>
                            </Fade>
                            <Divider />
                            {/* Content Footer */}
                            <Box display="flex" padding="0.5rem" justifyContent="space-between">
                                <Button
                                    href={source}
                                    target="blank"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<EditIcon />}
                                    style={{ marginRight: '0.25rem' }}
                                >
                                    এডিট করুন
                                </Button>
                                <Button
                                    onClick={handlePrint}
                                    variant="outlined"
                                    style={{ marginLeft: '0.25rem' }}
                                    fullWidth
                                    startIcon={<PrintIcon />}
                                >
                                    প্রিন্ট করুন
                                </Button>
                            </Box>
                            <Box
                                display="flex"
                                paddingLeft="0.5rem"
                                paddingRight="0.5rem"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography variant="subtitle1" color="textSecondary">
                                    শেয়ার করুন -
                                </Typography>
                                <SocialLinks
                                    links={[
                                        {
                                            name: 'facebook',
                                            href: `https://www.facebook.com/sharer/sharer.php?u=${process.env.C_NAME}/${process.env.ROOT_PAGE}/${title}`,
                                        },
                                        {
                                            name: 'linkedin',
                                            href: `https://www.linkedin.com/sharing/share-offsite/?url=${process.env.C_NAME}${process.env.ROOT_PAGE}/${title}`,
                                        },
                                    ]}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    );
}
// Get Static Props For SSG
export async function getStaticProps(ctx) {
    const { title } = ctx.params;
    const res = await fetch(
        `${process.env.GITHUB_CONTENT_API_URI}${process.env.ROOT_PAGE}/${`${title.replace(
            /-/g,
            ' '
        )}.md`}`,
        {
            headers: {
                Authorization: process.env.GITHUB_AUTH_API_TOKEN,
            },
        }
    );
    const post = await res.json();
    const source = post.html_url;
    const content = Base64.decode(post.content);

    return {
        props: { content, source, title },
    };
}

// Get Static Paths SSG Paths Of Each File
export async function getStaticPaths() {
    try {
        const res = await fetch(`${process.env.GITHUB_CONTENT_API_URI}${process.env.ROOT_PAGE}`, {
            headers: {
                Authorization: process.env.GITHUB_AUTH_API_TOKEN,
            },
        });
        const titles = await res.json();
        const paths = titles.map(({ name }) => ({
            params: { title: name.replace(/\s/g, '-').split('.')[0] },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (e) {
        return {
            paths: [],
            fallback: false,
        };
    }
}

export default Content;
