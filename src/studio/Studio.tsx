
import React from 'react';
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme, } from '@mantine/core';
import NavbarWithAside from './widgets/navbar-and-aside';
import CallToAction from './content-frames/shared/call-to-action'
import Ring from './content-frames/ring';
import Attribute from './content-frames/attribute';
import CodeX from './content-frames/code';
import { MultiColumnTeaser } from './content-frames/multi-column-teaser';
import DropdownBrands from './content-frames/shared/dropdown-brands';

export default function Studio() {
    const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);

    return (
        <AppShell styles={{ main: { background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]}}}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            
            navbar={<NavbarWithAside opened={opened}></NavbarWithAside>}
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 150, lg: 200 }}>   
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={ <Footer height={60} p="md">Application footer </Footer>}
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
                    </MediaQuery>
        
                    <Text>Application header</Text>
                </div>
                </Header>
            }>
            <DropdownBrands></DropdownBrands>
            <MultiColumnTeaser></MultiColumnTeaser>
            
            <CallToAction></CallToAction>
            
        </AppShell>);
}