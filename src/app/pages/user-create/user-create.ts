import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { RadioButton } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-create',
    standalone: true,
    imports: [Select, InputText, TextareaModule, FileUploadModule, CommonModule, ButtonModule, InputGroupModule, RippleModule, MessageModule, RadioButton, FormsModule, ReactiveFormsModule],
    templateUrl: './user-create.component.html'
})
export class UserCreate {
    city: any[] = [];
    avatar: any;
    createForm: FormGroup;
    activityTypes: any[] = [];

    constructor(private fb: FormBuilder, private router: Router,) {
        this.createForm = this.fb.group({
            email: [''],
            userName: [''],
            company: [''],
            avatar: [''],
            ingredient: [0, Validators.required]
        });
    }

    ngOnInit() {
        this.city = [
            { name: 'Астана', code: '1' },
            { name: 'Алмата', code: '2' },
            { name: 'Шимкент', code: '3' },
            { name: 'Петропавловск', code: '4' },
            { name: 'Костанай', code: '5' },
            { name: 'Усть Каменогорск', code: '6' },
            { name: 'Щучинск', code: '7' },
            { name: 'Караганда', code: '8' },
            { name: 'Уральск', code: '9' },
            { name: 'Кокшетау', code: '10' }
    ];
        this. activityTypes = [
            { label: 'Физ.лицо', value: 1 },
            { label: 'ИП', value: 2 },
            { label: 'ТОО', value: 3 }
        ];
    }
    onSubmit() {
        if (this.createForm.valid) {
            this.router.navigate(['/my-orders']);
        }
    }
    backToLogin() {
        this.router.navigate(['/auth/login'])
    }
}
