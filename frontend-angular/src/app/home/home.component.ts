import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataList: any;

  constructor(private service: WebService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  //  Select All Process
  getAllData() {
    this.service.findAll().subscribe(data => {

      if (data) {
        this.dataList = data;
      }
    }, error => {
      alert("Error Found in Find All Process Sir !");
    })
  }




  

  }





