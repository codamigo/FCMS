import React from 'react'

export default function Flash(className:String = 'blink') {
    const ref = React.useRef(null);

    React.useEffect(()=>{
        ref.current && (ref.current as HTMLElement).classList.add("blink");
        setTimeout(() =>{
            ref.current && (ref.current as HTMLElement).classList.remove('blink');
        },1.5*1000);
    });

    return ref;
}
