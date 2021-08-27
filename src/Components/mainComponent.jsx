import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import auth from "../services/authService";
import NavBar from "./navBar";
import AddEmpForm from "./addEmpForm";
import Home from "./home";
import Login from "./login";
import Logout from "./logout";
import Profile from "./profile";
import EmpInfo from "./empInfo";

class MainComponent extends Component {
  state = {
    emps: [],
    users: [
      {
        username: "jack",
        password: "jack123",
        img: "https://avatars.githubusercontent.com/u/1?v=4",
        firstName: "Jack",
        lastName: "Reacher",
      },
      {
        username: "william",
        password: "william123",
        img: "https://avatars.githubusercontent.com/u/3?v=4",
        firstName: "William",
        lastName: "Robert",
      },
    ],
  };

  async fetchData() {
    try {
      let response = await axios.get("https://api.github.com/users");
      console.log(response);
      let { data } = response;
      this.setState({
        emps: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  handleAddEmp = (emp, Pid) => {
    let { emps } = this.state;
    if (Pid) {
      let index = emps.findIndex((e1) => e1.id === +Pid);
      emps[index] = { ...emps[index], emp };
    } else emps.push(emp);
    this.setState({ emps: emps });
  };

  render() {
    let { emps, users } = this.state;
    let user = auth.getUser();
    return (
      <div className="contianer-fluid">
        <NavBar />
        <Switch>
          <Route
            path="/edit/emp/:Pid"
            render={(props) =>
              user ? (
                <AddEmpForm
                  {...props}
                  onSubmit={this.handleAddEmp}
                  emps={emps}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/emp/:id"
            render={(props) => <EmpInfo {...props} emps={emps} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} emps={emps} />}
          />
          <Route
            path="/profile"
            render={(props) => <Profile {...props} users={users} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} users={users} />}
          />
          <Route path="/logout" render={(props) => <Logout {...props} />} />
          <Route
            path="/add/emp"
            render={(props) =>
              user ? (
                <AddEmpForm {...props} onSubmit={this.handleAddEmp} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
export default MainComponent;
