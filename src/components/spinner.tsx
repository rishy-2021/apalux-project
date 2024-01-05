import React, { FC } from 'react';

interface Props {
  size: number;
  color?: string
}
export const Spinner: FC<Props> = ({ size, color }) => {
  return (
    <span className='inline'>
      <svg className='inline' xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke={color || "#000"} stroke-width="13" r="38" stroke-dasharray="179.0707812546182 61.690260418206066">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.819672131147541s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </span>
  )
}