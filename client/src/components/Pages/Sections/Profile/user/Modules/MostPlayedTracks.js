import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { TrackCard } from "../Cards/TrackCard";
import '../Styles/cardStyles.scss'

function MostPlayedTracks({songs}) {
  return (
    <section className='mostPlayed mb-5'>
      <Row><h3>Your most played tracks</h3></Row>
      <Container fluid>
        <Row className=' justify-content-center'>
          {songs.map(song=><TrackCard song={song} key={song.etag} />)}
        </Row>
      </Container>
    </section>
  );
}

export default MostPlayedTracks;