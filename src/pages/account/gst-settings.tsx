import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select } from 'antd';
import { DateTime } from 'luxon';
import { observer } from 'mobx-react-lite';
import { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useImmer } from 'use-immer';
import { z } from 'zod';
import {  useQuery } from '../../utils/api-hook';
import { useStores } from '../../utils/use-stores';

interface Props {
  rightColumnOpen: boolean;
  toggleRightColumn: (open: boolean) => void
}

export const GstSettings: FC<Props> = observer(({ rightColumnOpen, toggleRightColumn }) => {

  return (
  <></>
  )
})

const GstSettingMutation: FC<{ gst?: any, onSuccess: (gst: any) => void }> = ({
  gst,
  onSuccess
}) => {


  return (
  <></>
  )
}