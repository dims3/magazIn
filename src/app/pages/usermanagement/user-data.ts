import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'user-data',
    standalone: true,
    imports: [Select, InputText, TextareaModule, FileUploadModule, ButtonModule, InputGroupModule, RippleModule, ReactiveFormsModule, FormsModule],
    template: `<div class="card">
        <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block">Данные профиля</span>
        <div class="grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-10">
                <div class="grid grid-cols-12 gap-4">
                    <div class="mb-6 col-span-12">
                        <label for="nickname" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Ф.И.О </label>
                        <input id="nickname" [value]="userName" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 flex flex-col items-start">
                        <label for="avatar" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">Аватар</label>
                        <p-fileupload mode="basic" (uploadHandler)="onFileSelect($event)" name="avatar" url="./upload.php" accept="image/*" [maxFileSize]="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Загрузить фото"></p-fileupload>
                    </div>
                    <div class="mb-6 col-span-12">
                        <label for="bio" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Наименование компании </label>
                        <input pTextarea id="bio" [value]="company" type="text" rows="5" [autoResize]="true" fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="email" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Email </label>
                        <input id="email" [value]="email" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="country" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Город </label>
                        <p-select inputId="city" [(ngModel)]="selectedCity" [options]="citys" optionLabel="name" fluid [filter]="true" filterBy="name" [showClear]="true" placeholder="Выберете город">
                            <ng-template let-country #item>
                                <div class="flex items-center">
                                    <div>{{ country.name }}</div>
                                </div>
                            </ng-template>
                        </p-select>
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="city" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> БИН </label>
                        <input id="city" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <!--                        <label for="state" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> ИИН </label>-->
                        <!--                        <input id="state" type="text" pInputText fluid />-->
                    </div>
                    <!--                    <div class="mb-6 col-span-12">-->
                    <!--                        <label for="website" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Website </label>-->
                    <!--                        <p-inputgroup>-->
                    <!--                            <p-inputgroup-addon>-->
                    <!--                                <span>www</span>-->
                    <!--                            </p-inputgroup-addon>-->
                    <!--                            <input id="website" type="text" pInputText fluid />-->
                    <!--                        </p-inputgroup>-->
                    <!--                    </div>-->
                    <div class="flex" style="width: 400%">
                        <div class="col-span-12 mx-5">
                            <button pButton (click)="onSubmit()" pRipple label="Сохранить" class="w-auto mt-3"></button>
                        </div>
<!--                        <div class="col-span-12" style="width: 90%">-->
<!--                            <button pButton (click)="backToLogin()" pRipple label="Вернуться на страницу авторизации" class="w-auto mt-3"></button>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div> `
})
export class UserData {
    citys: any[] = [];
    loginForm: FormGroup;
    userName: string = 'Иванов Иван Иванович';
    company: string = 'ТОО Да'
    email: string = 'dims3@mail.ru'
    selectedCity: any;
    avatar: string = 'assets/images/avatar.jpg';
    constructor(private fb: FormBuilder, private router: Router,) {
        this.loginForm = this.fb.group({
            email: [''],
            password: [''],
            remember: [false],
            userName: ['']
        });
    }

    ngOnInit() {
        this.citys = [
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
        this.selectedCity = this.citys.find(c => c.code === '5');

    }
    onSubmit() {
        if (this.loginForm.valid) {
            this.router.navigate(['/my-orders']);
        }
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
