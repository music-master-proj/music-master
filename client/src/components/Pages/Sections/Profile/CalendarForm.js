import React, { useState } from 'react'
import {
  Navbar,
  Form,
  Button,
  Container,
  Offcanvas,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import { fetchAPI } from '../../../Utils/HelperFunctions';
import { APIHEADERS } from '../../../../Config'
import { CalendarCard } from './user/Cards/CalendarCard'
import { weekdays } from '../../../Utils/GlobalConsts'
import './playlistForm.scss'

function CalendarForm({ weekday, user, playlist, playlists, calendarHandler }) {
  const
    initState = {
      loading: true,
      error: false,
      message: '',
      songsList: [],
      formData: {
        weekday: weekday,
        playlist: playlist?._id,
        user: user._id,
      }
    },
    [state, setState] = useState(initState),
    handleChange = (evt) => {
      console.log('evt', evt.target.name, evt.target.value);
      setState({
        ...state,
        formData: {
          ...state.formData,
          [evt.target.name]: evt.target.value
        }
      })
    },
    handleSubmit = (evt) => {
      setState({
        ...state,
        loading: true,
      })
      if (!state.formData.weekday) return alert(`Weekday can't be blank`)
      if (!state.formData.playlist) return alert(`Playlist can't be blank`)
      let config = {
        method: 'PUT',
        url: `calendar`,
        headers: APIHEADERS(),
        data: { user: user._id, [state.formData.weekday]: state.formData.playlist },
      };
      fetchAPI(config.url, config.headers, config.data, config.method).then(res => {
        setState({
          ...state,
          loading: false,
          error: false,
          message: res.message,
        })
        calendarHandler();
      }).catch(error => {
        console.log('error', error)
        setState({
          ...state,
          loading: false,
          error: true,
          message: error.message
        })
      })
    };

  let { error, message, formData } = state;
  return (
    <div className='recommendationsContainer'>
      <Navbar expand={false}>
        <Container fluid className='justify-content-center'>
          <Navbar.Toggle aria-controls='offcanvasNavbar' className='border-0'>
            <CalendarCard weekday={formData.weekday} playlist={playlist} />
          </Navbar.Toggle>
          <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end' className='bg-light'>
            <Offcanvas.Header closeButton><Offcanvas.Title id='offcanvasNavbarLabel' className='fw-bolder text-uppercase'>
              <Button variant='success' className=' fw-bolder' onClick={handleSubmit}> Assign Playlist</Button>
            </Offcanvas.Title></Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Form className='' onSubmit={e => e.preventDefault()}>
                  {message && <p className={`${error ? 'text-danger' : 'text-success'}`}>{message}</p>}
                  <Row className='mt-3'>
                    <FormGroup>
                      <FormLabel htmlFor='title' className=' fw-bold '>Choose Weekday</FormLabel>
                      <Form.Select aria-label="Choose Weekday" onChange={handleChange} name='weekday' value={formData.weekday}>
                        <option value=''>~~ Choose Week Day ~~</option>
                        {weekdays.map((wk, i) => <option key={i} value={wk.toLowerCase()}>{wk}</option>)}
                      </Form.Select>
                    </FormGroup>
                  </Row>
                  <Row className='mt-3'>
                    <FormGroup>
                      <FormLabel htmlFor='title' className=' fw-bold '>Choose Playlist</FormLabel>
                      <Form.Select aria-label="Choose Weekday" onChange={handleChange} name='playlist' value={formData.playlist}>
                        <option value=''>~~ Choose Playlist  ~~</option>
                        {playlists && playlists.length > 0 && playlists.map(({ _id, title }, i) => <option key={i} value={_id}>{title}</option>)}
                      </Form.Select>
                    </FormGroup>
                  </Row>
                </Form>
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default CalendarForm