import React from "react"
import { connect } from 'react-redux'
import { incrementCounterAction, decrementCounterAction } from './Counter/counterAction';
 class MyComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<div>
            <input type="button" value="Counter++" onClick={() => { this.props.increaseCounter(1) }}  />
            <br/>
            <input type="button" value="Counter+5" onClick={() => { this.props.increaseCounter(5) }}  />
            <br/>
            <input type="button" value="Counter--" onClick={() => { this.props.decreaseCounter() }} />
            <br />
            {this.props.counter}
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
       counter: state.counter
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return { 
       increaseCounter: (parameter) => {
          dispatch(incrementCounterAction(parameter))
       },
       decreaseCounter: () => { 
          dispatch(decrementCounterAction())
       }
    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(MyComponent); 