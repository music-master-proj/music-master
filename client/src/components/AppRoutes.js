import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import ErrorBoundary from './ErrorHandler';
import Navbar from './Common/Header';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Questionnaire from './Pages/Questionnaire';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import PlaylistPage from './Pages/PlaylistPage';
import SonglistPage from './Pages/SonglistPage';

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Switch>
        <ErrorBoundary >
          <div className="">
            <Route path='/' exact component={Homepage} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/quest' exact component={Questionnaire} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/userPlaylists'  component={PlaylistPage} />
            <Route path='/userSongs'  component={SonglistPage} />
            <Route path='/discover' exact component={Homepage} />
            <Route path='/help' exact component={Homepage} />
            <Route path='/downlaod' exact component={Homepage} />
          </div>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

export default AppRoutes
