import { Box, Drawer, List } from '@material-ui/core';
import ContentList from '../Content/List';

export default function NavMenu({ open, handleClose }) {
    return (
        <div>
            <Drawer open={open} onClose={handleClose}>
                <Box minWidth="250px">
                    <List>
                        <ContentList />
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
