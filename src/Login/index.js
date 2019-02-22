import React, { Component } from 'react';
import './style.css';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username:'',
            password:''
        }
    }

    handleInput = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username);
    }

    render() {
        console.log(this.state);
        // <img src='https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_1280.jpg'/>
        return (

            <Grid  className='body' textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='Brown' textAlign='center'>
                Log In to your account
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                <style>{'body { background-color: silver; }'}</style>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput} />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInput}
                        />

                        <Button color='teal' fluid size='large' type='submit' value='submit'>
                        Login
                        </Button>
                    </Segment>
                </Form>

            </Grid.Column>
            </Grid>
        )
    }

}

export default Login;