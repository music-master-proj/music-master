import React from 'react';
import { Col, } from 'react-bootstrap';
import { PlaylistCard } from '../../admin/Cards/PlaylistCard'

export const CalendarCard = ({ weekday, playlist }) => {
  return (
    <Col xs='auto'>
      {weekday.toUpperCase()}
      <PlaylistCard playlist={playlist} />
    </Col>
  );
};