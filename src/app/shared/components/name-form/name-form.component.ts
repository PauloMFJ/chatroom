import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() userChangedEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.user.getForm(this.formBuilder);
  }

  ngOnInit() { }

  submitName() {
     this.user.from(this.userForm);
     this.userChangedEvent.emit(this.user);
  }
}
