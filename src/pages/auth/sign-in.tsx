import React, { FC } from "react";
import { useStores } from "../../utils/use-stores";
import { useMutation } from "../../utils/api-hook";
import { SignInRequestBody, authenticationApi } from "../../services/api";
import { DateTime as d } from 'luxon';
import { days, dayTimes, months, signInInput,  } from './auth.const';
import { Button, Input, message } from 'antd';
import { Controller, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const SignIn: FC = observer(function SignIn() {
  const { userStore: { setAuthentication } } = useStores();
  const [messageApi, contextHolder] = message.useMessage();

  const validationSchema = z
    .object({
      email: z.string().min(1, { message: "Email is required" }),
      password: z.string().min(1, { message: "Password name is required" }),
    })

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: signInInput ,
    resolver: zodResolver(validationSchema)
  })

  const { mutate: signInMutation, loading: signingIn } = useMutation(authenticationApi.signIn, {
    onSuccess: ({ data: { accessToken, user } }) => {
      setAuthentication(accessToken, user);
    },
    onError(err) {
        error()
    },
  });

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Wrong email & password',
    });
  };

  const onSave = (values: SignInRequestBody) => {
    signInMutation({
      requestBody:values
    })
  }

  const thisHour = d.now().hour;
  const currentDayTime = thisHour >= 18 ? dayTimes[3] : thisHour >= 16 ? dayTimes[2] : thisHour >= 11 ? dayTimes[1] : dayTimes[0];

  return (
    <div className="flex flex-row flex-wrap h-screen">
          {contextHolder}
      <div
        className={`flex w-full lg:w-[45%] items-center`}
        style={{ backgroundColor: currentDayTime.backgroundColor }}
      >
        <div className='w-full'>
          <div className='max-w-[220px] lg:max-w-md mx-auto'>
            <div className={`rounded-full p-6 lg:p-10`} style={{ backgroundColor: `rgba(${currentDayTime.sunRGB}, 0.1)` }}>
              <div className={`p-6 lg:p-10 rounded-full`} style={{ backgroundColor: `rgba(${currentDayTime.sunRGB},0.3)` }}>
                <div
                  className={`flex flex-col w-full aspect-square p-6 rounded-full justify-center items-center lg:text-2xl`}
                  style={{ backgroundColor: `rgba(${currentDayTime.sunRGB},1)`, color: currentDayTime.text }}
                >
                  <p className='font-medium'>{days[d.now().weekday]} </p>
                  <div className={`flex flex-wrap items-center justify-center text-sm lg:text-lg -mx-2`}>
                    <p className='mx-2 w-full lg:w-auto text-center' >{`${months[d.now().month - 1]} ${d.now().day}`}</p>
                    <div className='w-4 h-4 rounded-full  hidden lg:block' style={{ backgroundColor: 'rgba(255,255,255,0.4)', padding: 3 }}>
                      <div className={`rounded-full w-full h-full`} style={{ backgroundColor: currentDayTime.text }} />
                    </div>
                    <p className='mx-2 w-full lg:w-auto text-center'>{d.now().toFormat('hh:mm a')}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={`mt-8 text-2xl lg:text-5xl font-bold text-center`} style={{ color: currentDayTime.text }}>
              Good {`${currentDayTime.label}!`}
            </p>
          </div>
        </div>
      </div>
         <div className={`flex w-full lg:w-1/2 flex-col justify-center items-center`}>
        <div className='w-full p-10'>
          <div className='max-w-sm mx-auto'>
            <p className={`mb-10 font-bold text-2xl px-1`}>Glad to see you again</p>
            <p className={`mb-2 font-medium px-1`}>Your Email Address</p>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Enter your first name"
                  onChange={onChange}
                  className="w-full h-12"
                  value={value}
                />
              )}
              name='email'
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2"> {errors.email?.message}
              </p>
            )}
            <p className={`mt-4 mb-2 font-medium px-1`}>Password</p>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Enter your last name"
                  onChange={onChange}
                  className="w-full h-12"
                  value={value}
                  type='password'
                />
              )}
              name='password'
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-2"> {errors.password?.message}
              </p>
            )}
            <Button
              onClick={handleSubmit(onSave)}
              size='large'
              type='primary'
              className='w-full mt-4'
              loading={signingIn}
            >
              <p className='inline-flex items-center'>
                <span>Sign in</span>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
})
