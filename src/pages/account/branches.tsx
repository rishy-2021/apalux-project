import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation, useQuery } from '../../utils/api-hook';
import { useStores } from '../../utils/use-stores';

interface Props {
  rightColumnOpen: boolean;
  toggleRightColumn: (open: boolean) => void
}

export const Branches: FC<Props> = observer(({ rightColumnOpen, toggleRightColumn }) => {

  return (
    <>
      <div className='px-6 font-normal pb-4'>
        <div className='flex flex-row justify-between items-center'>
          <p className='font-medium px-1'>Branches</p>
          <Button
            onClick={() => {}}>Add branch</Button>
        </div>
      </div>
      <div className={`
      fixed inset-y-0 right-0 w-[380px] border-r border-r-contrast-10 bg-white z-20 pt-20 hidden md:block overflow-y-auto transform transition-transform duration-300 px-10
      ${rightColumnOpen ? 'translate-x-0' : 'translate-x-[420px]'}
      `}>
        <div className='flex flex-row items-center'>
          <div className='w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center'>
            <i className='icon-OrganizationMajor' />
          </div>
          <p className='leading-tight ml-2 flex flex-col flex-1'>
            {/* <span className={`${selectedBranch?.id && 'text-sm opacity-60'} font-medium`}>{selectedBranch?.id ? "Edit Branch" : "Add Branch"}</span>
            {selectedBranch?.name && <span className='font-semibold'>{selectedBranch.name}</span>} */}
          </p>
          <Button onClick={() => rightColumnOpen && toggleRightColumn(false)} shape='circle' icon={<i className='icon-CancelMajor' />} />
        </div>
      </div>
    </>
  )
})
