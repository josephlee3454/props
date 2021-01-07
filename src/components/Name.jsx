
import react, {Component} from "react";

class Name extends Component{
    
    render (){
        return(
            <div>
                <h2>
                    {this.props.lastname} , {this.props.firstname}
                
                </h2>
                
            </div>
        )
    }
}

export default Name;