import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  editEmp = (id) => {
    this.props.history.push(`/edit/emp/${id}`);
  };

  render() {
    let { emps } = this.props;
    if (emps.length === 0) return "";
    return (
      <div className="container py-3">
        <h4>All Employees</h4>
        <div className="row border-top h6 py-2 fw-bold">
          <div className="col-2">Id</div>
          <div className="col-3">Name/Login</div>
          <div className="col-3">Type</div>
          <div className="col-2">Image</div>
          <div className="col-2"></div>
        </div>
        {emps.map((ele, index) => (
          <div
            className={
              index % 2 === 0
                ? "row border-top border-bottom h6 py-3 bg-light"
                : "row h6 py-2"
            }
            key={index}
          >
            <div className="col-2">{ele.id}</div>
            <div className="col-3">
              <Link to={"/emp/" + ele.id}> {ele.login} </Link>
            </div>
            <div className="col-3">{ele.type}</div>
            <div className="col-2">
              <img
                src={ele.avatar_url}
                style={{ height: "50px", width: "50px", borderRadius: "20px" }}
              />
            </div>
            <div className="col-2">
              <i
                className="fas fa-edit"
                onClick={() => this.editEmp(ele.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
