import React from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'

class Index extends React.Component{
    constructor(){
        super();
        this.state={
            title: 'I am index!'
        }
        console.log("Constructor")
    }
    
render(){
    console.log("render")
    return (
        <BaseLayout>
        <h1> I am Index Page from Class!</h1>
        <h2> {this.state.title}</h2>
        <button onClick={()=>{this.updateTitle()}}>Change Title</button>
        </BaseLayout>
    )
}
componentDidMount(){
    console.log("Component Did Mount")
}
componentDidUpdate(){   
    console.log("component did update!")
}
componentWillUnmount(){
    console.log("componentWillUnmount");
}
updateTitle(){
    this.setState({title :'I am updated!'})
}
}

export default Index;
