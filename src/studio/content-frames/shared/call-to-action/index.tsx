import { Button, ButtonProps, Group } from '@mantine/core';

export default function CallToAction(props: ButtonProps) {

    return (
        <>
            <Group position="center">
                <Button variant="outline" className='bg-blue'>Compact outline button</Button>
            </Group>
        </>
    );
}