import {
    Box,
    Divider,
    Grow,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SubdirectoryArrowRight as LensIcon } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 800,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props) {
    const { data, index, style } = props;
    const title = data[index - 1];
    const router = useRouter();
    if (index === 0) {
        return (
            <>
                <ListSubheader>
                    <Typography display="inline" variant="subtitle1">
                        সহজে নিজের মাতৃভাষায় শিখুন :-
                    </Typography>
                </ListSubheader>
                <Divider />
            </>
        );
    }
    return (
        <Grow in>
            <ListItem
                divider
                button
                style={style}
                key={index}
                onClick={() => router.push(`/${title.split('.')[0].replace(/\s/g, '-')}`)}
            >
                <ListItemIcon>
                    <LensIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">
                            {title.replace(/\d/g, '').split('.')[0].trim()}
                        </Typography>
                    }
                />
            </ListItem>
        </Grow>
    );
}

export default function VirtualizedList() {
    const classes = useStyles();
    const [state, setState] = useState(null);

    useEffect(async () => {
        try {
            const res = await fetch(process.env.GITHUB_CONTENT_API_URI + process.env.ROOT_PAGE, {
                headers: {
                    Authorization: process.env.GITHUB_AUTH_API_TOKEN,
                },
            });
            const data = await res.json();
            const topicNames = data.map(({ name }) => name);
            setState(topicNames);
        } catch (e) {
            setState(false);
        }
    }, []);
    if (state) {
        return (
            <div className={classes.root}>
                <FixedSizeList
                    height={800}
                    width="100%"
                    itemSize={60}
                    itemData={state}
                    itemCount={state.length + 1}
                >
                    {renderRow}
                </FixedSizeList>
            </div>
        );
    }
    return (
        <Box padding="0.25rem">
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
            <Skeleton width="100%" height={60} />
        </Box>
    );
}
