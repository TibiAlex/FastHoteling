import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Config  from '../../config/config';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path)
  }

  const cookies = new Cookies();
  const initialValues = { username: "", password: ""};
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
      url: `${Config.API_ADDR}/Benny/login`,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify({
        username: formValues.email,
        password: formValues.password,
      })
    }).then((response) => {
      if(response.data === "Useraname sau parola incorecte") {
        setResponseBad(response.data);
      } else {
        cookies.set('token',  response.data.jwt, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) });
        window.location = '/home';
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-login mt-10 justify-content-center'>
      <div className="form-title">
        <p style={{color: 'red'}}>{responseBad}</p>
        <h1>Login</h1>
      </div>
      <div className="ui-form">
        <div className="field">
          <input
            type="text"
            name="email"
            placeholder="Username"
            value={formValues.email}
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
        
        <button className="fluid ui button blue">Login</button>
        <br/>
        <a onClick={() => routeChange('/Register')} >Register</a>
      
      </div>
    </form>
  )
}

export default Login