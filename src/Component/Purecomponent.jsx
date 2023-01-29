import  { PureComponent } from 'react'
import './Component.css'

export default class Purecomponent extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
  render() {
    return (
        <>
      <div className='Component'>PureComponent Count  <span className='count-increas'>{this.state.count}</span></div>
      <button onClick={()=>{this.setState({count:this.state.count+1})}} className='btn1'>Update Count</button>
      </>
    )
  }
}
