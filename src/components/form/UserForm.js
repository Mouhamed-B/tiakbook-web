import React from 'react';
import {TextField , SelectField} from './components'


class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.types = ['user','deliverer']
        this.state = {
            id:props.id,
            firstName: props.firstName,
            lastName: props.lastName,
            phoneNumber: props.phoneNumber,
            accountType: props.accountType,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
        <div className='container mt-5'>
            <form className='w-50'>
                <TextField onChange={this.handleChange} value={this.state.firstName} name='firstName'>Prénom</TextField>
                <TextField onChange={this.handleChange} value={this.state.lastName} name='lastName'>Nom</TextField>
                <TextField onChange={this.handleChange} value={this.state.phoneNumber} name='phoneNumber'>Telephone</TextField>
                <SelectField onChange={this.handleChange} value={this.state.accountType} options={this.types} name='type'>En Tant que</SelectField>
                <button type='submit'>Valider</button>
            </form>
        </div>
        )
    }
    
}

export default UserForm;