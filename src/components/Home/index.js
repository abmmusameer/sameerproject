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
        if (typeof fields["name"] === 'undefined') {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }
        else
        {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }            
        }
        //
        // if(!fields["personAge"]){
        //     formIsValid = false;
        //     errors["personAge"] = "Cannot be empty";
        // }else{
        //     if(!)
        // }
         

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        
        debugger
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && 
            lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not";
            } 
        }



        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            // alert("Form submitted");
        } else {
            // alert("Form has errors.")
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
                        <form onSubmit={this.contactSubmit.bind(this)}>
                           <div className="wid100">
                            <label>
                                <span className="label">Name</span>
                                        <input type="text" className="inputfield" ref="name" 
                                        onChange={this.handleChange.bind(this, "name")} 
                                        value={this.state.fields["name"]}/>
                                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                            </label>
                            </div>
                            <div className="wid100">
                            <label>
                                <span className="label">Age</span>
                                        <input type="text" className="inputfield" ref="email" 
                                            value={this.state.fields["email"]}
                                            onChange={this.handleChange.bind(this, "email")}/>
                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                            </label>
                            </div>
                            <div className="wid100">
                                <label>
                                    <span className="label">Earning Status</span>                                                                        
                                    <select ref="earningStatus" 
                                    value={this.state.fields["earningStatus"]}
                                    onChange={this.handleChange.bind(this, "earningStatus")} 
                                    className="inputfield">
                                    <option value="Salaried">Salaried</option>
                                    <option value="Self employed">Self Employed</option>
                                    <option value="Not working">Not Working</option>
                                    </select>
                                    <span style={{ color: "red" }}>{this.state.errors["earningStatus"]}</span>
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
