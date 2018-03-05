import React from 'react';
 import {connect} from 'react-redux';

function Count(props){
    return(

    
    <div>


        <h1>This is Counter2</h1>
        <h2>count:{props.count1}</h2>
        <button onClick={props.click2}>Increment</button>

        </div>
    )
}

function mapStateToprops(state){
    return{
        count1:state.count1
    }
}
function mapDispatchToprops(dispatch){
    return{
    click2(){
        const action={type:'INCREMENT1'}
        dispatch(action);
    }
}
}

export default connect(mapStateToprops,mapDispatchToprops)(Count);