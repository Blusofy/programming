import { Box, Divider, Typography } from '@material-ui/core';

function PrintHead() {
    return (
        <>
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
                    <img alt="Informative Coding" src="/static/logo.png" width="90%" height="90%" />
                </Box>
                <Typography variant="h4">Informative Coding</Typography>
            </Box>
            <Box height="0.5rem" />
            <Divider />
        </>
    );
}

export default PrintHead;
