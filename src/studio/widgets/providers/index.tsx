import { MantineProvider, Button } from '@mantine/core';

// Provider of Mantine can be used to change themes
function TinyButton() {
    return <Button>My app button</Button>;
}

// Custom theme is applied to all components in App
export default function ThemeSwitcher() {
    return (
        <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
            <TinyButton />
        </MantineProvider>
    );
}