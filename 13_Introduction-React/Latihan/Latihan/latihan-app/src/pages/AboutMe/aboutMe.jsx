import React from "react";
import { Link, useParams } from "react-router-dom";
import { USERS_DATA } from "./constants";
import "./aboutme.css";
const AboutMe = () => {
  const { id } = useParams();

  const data = id ? USERS_DATA.filter((item) => item.id === id) : USERS_DATA;

  return (
    <div>
      <h1>About Me</h1>
      {data.map((user) => (
        <div key={user.id} className="card">
          <Link to={user.id}>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.hobby}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
