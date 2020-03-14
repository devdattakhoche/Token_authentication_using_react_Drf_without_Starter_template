import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/actions'
import Cookies from 'js-cookie';

class Login extends React.Component {
    state = {
        username : '',
        password : ''
    }
    
     submithandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        this.props.login(this.state.username,this.state.password)
        console.log(this.state.username,this.state.password)
        }
     handlechange = (e) =>{
        console.log(this.props.login)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render(){
        const mycookie   = Cookies.get('token')
        if(mycookie){
            
                this.props.history.push('/Dashboard')
                return 1
        }        
        else{
        return( 
            <div>
            <form onSubmit = {this.submithandler}>
                <input type='text' id= 'username' placeholder = 'Username'  onChange = {this.handlechange}/>
                <input type = 'password' id = 'password' placeholder = 'Password' onChange = {this.handlechange}/>
                <button type = "submit">Submit</button>
                </form>
            </div>

        )
        }
    }
}
const mapStateToProps = (state) => {
    return{
        // login : (username , password) => {dispatch(login(username,password))}
        state
    }
}
export default connect(mapStateToProps,{login})(Login);