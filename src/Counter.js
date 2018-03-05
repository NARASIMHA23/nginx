import React from 'react';
import {connect} from 'react-redux';


function Counter(props){
    
        return(
            <div>
            <h1>This is Counter 1</h1>
            <h2>Count:{props.count}</h2>
           <button onClick={props.click1}>Increment</button>
           <button onClick={props.click2} >Decrement</button>z
          </div>

        )
    }
function StateToProps(state){
    console.log('StateToProps')
return{
    count:state.count
}
}

function DispatchToProps(dispatch){
    console.log('DispatchToProps');
    return{
        click1(){
            const action={type:'INCREMENT'}
            dispatch(action);
        },
        click2(){
            const action={type:'DECREMENT'}
            dispatch(action);
        }
    }
}


export default connect(StateToProps,DispatchToProps)(Counter);