import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductdataService } from '../services/productdata.service';


@Component({
  selector: 'app-signindeatils',
  templateUrl: './signindeatils.component.html',
  styleUrls: ['./signindeatils.component.scss']
})
export class SignindeatilsComponent implements OnInit {
deleteusers() {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = [ 'email', 'Password','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ProductdataService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.api.getData()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
},
  error:(err)=>{
    alert("Eror while fetching the Details");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUsers(id:number){
    this.api.deleteUsers(id)
    .subscribe({
      next:(res)=>{
        alert("deleted succesfully");
      },
      error:()=>{
        alert("error while deleted this row !!")
      }
    })

  }

}
