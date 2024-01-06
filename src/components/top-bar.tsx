import React from 'react';
import { Button } from 'antd';
import  { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { dayTimes } from '../pages/auth/auth.const';
import { DateTime as d } from 'luxon';
import { useStores } from '../utils/use-stores';

export const TopBar: FC = () => {
  const navigate = useNavigate()
  const {
    userStore: {
      auth: { isAuthenticated , logout}
    }
  } = useStores();
  const location = useLocation().pathname.slice(1)
  const isSignUpActive = location === 'signup'
  const thisHour = d.now().hour;
  const currentDayTime = thisHour >= 18 ? dayTimes[3] : thisHour >= 16 ? dayTimes[2] : thisHour >= 11 ? dayTimes[1] : dayTimes[0];

  return (
    <div className={`fixed inset-x-0 top-0 h-18 border-b border-b-contrast-10 ${isAuthenticated ? 'bg-white': 'bg-tranparent'} z-30 flex flex-row py-4 px-10`}>
           <p className={`text-3xl font-extrabold font-sans ${!isSignUpActive ?'text-orange-300' : 'text-black'}`}>apalux</p>
      <div className='flex flex-1 px-4 items-center'>
        <div className='flex flex-1'></div>
        <div className='flex flex-row items-center'>
          {isAuthenticated ?
            <Button
            shape='round'
            size='middle'
            type='primary'
            onClick={()=>{logout()}}
            >
              <span className='font-bold'>Logout</span>
            </Button>
          :
            <Button
            shape='round'
            size='middle'
            onClick={()=>!isSignUpActive ? navigate('signup') : navigate('signin')}
            style={!isSignUpActive ? { backgroundColor: `rgba(${currentDayTime.sunRGB},1)`, color: currentDayTime.text } : {backgroundColor: '#FFEB00'}}
            >
            <span className='font-bold'>{isSignUpActive ?'Sign in' : 'Sign up'}</span>
              <i className='icon-ArrowRightMinor ml-2' />
            </Button>
}
        </div>
      </div>
    </div>
  )
}
