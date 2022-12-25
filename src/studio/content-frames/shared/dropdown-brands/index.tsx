import React, { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import { brands, IBrands } from '../data/brands';
import { IconChevronDown } from '@tabler/icons';


const SelectItem = forwardRef<HTMLDivElement, IBrands>(
    ({ image, label, value, ...others }: IBrands, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar size={30} src={image}></Avatar>
                <div><Text size="sm">{label}</Text> </div>
            </Group>
        </div>
    ));

export default function DropdownBrands() {
    const [value, setValue] = React.useState<string | null>(null);

    return (
        <Select 
            transition="pop-top-left"
            transitionDuration={100}
            transitionTimingFunction="ease"
            dropdownComponent="div"
            itemComponent={SelectItem}
            rightSection={<IconChevronDown size={18} />}
            rightSectionWidth={50}
            withAsterisk
            styles={{rightSection: { pointerEvents: 'none' } }}
            label="Choose branch." placeholder="Pick one." data={brands} 
            value={value} onChange={setValue} />
    );
}