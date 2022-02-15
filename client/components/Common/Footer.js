/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap'
import './Styles/footer.scss'
function Footer() {
  return (
    <footer className='' id='footer'>
      <Container>
        <div className='footerContainer text-sm-center text-center'>
          <Row>
            <Col lg={2} md={4} sm={6} >
              <img alt='logo' src='assets/images/music_master_frame.jpg' className='footerLogo' />
            </Col>
            <Col lg={3} md={3} sm={6}>
              <address>
                <span>WebCorpCo<br /></span>123 Easy Street<br />
                Orlando, Florida, 32801<br />
                <span>Phone: <a href='tel:5555558899'>(555) 555-8899</a></span>
              </address>
            </Col>
            <Col lg={2} md={4} sm={6} >
              <a href='' target='_blank' ><img alt='app store' src='assets/images/appstore.png' /></a>
            </Col>
            <Col lg={2} md={6} sm={6} >
              <a href='' target='_blank'><img alt='google play store' src='assets/images/androidstore.png' /></a>
            </Col>
            <Col lg={3} md={6} sm={6} >
              <ul className='socialIconsList list-unstyled list-inline justify-content-center'>
                <li><a href='' target='_blank'><img alt='facebook' src='assets/images/facebook-white.png' /></a></li>
                <li><a href='' target='_blank'><img alt='twitter' src='assets/images/twitter-white.png' /></a></li>
                <li><a href='' target='_blank'><img alt='youtube' src='assets/images/youtube-white.png' /></a></li>
                <li><a href='' target='_blank'><img alt='instagram' src='assets/images/instagram-white.png' /></a></li>
                <li><a href='' target='_blank'><img alt='pinterest' src='assets/images/pinterest-white.png' /></a></li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>

      <div className='footerBottomContainer'>
        <Container>
          <div className='leftContainer'>
            <ul >
              <li><a href='' className='text-decoration-none'>FAQ</a></li>
              <li><a href='' className='text-decoration-none'>News</a></li>
              <li><a href='' className='text-decoration-none'>Contact Us</a></li>
            </ul>
          </div>
          <div className='rightContainer'>
            <p>Copyright &#xA9; 2021 MUSICMASTER. &nbsp;<a href='' className='text-decoration-none'>Privacy Policy</a></p>
          </div>
        </Container>
      </div>

    </footer>
  );
}

export default Footer;
