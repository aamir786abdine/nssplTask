import React from "react";
import auth from "../services/authService";

function Profile(props) {
  let { users } = props;
  let user = auth.getUser();
  let user1 = users.find((u1) => u1.username === user.username);

  return (
    <div className="container">
      <div className="row my-4 py-3 bg-light">
        <div className="col-4">
          <label>First Name : {user1.firstName}</label>
          <br />
          <label>Last Name : {user1.lastName}</label>
        </div>
        <div className="col-8">
          <img src={user1.img} style={{ height: "200px" }} />{" "}
        </div>
      </div>
    </div>
  );
}
export default Profile;
