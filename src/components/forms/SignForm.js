import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {createMuiTheme} from '@material-ui/core/styles'

const themes = createMuiTheme();

const classes = {
    formUi:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        width:'100%',
        padding: themes.spacing(5),
        margin: themes.spacing(2),
        size: 'large'
    },
    card :{
        
    }
}

class SignForm extends React.Component{
    constructor(props) {
        super(props)
        this.state= { 
            email : this.props.email,
            password : this.props.password
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
    
    render(){
        return(
            <div className='App-header'>
                <Container component="main" maxWidth='xs'>
                    
                    <Card style={classes.formUi} variant="outlined">
                        <CardContent>
                            <form method="post" onSubmit={this.handleSubmit}>
                                <TextField  margin='normal' label='Email' variant='standard' type='email' onChange={this.handleChange}  value={this.state.password} fullWidth/>
                                <TextField  margin='normal' label='Mot De Passe' type='password'  onChange={this.handleChange} variant='standard' value={this.state.email} fullWidth/>
                                <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Se souvenir de moi"/>
                                <Button  variant = 'contained' margin='normal' role='signup' fullWidth type='submit' color="primary" size="large">Se connecter</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SignForm;