import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             text:"",
             select:"react"
        }
    }
    handle=(e)=>{
        e.preventDefault();
    }
    handlevent(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handletopic(e){
        this.setState({
            select:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handle}>
                <div>
                    <label>username</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handlevent.bind(this)}></input>
                </div>
                <div>
                    <label>textarea</label>
                    <textarea  value={this.state.text} name="text" onChange={this.handlevent.bind(this)}/>
                </div>
                <div>
                    <label>select</label>
                    <select value={this.state.select} onChange={this.handletopic.bind(this)}>
                        <option value="react">react</option>
                        <option value="node">node</option>
                        <option value="angular">angular</option>
                    </select>
                    
                </div>
                <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Form
