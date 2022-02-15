import React from 'react';
import PageContainer from './PageContainer'
import QuestionForm from './Sections/QuestionForm';
import { Redirect } from 'react-router-dom';
import { useSelector, } from 'react-redux';

function Questionnaire() {
  const authData = useSelector((state) => state.auth.authData);
  return (
    <>
      {!authData ? <Redirect to='/login' /> :
        (authData && authData.user.status === 1) ? <Redirect to='/profile' /> :
          <PageContainer title='Quest' footer={true}>
            <QuestionForm />
          </PageContainer>
      }
    </>
  );
}

export default Questionnaire;
