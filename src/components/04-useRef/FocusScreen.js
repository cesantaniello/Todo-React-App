import React, {useRef} from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input ref={inputRef} className="form-control" placeholder="Your name"/>
            <button className="btn btn-primary mt-3" onClick={handleClick}>Send</button>
        </div>
    )
}