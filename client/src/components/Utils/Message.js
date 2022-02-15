import React from 'react'
import Alert from 'react-bootstrap/Alert'

function Message({ message, error, handleMessage }) {
  return (
    <>
      <Alert variant={error ? 'danger' : 'success'} onClose={handleMessage} dismissible>
        <Alert.Heading className='fw-bold'>{error ? `Ops! You got an error...` : `Success! `}</Alert.Heading>
        <p className='fw-bolder'>{message} </p>
      </Alert>
    </>
  )
}

export default Message
