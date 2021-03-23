import React from 'react';
import {EmailField, PasswordField} from './components'


class SignForm extends React.Component{
    constructor(props) {
        super(props)
        this.state= { 
            email : this.props.email,
            password : this.props.password
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const value =  e.target.value
        this.setState({
            [name] : value
        })
    }

    submit(){

    }
    
    render(){
        return( 
            <div>
                <form method="post" onSubmit={this.submit}>
                    <EmailField onChange={this.handleChange} value={this.state.email}/>
                    <PasswordField onChange={this.handleChange} value={this.state.password}/>
                    <button type='submit'>S'inscrire</button>
                </form>
            </div>
        )
    }
}

export default SignForm;