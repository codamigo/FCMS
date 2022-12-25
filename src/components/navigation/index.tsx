import Flash from "../../utilities/flash";
import CounterDisplay from "../counter/counter-display";

export default function Navigation(){
    return (
        <nav className="flex space-x-4 sm:justify-center" ref={Flash()}>
        {[
            ['Home', '/dashboard'],
            ['Team', '/team'],
            ['Projects', '/projects'],
            ['Reports', '/reports'],
        ].map(([title, url]) => (
            <a href={url} className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
        </nav>
    );
}