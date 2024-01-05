import React, { FC } from 'react';
import imageRegistry from '../../common/const/image-registry.const';
import {  SignUpRequestBody, SignUpResponse, authenticationApi } from '../../services/api';
import { useMutation } from '../../utils/api-hook';
import { Button, Input, message } from 'antd';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpInput } from './auth.const';

export const SignUp: FC = observer(function SignUp() {

  const [messageApi, contextHolder] = message.useMessage();

  const validationSchema = z
    .object({
      email: z.string().min(1, { message: "email is required" }),
      password: z.string().min(1, { message: "password is required" }),
      confirmPassword: z.string().min(1, { message: "confirm password is required" }),
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: signUpInput,
    resolver: zodResolver(validationSchema)
  })

  const { mutate: signUpMutation, loading: userUpdating } = useMutation<
    SignUpResponse,
    Record<string, never>,
    SignUpRequestBody
  >(authenticationApi.signUp, {
    onSuccess: ({ data }) => {
      success()
      reset()
    },
    onError(err) {
      console.error(err)
    },
  });

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Verification link is sent to your email account!! ',
    });
  };

  const onSave = (values: SignUpRequestBody) => {
    signUpMutation({ requestBody: values });
  }

  return (
    <>
    {contextHolder}
    <div
      className={`flex flex-row flex-wrap h-screen w-full bg-white`}
    >
      <div className='flex w-full lg:w-1/2 items-center bg-[#FFEB00]'>
        <div className='w-full p-10'>
          <div className='max-w-lg text-center mx-auto'>
            <img
              alt='welcome logo'
              className='w-full'
              src={imageRegistry.welcomeFacesImage}
            />
            <p className={`mt-12 mb-2 font-bold text-5xl`}>Welcome!</p>
            <p className={`mx-auto mb-8 text-xl`}>We are very happy to see you here!</p>
          </div>
        </div>
      </div>
      <div className={`flex w-full lg:w-1/2 flex-col justify-center items-center`}>
        <div className='w-full p-10'>
          <div className='max-w-sm mx-auto'>
            <p className={`mb-10 font-bold text-2xl px-1`}>Let&apos;s get you started</p>
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
                  placeholder="Enter strong password"
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
            <p className={`mt-4 mb-2 font-medium px-1`}>Confirm Password</p>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirm your password"
                  onChange={onChange}
                  className="w-full h-12"
                  value={value}
                  type='password'
                />
              )}
              name='confirmPassword'
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-2"> {errors.confirmPassword?.message}
              </p>
            )}
            <Button
              loading={userUpdating}
              onClick={handleSubmit(onSave)}
              size='large'
              type='primary'
              className='w-full mt-4'
            >
              <p className='inline-flex items-center'>
                <span>Sign Up</span>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
})