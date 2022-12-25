import React from 'react';

export interface IBrands extends React.ComponentPropsWithoutRef<'div'> {
    image?: string;
    label: string;
    value: string;
}

export const brands:IBrands[] = [
    {label:'Default',    value:'',          image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',},
    {label:'BlackRock',  value:'blackrock', image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png', },
    {label:'iShares',    value:'iShares',   image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png' },
    {label:'Aladdin',    value:'aladdin',   image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png', }
];