import React, { useState, useEffect } from "react";
import axios from "axios";

function EmpInfo(props) {
  const [emp1, setEmp] = useState({});
  let { emps } = props;
  let { id } = props.match.params;

  let emp = emps.find((e1) => e1.id == id);

  useEffect(async () => {
    let response = await axios.get(emp.url);
    let { data } = response;
    setEmp(data);
  }, {});
  console.log(emp1);

  return (
    <div className="container">
      <div className="row my-4 py-3 px-2 bg-light">
        <div className="col-4">
          <label>Login : {emp1.login}</label>
          <br />
          <label>Name : {emp1.name}</label>
          <br />
          <label>Type : {emp1.type}</label>
          <br />
          <label>Location : {emp1.location}</label>
          <br />
          <label>Followers : {emp1.followers}</label>
          <br />
          <label>Comapany : {emp1.company}</label>
          <br />
          <label>Created At : {emp1.created_at}</label>
          <br />
        </div>
        <div className="col-8">
          <img src={emp.avatar_url} style={{ height: "200px" }} />{" "}
        </div>
      </div>
    </div>
  );
}
export default EmpInfo;
