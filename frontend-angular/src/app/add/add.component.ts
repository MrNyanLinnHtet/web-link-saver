import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  form: FormGroup;
  id: any;
 isNew:any;

  ngOnInit(): void {
    this.editData();
  }



  constructor(private builder: FormBuilder, private service: WebService, private router: Router, private route: ActivatedRoute) {

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

  if(data){
   this.isNew  = false;
    this.service.insertData(data).subscribe(data => {
      this.router.navigate(['/home']);
    }, error => {
      alert(error);
    });
  }

  }

  //Edit Data

  editData() {

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
      console.log(`Id is ${this.id}`);

      if (this.id) {
       this.isNew = true;
        this.service.findById(this.id).subscribe(data => {
          this.form.patchValue(data);
          console.log("Finding Data With Id Process is Successful!");
        }, error => {
          alert('Error is Found ! Dont\'t worry it\'s gonna be ok !');
        })
      }
    })
  }

  //UpdateData

  updateData() {

    let data = {
      id: this.id,
      name: this.form.value.name,
      url: this.form.value.url
    }

    if (data) {
      this.service.update(data).subscribe(data => {
        this.router.navigate(['/home']);
        console.log(`Updating Process is Successful !`);
      }, error => {
        alert('Error is Found ! Dont\'t worry it\'s gonna be ok !');
      })
    }
  }





}
