import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Config  from '../../config/config';

function Navigation() {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path)
  }

  const cookie = new Cookies();
  let token = cookie.get('token');
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className='d-flex col'>
        <div className='col-4 text-center mt-3 mb-4'>
          <button
            onClick={() => routeChange('/home')}
            type="button" 
            className="btn btn-secondary">
              Acasa
          </button>
        </div>
        <div className='col-4 text-center mt-3 mb-4'>
          <button
            onClick={() => routeChange('/home')}
            type="button" 
            className="btn btn-secondary">
              Cauta
          </button>
        </div>
        {
          <div className='col-4 text-center mt-3 mb-4'>
            <button
              onClick={() => routeChange('/Login')}
              type="button" 
              className="btn btn-secondary">
                Logout
            </button>
          </div>
        }
    </div>
  )
}

export default Navigation