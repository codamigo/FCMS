import React from 'react';
import { Group, ActionIcon, Box } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { Logo } from '../logo';

export function Brand() {
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const {colorScheme, setColorSchema} = React.useState('dark');
    /// onClick={() => toggleColorScheme()}

    return (
        <Box
        sx={(theme) => ({
            paddingLeft: theme.spacing.xs,
            paddingRight: theme.spacing.xs,
            paddingBottom: theme.spacing.lg,
            borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
        })}
        >
        <Group position="apart">
            <Logo colorScheme={'dark'} />
            <ActionIcon variant="default" size={30}>
            {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon>
        </Group>
        </Box>
    );
}