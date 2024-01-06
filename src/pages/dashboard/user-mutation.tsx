import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import {addUserInput} from "../auth/auth.const"
import { useMutation } from '../../utils/api-hook';
import { DashUser, userApi } from '../../services/api/user-api';
import { useStores } from '../../utils/use-stores';
import { User } from '../../models/user/user';

interface Props {
  user?: User
  rightColumnOpen: boolean;
  toggleRightColumn: (open: boolean) => void;
}

export const UserMutaion: FC<Props> = observer(({ rightColumnOpen, toggleRightColumn, user }) => {

  const handleOnSuccess = () => {
    toggleRightColumn(false);
  }

  return (
      <div className={`
      fixed inset-y-0 right-0 w-[380px] border-r border-r-contrast-10 bg-white z-20 pt-20 hidden md:block overflow-y-auto transform transition-transform duration-300 px-10 mt-5
      ${rightColumnOpen ? 'translate-x-0' : 'translate-x-[420px]'}
      `}>
        <div className='flex flex-row items-center'>
          <div className='w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center'>
            <i className='icon-OrganizationMajor' />
          </div>
          <p className='leading-tight ml-2 flex flex-col flex-1'>
            <span className={`${user?._id && 'text-lg opacity-60'} font-medium`}>{user?._id ? "Edit User" : "Add User"}</span>
            {user?.email && <span className='font-semibold'>{user?.email}</span>}
          </p>
          <Button onClick={() => rightColumnOpen && toggleRightColumn(false)} shape='circle' icon={<i className='icon-CancelMajor' />} />
        </div>
        <UserMutation key={user?._id} user={user} onSuccess={handleOnSuccess} />
      </div>
  )
})

const UserMutation: FC<{ user?: User, onSuccess: (open: boolean) => void }> = ({
  user,
  onSuccess
}) => {
  const {
    userStore: { updateUser },
  } = useStores();
  const schema = z.object({
    name: z.string().min(1),
    designation: z.string().min(1, { message: "Please enter designation" }),
    address: z.object({
        localityLine: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        pinCode: z.string().min(6).max(6),
      }),
  });

  const { control, reset, handleSubmit, getValues } = useForm({
    defaultValues: {
      ...addUserInput,
      ...user as User
    },
    resolver: zodResolver(schema)
  });

  const { mutate: createDashUserMutation, loading: creating } = useMutation(userApi.addDashUser, {
    onSuccess: ({ data }) => {
      onSuccess(true);
      reset()
    }
  });

  const { mutate: updateUserMutation, loading: updating } = useMutation(userApi.updateAdminUser, {
    onSuccess: ({ data: {user, success} }) => {
      onSuccess(success)
      updateUser(user)
    }
  });

  const handleOnValid = () => {
    const values = getValues() ;
    if (user?._id) {
      updateUserMutation({
        pathParams: {id: user._id},
        requestBody: values,
      });
    } else {
      createDashUserMutation({
        requestBody: values as DashUser
      });
    }
  }
  useEffect(()=>{
    if(user?._id){
      reset(user)
    } else{
      reset()
    }
  },[user])

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <p className={`px-1 mb-1 font-medium mt-6 ${false && 'text-red-600'}`}>Your name*</p>
            <Input
              className='w-full'
              placeholder='Enter user name'
              value={value}
              onChange={onChange}
              status={error && "error"}
            />
          </>
        )}
        name={'name'}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <p className={`px-1 mb-1 font-medium mt-6 ${false && 'text-red-600'}`}>Designation*</p>
            <Input
              className='w-full'
              placeholder='Enter user name'
              value={value}
              onChange={onChange}
              status={error && "error"}
            />
          </>
        )}
        name={'designation'}
      />
          <p className={`px-1 mb-1 font-medium mt-6 opacity-60`}>Address</p>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <p className={`px-1 mb-1 mt-4 ${error && 'text-red-600'}`}>Address line*</p>
                <Input.TextArea
                  autoSize={{ minRows: 1 }}
                  className='w-full'
                  onChange={onChange}
                  value={value}
                  status={error && "error"}
                />
              </>
            )}
            name={'address.localityLine'}
          />
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <p className={`px-1 mb-1 mt-2 ${error && 'text-red-600'}`}>City*</p>
                <Input
                      className='w-full'
                      onChange={onChange}
                      value={value}
                      status={error && "error"}
                    />

              </>
            )}
            name={'address.city'}
          />
          <div className='flex flex-row'>
            <div className='w-3/5 pr-2'>
              <Controller
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <>
                    <p className={`px-1 mb-1 mt-2 ${error && 'text-red-600'}`}>State*</p>
                    <Input
                      className='w-full'
                      onChange={onChange}
                      value={value}
                      status={error && "error"}
                    />
                  </>
                )}
                name={'address.state'}
              />
            </div>
            <div className='w-2/5'>
              <Controller
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <>
                    <p className={`px-1 mb-1 mt-2 ${error && 'text-red-600'}`}>Pincode*</p>
                    <Input
                      className='w-full'
                      onChange={onChange}
                      value={value}
                      status={error && "error"}
                    />
                  </>
                )}
                name={'address.pinCode'}
              />
            </div>
          </div>

        <div className='flex mt-10'>
          <div className='flex flex-1 pl-1'>
            <Button
              type='primary'
              className='w-full'
              loading={creating || updating}
              onClick={handleSubmit(handleOnValid, (err) => console.error(err))}
            >{user?.email ? 'Update' : 'Save'}</Button>
          </div>
        </div>
    </>
  )
}