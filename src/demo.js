import React from 'react'
import ReactDOM from 'react-dom'


let root = document.querySelector('#root')


class UserCard extends React.Component{
    constructor(props){
        super(props)
        console.log('1111-->',props.dataInfo)
        //this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.state={
            phoneNumber:"+886--123456"
        }
        
    }
    addAge5(){
        console.log(555555)
    }
    changePhoneNumber = () => {
        //this.state.phoneNumber = "NA"
        this.setState({phoneNumber:"NA"},(params) => {
            
        })
        
    }
    // changePhoneNumber(){
    //     //console.log(1234)
    //     console.log(this.state)
    // }
    componentDidMount(){

    }
    
    render(){
        let a=5
        let c=a+5
        // let name = this.props.dataInfo.name
        // let age = this.props.dataInfo.age
        // let address = this.props.dataInfo.address
        
        return <div>
            <div>name:{this.props.dataInfo.name}</div>
            <div>age:{this.props.dataInfo.age}</div>
            <div>address:{this.props.dataInfo.address}</div>
            <div>phone------ {this.state.phoneNumber}</div>
            <button onClick={this.addAge5}>add age 5</button>
            <button onClick={this.changePhoneNumber}>change phone number</button>
            <div>----------</div>

        </div>
    }
}

let user1 = {
    name:"John",
    age:25,
    address:"USA"
}
let user2 = {
    name:"Mary",
    age:35,
    address:"China"
}
let user3 = {
    name:"Bob",
    age:75,
    address:"Taiwan"
}

let UserList = <div>

    <UserCard dataInfo={user1}></UserCard>
    <UserCard dataInfo={user2}></UserCard>
    <UserCard dataInfo={user3}></UserCard>
</div>





ReactDOM.render(UserList, root)
