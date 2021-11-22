import React, { useState, useEffect } from 'react';
import styles from './index.less';
import request from 'umi-request';
import { Button } from 'antd';

interface Data {
  [propName: string]: any;
}

export default function IndexPage() {
  const [data, setData] = useState({
    status: '',
    list: [1, 2, 3],
    message: '',
  });
  const [countList, setCountList] = useState([1, 2, 3]);
  function addList() {
    console.log(data);

    let a = JSON.parse(JSON.stringify(data.list));
    console.log(a);

    a[1] = a[1] + 1;
    console.log({
      ...data,
      list: a,
    });
    setData({
      ...data,
      list: a,
    });
  }
  function addCount() {
    let a = JSON.parse(JSON.stringify(countList));
    a[1] = a[1] + 1;
    console.log(countList, a);
    setCountList(a);
  }
  useEffect(() => {
    request
      .get(' https://dog.ceo/api/breeds/image/random', {
        params: {
          number: 1,
        },
      })
      .then((res) => {
        console.log(res);
        // let arr = [1, 2, 3];
        // if (data.list[1] === 2) {
        // arr[1] = data.list[1];
        res.list = data.list;
        // } else {
        //   res = {...res, list:data.list}
        // }
        setData(res);
      });
  }, data.list);
  return (
    <div>
      <h1 className={styles.title}>Page about</h1>
      <p>111{data.status}</p>
      {/* <img src={data.message} alt="" /> */}
      <Button onClick={addList}>addList+</Button>
      <Button onClick={addCount}>addCount+</Button>
      <Counts countList={countList}></Counts>
    </div>
  );
}

function Counts(props: Data) {
  useEffect(() => {
    console.log('Counts', props.countList);
  }, [props.countList]);
  console.log(props);
  return (
    <>
      <h1 className={styles.title}>Counts Component</h1>
      <h2>Counts List{props.countList[1]}</h2>
    </>
  );
}
