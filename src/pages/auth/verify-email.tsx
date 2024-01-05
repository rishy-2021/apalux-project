import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '../../utils/api-hook';
import { authenticationApi } from '../../services/api';
import { useStores } from '../../utils/use-stores';

export default function VerifyEmail() {

  const { userStore: { setAuthentication } } = useStores();
  let { id , accessToken } = useParams();

  const { query: emailVerificationQuery } = useQuery(authenticationApi.verifyEmail, {
    onSuccess: ({ data}) => {
     setAuthentication(data.accessToken, data.user)
    },
  });

  const verifyEmail = () => {
    emailVerificationQuery({
      pathParams:{
        id: id!,
        accessToken: accessToken!
      }
    })
  }

  return (
    <div className={'flex flex-row items-center justify-center h-screen w-full'}>
        <Button size='large' type='primary' onClick={()=> verifyEmail()}>
          <p>Verify Email <i className='icon-ArrowRightMinor ml-1' /></p>
          </Button>
    </div>
  )
}