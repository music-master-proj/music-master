import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function WhatOnMusic() {
  return (
    <Container className='mb-1'>
      <section id='whatsOnMusic' >
        <h2 className='sectionTitle'>What’s on MUSIC MASTER?</h2>
        <Row className='mt-4'>
          <Col>
            <img src='assets/images/music-icon.png' alt='volume symbol' />
            <h3>Millions of Songs</h3>
            <p>There are millions of songs on MUSIC MASTER</p>
          </Col>
          <Col>
            <img src='assets/images/high-quality-icon.png' alt='sound waves symbol' />
            <h3>HD Music</h3>
            <p>Listen to music as if you were listening live</p>
          </Col>
          <Col>
            <img src='assets/images/devices-icon.png' alt='devices symbol' />
            <h3>Stream Everywhere</h3>
            <p>Stream music on your smartphone, tablet or computer</p>
          </Col>
        </Row>
      </section>
      <section id='musicFeatures' >
        <Row className=' justify-content-around'>
          <Col xs='12'>
            <h2 className='sectionTitle sectionTitleWhite'>It’s as yeezy as Kanye West.</h2>
          </Col>
          <Col md='4'>
            <Row>
              <Col className='featureContainer pt-5'>
                <h3>Search</h3>
                <p>Know what you want to listen to? Just search and hit play.</p>
              </Col>
            </Row>
            <Row>
              <Col className='featureContainer pt-3'>
                <h3>Browse</h3>
                <p>Check out the latest charts, brand new releases and great playlists for right now.</p>
              </Col>
            </Row>
            <Row>
              <Col className='featureContainer pt-3'>
                <h3>Discover</h3>
                <p>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</p>
              </Col>
            </Row>
          </Col>
          <Col md='4' className='text-center align-self-center'>
            <img className='musicAppImg' src='assets/images/music-app.jpg' alt='music app running in mobile phone' />
          </Col>
          <Col md='4' className='text-center align-self-center'>
            <img className='musicWhiteIcon' src='assets/images/music_master_frame.jpg' alt='white music logo' />

          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default WhatOnMusic;
