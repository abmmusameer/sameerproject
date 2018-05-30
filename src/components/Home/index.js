import React, { Component } from 'react';
// import axios from 'axios';


import './style.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {}

            // personName: ' ',
            // personAge: ' ',
            // earningStatus: 'Salaried',
            // maritalStatus: 'Single',
            // location: 'Mumbai'
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //debugger;
        //Name       
        if (typeof fields["Name"] === 'undefined') {
            formIsValid = false;            
            errors["Name"] = "Cannot be empty";
            
        }
        else
        {
            if (!fields["Name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["Name"] = "Only letters";            
            }            
        }
        //personAge        
        if (typeof fields["Age"] === "undefined"){
            formIsValid = false;
            errors["Age"] = "Cannot be empty";            
        } else{           
            if (!fields["Age"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["Age"] = "Only Numbers";
            }
        }

        //earningStatus
        //debugger        
        if (!fields["workingStatus"] === "undefined"){
           formIsValid = false;
            errors["workingStatus"] = "Select Earning status";
       }

        if (!fields["maritalStatus"]) {
            formIsValid = false;
            errors["maritalStatus"] = "Select Marital Status";
        }

        if (!fields["location"]){
            formIsValid = false;
            errors["location"] = "Select location";
        }

    this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {            
            alert("");
        } else {
            alert("Form has errors.")
        }        
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

 
    render(){
        return(
            <section className="sectionWrapper">
                <div className="container">
                    <div className="heading">
                        <h1>A personalised money plan, that works for you.</h1>
                    </div>
                    <div className="maininnerWrap">
                        <div className="personPanel"></div>
                        <div className="formPanel">
                        <form onSubmit={this.contactSubmit.bind(this)} id="form">
                           <div className="wid100">
                            <label>
                                <span className="label">Name</span>
                                        <input type="text" className="inputfield" ref="Name" 
                                            onChange={this.handleChange.bind(this, "Name")} 
                                            value={this.state.fields["Name"]}/>
                                        <span style={{ color: "red" }}>{this.state.errors["Name"]}</span>
                            </label>
                            </div>
                            <div className="wid100">
                            <label>
                                <span className="label">Age</span>
                                        <input type="text" className="inputfield" ref="Age" 
                                            value={this.state.fields["Age"]}
                                            onChange={this.handleChange.bind(this, "Age")}/>
                                        <span style={{ color: "red" }}>{this.state.errors["Age"]}</span>
                            </label>
                            </div>
                            <div className="wid100">
                                <label>
                                    <span className="label">Earning Status</span>                                                                        
                                        <select ref="workingStatus" 
                                            value={this.state.fields["workingStatus"]}
                                            onChange={this.handleChange.bind(this, "workingStatus")} 
                                    className="inputfield">
                                    <option value="Salaried">Salaried</option>
                                    <option value="Self employed">Self Employed</option>
                                    <option value="Not working">Not Working</option>
                                    </select>
                                        <span style={{ color: "red" }}>{this.state.errors["workingStatus"]}</span>
                                </label>
                            </div>
                            <div className="wid100">
                                <label>
                                    <span className="label">Marital Status</span>
                                        <select ref="maritalStatus" 
                                        value={this.state.fields["maritalStatus"]}
                                        onChange={this.handleChange.bind(this, "maritalStatus")} 
                                        className="inputfield">
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>                                            
                                        </select>
                                        <span style={{ color: "red" }}>{this.state.errors["maritalStatus"]}</span>
                                </label>
                            </div>
                            <div className="wid100">
                                <label>
                                    <span className="label">Location</span>
                                        <select ref="location" value={this.state.fields["location"]}
                                        onChange={this.handleChange.bind(this, "location")} 
                                        className="inputfield">
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Thane">Thane</option>
                                    </select>
                                    <span style={{color:"red"}}>{this.state.errors["location"]}</span>
                                </label>
                            </div>
                                <button type="submit" className="btnSubmit" id="submit"
                                    value="Submit">SUBMIT</button>
                           </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
