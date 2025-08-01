import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { RadioButton } from 'primeng/radiobutton';

@Component({
    selector: 'user-data',
    templateUrl: './user-data.component.html',
    standalone: true,
    imports: [Select, InputText, TextareaModule, FileUploadModule, ButtonModule, InputGroupModule, RippleModule, ReactiveFormsModule, FormsModule, NgForOf, RadioButton]
})
export class UserData {
    city: any[] = [];
    userName: string = 'Иванов Иван Иванович';
    company: string = 'ТОО Да'
    activityTypes: any[] = [];
    officeAddress: string =  'ул. Толе би, 101';
    factoryAddress: string =  'пр. Абая, 45';
    phone: string =  '+7 (777) 123-45-67';
    bin: string = '123456789012';
    email: string = 'dims3@mail.ru'
    form: FormGroup;
    selectedCity: any;
    avatar: string = 'assets/images/avatar.jpg';
    constructor(private fb: FormBuilder, private router: Router,) {
        this.form = this.fb.group({
            email: [''],
            userName: [''],
            company: [''],
            avatar: [''],
            ingredient: [0, Validators.required],
            city: [],
            officeAddress: [''],
            factoryAddress: [''],
            phone: [''],
            bin: ['']
        });
    }

    ngOnInit() {
        this.activityTypes = [
            { label: 'ИП', value: 1 },
            { label: 'ТОО', value: 2 },
            { label: 'АО', value: 3 },
            { label: 'Другое', value: 4 }
        ];
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
        const userDataFromBackend = {
            email: 'dims3@mail.ru',
            userName: 'Иванов Иван Иванович',
            company: 'ТОО Да',
            avatar: 'assets/images/avatar.jpg',
            ingredient: 1,
            city: this.city.find(c => c.code === '5'), // Костанай
            officeAddress: 'ул. Толе би, 101',
            factoryAddress: 'пр. Абая, 45',
            phone: '+7 (777) 123-45-67',
            bin: '123456789012'
        };

        this.selectedCity = userDataFromBackend.city;

        this.form.patchValue({
            email: userDataFromBackend.email,
            userName: userDataFromBackend.userName,
            company: userDataFromBackend.company,
            avatar: userDataFromBackend.avatar,
            ingredient: userDataFromBackend.ingredient,
            city: userDataFromBackend.city,
            bin: userDataFromBackend.bin,
            officeAddress: userDataFromBackend.officeAddress,
            factoryAddress: userDataFromBackend.factoryAddress,
            phone: userDataFromBackend.phone,
        });

        this.avatar = userDataFromBackend.avatar;
    }
    onSubmit() {
            this.router.navigate(['/my-orders']);
    }

    onFileSelect(event: any) {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.avatar = reader.result as string;
        };

        if (file) {
            reader.readAsDataURL(file); // загружаем как base64
        }
    }

}
