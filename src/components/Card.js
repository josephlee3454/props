import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(
            <div>
                <h2>
                {this.props.lastname} , {this.props.firstname} 
                </h2>
                <ul>
                    <li>
                        Age: {this.props.age}
                    </li>
                    <li>
                        Hair-color: {this.props.hair}
                    </li>
                </ul>
            </div>
        )
    }
}
export default Card;