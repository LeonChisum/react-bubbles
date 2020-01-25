import React, { useState } from "react";
import { Form } from 'semantic-ui-react'
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
}

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    axios.post(`http://localhost:5000/api/login`, user)
          .then(res => {
            console.log(res)
            const token = res.data.payload
            localStorage.setItem('token', token)
            props.history.push('/home')
          })
          .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Form onSubmit={onSubmit}>
          <Form.Input 
            fluid label='Username' 
            placeholder='Username'
            name='username'
            value={user.username}
            onChange={handleChange} />
          <Form.Input 
            fluid label='Password' 
            placeholder='Enter Password'
            name='password'
            value={user.password}
            onChange={handleChange} />
          <Form.Button>Login</Form.Button>
      </Form>
    </>
  );
};

export default Login;
