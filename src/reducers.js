// See: http://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html
// Usage example:
// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const rootReducer = combineReducers({
//     counterA : createNamedWrapperReducer(counter, 'A'),
//     counterB : createNamedWrapperReducer(counter, 'B'),
//     counterC : createNamedWrapperReducer(counter, 'C'),
// });
export function createNamedWrapperReducer(reducerFunction, reducerName) {
    return (state, action) => {
        const {name} = action;
        const isInitializationCall = state === undefined;
        if(name !== reducerName && !isInitializationCall) return state;

        return reducerFunction(state, action);    
    }
}

// @TODO
export default function rootReducer() {
  return null
}