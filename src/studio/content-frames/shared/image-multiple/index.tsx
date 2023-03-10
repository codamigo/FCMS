import { useState } from 'react';
import { FileButton, Button, Group, Text, List } from '@mantine/core';

export default function ImageMultiple() {
    const [files, setFiles] = useState<File[]>([]);
    // resetRef should be used to fix issue with stale value on hidden input element as 
    // Input type file cannot be controlled. Call resetRef when user selection is cleared:
    return (
        <>
        <Group position="center">
            <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
            {(props) => <Button {...props}>Upload image</Button>}
            </FileButton>
        </Group>

        {files.length > 0 && (
            <Text size="sm" mt="sm">Picked files:</Text>
        )}

        <List size="sm" mt={5} withPadding>
            {files.map((file, index) => (
                <List.Item key={index}>{file.name}</List.Item>
            ))}
        </List>
        </>
    );
}