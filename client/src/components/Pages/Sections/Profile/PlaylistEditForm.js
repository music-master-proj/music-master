import React, { useState } from 'react'
import {
  Navbar,
  Form,
  Button,
  Container,
  Offcanvas,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { fetchAPI } from '../../../Utils/HelperFunctions';
import YoutubeApi from "../../../Utils/YoutubeApi";
import { APIHEADERS } from '../../../../Config'
import { PlaylistCard } from '../Profile/admin/Cards/PlaylistCard'
// import Loader from '../../../Utils/Loader';
import './playlistForm.scss'

function PlaylistEditForm({ user, playlist, playlistHandler }) {
  const
    initState = {
      loading: true,
      error: false,
      message: '',
      searchQuery: '',
      songsList: [],
      formData: {
        title: playlist.title,
        songs: playlist.songs,
        user: user._id,
      }
    },
    [state, setState] = useState(initState),
    handleChange = (evt) => {
      setState({
        ...state,
        formData: {
          ...state.formData,
          [evt.target.name]: evt.target.value
        }
      })
    },
    addSong = (song) => {
      setState({
        ...state,
        formData: {
          ...state.formData,
          songs: [...state.formData.songs, song]
        }
      })
    },
    removeSong = (song) => {
      setState({
        ...state,
        formData: {
          ...state.formData,
          songs: [...state.formData.songs.filter(songItem => songItem.etag !== song.etag)]
        }
      })
    },
    handleSongSearch = () => {
      //search for all songs inside youtube api
      YoutubeApi.get("/search", { params: { q: state.searchQuery, maxResults: 5, } })
        .then(r => {
          console.log('search response from youtube api', r)
          setState({
            ...state,
            loading: false,
            error: false,
            songsList: r.data.items,
          })
        })
        .catch(e => {
          console.log('error in youtube api', e)
          setState({
            ...state,
            loading: false,
            error: true,
            message: e
          })
        });
    },
    handleSubmit = (evt) => {
      setState({
        ...state,
        loading: true,
      })
      if(!state.formData.title) return alert(`Playlist Title can't be blank`)
      let config = {
        method: 'PUT',
        url: `playlist/${playlist._id}`,
        headers: APIHEADERS(),
        data: state.formData,
      };
      fetchAPI(config.url, config.headers, config.data, config.method).then(res => {
        console.log('res', res)
        setState({
          ...state,
          loading: false,
          error: false,
          message: res.message,
        })
        playlistHandler();
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

  let { error, searchQuery, message, songsList } = state, { title, songs, } = state.formData;
  return (
    <div className='recommendationsContainer'>
      <Navbar expand={false}>
        <Container fluid className='justify-content-center'>
          <Navbar.Toggle aria-controls='offcanvasNavbar' className='border-0'>
            <PlaylistCard playlist={playlist} />
          </Navbar.Toggle>
          <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end' className='bg-light'>
            <Offcanvas.Header closeButton><Offcanvas.Title id='offcanvasNavbarLabel' className='fw-bolder text-uppercase'>
              <Button variant='success' className=' fw-bolder' onClick={handleSubmit}> Edit Playlist</Button>
            </Offcanvas.Title></Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Form className='' onSubmit={e => e.preventDefault()}>
                  {message && <p className={`${error ? 'text-danger' : 'text-success'}`}>{message}</p>}
                  <Row className='  justify-content-sm-start  justify-content-center'>
                    <Col md='9' sm='8' xs='auto'>
                      <FormControl type='search' placeholder='Search for songs on youtube' className='me-2' aria-label='Search' name='search' value={searchQuery}
                        onChange={(evt) => setState({ ...state, searchQuery: evt.target.value })} />
                    </Col>
                    <Col xs='auto' className='mt-sm-auto mt-2'>
                      <Button variant='outline-success' onClick={() => handleSongSearch()}>Search</Button>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <FormGroup>
                      <FormLabel htmlFor='title' className=' fw-bold '>Enter title of Playlist</FormLabel>
                      <FormControl type='text' name='title' placeholder='My Pop Music' value={title} onChange={handleChange} />
                    </FormGroup>
                  </Row>
                  <Row className='mt-3'>
                    <FormGroup>
                      <FormLabel htmlFor='title' className=' fw-bold '>Choose Songs for Playlist</FormLabel>
                      {(songsList && songsList.length > 0) ?
                        songsList.map((song,) => (
                          <Row key={song.etag} style={{ height: 80, }} className='my-2'>
                            <Col md='3' sm='4' xs='4'>
                              <Image src={song.snippet.thumbnails.default.url} width={80} height={80} />
                            </Col>
                            <Col md='7' sm='5' xs='6'>
                              <h4>{song.snippet.title} </h4>
                              <p>song duration</p>
                            </Col>
                            {songs.includes(song) ? (
                              <Col md='2' sm='3' xs='2' className='align-self-center' style={{ height: 80 }}><FontAwesomeIcon icon={faTrashAlt} size='2x' color='#000fff' onClick={() => removeSong(song)} /></Col>
                            ) : (
                              <Col md='2' sm='3' xs='2' className='align-self-center' style={{ height: 80 }}><FontAwesomeIcon icon={faPlusCircle} size='2x' color='#000' onClick={() => addSong(song)} /></Col>
                            )}
                          </Row>
                        )) : <h5 className=' text-warning '> No Songs... You can search for songs </h5>}
                    </FormGroup>
                  </Row>
                  <hr />
                  <Row className='mt-3'>
                    <FormGroup>
                      <FormLabel htmlFor='title' className=' fw-bold '>Choosed Songs for Playlist</FormLabel>
                      {(songs && songs.length > 0) ?
                        songs.map((song,) => (
                          <Row key={song.etag} style={{ height: 80, }} className='my-2'>
                            <Col md='3' sm='4' xs='4'>
                              <Image src={song.snippet.thumbnails.default.url} width={80} height={80} />
                            </Col>
                            <Col md='7' sm='5' xs='6'>
                              <h4 className='text-black'>{song.snippet.title} </h4>
                            </Col>
                            <Col md='2' sm='3' xs='2' className='align-self-center' style={{ height: 80 }}><FontAwesomeIcon icon={faTrashAlt} size='2x' color='#000fff' onClick={() => removeSong(song)} /></Col>
                          </Row>
                        )) : <h5 className=' text-warning '> No Songs Choosed Yet... </h5>}
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

export default PlaylistEditForm