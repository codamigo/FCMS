import { TextInput, Checkbox, Button, Group, Box, Switch, ActionIcon, Text, Code } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import CallToAction from '../shared/call-to-action';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons';
import { brands } from '../shared/data/brands';



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
            user: {
                name:'',
                occupation:''
            },
            employees: [
                    {"name": "", "active": false, "key": randomId()} ]
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            user: {
                name: (value) => (value.length < 2 ? 'Name is too short' : null)
            }
        }
    });

    // form.setFieldValue('user', {name:'New CMS', occupation:'Productivity'});

    // Values
    // get current form values
    // form.values;
    // showNotification({ message: 'Please fill name field', color: 'red' });

    // Set all form values
    // form.setValues(values);

    // Set all form values using the previous state
    // form.setValues((prev) => ({ ...prev, ...values }));

    // Set value of single field
    // form.setFieldValue('path', value);

    // Set value of nested field
    // form.setFieldValue('user.firstName', 'Jane');

    // Resets form.values to initialValues,
    // clears all validation errors,
    // resets touched and dirty state
    // form.reset();



    // List items
    // Inserts given list item at the specified path
    // form.insertListItem('fruits', { name: 'Apple', available: true });

    // An optional index may be provided to specify the position in a nested field.
    // If the index is passed where an item already exists, it will be replaced.
    // If the index is larger than the current list, the element is inserted at the last position.
    // form.insertListItem('fruits', { name: 'Orange', available: true }, 1);

    // Removes the list item at the specified path and index.
    // form.removeListItem('fruits', 1);

    // Swaps two items of the list at the specified path.
    // If no element exists at the `from` or `to` index, the list doesn't change.
    // form.reorderListItem('fruits', { from: 1, to: 0 });


    // Validation

    // Validates all fields with specified `validate` function or schema, sets form.errors
    // form.validate();

    // Validates single field at specified path, sets form.errors
    // form.validateField('user.firstName');

    // Works the same way as form.validate but does not set form.errors
    // form.isValid();

    // Errors
    // get current errors state
    // form.errors;

    // Set all errors
    // form.setErrors({ path: 'Error message', path2: 'Another error' });

    // Set error message at specified path
    // form.setFieldError('user.lastName', 'No special characters allowed');

    // Clears all errors
    // form.clearErrors();

    // Clears error of field at specified path
    // form.clearFieldError('path');

    



    // onReset and onSubmit

    // <form onSubmit={form.onSubmit(setFormValues)}></form>
    // <form onSubmit={form.onSubmit(
    //     (values, _event) => { setFormValues(values) },
    //     (validationErrors, _values, _event) => { console.log(validationErrors) }
    // )}></form>
    // <form onReset={form.onReset}></form>
    const handleError = (errors: typeof form.errors) => {
        if (errors.name) {
            showNotification({ message: 'Please fill name field', color: 'red' });
        } else if (errors.email) {
            showNotification({ message: 'Please provide a valid email', color: 'red' });
        }
    };

    const handleSubmit = (values: typeof form.values) => {};
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