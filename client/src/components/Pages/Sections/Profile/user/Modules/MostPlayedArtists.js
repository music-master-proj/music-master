import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import { ArtistCard } from "../Cards/ArtistCard";
import '../Styles/cardStyles.scss'

function MostPlayedArtists() {
  return (
    <section className='mostPlayed mb-5'>
      <Row><h3>Your most played artists</h3></Row>
      <Container fluid>
        <Row>
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </Row>
      </Container>
    </section>
  );
}

export default MostPlayedArtists;
