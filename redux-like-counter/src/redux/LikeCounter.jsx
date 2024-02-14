import React, { useState } from 'react';
import { legacy_createStore } from 'redux';
import reducer from './Reducer';
import { decrementLike, incrementLike } from './Action';

const store = legacy_createStore(reducer);

const LikeCounter = () => {
    const [count, setCount] = useState(store.getState().count);

    store.subscribe(() => {
        setCount(store.getState().count);
    });

    const handleLike = () => {
        store.dispatch(incrementLike());
    };

    const handleUnlike = () => {
        store.dispatch(decrementLike());
    };


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnlike}>Unlike</button>
        </div>
    );
};

export default LikeCounter;