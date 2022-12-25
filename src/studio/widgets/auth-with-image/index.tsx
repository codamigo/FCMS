import { Paper, createStyles, TextInput, Group, PasswordInput, Checkbox,Divider, Button, Title, Text, Anchor } from '@mantine/core';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';

const useStyles = createStyles(theme => ({
    wrapper: {
        height: '100vh', width:'100vw',
        backgroundSize: 'cover',
        backgroundImage:'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)'
    },
    form: {
        borderRight: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3] }`,
        minHeight: '100vh', maxWidth: 450, paddingTop: 80,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%'
        }
    },
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120, display: 'block', marginLeft: 'auto', marginRight: 'auto',
    }
}));

export default function AuthenticationWithImage() {
    const { classes } = useStyles();
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            confirmedPassword: '',
            keepLoggedIn: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
    <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} align="center" mt="md" mb={50}>Welcome to NCMS</Title>
                <form onSubmit={form.onSubmit(() => {})}>
                {type === 'register' && ( <TextInput label="Name" placeholder="Your name" value={form.values.name} onChange={(event) => form.setFieldValue('name', event.currentTarget.value)} /> )}
                
                <TextInput mt="md" required label="Email address" placeholder="hello@gmail.com" 
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)} 
                    value={form.values.email} size="md" 
                    error={form.errors.email && 'Invalid email'} />

                <PasswordInput
                    required  mt="md" size="md" label="Password" placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 6 characters'} />

                <PasswordInput
                    required  mt="md" size="md" label="Confirm Password" placeholder="Repeat Your password"
                    value={form.values.confirmedPassword}
                    onChange={(event) => form.setFieldValue('confirmedPassword', event.currentTarget.value)}
                    error={form.errors.password && 'Confirmed password should include at least 6 characters'} />

                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" size="md"  sx={{ lineHeight: 1 }}  checked={form.values.keepLoggedIn}  onChange={(event) => form.setFieldValue('keepLoggedIn', event.currentTarget.checked)} />
                    <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">Forgot password?</Anchor>
                </Group>

                <Button  variant='outline' fullWidth mt="xl" size="md">Login</Button>

                <Divider label="" labelPosition="center" my="lg" />
                
                <Group position="center">
                    <Text> {type === 'register' ? 'Already have an account?' : "Don't have an account?"}</Text>
                    <Anchor<'a'> href="#" weight={700} onClick={() => toggle()}>{upperFirst(type)}</Anchor>
                </Group>
            </form>
        </Paper>
    </div>);
}