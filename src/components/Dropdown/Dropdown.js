import React, { Component } from 'react'
import "./style.css"

class Dropdown extends Component { //Step 4
    constructor(props) { //Step 5
        super(props) //Step 6

        this.state = { //Step 7
            visible: true, //Step 8
            selected: 2 //Step 9
        }
    }

        toggle = () => {
        this.setState(state => {
            return {visible: !state.visible}
         })
    }

        setCar = (index) => {
            alert("You Clicked!")
            this.setState({selected: index, visible:false})
        }

    render () { //Step 4
        const {cars} = this.props
        const {selected, visible} = this.state
        return( //Step 4
             <div className="dropdown"> 
                <div className="selected" onClick={this.toggle}>{cars[selected]}</div>
                { visible && 
                <ul> 
                    {
                        this.props.cars.map((car, index) => {
                            return <li onClick={()=>this.setCar(index)} key={index}>{car}</li>
                            // Step 10 Line 20 & 21 
                        })
                    }
                </ul>
                }
            </div>
        )
    }
}

export default Dropdown