import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import PageContainer from './PageContainer';
import UserPlaylists from './Sections/Profile/admin/UserPlaylists';
import './Styles/homepage.scss'

function PlaylistPage() {
  const authData = useSelector((state) => state.auth.authData);
  return (
    <>
      {!authData ? <Redirect to='/login' /> :
        (authData && authData.user.status === 0) ? <Redirect to='/quest' /> :
          (authData.user.role === 1) ? <Redirect to='/profile' /> :
            <PageContainer title='Profile Playlist' footer={false}>
              <div className='bg-light py-md-5 py-sm-3 py-1'>
                <UserPlaylists />
              </div>
            </PageContainer>
      }
    </>
  );
}

export default PlaylistPage;
