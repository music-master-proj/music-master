import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { APIHEADERS } from '../../../../../Config';
import { fetchAPI } from '../../../../Utils/HelperFunctions';
import { UserCard } from './Cards/UserCard'
import Loader from '../../../../Utils/Loader'

function UsersList() {
  const
    initState = {
      loading: false,
      error: false,
      message: '',
      users: [],
    },
    [state, setState] = useState(initState);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    fetchAPI('user', APIHEADERS(), null, 'GET')
      .then(response => {
        setState({
          loading: false,
          error: false,
          message: response.message,
          users: response.data,
        })
      }).catch(error => {
        console.log(error)
        setState({
          loading: false,
          error: true,
          message: error.message,
          users: [],
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let { loading, error, message, users } = state;
  return (
    <>
      {loading ? <Loader /> : error ?
        (<h4 className='text-danger'>{message}</h4>) : (
          <Row className='justify-content-center'>
            {users.map((user, idx) => (
              <React.Fragment key={idx}>
                <UserCard user={user} />
              </React.Fragment>
            ))}
          </Row>
        )}
    </>
  )
}

export default UsersList