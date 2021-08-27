import React, { Component } from "react";

class AddEmpForm extends Component {
  state = {
    form: { id: "", login: "", type: "", site_admin: null, avatar_url: "" },
  };

  handleChange = (e) => {
    let { currentTarget: input } = e;
    console.log(input);
    let s1 = { ...this.state };
    s1.form[input.name] = input.value;
    this.setState(s1);
  };

  componentDidMount() {
    let { Pid } = this.props.match.params;
    if (Pid) {
      console.log("Props Emps", this.props.emps);
      let emp = this.props.emps.find((e1) => e1.id == +Pid);
      this.setState({ form: emp });
    }
  }

  makeTextField = (label, name, val, pHolder) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          name={name}
          value={val}
          placeholder={pHolder}
          type="text"
          className="form-control"
          onChange={this.handleChange}
        />
      </div>
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { Pid } = this.props.match.params;
    let { form } = this.state;
    this.props.onSubmit(form, Pid);
    alert(Pid ? "Updated Successfully" : "Employee added successfully");
    this.props.history.push("/home");
  };

  render() {
    let { id, login, type, site_admin, avatar_url } = this.state.form;
    let { Pid } = this.props.match.params;

    return (
      <div className="container">
        <h4>{Pid ? "Edit Employee" : "Add New Employee"}</h4>
        {this.makeTextField("Id", "id", id, "Enter Id")}
        {this.makeTextField("Name/Login", "login", login, "Enter Name/Login")}
        {this.makeTextField("Type", "type", type, "Enter Type")}
        {this.makeTextField("URL", "avatar_url", avatar_url, "Enter Image url")}
        <div className="mb-3">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            {Pid ? "Update Employee" : "Add Employee"}
          </button>
        </div>
      </div>
    );
  }
}
export default AddEmpForm;
