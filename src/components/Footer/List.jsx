import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

export default function InsetList({ lists, icon }) {
    return (
        <List component="nav" aria-label="contacts">
            {lists.map(({ name, url }) => (
                <ListItem button key={name} style={{ paddingLeft: '0px' }}>
                    <Box
                        href={process.env.C_NAME + url}
                        display="flex"
                        component="a"
                        alignItems="center"
                        style={{ textDecoration: 'none' }}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText
                            primary={<Typography variant="subtitle1">{name}</Typography>}
                        />
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}
