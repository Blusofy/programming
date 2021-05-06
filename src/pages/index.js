import { Box, Button, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Print as PrintIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import Head from 'next/head';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import printStyle from '../../styles/print.module.css';
import AlertInfo from '../components/AlertInfo';
import TopicsList from '../components/Content/List';
import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import { description, image, shortTitle, title } from '../data.json';

const getIcon = (iconName) => {
    switch (iconName) {
        case 'প্রোগ্রামিং':
            return CodeIcon;
        case 'ডাটা স্ট্রাকচার':
            return DataUsageIcon;
        case 'অ্যালগরিদম':
            return ShowChartIcon;
        default:
            return false;
    }
};

const Description = ({ ti, paragraph }) => (
    <>
        <Typography variant="h5">{ti}</Typography>
        <Typography variant="body1">{paragraph}</Typography>
        <br />
    </>
);

function Home() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const componentRef = useRef();
    const [isPrint, setPrint] = useState(false);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        bodyClass: printStyle.mediaPrint,
        documentTitle: `${process.env.C_NAME}${process.env.ROOT_PAGE}`,
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
                <meta name="description" content={shortTitle} />
                <link rel="canonical" href={`${process.env.C_NAME}${process.env.ROOT_PAGE}`} />
            </Head>
            <Layout>
                <Box height="5rem" />
                <Box paddingTop="1rem" paddingBottom="1rem">
                    <Grid container spacing={2}>
                        <Grid item sm={3}>
                            {!isMobile && <TopicsList />}
                        </Grid>
                        <Grid item sm={9}>
                            {process.env.IS_COURSE_COMPLETED === 'false' && <AlertInfo />}
                            <div ref={componentRef}>
                                <Thumbnail
                                    image={getIcon(title) ? false : image}
                                    Icon={getIcon(title)}
                                    description={shortTitle}
                                    title={title}
                                    isPrint={isPrint}
                                />
                                <Divider />
                                <br />

                                {description.map((text) => (
                                    <Description
                                        key={text.title}
                                        ti={text.title}
                                        paragraph={text.paragraph}
                                    />
                                ))}
                            </div>
                            <Button
                                onClick={handlePrint}
                                variant="outlined"
                                fullWidth
                                startIcon={<PrintIcon />}
                            >
                                প্রিন্ট করুন
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    );
}

export default Home;
