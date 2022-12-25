import { ThemeIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons';

interface IRing {
    value: number,
    color: string,
};

let sectionsDefault:IRing[] = [
    { value: 40, color: 'cyan' },
    { value: 15, color: 'orange' },
    { value: 15, color: 'grape' },
];

/*
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
*/

let labelDefault:string = 'Application data usage';

export default function Ring() {
    let [sections, label] = [[] as IRing[],''];
    if(!sections) {
        sections = sectionsDefault;
    }

    if(!label) {
        label = labelDefault
    }

    return (
        <>
            <RingProgress
                sections={[{ value: 40, color: 'blue' }]}
                label={
                <Text color="blue" weight={700} align="center" size="xl">
                    40%
                </Text>
                }
            />

            <RingProgress
                sections={[{ value: 100, color: 'teal' }]}
                label={
                <Center>
                    <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
                    <IconCheck size={22} />
                    </ThemeIcon>
                </Center>
                }
            />

<RingProgress
        size={150}
        roundCaps
        thickness={15}
        label={
            <Text size="xs" align="center" px="xs" sx={{ pointerEvents: 'none' }}>{label}</Text>
        }
        sections={[
            { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
            { value: 15, color: 'orange', tooltip: 'Documents – 10 Gb' },
            { value: 15, color: 'grape', tooltip: 'Documents – 20 Gb' },
        ]}
        />
        </>        
    );
}