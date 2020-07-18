import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {

    name: string;

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
