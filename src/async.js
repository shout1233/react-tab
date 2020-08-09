import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function Async() {
  const [list, setList] = useState(null);
  const [user, setUser] = useState("");

  const getList = useCallback(function () {
    return axios.get("http://jsonplaceholder.typicode.com/todos");
  }, []);

  const getUser = useCallback(function () {
    return axios.get("http://jsonplaceholder.typicode.com/users/1");
  }, []);

  const fetchData = useCallback(
    async function () {
      const userData = await getUser();
      console.log("user api 호출 완료");

      if (userData?.data?.id === 1) {
        setUser(userData.data.name);
        const tempData = await getList();
        console.log("todo api 호출 완료");

        if (tempData?.data) {
          setList(tempData.data);
        }
      }

      console.log("async/await 로 인해 동기식으로 실행된다.");
    },
    [getList, getUser]
  );

  useEffect(() => {
    fetchData();
    console.log("여긴 async 밖이니 먼저 찍힐 수 있는 로그");
  }, [fetchData]);

  return (
    <div>
      <h1>{user}</h1>
      <ul>
        {list && list.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}
