import React from "react";
import { Avatar, Card } from "antd";
import { FC } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import userImage from "../../assets/images/user.png";
import { useMutation } from "../../utils/api-hook";
import { DashUser, userApi } from "../../services/api/user-api";

interface Props {
  user: DashUser;
  length: number;
  onSuccess: () => void;
}

export const DashUserCard: FC<Props> = ({ user, onSuccess, length }) => {
  const { _id, name, designation } = user;

  const { mutate: getDashUserDelete } = useMutation(userApi.deleteDashUser, {
    onSuccess: ({ data }) => {
      onSuccess();
    },
  });

  const deleteUser = (id: string) => {
    getDashUserDelete({
      pathParams: {
        id: id,
      },
    });
  };

  return (
    <Card
      style={{
        width: 285,
        margin: length > 3 ? "0px auto" : "10px",
        marginBottom: 10,
      }}
      cover={
        <img
          alt="example"
          src={
            "https://images.pexels.com/photos/5967931/pexels-photo-5967931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      }
      actions={[
        <DeleteOutlined key="setting" onClick={() => deleteUser(_id)} />,
      ]}
    >
      <div className="flex flex-row -m-3">
        <Avatar src={userImage} className="border border-gray-300	" size={45} />
        <div className="flex flex-col flex-1 ml-1.5">
          <p className="text-gray-700 text-lg font-normal">{name}</p>
          <p className="text-gray-600 text-md font-normal -mt-1">
            {designation}
          </p>
        </div>
      </div>
    </Card>
  );
};
