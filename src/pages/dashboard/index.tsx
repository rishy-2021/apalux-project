import React from "react";
import { Button, Empty } from "antd";
import { FC, useEffect, useState } from "react";
import { RightColumn } from "./right-column";
import { useQuery } from "../../utils/api-hook";
import { DashUser, userApi } from "../../services/api/user-api";
import { User } from "../../models/user/user";
import { useStores } from "../../utils/use-stores";
import { DashUserCard } from "./dash-user-card";
import { AdminUserCard } from "./admin-user-card";

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
        <div className="flex-1 flex flex-col mr-5 h-fit	bg-white rounded-xl px-3 py-5">
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
            <div className="flex flex-wrap">
              {users.map((user, idx) => (
                <DashUserCard
                  key={idx}
                  user={user}
                  onSuccess={() => {
                    getDashUsersQuery();
                  }}
                  length={users?.length}
                />
              ))}
            </div>
          ) : (
            <div className="h-96 w-full flex justify-center items-center">
              <Empty description={"No users found"} />
            </div>
          )}
        </div>
        <div className={`${rightColumn.open && "mr-5"}`}>
        <AdminUserCard
                user={user}
                onClick={(open, user) =>
                  setRightColumn({ open: open, user: user })
                }
              />
        </div>
        <RightColumn
          user={rightColumn?.user}
          rightColumnOpen={rightColumn.open}
          toggleRightColumn={(open) => setRightColumn({ open })}
        />
      </div>
    </>
  );
};
