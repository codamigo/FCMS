import { Code } from '@mantine/core';

const codeForPreviousDemo = `
    import React from 'react';
    import { Code } from '@mantine/core';

    export default function Code() {
        return <Code>React.createElement()</Code>;
    }`;

export default function CodeX() {
    return <Code block>{codeForPreviousDemo}</Code>;
}