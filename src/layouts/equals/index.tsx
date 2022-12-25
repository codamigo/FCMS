import Flash from "../../utilities/flash";

export default function EqualsLayout({children}) {
    return (
        <div className="flex" ref={Flash()}>
            {children && children.map((child:any, index:number) => (
                <div className="grow" key={index}>{child}</div>
            ))}
        </div>
    );
}