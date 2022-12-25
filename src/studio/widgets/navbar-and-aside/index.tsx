import React from 'react';
import { Navbar, Text, ScrollArea } from '@mantine/core';
import { Brand } from '../brand';
import { MainLinks } from '../main-links';
import { User } from '../user';

export  default function NavbarWithAside({opened}) {
    // height={600} p="xs" width={{ base: 1000 }}
    // https://mantine.dev/core/app-shell/
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened}
            fixed={false} position={{ top: 0, left: 0 }}
            width={{
                sm: 200, // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
                lg: 300, // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
                base: 100  // When other breakpoints do not match base width is used, defaults to 100% 
            }}>
            {/* First section with normal height (depends on section content) */}
            <Navbar.Section mt="xs">
                <Brand />
            </Navbar.Section>

            {/* Grow section will take all available space that is not taken by first and last sections */}
            <Navbar.Section grow mt="md" component={ScrollArea} mx="-xs" px="xs">
                <MainLinks />
            </Navbar.Section>

            {/* Last section with normal height (depends on section content) */}
            <Navbar.Section>
                <User />
            </Navbar.Section>
        </Navbar>
    );
}