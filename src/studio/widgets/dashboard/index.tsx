import { createStyles, ThemeIcon, Card, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { IconSwimming } from '@tabler/icons';
import Ring from '../../content-frames/ring';
import Attribute from '../../content-frames/attribute';
import CodeX from '../../content-frames/code';

const ICON_SIZE = 60;
const useStyles = createStyles((theme) => ({
    card          : { backgroundColor: theme.fn.primaryColor() },
    title         : { color: theme.fn.rgba(theme.white, 0.65) },
    stats         : { color: theme.white },
    progressBar   : { backgroundColor: theme.white },
    progressTrack : { backgroundColor: theme.fn.rgba(theme.white, 0.4) },
}));

const useStyles2 = createStyles((theme) => ({
    card: {
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing.xl,
        paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
    },

    icon: {
        position: 'absolute',
        top: -ICON_SIZE / 3,
        left: `calc(50% - ${ICON_SIZE / 2}px)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}));

export default function Dashboard() {
    const { classes } = useStyles();
    const { classes:classes2 } = useStyles2();
    return (
        <>
            <Card withBorder radius="md" p="xl"
                sx={theme => (
                    {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white }
                )}>
                <Text size="xs" transform="uppercase" weight={700} color="dimmed">Monthly goal</Text>
                <Text size="lg" weight={500}>$5.431 / $10.000</Text>
                <Progress value={54.31} mt="md" size="lg" radius="xl" />
            </Card>

            <Card withBorder radius="md" p="xl" className={classes.card}>
                <Text size="xs" transform="uppercase" weight={700} className={classes.title}>Monthly goal</Text>
                <Text size="lg" weight={500} className={classes.stats}>$5.431 / $10.000</Text>
                <Progress value={54.31} mt="md" size="lg" radius="xl" classNames={{ root: classes.progressTrack, bar: classes.progressBar }} />
            </Card>

            <Paper radius="md" withBorder className={classes2.card} mt={ICON_SIZE / 3}>
                <ThemeIcon className={classes2.icon} size={ICON_SIZE} radius={ICON_SIZE}>
                    <IconSwimming size={34} stroke={1.5} />
                </ThemeIcon>

                <Text align="center" weight={700} className={classes2.title}>
                    Swimming challenge
                </Text>
                <Text color="dimmed" align="center" size="sm">
                    32 km / week
                </Text>

                <Group position="apart" mt="xs">
                    <Text size="sm" color="dimmed">
                    Progress
                    </Text>
                    <Text size="sm" color="dimmed">
                    62%
                    </Text>
                </Group>

                <Progress value={62} mt={5} />

                <Group position="apart" mt="md">
                    <Text size="sm">20 / 36 km</Text>
                    <Badge size="sm">4 days left</Badge>
                </Group>
                </Paper>

                <Ring></Ring>
                <Attribute></Attribute>
                <CodeX></CodeX>
        </>
    );
}