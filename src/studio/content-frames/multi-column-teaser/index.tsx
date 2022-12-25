import { TextInput, Checkbox, Button, Group, Box, Switch, ActionIcon, Text, Code } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import CallToAction from '../shared/call-to-action';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons';
import { brands } from '../shared/data/brands';
import Constants from '../shared/constants/index.json';

export function MultiColumnTeaser() {
    const form = useForm({
        validateInputOnBlur: false,
        validateInputOnChange: true,
        initialValues: {
            brands,
            path: 'navigation/path/to/brands',
            email:'',
            heading: '',
            subHeading: '',
            cta:'',
            employees: [
                    {"name": "", "active": false, "key": randomId()} ]
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            heading:  (value) => (value.length < Constants.Heading.min ? 'Name is too short' : null)
        }
    });

    const handleError = (errors: typeof form.errors) => {
        if (errors.name) {
            showNotification({ message: 'Please fill name field', color: 'red' });
        } else if (errors.email) {
            showNotification({ message: 'Please provide a valid email', color: 'red' });
        }
    };

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    const fields = form.values.employees.map((item, index) => (
        <Group key={item.key} mt="xs">
            <TextInput placeholder="John Doe" withAsterisk sx={{ flex: 1 }} {...form.getInputProps(`employees.${index}.name`)} />
            <Switch label="Active" {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })} />
            <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
                <IconTrash size={16} />
            </ActionIcon>
        </Group>
    ));

    return (
        <Box sx={{ maxWidth: 1000 }} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />

                <Checkbox mt="md" label="I agree to sell my privacy" {...form.getInputProps('termsOfService', { type: 'checkbox' })} />
                <CallToAction></CallToAction>

                {/* <ImageMultiple></ImageMultiple> */}
                <Group position="right" mt="md">
                    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} type="submit">Submit</Button>
                </Group>
            </form>

            
            {fields.length > 0 ? (
                <Group mb="xs">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>Name</Text>
                    <Text weight={500} size="sm" pr={90}>Status</Text>
                </Group>
            ) : (
                <Text color="dimmed" align="center">No one here...</Text>
            )}

            {fields}

            <Group position="center" mt="md">
                <Button variant="outline" gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                onClick={() => form.insertListItem('employees', { name: '', active: false, key: randomId() }) }>Add employee</Button>
            </Group>
        
            <Text size="sm" weight={500} mt="md">Form values:</Text>
            <Code block>{JSON.stringify(form.values.employees, null, 2)}</Code>
        </Box>
    );
}