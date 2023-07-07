import React from 'react';
import { calcTimeAgo } from './Time';

export function TimeAgo({ time }) {

    return (
        <p>{calcTimeAgo(time)}</p>
    );
}