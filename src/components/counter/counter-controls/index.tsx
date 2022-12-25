import Flash from "../../../utilities/flash";
import  {IReducerAction, useDispatch, useState} from "../../../layouts/provider"
import '../counter.css';

export default function CounterControls () {
    const dispatch = useDispatch();
    // // onClick={() => setCount((count) => count + 1)}>count is {count}
    const increment = () => {
        dispatch({ type: 'INCREMENT'} as IReducerAction);
        // dispatch({ type: 'ADD_TODO', title: text });
    }

    const decrement = () => {
        dispatch({type:"DECREMENT"} as IReducerAction);
    }
    

    const double = () => {
        dispatch({type:"DOUBLE"} as IReducerAction);
    }
    
    


    return (
        <div className="flex justify-center p-4" ref={Flash()}>
            <div className="btn-holder">
                <div onClick={increment} className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">Increase</div>
                <div onClick={decrement} className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">Decrease</div>
                <div onClick={double}    className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">Double</div>
            </div>
        </div>
        
    );
}

