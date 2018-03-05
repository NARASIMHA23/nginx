import {createStore} from 'redux';



const initialstate={
    count:0,
    count1:0,
texts:"qhfdhsgds",
open:false

}


function reducer(state=initialstate,action){
    console.log('reducer',action);

switch(action.type){
case 'INCREMENT':
return Object.assign({},state,{
    count:state.count+1
})

case 'INCREMENT1':

return Object.assign({},state,{
    count1:state.count1+1
})

case 'DECREMENT':

return Object.assign({},state,{
    count:state.count-1
})

case 'POPOVER':
return {
    ...state,
    open: true,
  };


default :
return state;
}
 
}






const store=createStore(reducer);

export default store;