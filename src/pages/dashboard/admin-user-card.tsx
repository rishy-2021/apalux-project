import React from "react";
import { Button } from "antd";
import { FC } from "react";
import { User } from "../../models/user/user";

interface Props {
  user: User;
  OnClick: (open: boolean, user: User) => void;
}

export const AdminUserCard: FC<Props> = ({ user, OnClick }) => {
  return (
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
          onClick={() => OnClick(true, user)}
        >
          <span className="font-bold">Edit</span>
          <i className="icon-EditMinor ml-2" />
        </Button>
        <Button

          shape="default"
          size="middle"
          type='dashed'
          onClick={() => {window.open('mailto:riteshpuwar2001@gmail.com?subject=Subject&body=Body%20goes%20here')
        }}
        >
          <span className="font-bold">Mail</span>
          <i className="icon-ArrowRightMinor ml-2" />
        </Button>
      </div>
    </div>
  );
};
