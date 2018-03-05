import React from 'react';
import {connect} from 'react-redux';


function Pop(props){
    return(
        <div>

<button >ClickHere</button>
            </div>
    )
}

function StateToProps(state){
    return{

  open:state.open

    }

}

export default Pop;