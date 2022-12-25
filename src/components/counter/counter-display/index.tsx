import { useState } from "../../../layouts/provider";

export default function CounterDisplay() {
    const state = useState();
    return (
        <div  className="flex justify-center p-4 align-baseline">
            <div className="px-4 py-2 text-3xl hover:bg-slate-50 hover:text-slate-900">Count {state?.count}</div>
        </div>
    )
}