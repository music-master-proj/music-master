import React, { useState } from 'react';
import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { useSelector, } from 'react-redux';
import { fetchAPI } from '../../../Utils/HelperFunctions';
import Message from '../../../Utils/Message'
import Validations from './Validations';
import { APIHEADERS } from '../../../../Config'
import '../../Styles/questionnaire.scss'

function QuestionForm() {
  const authData = useSelector((state) => state.auth.authData)
  const initFormState = {
    stuck: '',
    badass: '',
    somewhere: '',
    breaks: '',
    date: '',
    shower: '',
    move: '',
  }
  const initState = {
    loading: false,
    error: false,
    message: '',
    formData: initFormState
  }
  const [state, setState] = useState(initState),
    [showMessage, setShowMessage] = useState(false),
    handleMessageClose = () => setShowMessage(false),
    handleMessageShow = () => setShowMessage(true),
    [errors, setErrors] = useState({}),
    inputChangeHandler = (evt) => {
      setState({
        ...state,
        formData: {
          ...state.formData,
          [evt.target.name]: evt.target.value
        }
      })
    },
    addQuestionnaireForm = () => {
      setState({  // setting loading data to true
        ...state,
        loading: true
      })

      let config = {
        url: `questionnaire/${authData.user._id}`,
        headers: APIHEADERS(),
        data: state.formData,
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
          let updtAuthData = JSON.parse(localStorage.getItem('userProfile'));
          updtAuthData.user.status = 1;
          localStorage.setItem('userProfile', JSON.stringify(updtAuthData));
          window.scrollTo(0, 0)
          setTimeout(function () {
            window.location.reload(); 
          }, 3000)
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
      if (!errors.hasErrors) addQuestionnaireForm();
      else setState({ ...state, loading: false })

    },
    FormOptions = ({ name, labelQuest, options }) => (
      <>
        <Row className="formRow">
          <Col md={12} >
            <FormGroup className=' mx-2 formCol'>
              <label className='text-start pb-3' >{labelQuest} <span className='text-danger'>*</span></label>
              {options.map((item, idx) => (
                <Form.Check key={idx}>
                  <Form.Check.Input type='radio' name={name} value={item.value} onChange={inputChangeHandler} checked={state.formData[name] === item.value} />
                  <Form.Check.Label >{item.label}</Form.Check.Label>
                </Form.Check>
              ))}
            </FormGroup>
            {errors[name] && (<p className="errorMessage">{errors[name]}</p>)}
          </Col>
        </Row>
      </>
    );
  console.log(state.formData);
  return (
    <>
      {(showMessage || state.error) && <Message message={state.message} error={state.error} handleMessage={handleMessageClose} />}
      <Form className='questForm g-3' onSubmit={handleSubmit}>
        <div className="questTitleContainer text-center">
          <h1>MUSIC MASTER </h1>
          <h3>SIGN UP - Qestionnaire form </h3>
        </div>
        <div className='formContainer'>
          <Row className='g-0'>
            <Col md='6'>
              <FormOptions
                name='stuck'
                options={[
                  { label: 'Luis Fonsi FT. Daddy Yankee - Despacito', value: 'Luis Fonsi ft. Daddy Yankee - Despacito' },
                  { label: 'Mark Ronson - Uptown Funk ft. Bruno Mars', value: 'Mark Ronson ft. Bruno Mars - Uptown Funk ' },
                  { label: 'Justin Bieber - Sorry', value: 'Justin Bieber - Sorry' },
                  { label: 'I never heard these songs', value: 'none' },
                ]}
                labelQuest='Once you hear it, it will be stuck in your head for an entire day'
              />
              <FormOptions
                name='badass'
                options={[
                  { label: 'The White Stripes - Seven Nation Army', value: 'The White Stripes - Seven Nation Army' },
                  { label: 'Michael Jackson - Thriller', value: 'Michael Jackson - Thriller' },
                  { label: 'Abba - Dancing Queen', value: 'Abba - Dancing Queen' },
                  { label: 'I never heard these songs', value: 'none' },
                ]}
                labelQuest='Makes you feel like a bad-ass'
              />
              <FormOptions
                name='somewhere'
                options={[
                  { label: 'Jay-Z feat. Alicia Keys - Empire State of Mind', value: 'Jay-Z ft. Alicia Keys - Empire State of Mind' },
                  { label: 'Shakira - Waka Waka', value: 'Shakira - Waka Waka' },
                  { label: 'John Denver - Take Me Home, Country Roads', value: 'John Denver - Take Me Home, Country Roads' },
                  { label: 'I just want quiet!', value: 'none' },
                ]}
                labelQuest='When you want to run away and escapse somewhere what would you prefer?'
              />
              <FormOptions
                name='breaks'
                options={[
                  { label: `Shaggy - It Wasn't Me`, value: `Shaggy - It Wasn't Me` },
                  { label: `Sam Smith - I'm Not The Only One`, value: `Sam Smith - I'm Not The Only One` },
                  { label: `Rafaga Mentirosa Letra`, value: 'Rafaga - Mentirosa Letra' },
                  { label: `I am the queen of the world, no one will dare to breakup with me!`, value: 'none' },
                ]}
                labelQuest='When he breaks up with you...'
              />
            </Col>
            <Col md='6'>
              <FormOptions
                name='date'
                options={[
                  { label: 'Enrique Iglesias', value: 'Enrique Iglesias' },
                  { label: 'Harry Styles', value: 'Harry Styles' },
                  { label: 'Maluma', value: 'Maluma' },
                  { label: 'Who are they?', value: 'none' },
                ]}
                labelQuest='Who Would you like to go on a date with?'
              />
              <FormOptions
                name='shower'
                options={[
                  { label: 'Dua Lipa feat. DaBaby -Levitating', value: 'Dua Lipa ft. DaBaby - Levitating' },
                  { label: 'Spice Girls - Wannabe', value: 'Spice Girls - Wannabe' },
                  { label: `Bee Gees - Stayin' Alive`, value: `Bee Gees - Staying Alive` },
                  { label: 'Where the hell are you bringing these songs from?', value: 'none' },
                ]}
                labelQuest='Which song you will sing in the shower?'
              />
              <FormOptions
                name='move'
                options={[
                  { label: `Technotronic - Pump Up The Jam`, value: 'Technotronic - Pump Up The Jam' },
                  { label: `Will Smith - Gettin' Jiggy Wit It`, value: `Will Smith - Gettin' Jiggy Wit It` },
                  { label: `LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem`, value: `LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem` },
                  { label: `All these questions tired me out`, value: 'none' },
                ]}
                labelQuest='Only this song get make me bust a move'
              />
              <Row className='mx-4'>
                <Col md={12} className="mb-3 m-2 ">
                  <Button onClick={handleSubmit} variant='dark' size='lg' className='px-5 submitBtn'>{state.loading ? 'LOADING...' : 'SEND'}</Button>
                </Col>
              </Row>
              <img className="bottomImg" src='assets/images/woman.jpg' alt='song woman' />
            </Col>
          </Row>
        </div>
      </Form>

    </>
  );
}

export default QuestionForm;
