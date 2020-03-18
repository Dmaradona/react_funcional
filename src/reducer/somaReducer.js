import { useReducer } from 'react';

const STATE_INICIAL = {
    resultado: ''
}


const somaReducer = ( state = STATE_INICIAL, action ) => {
    console.log('action executada: ', JSON.stringify(action));
    switch( action.type ){
        case 'SUBTRACAO':
            return {...state, resultado: action.playload };
        case 'SOMA':
            return {...state, resultado: action.playload };
        default:
            return state;
    }
}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore;