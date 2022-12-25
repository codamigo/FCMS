import { Provider } from "../provider";

{/* <AppShell
    padding="md"

    styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
> */}
    {/* Your application here */}
// </AppShell>

// interface IPageShellProps {
//     header: React.Component;
//     footer: React.Component;
//     rightAside: React.Component;
// }

export default function PageShell({header = undefined, provider = true, footer = undefined, styles={}, children = undefined}) {
    console.log( header, footer, provider);
    return (
        <main className="page-shell" {...styles}>
            { provider && (
                <Provider>
                    {header && <header>{header}</header>} 
                    <div>Provider</div>
                    { children }
                    {footer && <footer>{footer}</footer>}
                </Provider>
            )}
            
            { !provider && (
                <div>
                    {header && <header>{header}</header>} 
                    <div>Provider !</div>
                    { children }
                    {footer && <footer>{footer}</footer>}
                </div>
            )}
        </main>
    );
}

// <PageShell
//    header={<Navigation></Navigation>}
//    navigation={<NAvigation></NAvigation>}
//    footer={<Footer></Footer>}> */}
// </PageShell>
