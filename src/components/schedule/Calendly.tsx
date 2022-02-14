import React from 'react';
import { InlineWidget } from 'react-calendly';

interface Props {
    eventId: string,
    minHeight: string
}

export const Calendly = ({ eventId }: Props) => (
    <InlineWidget
        styles={{
            marginTop: "30px",
            height: '1000px'
        }}
        url={`https://calendly.com/d/${eventId}`}
    />
);
