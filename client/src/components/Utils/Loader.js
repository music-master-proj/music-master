import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader({ variant }) {
  if (!variant) variant = 'primary'
  return (
    <>
      <div className='text-center'>
        <Spinner
          animation='border'
          variant={variant}
          size='lg'
          style={{
            width: '4em',
            height: '4em',
            borderWidth: '0.35em',
          }}
        />
      </div>
    </>
  )
}

export default Loader
