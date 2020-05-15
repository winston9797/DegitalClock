import React, { Component } from 'react'
import './Clock.css'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date:new Date().toLocaleTimeString(),
             className : 'green'
            
        }
    }
    tick(){
        this.setState({date:new Date().toLocaleTimeString()})
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    red = () =>{
        this.setState({
            className : 'red'
        })
    }
    green = () =>{
        this.setState({
            className : 'green'
        })
    }
    yellow = () =>{
        this.setState({
            className : 'yellow'
        })
    }

    render() {
        return (
            <div className={this.state.className}>
                <h1 className={this.state.className}>{this.state.date}</h1>
                <p>{new Date().toLocaleDateString()}</p>
                <button onClick={this.red} className='red'>red</button>
                <button onClick={this.green} className='green'>green</button>
                <button onClick={this.yellow} className='yellow'>yellow</button>
            </div>
            
        )
    }
}
