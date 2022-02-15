import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Validations from './Validations';
import PageContainer from '../PageContainer';
import * as action from '../../../redux/actions';
import '../Styles/homepage.scss'

function Login() {
  const initState = {
    formData: {
      email: '',
      password: '',
    },
  }
  const [state, setState] = useState(initState);
  const [formErrors, setFormErrors] = useState({});
  const authData = useSelector((state) => state.auth.authData)
  const history = useHistory(),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.auth?.loading),
    apiError = useSelector((state) => state.auth?.errors);
  const changeHandler = (evt) => {
    setState({
      ...state,
      formData: {
        ...state.formData,
        [evt.target.name]: evt.target.value
      }
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = Validations(state.formData);
    setFormErrors(errors);
    if (!errors.hasErrors) {
      dispatch(action.signin(state.formData, history))
    }
  };

  let { email, password } = state.formData

  return (
    <>
      {authData ? <Redirect to='/profile' /> :
        <PageContainer title='Login' footer={true}>
          <section className='heroSection' style={{ backgroundImage: `url('assets/images/landing.jpg')` }}>
            <h1>MUSIC MASTER</h1>
            <Form onSubmit={handleSubmit} className='mb-4'>
              {(apiError && apiError?.message) && (
                <div className='text-center'>
                  <h4 className="text-danger">{apiError.message}</h4>
                </div>
              )}
              <FormControl type='text' className='mt-4 mx-auto' placeholder='Email' name='email' value={email} onChange={changeHandler} required />
              {formErrors?.email && <span className='errorMessage'>{formErrors.email}</span>}
              <FormControl type='password' className='mt-3 mx-auto' placeholder='Password' name='password' value={password} onChange={changeHandler} required />
              {formErrors?.password && <span className='errorMessage'>{formErrors.password}</span>}
            </Form>
            <div className='d-grid gap-2 col-6 mx-auto'>
              <div className='d-grid gap-2 col-6 mx-auto text-decoration-none'>
                <Button onClick={handleSubmit} variant='outline-warning' className='regBtn'>{loading ? 'LOADING...' : 'Login'}</Button>
              </div>
              <Link to='/signup' className='d-grid gap-2 col-6 mx-auto text-decoration-none'>
                <Button variant='outline-warning' className='regBtn'>Sign up</Button>
              </Link>
              <Link to='/' className='text-decoration-none text-warning text-center'>Forgot Password?</Link>
            </div>
          </section>
        </PageContainer>
      }
    </>
  );
}

export default Login;
