import React from 'react';
import {connect} from 'react-redux';



function Texts(props){
    return(

    
        <div>
          <input type="text" value={props.texts} />
        </div>
    )
}

function StateToProps(state){
    console.log('StateToProps')
return{
    texts:state.texts
}
}

export default connect(StateToProps)(Texts)