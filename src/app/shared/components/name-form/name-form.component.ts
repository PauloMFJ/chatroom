import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {

  user = new User();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.user.getForm(this.formBuilder);
  }

  ngOnInit() { }

  submit() {
     this.user.from(this.userForm);
  }
}
