import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import PageContainer from './PageContainer';
import PlaylistForm from './Sections/Profile/PlaylistForm';
import Recommendations from "./Sections/Profile/user/Modules/Recommendations";
import { APIHEADERS } from '../../Config'
import { fetchAPI } from "../Utils/HelperFunctions";
import YoutubeApi from "../Utils/YoutubeApi";
import UsersList from './Sections/Profile/admin/UsersList';
import AllPlaylists from './Sections/Profile/user/Modules/AllPlaylists';
import Loader from '../Utils/Loader';
import './Styles/homepage.scss'
import Calender from './Sections/Profile/user/Modules/Calendar'

function Profile() {
  const authData = useSelector((state) => state.auth.authData);
  const [loading, setLoading] = useState(false)
  const [artistSongs, setArtistSongs] = useState([]);
  const [trackSongs, setTrackSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const fetchPlaylists = () => {
    fetchAPI(`playlist/list/${authData.user._id}`, APIHEADERS(), null, 'GET')
      .then(response => {
        setPlaylists(response.data);
        fetchCalendarEvents();
      }).catch(error => {
        console.log(error)
        setPlaylists([]);
      })
  }
  const fetchCalendarEvents = () => {
    fetchAPI(`calendar/${authData.user._id}`, APIHEADERS(), null, 'GET')
      .then(response => setCalendarEvents(response.data))
      .catch(error => setCalendarEvents([]))
  }
  useEffect(() => {
    let config = {
      method: 'GET',
      url: `questionnaire/${authData.user._id}`,
      headers: APIHEADERS(),
      data: null,
    };
    if (authData.user.role === 1) {
      setLoading(true);
      fetchAPI(config.url, config.headers, config.data, config.method).then(res => {
        console.log('res', res)
        let artistPromises = [], trackPromises = [];
        for (let key in res.data) {
          console.log('res', key)
          if (!['createdAt', 'updatedAt', '_id', 'user'].includes(key) && res.data[key] !== 'none') {
            let artistName = res.data[key], trackName = '';
            if (key !== 'date') {
              artistName = res.data[key].split('-')[0].trim();
              trackName = res.data[key].split('-')[1].trim();
            }
            if (artistName) {
              let promise = new Promise((resolve, reject) => {
                YoutubeApi.get("/search", { params: { q: artistName } }).then(r => resolve(r)).catch(e => reject(e));
              });
              artistPromises.push(promise)
            }
            if (trackName) {
              let promise = new Promise((resolve, reject) => {
                YoutubeApi.get("/search", { params: { q: trackName } }).then(r => resolve(r)).catch(e => reject(e));
              });
              trackPromises.push(promise)
            }
          }
        }
        Promise.all(artistPromises).then(response => {
          let songsResults = [];
          for (let key in response) {
            if (response[key].data) songsResults.push(...response[key].data.items)
          }
          setArtistSongs(songsResults)
        })
        Promise.all(trackPromises).then(response => {
          let songsResults = [];
          for (let key in response) {
            if (response[key].data) songsResults.push(...response[key].data.items)
          }
          setTrackSongs(songsResults)
        })
      }).catch(error => {
        console.log(error);
      })
      fetchPlaylists();
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let allSongsCombined = [...artistSongs, ...trackSongs]
  return (
    <>
      {!authData ? <Redirect to='/login' /> :
        (authData && authData.user.status === 0) ? <Redirect to='/quest' /> :
          <PageContainer title='Profile' footer={authData.user.role === 0 ? false : true}>
            <h2 className=' text-uppercase fw-bolder mx-5' style={{ color: 'var(--theme-navbarColor)' }}> Hello, {authData.user.name}</h2>
            {authData.user.role === 1 ? (
              <> {loading ? <Loader /> : (
                <>
                  <Recommendations artists={artistSongs} tracks={trackSongs} />
                  <AllPlaylists playlists={playlists} user={authData.user} playlistHandler={fetchPlaylists} />
                  <PlaylistForm user={authData.user} allSongs={allSongsCombined} playlistHandler={fetchPlaylists} />
                  <Calender calendarEvents={calendarEvents} playlists={playlists} user={authData.user} calendarHandler={fetchCalendarEvents} />
                </>)}
              </>
            ) : <UsersList />}
          </PageContainer>
      }
    </>
  );
}

export default Profile;
