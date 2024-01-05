import { observer } from 'mobx-react-lite';
import { FC } from 'react';

interface Props {
  rightColumnOpen: boolean;
  toggleRightColumn: (open: boolean) => void
}
export const Locations: FC<Props> = observer(({ rightColumnOpen, toggleRightColumn }) => {

  return (
    <></>
  )
})
