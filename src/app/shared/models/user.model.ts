import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {

    id: string;
    name: string;

    constructor() {
        // TODO: Get id from server
        this.id = new Date().getTime().toString();
    }

    getForm(formBuilder: FormBuilder) {
       return formBuilder.group({
            name: [this.name, [Validators.required, Validators.maxLength(255)]],
        });
    }

    public from(form: FormGroup) {
        const userForm = form.value;
        this.name = userForm.name;
    }
}
