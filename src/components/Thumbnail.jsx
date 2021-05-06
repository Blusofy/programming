/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { Box, Typography, useMediaQuery } from '@material-ui/core';
import Social from './SocialLinks';

const links = [
    { name: 'facebook', href: 'https://facebook.com/InformativeCoding' },
    { name: 'linkedin', href: 'https://linkedin.com' },
    { name: 'github', href: 'https://github.com/InformativeCoding' },
    { name: 'youtube', href: 'https://youtube.com/' },
];
function ContentHead({ title, description, image, Icon, isPrint }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Box
            component="div"
            display="flex"
            padding={isMobile ? '0.5rem' : '2rem'}
            bgcolor="#ffffff"
            borderRadius="0.5rem"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box component="div" display="flex">
                <div style={{ maxWidth: '150px', marginRight: '1.5rem' }}>
                    {image && (
                        <img
                            src={image}
                            style={{
                                boxShadow:
                                    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                borderRadius: '1rem',
                                padding: '0.25rem',
                                minWidth: '3.5rem',
                            }}
                            width="100%"
                            height="auto"
                            alt="Javascript"
                        />
                    )}
                    {Icon && (
                        <Icon
                            style={{
                                maxWidth: '130px',
                                width: '100%',
                                height: 'auto',
                                boxShadow:
                                    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                borderRadius: '1rem',
                                padding: '0.25rem',
                                color: '#293742',
                                minWidth: '3.5rem',
                            }}
                        />
                    )}
                </div>

                <div>
                    <Typography color="primary" variant="h4">
                        {title}
                    </Typography>
                    <br />
                    <Typography variant="body1" color="textSecondary">
                        {description}
                    </Typography>
                    <Social links={links} />
                </div>
            </Box>
            {isPrint && (
                <Box align="center">
                    <Box
                        width="75px"
                        height="75px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        component="a"
                        href="https://informativecoding.github.io"
                        alt="Informative Coding | Learn Programming"
                    >
                        <img
                            alt="Informative Coding"
                            src="/static/logo.png"
                            width="90%"
                            height="90%"
                        />
                    </Box>
                    <Typography variant="h6">Informative Coding</Typography>
                </Box>
            )}
        </Box>
    );
}
export default ContentHead;
