import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Config  from '../../config/config';
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path)
  }

  const cookies = new Cookies();
  const initialValues = { username: "", password: "", email: "", confirmPassword: "", role: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [responseBad, setResponseBad] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: `${Config.API_ADDR}/Benny/register`,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify({
        email: formValues.email,
        username: formValues.username,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
        role: formValues.role
      })
    }).then((response) => {
      if(response.data === "Passwords do not match") {
        setResponseBad(response.data);
      } else {
        window.location = '/login';
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-login mt-10 justify-content-center'>
      <div className="form-title">
        <p style={{color: 'red'}}>{responseBad}</p>
        <h1>Register</h1>
      </div>
      <div className="ui-form">
        <div className="field">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Parola"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirma Prola"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        <div className="field">
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formValues.role}
            onChange={handleChange}
          />
        </div>

        <button className="fluid ui button blue">Register</button>

        <br/>
        <a onClick={() => routeChange('/Login')} >Login</a>
      
      </div>
    </form>
  )
}

export default Register