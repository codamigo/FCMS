import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

export default function Attribute() {
    return (
        <UnstyledButton>
        <Group>
            <Avatar size={40} color="blue">BH</Avatar>
            <div>
                <Text>Bob Handsome</Text>
                <Text size="xs" color="dimmed">bob@handsome.inc</Text>
            </div>
        </Group>
        </UnstyledButton>
    );
}