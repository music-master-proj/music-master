import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CalendarForm from '../../CalendarForm'
import { weekdays } from '../../../../../Utils/GlobalConsts'

function Calendar({ playlists, user, calendarEvents, calendarHandler }) {
  return (
    <Container fluid>
      <h3 className='text-black fw-bolder'>Calendar</h3>
      <Row className='justify-content-center'>
        {weekdays.map((weekday, idx) => (
          <React.Fragment key={idx}>
            <Col xs='auto'>
              <CalendarForm
                weekday={weekday.toLowerCase()}
                playlists={playlists}
                playlist={playlists && playlists.length > 0 ? playlists[playlists.findIndex(playlist => playlist._id === calendarEvents[weekday.toLowerCase()])] : ''}
                user={user}
                calendarHandler={calendarHandler}
              />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  )
}

export default Calendar