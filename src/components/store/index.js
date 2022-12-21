import {createStore} from 'redux'
 const initState={value:0}

const Id =(state=initState,action)=>{
console.log(action);
    return state
}

const store = createStore(Id);

export default store;