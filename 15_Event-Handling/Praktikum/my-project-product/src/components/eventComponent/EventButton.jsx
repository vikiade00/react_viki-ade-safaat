import { Button } from "antd";
import React from "react";
import "./eventButton.css";

export default function EventButton() {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  };

  return (
    <div>
      <Button className="event-button" onClick={handleClick}>
        Event Handling Button
      </Button>
    </div>
  );
}
