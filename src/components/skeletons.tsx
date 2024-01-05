import { Skeleton as AntSkeleton, Col, Row } from 'antd';
import React, { FC } from "react";

interface SkeletonProps {
  loading: boolean
  avatar?: boolean
}

const Collection: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }
  return (
    <>
      {[0, 1, 2, 3, 4].map((_, index) =>
        <div className='rounded-lg bg-contrast-5 p-2 mb-2' key={index}>
          <AntSkeleton
            title
            avatar={{ shape: "circle", size: "large" }}
            paragraph={false}
            active
          />
        </div>
      )}
    </>
  )
}

const OrderDetails: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <Row gutter={[4, 4]} className='mt-6'>
        <Col span={24} xl={12}>
          <div className='bg-white p-6 rounded-xl h-full shadow ml-8'>
            <AntSkeleton active />
          </div>
        </Col>
        <Col span={24} xl={12}>
          <div className='bg-white p-6 rounded-xl h-full shadow'>
            <AntSkeleton active />
          </div>
        </Col>
      </Row>
      <div className='bg-white p-6 rounded-xl h-full shadow ml-8 mt-6'>
        <AntSkeleton active />
      </div>
    </>
  )
}

const Contact: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <Row gutter={[4, 4]} className='mt-6'>
        <Col span={24} xl={12}>
          <div className='bg-white p-6 rounded-xl h-full shadow'>
            <AntSkeleton active />
          </div>
        </Col>
        <Col span={24} xl={12}>
          <div className='bg-white p-6 rounded-xl h-full shadow'>
            <AntSkeleton active />
          </div>
        </Col>
      </Row>
      <div className='bg-white p-6 rounded-xl h-full shadow mt-6'>
        <AntSkeleton active />
      </div>
    </>
  )
}

const Table: FC<SkeletonProps> = ({ loading, avatar }) => {
  if (!loading) {
    return null
  }

  return (
    <table className='w-full border-collapse border-spacing-0 mt-2'>
      <thead className='bg-contrast-5 text-left'>
        <tr>
          <th className='py-3 px-4'>
            <div className='inline-block rounded-md overflow-hidden'>
              <AntSkeleton.Avatar style={{ height: 18, width: 18 }} shape='square' active size='small' />
            </div>
          </th>
          {avatar && <th></th>}
          <th className='p-3 w-3/5'><AntSkeleton.Input style={{ height: 14, minWidth: 300 }} active size='small' /></th>
          <th className='py-3 px-6'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></th>
          <th className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></th>
          <th className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></th>
          <th className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></th>
        </tr>
      </thead>
      <tbody>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <tr className='text-left border-t border-t-contrast-8' key={index}>
            <td className='py-3 px-4'>
              <div className='inline-block rounded-md overflow-hidden'>
                <AntSkeleton.Avatar style={{ height: 18, width: 18 }} shape='square' active size='small' />
              </div>
            </td>
            {avatar && <td className='py-2'>
              <div className='inline-block rounded-lg overflow-hidden'>
                <AntSkeleton.Avatar shape='square' active size='large' />
              </div>
            </td>}
            <td className='p-3'><AntSkeleton.Input style={{ height: 14, minWidth: 300 }} active size='small' /></td>
            <td className='py-3 px-6'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></td>
            <td className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></td>
            <td className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></td>
            <td className='p-3'><AntSkeleton.Input style={{ height: 14 }} active size='small' /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const InventoryList: FC<SkeletonProps> = ({ loading, avatar }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 8].map((_, index) => (
        <div className={`my-2 flex flex-row items-center py-2.5 px-2 rounded-lg top-14 z-10 bg-white shadow`} key={index}>
          <div className='rounded-lg overflow-hidden'>
            <AntSkeleton.Avatar size="large" shape='square' />
          </div>
          <div className='mx-3 flex flex-1'>
            <AntSkeleton.Input style={{ height: 14, minWidth: 140 }} active />
          </div>
          <div className='text-right'>
            <AntSkeleton.Input style={{ height: 14, minWidth: 80 }} active />
          </div>
        </div>
      ))}
    </>
  )
}

const ModifyInventory: FC<SkeletonProps> = ({ loading, avatar }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      {[0, 1, 2, 3].map((_, index) => (
        <div className='flex flex-row items-center px-5 py-1 my-2 bg-contrast-3 rounded-xl' key={index}>
          <AntSkeleton.Avatar active shape="circle" />
          <AntSkeleton.Input className='ml-2' active size='small' />
        </div>
      ))}
    </>
  )
}

const Product: FC<SkeletonProps> = ({ loading, avatar }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <div className='flex flex-row flex-wrap mt-6 bg-white p-2 rounded-xl shadow'>
        {[0, 1, 2].map((image, index) => (
          <div className='p-0.5' key={index}>
            <AntSkeleton.Image active className='opacity-80' />
          </div>
        ))}
      </div>
      <div className='bg-white p-6 rounded-xl h-full shadow mt-6'>
        <AntSkeleton active />
      </div>
    </>
  )
}

const InvoiceDetails: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <div className='bg-white p-6 rounded-xl h-full shadow mt-6'>
        <AntSkeleton active />
      </div>
    </>
  )
}

const PaymentDetails: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <div className='px-8 max-w-7xl mx-auto'>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <Row className='bg-white rounded-xl shadow mt-6'>
        <Col span={24} md={16} className='min-h-[600px] border-r-4 border-r-contrast-5 p-10'>
          <AntSkeleton active />
        </Col>
        <Col span={24} md={8} className='py-10 px-6'>
          <AntSkeleton active />
        </Col>
      </Row>
    </div>
  )
}

const OnlineStore: FC<SkeletonProps> = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <>
      <AntSkeleton.Button className='w-12' />
      <AntSkeleton.Button className='w-12 ml-2' active />
      <div className='bg-white p-6 mt-6 rounded-xl h-full shadow'>
        <div className='flex flex-row '>
          <AntSkeleton.Image style={{ width: 200, height: 200 }} />
          <div className='pl-6 flex flex-1'>
            <AntSkeleton active />
          </div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-xl h-full shadow mt-6'>
        <AntSkeleton active />
      </div>
    </>
  )
}

export const Skeleton = {
  Collection,
  OrderDetails,
  Contact,
  Table,
  InventoryList,
  ModifyInventory,
  Product,
  InvoiceDetails,
  PaymentDetails,
  OnlineStore
}