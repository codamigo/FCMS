import CounterControls from "./counter-controls";
import CounterDisplay from "./counter-display";
import './counter.css';

export default function Counter () {
    return (
        <div className="flex justify-center">
            <CounterControls></CounterControls>
            <CounterDisplay></CounterDisplay>
        </div>
    );
}