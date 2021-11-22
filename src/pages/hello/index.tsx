import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import request from 'umi-request';
import { Link, useModel } from 'umi';


import styles from './index.less';
interface IUser {
  id: number;
  name: string;
}

const HelloPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [mockUsers, setMockUsers] = useState<IUser[]>([]);
  const { initialState } = useModel('@@initialState');

  const getData = () => {
    request('/get/users')
      .then((res) => {
        setUsers(res);
      });
    request('/api/users/1')
      .then((res) => {
        console.log(res.list);
        setMockUsers(res.list);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page Hello {initialState?.username}</h1>
      <p>使用proxy api 获取的数据</p>
      <ul>
        {users.map((user: IUser) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
      <p>使用mock api 获取的数据</p>
      <ul>
        {mockUsers.map((user: IUser) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
      <br />
      <Link to="/">Go to Home!</Link>
    </div>
  );
}

export default HelloPage
