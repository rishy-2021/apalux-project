import React from "react";
import { Avatar, Button, Card, Empty } from "antd";
import { FC, useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import userImage from "../../assets/images/user.png";
import { UserMutaion } from "./user-mutation";
import { useMutation, useQuery } from "../../utils/api-hook";
import { DashUser, userApi } from "../../services/api/user-api";
import { User } from "../../models/user/user";
import { useStores } from "../../utils/use-stores";

export const DashBoard: FC = () => {
  const {
    userStore: { user },
  } = useStores();

  const [rightColumn, setRightColumn] = useState<{
    open: boolean;
    user?: User;
  }>({ open: false });
  const [users, setUsers] = useState<DashUser[]>([]);

  const { query: getDashUsersQuery } = useQuery(userApi.getDashUsers, {
    onSuccess: ({ data }) => {
      setUsers(data);
    },
  });

  const { mutate: getDashUserDelete } = useMutation(userApi.deleteDashUser, {
    onSuccess: ({ data }) => {
      getDashUsersQuery()
    },
  });

  const deleteUser = (id: string) => {
    getDashUserDelete({
      pathParams:{
        id: id
      }
    })
  }

  console.log(rightColumn);

  useEffect(() => {
    getDashUsersQuery();
  }, [rightColumn]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div
        className={`flex min-h-screen bg-contrast-5 ${
          rightColumn.open && "pr-[380px]"
        } transition-all pt-20 px-20 mt-10`}
      >
        <div className="flex-1 flex flex-col mr-5 bg-red-100 h-fit	bg-white rounded-xl px-3 py-5">
          <div className="flex flex-row items-start justify-between px-5 mb-5">
            <p className="text-2xl font-bold">Users</p>
            <Button
              shape="round"
              size="middle"
              type="default"
              onClick={() => {
                setRightColumn({ open: true });
              }}
            >
              <span className="font-bold">Add</span>
              <i className="icon-PlusMinor ml-1" />
            </Button>
          </div>
          {users.length ? (
            <div className="flex flex-wrap ">
              {users.map(({_id, name, designation }, idx) => (
                <Card
                  key={idx}
                  style={{ width: 285, margin: "0px auto", marginBottom: 10 }}
                  cover={
                    <img
                      alt="example"
                      src={
                        "https://images.pexels.com/photos/5967931/pexels-photo-5967931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                    />
                  }
                  actions={[<DeleteOutlined key="setting" onClick={()=>deleteUser(_id)}/>]}
                >
                  <div className="flex flex-row -m-3">
                    <Avatar
                      src={userImage}
                      className="border border-gray-300	"
                      size={45}
                    />
                    <div className="flex flex-col flex-1 ml-1.5">
                      <p className="text-gray-700 text-lg font-normal">
                        {name}
                      </p>
                      <p className="text-gray-600 text-md font-normal -mt-1">
                        {designation}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="h-96 w-full flex justify-center items-center">
              <Empty description={"No users found"} />
            </div>
          )}
        </div>
        <div className={`${rightColumn.open && "mr-5"}`}>
          <div className="bg-slate-50 flex w-full min-w-[450px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] rounded-2xl pb-10">
            <div
              className="relative mt-1 flex h-40 w-full justify-center rounded-xl bg-cover"
              style={{
                backgroundImage: `url('https://i.ibb.co/FWggPq1/banner.png')`,
              }}
            >
              <div className="absolute -bottom-20 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                <img
                  className="h-full w-full rounded-full"
                  src="https://i.ibb.co/6YbS9ff/avatar11.png"
                  alt=""
                />
              </div>
            </div>
            {user.name ? (
              <div className=" flex flex-col items-center pt-5">
                <h4 className="text-2xl font-bold">{user?.name}</h4>
                <p className="text-gray-700 text-lg font-normal mt-3">
                  {user?.designation}
                </p>
                <p className="text-gray-600 text-lg font-normal">{`${user.address?.localityLine} ${user.address?.city} ${user.address?.state}`}</p>
                <div className="flex flex-row mt-4 justify-between">
                  <Button
                    shape="default"
                    size="middle"
                    type="primary"
                    className="mr-3"
                    onClick={() => {
                      setRightColumn({ open: true, user: user });
                    }}
                  >
                    <span className="font-bold">Edit</span>
                    <i className="icon-EditMinor ml-2" />
                  </Button>
                  <Button
                    shape="default"
                    size="middle"
                    type="primary"
                    onClick={() => {}}
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
                  onClick={() => {
                    setRightColumn({ open: true, user: user });
                  }}
                  type="primary"
                >
                  Add Now
                </Button>
              </Empty>
            )}
          </div>
        </div>
        <UserMutaion
          user={rightColumn?.user}
          rightColumnOpen={rightColumn.open}
          toggleRightColumn={(open) => setRightColumn({ open })}
        />
      </div>
    </>
  );
};
