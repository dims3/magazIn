import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { LazyImageWidget } from '@/pages/landing/components/lazyimagewidget';
import { LogoWidget } from '@/pages/landing/components/logowidget';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [LogoWidget, CommonModule, ReactiveFormsModule, InputTextModule, LazyImageWidget, CheckboxModule, RouterLink],
    template: `
        <section class="min-h-screen flex items-center lg:items-start lg:py-20 justify-center animate-fadein animate-duration-300 animate-ease-in max-w-[100rem] mx-auto">
            <div class="flex w-full h-full justify-center gap-12">
                <div class="flex flex-col py-20 lg:min-w-[30rem]">
                    <a routerLink="/" class="flex items-center justify-center lg:justify-start mb-8">
                        <logo-widget></logo-widget>
                    </a>
                    <div class="flex flex-col justify-center flex-grow">
                        <div class="max-w-md mx-auto w-full">
                            <h5 class="title-h5 text-center lg:text-left">Логин/Номер телефона</h5>
<!--                            <p class="body-small mt-3.5 text-center lg:text-left">Please enter your details</p>-->
<!--                            <button class="button-button mt-8"><app-google-widget></app-google-widget> Sign in with Google</button>-->
<!--                            <button class="button-button mt-4"><app-apple-widget></app-apple-widget> Sign in with Apple</button>-->
<!--                            <div class="flex items-center gap-3.5 my-7">-->
<!--                                <span class="flex-1 h-[1px] bg-surface-200 dark:bg-surface-800"></span>-->
<!--                                <span class="body-small text-surface-400 dark:text-surface-600">or</span>-->
<!--                                <span class="flex-1 h-[1px] bg-surface-200 dark:bg-surface-800"></span>-->
<!--                            </div>-->
                            <form [formGroup]="loginForm">
                                <input type="text" formControlName="email" pInputText class="w-full" placeholder="Email" required />
                                <input type="password" formControlName="password" pInputText class="w-full mt-4" placeholder="Password" required />
                                <div class="my-8 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <p-checkbox inputId="remember" formControlName="remember" [binary]="true" />
                                        <label for="remember" class="body-small">Запомнить меня </label>
                                    </div>
                                    <a routerLink="/auth/forgot-password" class="body-small text-primary-500 hover:underline">Забыли пароль?</a>
                                </div>
                                <button type="submit" (click)="onLogin()" class="body-button w-full">Авторизоваться</button>
                            </form>
                            <div class="mt-8 body-small text-center lg:text-left">Не зарегистрированы? <a routerLink="/auth/register" class="text-primary-500 hover:underline">Создать новый аккаунт</a></div>
                        </div>
                    </div>
                    <div class="mt-8 text-center lg:text-start block relative text-surface-400 dark:text-surface-500 text-sm">©{{ currentYear }} МЕБЕЛЬЩИК</div>
                </div>
                <div class="hidden lg:flex h-full py-20">
                    <div class="h-full w-full lg:max-w-[32.5rem] xl:max-w-[60.5rem] mx-auto flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] rounded-3xl border border-surface overflow-hidden">
                        <app-lazy-image-widget className="w-auto h-full object-contain object-left" src="/demo/images/landing/auth-image.svg" alt="Auth Image" />
                    </div>
                </div>
            </div>
        </section>
    `
})
export class Login {
    loginForm: FormGroup;
    currentYear: number = new Date().getFullYear();

    constructor(private fb: FormBuilder, private router: Router,) {
        this.loginForm = this.fb.group({
            email: [''],
            password: [''],
            remember: [false]
        });
    }

    onLogin() {
        if (this.loginForm.valid) {
            this.router.navigate(['/']);
        }
    }


}
