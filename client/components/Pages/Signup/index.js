import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import PageContainer from '../PageContainer'
import Validations from './Validations';
import { fetchAPI } from '../../Utils/HelperFunctions';
import Message from '../../Utils/Message'
import '../Styles/signup.scss'


function Signup() {
  const initFormState = {
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    image: '',
  };
  const initState = {
    loading: false,
    error: false,
    message: '',
    formData: initFormState,
  }
  const authData = useSelector((state) => state.auth.authData)
  const [state, setState] = useState(initState),
    [showMessage, setShowMessage] = useState(false),
    handleMessageClose = () => setShowMessage(false),
    handleMessageShow = () => setShowMessage(true),
    [errors, setErrors] = useState({}),
    inputChangeHandler = (evt) => {
      if (evt.target.name === 'image') {
        console.log(evt.target.files[0]);
        setState({
          ...state,
          formData: {
            ...state.formData,
            [evt.target.name]: evt.target.files[0]
          }
        })
      } else {
        setState({
          ...state,
          formData: {
            ...state.formData,
            [evt.target.name]: evt.target.value
          }
        })
      }
    },
    addUser = () => {
      setState({  // setting loading data to true
        ...state,
        loading: true
      })
      let newFormData = new FormData();
      let { name, email, mobileNumber, password, gender, dateOfBirth, image } = state.formData
      newFormData.append('name', name);
      newFormData.append('email', email);
      newFormData.append('mobileNumber', mobileNumber);
      newFormData.append('password', password);
      newFormData.append('gender', gender);
      newFormData.append('dateOfBirth', dateOfBirth);
      newFormData.append('image', image);

      let config = {
        url: 'user',
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        data: newFormData
      };
      fetchAPI(config.url, config.headers, config.data)
        .then((response) => {
          setState({
            ...state, // setting the state with the loaded data and the other keys update
            loading: false,
            error: false,
            message: response.message,
            formData: initFormState,
          })
          handleMessageShow()
        })
        .catch((error) => {
          console.log(error);
          // setting the state with the error received while fetching data and the other keys update
          setState({
            ...state,
            loading: false,
            message: error.message,
            error: true,
          })
          handleMessageShow()
        });

    },
    handleSubmit = (evt) => {
      evt.preventDefault();
      let errors = Validations(state.formData);
      setErrors(errors);
      if (!errors.hasErrors) addUser();
      else setState({ ...state, loading: false })

    };
  let { name, email, mobileNumber, password, confirmPassword, dateOfBirth, gender, } = state.formData;
  return (
    <>
      {authData ? <Redirect to='/profile' /> :
        <PageContainer title={'Sign up'} footer={true}>
          {(showMessage || state.error) && <Message message={state.message} error={state.error} handleMessage={handleMessageClose} />}
          <section id='signup'>
            <div className='text-center'>
              <h1 className='fw-bolder'>MUSIC MASTER </h1>
              <h3 className='fw-bolder'>SIGN UP </h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Row className='formContainer mx-3'>
                <Col md='4' className='px-5'>
                  <Row className='title mb-3'> Personal Details </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='name' className='text-start'>Enter your name: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='text' name='name' placeholder='name' value={name} onChange={inputChangeHandler} />
                      {errors.name && (<p className='errorMessage'>{errors.name}</p>)}
                    </FormGroup>
                  </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='dateOfBirth' className='text-start'>Enter your date of birth: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='date' name='dateOfBirth' placeholder='dateOfBirth' value={dateOfBirth} onChange={inputChangeHandler} />
                      {errors.dateOfBirth && (<p className='errorMessage'>{errors.dateOfBirth}</p>)}
                    </FormGroup>
                  </Row>

                  <Row>
                    <FormGroup>
                      <FormLabel htmlFor={name} className='text-start'>Choose your gender: <span className='text-danger'>*</span></FormLabel>
                      <Form.Check>
                        <Form.Check.Input type='radio' name='gender' value={'male'} onChange={inputChangeHandler} checked={gender === 'male'} />
                        <Form.Check.Label >Male</Form.Check.Label>
                      </Form.Check>
                      <Form.Check>
                        <Form.Check.Input type='radio' name='gender' value={'female'} onChange={inputChangeHandler} checked={gender === 'female'} />
                        <Form.Check.Label >Female</Form.Check.Label>
                      </Form.Check>
                      {errors.gender && (<p className='errorMessage'>{errors.gender}</p>)}
                    </FormGroup>
                  </Row>

                </Col>
                <Col md='4' className='px-5'>
                  <Row className='title mb-3'> Contact Details </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='email' className='text-start'>Enter your  email: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='email' name='email' placeholder='email' value={email} onChange={inputChangeHandler} />
                      {errors.email && (<p className='errorMessage'>{errors.email}</p>)}
                    </FormGroup>
                  </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='mobileNumber' className='text-start'>Enter your phone number: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='text' name='mobileNumber' placeholder='923855555737' value={mobileNumber} onChange={inputChangeHandler} />
                      {errors.mobileNumber && (<p className='errorMessage'>{errors.mobileNumber}</p>)}
                    </FormGroup>
                  </Row>

                </Col>
                <Col md='4' className='px-5'>
                  <Row className='title mb-3'> User Details </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='password' className='text-start'>Enter your password: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='password' name='password' placeholder='password' value={password} onChange={inputChangeHandler} />
                      {errors.password && (<p className='errorMessage'>{errors.password}</p>)}
                    </FormGroup>
                  </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='confirmPassword' className='text-start'>Re-enter your password: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='password' name='confirmPassword' placeholder='confirm password' value={confirmPassword} onChange={inputChangeHandler} />
                      {errors.confirmPassword && (<p className='errorMessage'>{errors.confirmPassword}</p>)}
                    </FormGroup>
                  </Row>
                  <Row className='my-md-4 my-sm-3 my-auto'>
                    <FormGroup>
                      <FormLabel htmlFor='image' className='text-start'>Upload your picture: <span className='text-danger'>*</span></FormLabel>
                      <FormControl type='file' name='image' onChange={inputChangeHandler} accept='.png,.jpg,.jpeg' />
                      {errors.image && (<p className='errorMessage'>{errors.image}</p>)}
                    </FormGroup>
                  </Row>

                </Col>
              </Row>
              <Container>
                <div className=' text-center mt-4 '>
                  <Button type='submit' variant='primary' size='lg' className='registerBtn px-lg-3 px-md-3 px-auto '> {state.loading ? 'LOADING...' : 'SEND'}</Button>
                </div>
              </Container>
            </Form>
          </section>
        </PageContainer>
      }
    </>
  );
}

export default Signup;
