import React from 'react';
import {connect} from 'react-redux';
import {get} from '../actions/actions'
import Cookies from 'js-cookie';

class Dashboard extends React.Component {
    // componentWillReceiveProps(){
     submithandler = async (e) =>{
        e.preventDefault()
        // console.log(this.state)
        // this.props.login(this.state.username,this.state.password)
        const my = Cookies.get('token')
         await this.props.get(my)
        console.log(this.props.state)
        document.getElementById("dante").innerHTML = `${this.props.state.auth.res.message}`

        }
                submithandler1 = async (e) =>{
            e.preventDefault()
            Cookies.remove('token')
            this.props.history.push('/Home')   
            }
        
    render(){
        return(
            <div>
                <h1>You are logged in!!</h1>
                <button onClick={e => this.submithandler(e,true)} type = "submit">Get response</button>
                <button onClick={e => this.submithandler1(e,false)}>
                    Logout
                </button>
                <h2 id = 'dante'>Response </h2>
            </div>
            

        )
        
    }
}
const mapStateToProps = (state) => {
    return{
        // login : (username , password) => {dispatch(login(username,password))}
        state
    }
}
export default connect(mapStateToProps,{get})(Dashboard);