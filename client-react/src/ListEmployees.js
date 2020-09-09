import React, { Component } from 'react';
import Cookies from 'js-cookie'
import {backendUrl} from './constants';
import './App.css';
import './ListEmployee.css';
import axios from 'axios';
import {
        Route,
        NavLink,
        HashRouter
      } from "react-router-dom";

/* Component to display employees of a company
*/
class ListEmployees extends Component{
    
    constructor(props) {
		super(props);
        //initialize state
		this.state = {employees: [], id:0,isHidden:false,avgSalary:0};
                 this.closeDiv =this.closeDiv.bind(this);
                this.openDiv =this.openDiv.bind(this);
	}

        // Call Rest API using Axios to get employees
        //Set Employee data to the component state 

        componentDidMount(){
                this.getEmployees(1);

        }

	
       

    render(){
    const {isHidden} = this.state;
        return(
        <div className="listEmployee">
            <div className="divTable">
            <div className="divRowHeader">
            <div className="divCellHeaderLeft">
                <div>
                                Employees of the Company {this.props.companyId}
                    </div>    
                   
                </div>    
                 <div className="divCellHeaderLeft">
                                Avg Salary: {this.state.avgSalary}
                    </div> 
                <div className="divCellHeaderRight">
                        <div className="openClose">
                        <a href="#" onClick={this.closeDiv}>(-)</a> &nbsp; &nbsp;    <a href="#" onClick={this.openDiv}>(+)</a>
                        </div>    
                </div> 
                </div>
            <div className="divRowHeader">
                    <div className="divCell">
                            ID   
                    </div>
                     <div className="divCellM">
                            First Name  
                    </div>   
                    <div className="divCellM">
                            Last Name   
                    </div>  
                    <div className="divCellM">
                            Email   
                    </div>  
                <div className="divCellM">
                            Address   
                    </div> 
                    <div className="divCell">
                            Salary   
                    </div>  
                    <div className="divCell">
                            Action   
                    </div> 
            </div>
             <div className={`div${isHidden ?'Hide':'Show'}` }>
            {this.state.employees.map(employee =>(
            <div className="divRow">
                    <div className="divCell">
                            {employee.id}   
                    </div>
                     <div className="divCellM">
                            {employee.name}   
                    </div>   
                    <div className="divCellM">
                            {employee.surname}   
                    </div>  
                    <div className="divCellM">
                            {employee.email}   
                    </div>  
                       <div className="divCellM">
                            {employee.address}   
                    </div>
                    <div className="divCell">
                            {employee.salary}   
                    </div> 
                    <div className="divCell">
                          <a href="#" onClick={(e) => this.deleteEmployee(employee.id,this.props.token, e)}>X</a>  
                          
                          <li><NavLink to={'/EditEmployee/'+employee.id}>Edit</NavLink></li>
                    </div> 
            </div>
           
            )//end loop
            )
            }
            </div>
        </div>
         </div>
        );
    }

 getEmployees(companyId){
         let headers = {headers:{AccessToken:Cookies.get('token')}};
    axios.get(`${backendUrl}/employeeByCompany/`+companyId, headers)
        .then( (response) => {
            console.log(response);
            this.setState({employees:response.data.data});
        })
        .catch(function (error) {
            console.log(error);
     }); 
     axios.get(`${backendUrl}/avgSalary/`+companyId, headers)
        .then( (response) => {
            console.log(response);
            this.setState({avgSalary:response.data.data});
        })
        .catch(function (error) {
            console.log(error);
     }); 
}
  openDiv(){
            this.setState({
                         isHidden: false
                 })
    }
    closeDiv(){
            this.setState({
                         isHidden: true
                })
    }
 deleteEmployee = (empId,token) => {
     let headers = {headers:{AccessToken:Cookies.get('token')}};
     this.setState ({employees:this.state.employees,id:empId});
    axios.delete(`${backendUrl}/employee/${empId}`,headers)
        .then( (response) => {
            console.log(response);
            let companyId = this.props.companyId;
            this.getEmployees = this.getEmployees.bind(this);
            this.getEmployees(companyId,token);
            this.props.history.push('/ListEmployees');
           // this.setState ({employees:response.data.data});
           

        })
        .catch(function (error) {
            console.log(error);
     }); 
}



}
export default ListEmployees;