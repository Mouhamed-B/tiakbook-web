import React from 'react';
import {TextField} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const accountTypes = [
    {
        'label':'client',
        'value':'0'
    },
    {
        'label':'livreur',
        'value':'1'
    }
]
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const value =  e.target.value
        this.setState({
            [name] : value
        })
    }

    handleSubmit(){

    }

    render() {
        return (
            <div className='App-Header'>
                <Paper elevation={2}>
                    <form width='50%' onSubmit={this.handleSubmit}>
                        <TextField onChange={this.handleChange} value={this.state.firstName} name='firstName' variant='filled' label='Prénom'/>
                        <br/>
                        <TextField onChange={this.handleChange} value={this.state.lastName} name='lastName' variant='filled' label='Nom'/>
                        <br/>
                        <TextField onChange={this.handleChange} value={this.state.phoneNumber} name='phoneNumber' variant='filled' label='Telephone'/>
                        <br/>
                        <TextField select onChange={this.handleChange} value={this.state.accountType} options={this.types} name='type' color='primary' label='En Tant que' helperText='Choisissez votre type de compte'>
                            {accountTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <br/>
                        <Button variant = 'contained' type='submit' color="primary" size="large">S'inscrire</Button>
                    </form>      
                </Paper>
            </div>
        )
    }
    
}

export default UserForm;