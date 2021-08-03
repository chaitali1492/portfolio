import React,{Component} from "react";

class ClassComponent extends Component<any,any>{

    constructor(props:any){
        super(props)
        console.log(props);
        this.state={
            isLoadding:true,
            count:0
        }
        console.log("constructor")
    }

    shouldComponentUpdate(){

        return true;
    }

    componentDidUpdate(){
        console.log("component updated")
    }

    render(){
        console.log("render", this.state.count)
        return (
            <div>
                {this.state.isLoadding?'Loading':'Hello'}
                <button onClick={()=>this.setState({count:this.state.count+1})}> Click</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("component did mount", this.props)
        this.setState({isLoadding:false})
    }
    componentWillUnmount(){
        console.log("unmount")
    }
}

export default ClassComponent;