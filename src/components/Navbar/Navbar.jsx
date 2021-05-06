import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    IconButton,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useState } from 'react';
import SocialLinks from '../SocialLinks';
import NavMenu from './NavMenu';
import NavTab from './NavTab';
import ScrollOnHide from './ScrollOnHide';

function Navbar(props) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [state, setState] = useState(false);
    const handleClick = () => setState(!state);
    return (
        <>
            <CssBaseline />
            <ScrollOnHide {...props}>
                <AppBar color="default">
                    <Toolbar>
                        <Container>
                            <Box display="flex" justifyContent="space-between">
                                <Box
                                    width="75px"
                                    height="75px"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    component="a"
                                    href={process.env.C_NAME}
                                    alt="Informative Coding | Learn Programming"
                                >
                                    <img
                                        alt="Informative Coding"
                                        src="/static/logo.png"
                                        width="90%"
                                        height="90%"
                                    />
                                </Box>
                                {!isMobile && <NavTab />}

                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <SocialLinks
                                        links={[
                                            {
                                                name: 'youtube',
                                                href:
                                                    'https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ',
                                            },
                                            {
                                                name: 'github',
                                                href: 'https://github.com/InformativeCoding',
                                            },
                                        ]}
                                    />

                                    {isMobile && (
                                        <IconButton onClick={handleClick}>
                                            <MenuIcon />
                                        </IconButton>
                                    )}
                                </Box>
                            </Box>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ScrollOnHide>
            {isMobile && <NavMenu open={state} handleClose={handleClick} />}
        </>
    );
}
export default Navbar;
