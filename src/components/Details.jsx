
import react, {Component} from "react";
class Details extends Component{

    constructor(props){
        super(props)
    
        this.state = {
            number: this.props.age
        }
    }
    birthday = event => {
        this.setState({number: this.state.number + 1}) 
    }

    render (){
        return(
            <div>
                <p>Age : {this.state.number} </p>
                <p>Hair Color: {this.props.hair}</p>
                <button onClick={this.birthday} >Birthday !!!</button>
            </div>
        )
    }
}

export default Details;