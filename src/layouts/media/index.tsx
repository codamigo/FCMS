
const highlight = {
    backgroundColor: theme.colorScheme === 'dark' 
        ? theme.fn.rgba(theme.colors.blue[7], 0.25) 
        : theme.colors.blue[0],
    border: `1px solid ${theme.colorScheme === 'dark' 
        ? theme.colors.blue[6] 
        : theme.colors.blue[3]}`,
};

const boxStyles = {
    borderRadius: 3,
    padding: '3px 5px',
    border: '1px solid transparent',
};

export default function MediaQuery({props, children}) {
    return (
        {children}
    );
}


<MediaQuery lessThan="ms" greaterThan="lg">

</MediaQuery>

/*

    <MediaQuery largerThan="lg" styles={highlight}>
    <Box sx={boxStyles}>- larger than lg</Box>
    </MediaQuery>
    <MediaQuery smallerThan="lg" styles={highlight}>
    <Box sx={boxStyles}>- Smaller than lg</Box>
    </MediaQuery>          
*/


// Will not work with MediaQuery – component does not handle className
// const MyButton => ({ label }) => <button>{label}</button>

// Will work with MediaQuery – handle className
// const MyButton => ({ label, className }) => <button className={className}>{label}</button>

// Will work with MediaQuery – handle className
// const MyButton => ({ label, ...others }) => <button {...others}>{label}</button>