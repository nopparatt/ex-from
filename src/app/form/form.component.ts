import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
formGroup :FormGroup;
  constructor( private formBulid: FormBuilder ) 
  {
    
  }

  ngOnInit() {
    this.formGroup = this.formBulid.group({
      firstName: this.formBulid.control(''),
      lastName:[''] ,
      gmail:[''],
      age:['']
      
    })
  }
  onSubmit(from: FormGroup){
    //console.log(from);
    const{firstName,lastName,gmail,age} = from.value;
   // console.log(firstName.lastName);
    const user = new User(firstName,lastName,gmail,age);
    console.log(user);
  }
}
