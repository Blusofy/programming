import { Slide, useScrollTrigger } from '@material-ui/core';

function ScrollOnHide({ children, window }) {
    const trigger = useScrollTrigger({ trigger: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
export default ScrollOnHide;
