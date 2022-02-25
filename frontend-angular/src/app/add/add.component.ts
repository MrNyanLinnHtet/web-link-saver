import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  form: FormGroup;

  constructor(private builder: FormBuilder, private service: WebService,private router:Router) {

    this.form = builder.group({
      name: ["", Validators.required],
      url: ["", Validators.required]
    })
  }

  //  Insert Data
  addData() {

    let data = {
      name: this.form.get('name')?.value,
      url: this.form.get('url')?.value
    }

    this.service.insertData(data).subscribe(data => {
       this.router.navigate(['/home']);
    },error => {
      alert(error);
    });

  }






}
