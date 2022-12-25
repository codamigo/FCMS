export default function Tabs({children}) {
    return (
        <>
            <div className="tabs-container">
                <ul>
                    <li>
                        <a href="#">ABC</a>
                    </li>
                    <li>
                        <span><i>Icon</i></span>
                    </li>
                </ul>
                <section>
                    <div dataFor={}></div>
                    <div dataFor={}></div>
                    <div dataFor={}></div>
                </section>
            </div>
        </>
    );
}