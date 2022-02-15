import React from 'react';
import PageContainer from './PageContainer';
import SongsList from './Sections/Profile/admin/SongsList';
import './Styles/homepage.scss'

function SonglistPage() {
  return (
    <>
      <PageContainer title='Profile Playlist' footer={false}>
        <div className='bg-light py-md-5 py-sm-3 py-1'>
          <SongsList />
        </div>
      </PageContainer>
    </>
  );
}

export default SonglistPage;
