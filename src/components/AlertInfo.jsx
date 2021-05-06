import { Box } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';

export default function DescriptionAlerts() {
    return (
        <Box marginY="1rem">
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                এই টিউটোরিয়ালটি এখনো অসম্পূর্ণ । এটি নিয়ে — <strong>ইনফরমেটিভ কোডিং</strong> টীম
                কাজ করছে। আশা করা যায় খুব শিগ্রই সম্পূর্ণ হতে যাচ্ছে। ধন্যবাদ
            </Alert>
        </Box>
    );
}
