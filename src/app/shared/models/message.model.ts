import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { Status } from '@app/shared/enums/status.model';

export class Message {

    user: User;
    message: string;
    status: Status;
    date: Date;

    getForm(formBuilder: FormBuilder) {
       return formBuilder.group({
            name: [this.user],
            message: [this.message, [Validators.required]],
            status: [this.status],
            date: [this.date]
        });
    }

    public from(form: FormGroup) {
        const messageForm = form.value;
        this.user = messageForm.user;
        this.message = messageForm.message;
        this.status = messageForm.status;
        this.date = messageForm.date;
    }
}
