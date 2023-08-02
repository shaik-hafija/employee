export interface Empdetails {
    emp_code:String;
    emp_name:String;
    emp_qual :String;
    emp_gender :String;
    emp_join_date:String;
    emp_pan_no:String;
    emp_aadhar_no:Number;
    emp_pf_flag:String;
    emp_pf_no:String;
    emp_esi_flag:String;
    emp_esi_no:Number;
    emp_catg:String;
    emp_basic:Number;
    emp_dept:String;
    eemp_hno:String;
    emp_street:String;
    emp_city :String;
    emp_pincode:Number;
    emp_state:String;
    emp_phno:Number;
    emp_email_id:String;
    emp_cons_reg_flag:String;
    emp_spl_pay :Number;
    emp_bank_name:String;
    emp_bank_acno:String;
    emp_bank_ifsc:String;
    emp_resignation_date:String;
    
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
export interface Read {
      Result: [];
  }
