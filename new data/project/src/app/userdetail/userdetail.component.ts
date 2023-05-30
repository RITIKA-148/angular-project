import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { SigninComponent } from '../signin/signin.component';
import { SignindeatilsComponent } from '../signindeatils/signindeatils.component';
// import { SignindeatilsComponent } from '../signindeatils/signindeatils.component';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
public usersID!:number;
userDetail!:SignindeatilsComponent;
// email!:SigninComponent
email!:SigninComponent

  constructor(private activedRoute:ActivatedRoute,private api:ProductdataService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(val=>{
      this.usersID=val['ID'],
      this.fetchusersDetails(this.usersID);
    })
  }
// fetchusersDetails(usersID:number){
//   this.api. getRegisteredusersID(this.usersID)
  
//   .subscribe((res)=>{
 
//     this.userDetail=res;
//     console.log(this.userDetail)
    
//   })
// }
fetchusersDetails(usersID:number){
  this.api.getRegisteredusersIDs(this.usersID)
  .subscribe({
    next:(res: any)=>{
      this.userDetail=res;
        // console.log(this.userDetail)

    },
    // error:()=>{
    //   alert("error while deleted this row !!")
    // }
  })

}
}

