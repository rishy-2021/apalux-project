import React from "react";
import { Button, Empty } from "antd";
import { FC } from "react";
import { User } from "../../models/user/user";

interface Props {
  user: User;
  onClick: (open: boolean, user: User) => void;
}

export const AdminUserCard: FC<Props> = ({ user, onClick }) => {
  return (

    <div className="flex w-full min-w-[450px] flex-col items-center bg-red-100 bg-cover bg-clip-border p-[16px] rounded-2xl pb-5">
      <div
        className="relative mt-1 flex h-40 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: `url('https://i.ibb.co/FWggPq1/banner.png')`,
        }}
      >
        <div className="absolute -bottom-20 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img
            className="h-full w-full rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
      {user.name ? (
        <div className=" flex flex-col items-center mt-20 mb-1 pt-2">
          <h4 className="text-2xl font-bold">{user?.name}</h4>
          <p className="text-gray-800 text-lg font-normal mt-3">
            {user?.designation}
          </p>
          <p className="text-gray-500 text-lg font-normal">{`${user.address?.localityLine}, ${user.address?.city}, ${user.address?.state}`}</p>
          <p className="text-gray-500 text-lg font-normal">{`${user.address?.pinCode}`}</p>
          <div className="flex flex-row mt-4 justify-between">
            <Button
              shape="default"
              size="middle"
              type="primary"
              className="mr-3"
              onClick={() => onClick(true, user)}
            >
              <span className="font-bold">Edit</span>
              <i className="icon-EditMinor ml-2" />
            </Button>
            <Button

              shape="default"
              size="middle"
              type='dashed'
              onClick={() => {
                window.open('mailto:riteshpuwar2001@gmail.com?subject=Subject&body=Body%20goes%20here')
              }}
            >
              <span className="font-bold">Mail</span>
              <i className="icon-ArrowRightMinor ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={<span>No details found</span>}
          className="flex items-center flex-col mt-24"
        >
          <Button
            onClick={() => onClick(true, user)}
            type="primary"
          >
            Add Now
          </Button>
        </Empty>
      )}
    </div>
  );
};
