import React, { Component } from 'react';
// import './index.css';
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
        return (
            <Grid className='index-body' textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='Brown' textAlign='center'>
                Log In to your account
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
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