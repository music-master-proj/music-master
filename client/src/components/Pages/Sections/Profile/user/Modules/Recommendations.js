import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecommendedArtists from "./RecommendedArtists";
import RecommendedTracks from "./RecommendedTracks";
import '../Styles/cardStyles.scss'

function Recommendations({ artists, tracks }) {
  return (
    <section className='mostPlayed'>
      <Row><h3 className='mt-5 mb-5'>Based on your results, here are your recommendations</h3></Row>
      <Container fluid className='recommendationsContainer'>
        <RecommendedArtists songs={artists} />
        <hr />
        <RecommendedTracks songs={tracks} />
      </Container>
    </section>
  );
}

export default Recommendations;
