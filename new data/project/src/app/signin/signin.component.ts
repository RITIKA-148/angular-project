import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  employeeForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private api:ProductdataService) { }

  ngOnInit(): void {
    this.employeeForm=this.formBuilder.group({
    
      email:[''],
      Password:[''],
    



    })
  }
users(data:any){
  this.api.users(data).subscribe((res=>{
console.log(res)
  }))

}
addemployee(){
  if(this.employeeForm.valid){
    this.api.users(this.employeeForm.value)
    .subscribe({
      next:(res)=>{
        alert("details add sucessfully")
      },
      error:()=>{
        alert("error occur")
      }
    })
  }
}
}

