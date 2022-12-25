import React from 'react';
import { createContainer } from "react-tracked";


export interface IReducerState {
    count:number;
    query:string;
}

export interface IReducerAction {
    type    : string;
    payload : number | object | boolean;
    name    : string;
}

const initialState:IReducerState = {
    count:0,
    query:''
}



export const reducer = (state:IReducerState, action:IReducerAction) => {
    switch (action.type) {
        case 'INITIALIZE':
            return {...state, [action.name]: action.payload };

        case 'INCREMENT':
            return {...state, count: state.count + 1 }

        case 'DECREMENT':
            return {...state, count: state.count - 1 }

        case 'DOUBLE':
            return {...state, count: state.count * 2 }
        default:
            throw new Error('Action action');
    }
}

const useValue = () => React.useReducer(reducer, initialState);

// Context Provider,Component, put near the root.
export const {useTracked:useStore, useTrackedState:useState, useUpdate:useDispatch, Provider } = createContainer(useValue);