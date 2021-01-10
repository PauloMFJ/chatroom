import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "@app/shared/models/user.model";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-change-name",
  templateUrl: "./change-name.component.html",
  styleUrls: ["./change-name.component.scss"]
})
export class ChangeNameComponent {
  user = new User();
  userForm: FormGroup;

  @Output() userChangedEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.user.getForm(this.formBuilder);
  }

  changeName() {
    this.user.from(this.userForm);
    this.userChangedEvent.emit(this.user);
  }
}
