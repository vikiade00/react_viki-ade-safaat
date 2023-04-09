import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { USERS_DATA } from "./constants";
import "./aboutme.css";
import { useGetUsers } from "./hooks/useUsersData";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const AboutMe = () => {
  const { id } = useParams();
  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();
  console.log(usersData);
  // const data = id ? USERS_DATA.filter((item) => item.id === id) : USERS_DATA;

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h1>About Me</h1>

      {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <div key={user.id} className="card">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
            <div>{user.address}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default AboutMe;
