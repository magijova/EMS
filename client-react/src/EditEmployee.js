     
import React, { Component } from 'react';
import {backendUrl} from './constants';
import './EmployeeView.css';
import Cookies from 'js-cookie'
import axios from 'axios';
/* Component with employee form to create an employee
*/
class EditEmployee extends Component{
        constructor(props){
                super(props);
               this.state={
                       status:  '',
                   
                        companyid:0,isHidden:false,status:"",employees:{name:"",surname:"",
                        email:"",address:"",salary:""}
                }
                this.EditEmployee = this.EditEmployee.bind(this);
                this.closeDiv =this.closeDiv.bind(this);
                this.openDiv =this.openDiv.bind(this);
        }

        componentDidMount(){
            let headers = {headers:{AccessToken:Cookies.get('token')}};
            axios.get(`${backendUrl}/employee/`+this.props.match.params.id, headers)
                .then( (response) => {
                    console.log(response);
                    this.setState({employees:response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
             }); 
        }


  componentWillReceiveProps(nextProps){
                if (nextProps.companyId !=0){
                this.state["companyid"]= nextProps.companyId;
                this.state["token"]= nextProps.token;
                }
        }
    render(){
             const {isHidden} = this.state;
        return(
            <div className="createEmployee">
            
            <div className="divTableCE">
        
            <div className="divRowHeader">
            <div className="divCellHeaderLeft">
                <div>
                                Edit an Employee
                    </div>    
                </div>    
                <div className="divCellHeaderRight">
                        <div className="openClose">
                        <a href="#" onClick={this.closeDiv}>(-)</a> &nbsp; &nbsp;    <a href="#" onClick={this.openDiv}>(+)</a>
                        </div>    
                </div> 
                </div>
                 <div className="divRowCE">
                    <div className="divCellCE">
                    {
                         this.state.status   ? "Status : ":""
                    }
                       {this.state.status} 
                    </div>
                     
            </div>
            <div className={`div${isHidden ?'Hide':'Show'}` }>
            <div className="divRowCE">
                    <div className="divCellCE">
                   
                            Name:   
                    </div>
                     <div className="divCellMCE">
                              <input type="text" name ="name" value={this.state.employees.name}
                               onChange={this.onChange} />  
                    </div> 
            </div>
              <div className="divRowCE">
                    <div className="divCellCE">
                            Last Name:   
                    </div>  
                    <div className="divCellMCE">
                            <input type="text" name="surname" value={this.state.employees.surname} onChange={this.onChange}/>   
                    </div>  
            </div>
                <div className="divRowCE">    
                    <div className="divCellCE">
                           Email:   
                    </div> 
                    <div className="divCellMCE">
                            <input type="text" name="email" value={this.state.employees.email} onChange={this.onChange}/>  
                    </div> 
                </div>
                  <div className="divRowCE">    
                    <div className="divCellCE">
                           Address:   
                    </div> 
                    <div className="divCellMCE">
                            <input type="text" name="address" value={this.state.employees.address} onChange={this.onChange}/>  
                    </div> 
                </div>
                <div className="divRowCE">    
                    <div className="divCellCE">
                           Salary:   
                    </div> 
                    <div className="divCellMCE">
                            <input type="text" name="salary" value={this.state.employees.salary} onChange={this.onChange}/>   
                </div>  
                   </div>
                   <div className="divRowCE">    
                      <div className="divCellCE">
                          
                    </div> 
                    <div className="divCellButton">
                            <button name="create" onClick={this.EditEmployee}>  Edit </button>
                </div>  
                   </div>
                   </div>
            </div>
            </div>
        );
    }


   onChange = (e) => {
        const state = this.state
        state.employees[e.target.name] = e.target.value;
        this.setState(state);
      }

EditEmployee= () =>{
      //  let headers = {AccessToken:token};
        const  employee= this.state.employees;
        const companyId = 1;
        //const accessToken = this.state["token"];
         let headers = {headers:{AccessToken:Cookies.get('token')}};
         employee.company = {id:companyId};
        console.log("Employee:"+employee);
    axios.put(`${backendUrl}/employee/`,employee,headers)
        .then( (response) => {
            console.log(response);
            this.setState ({status:response.data.emsStatus.status});
            this.props.history.push('/ListEmployees');

           // this.props.refresh();
  
        })
        .catch(function (error) {
            console.log(error);
            //this.setState ({status:"NOT OK"});
     }); 
}
   openDiv(){
            console.log("opendiv called!");
            this.setState({
                         isHidden: false
                 })
    }
    closeDiv(){
            console.log("closediv called!");
            this.setState({
                         isHidden: true
                })
    }
}



export default EditEmployee;