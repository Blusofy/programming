/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * * */

//  Included Third Pertty Components Or Packages
import { Box, Fab, Grow } from '@material-ui/core';
// Included Material-Icons
import { ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';
import { useEffect, useState } from 'react';
// Included Custom Packages or Components
import { Link } from 'react-scroll';

// Go To Top Page Component
function ScrollToTop() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    return (
        <Grow in={scroll > 400}>
            <Box position="fixed" bottom="5%" right="5%">
                <Link
                    activeClass="null"
                    to="__next"
                    smooth
                    spy
                    duration={800}
                    style={{ cursor: 'pointer' }}
                >
                    <Fab color="primary">
                        <ArrowUpwardIcon />
                    </Fab>
                </Link>
            </Box>
        </Grow>
    );
}

export default ScrollToTop;
