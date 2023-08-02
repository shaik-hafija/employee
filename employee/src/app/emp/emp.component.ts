import { Component, OnInit, OnDestroy } from '@angular/core';
import{
  InsertedSuccess,
  Empdetails,
  UniqueConstraintError,
  Read
} from '../empdetails';
import { Subscription } from 'rxjs';
import { EmpService } from '../empservice.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit, OnDestroy {
  constructor(private Service: EmpService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Empdetails= {
   emp_code:'',
    emp_name:'',
    emp_qual :'',
    emp_gender :'',
  emp_join_date:'',
    emp_pan_no:'',
    emp_aadhar_no:0,
    emp_pf_flag:'',
    emp_pf_no:'',
    emp_esi_flag:'',
    emp_esi_no:0,
    emp_catg:'',
    emp_basic:0 ,
    emp_dept:'',
    eemp_hno:'',
    emp_street:'',
    emp_city :'',
    emp_pincode:0,
    emp_state:'',
    emp_phno:0,
    emp_email_id:'',
    emp_cons_reg_flag:'',
    emp_spl_pay :0,
    emp_bank_name:'',
    emp_bank_acno:'',
    emp_bank_ifsc:'',
    emp_resignation_date:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe(
      (data)=>{
           if(data){
               console.log(data);
               document.write('Succesfully inserted');
           }
             else{
               console.log("Failed");
             }
           }
         )
       }
       ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
  

}
