/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SocialLinks from '../SocialLinks';
import { languages, links, organization, resources } from './data.json';
import CustomList from './List';

function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <footer style={{ background: '#f5f5f5' }}>
            <Container>
                <Grid container>
                    <Grid item sm={3}>
                        <Box padding="2rem">
                            <Typography variant="h5">জনপ্রিয় প্রযুক্তি</Typography>
                            <CustomList lists={languages} icon={<FiberManualRecordIcon />} />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box padding="2rem">
                            <Typography variant="h5">রিসোর্স</Typography>
                            <CustomList lists={resources} icon={<TrendingFlatIcon />} />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box padding="2rem">
                            <Typography variant="h5">অর্গানাইজেশন</Typography>
                            <CustomList lists={organization} icon={<FiberManualRecordIcon />} />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box padding="2rem">
                            <Typography variant="h5">ইনফরমেটিভ কোডিং</Typography>
                            <br />

                            <Typography variant="body1">
                                ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায়
                                প্রোগ্রামিং সম্পর্কিত বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে
                                শিখার সুযোগ করে দেওয়া। ইনফরমেটিভ কোডিং এর কনটেন্ট ইউটুব এবং
                                ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়।
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <div
                    style={{
                        padding: '0.5rem 0rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: isMobile ? 'column-reverse' : 'row',
                    }}
                >
                    <Box>
                        <Typography variant="h6" display="inline">
                            - ইনফরমেটিভ{' '}
                        </Typography>
                        <Typography variant="h6" display="inline" color="textSecondary">
                            কোডিং
                        </Typography>
                    </Box>

                    <SocialLinks links={links} />
                </div>
            </Container>
        </footer>
    );
}
export default Footer;
