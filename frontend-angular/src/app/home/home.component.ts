import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataList: any;

  constructor(private service: WebService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllData();
  }

  //  Select All Process
  getAllData() {
    this.service.findAll().subscribe(data => {

      if (data) {
        this.dataList = data;
      }else{
        alert('Error is Found ! Dont\'t worry it\'s gonna be ok !')
      }
    }
    )
  }

  //Delete Process

  deleteData() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = Number(param.get('id'));


      if (id) {
        console.log(`Id is ${id}`)
        this.service.delete(id).subscribe((data) => {
          this.getAllData();
          console.log('Delete Process Successful !');
        }
       )
      }else{
        alert('Error is Found ! Dont\'t worry it\'s gonna be ok !');
      }
    })
  }






}





