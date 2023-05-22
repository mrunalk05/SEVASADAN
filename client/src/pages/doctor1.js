import React from "react";
import { Card } from "antd";

const Doctor1 = ({ name, specialization, fee, address, website }) => {
  return (
    <Card title={name}>
      <p>Specialization: {specialization}</p>
      <p>Fee per Consultation: {fee}</p>
      <p>Address: {address}</p>
      <a href={website}>Website</a>
    </Card>
  );
};

export default Doctor1;
