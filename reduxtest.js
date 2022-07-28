const { createstore, createStore}=require('redux');

const initialstate={
    age:21
}

const myReducer=(state=initialstate,action) =>
{

    const newState={ ...state};
    if(action.type==='ADD'){
        newState.age +=1;
    }
    if(action.type==='SUBSTRACT'){
        newState.age -=1;
    }
    return newState;
}


const store= createStore(myReducer);


store.subscribe(() =>{
    console.log('state changed' +JSON.stringify(store.getState()));
})
store.dispatch({type:'ADD'});

store.dispatch({type:'SUBTRACT'});


store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});
