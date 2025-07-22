import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-data',
    template: `
        <div class="user-data-container">
            <h2>Enter Your Details</h2>
            <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input id="firstName" formControlName="firstName" type="text" placeholder="Enter your first name" />
                    <div *ngIf="userForm.get('firstName')?.invalid && userForm.get('firstName')?.touched" class="error">
                        First name is required.
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input id="lastName" formControlName="lastName" type="text" placeholder="Enter your last name" />
                    <div *ngIf="userForm.get('lastName')?.invalid && userForm.get('lastName')?.touched" class="error">
                        Last name is required.
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" formControlName="email" type="email" placeholder="Enter your email" />
                    <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" class="error">
                        Please enter a valid email.
                    </div>
                </div>
                <button type="submit" [disabled]="userForm.invalid">Submit</button>
            </form>
        </div>
    `,
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    styles: [`
        .user-data-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    `]
})
export class UserData {
    userForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.userForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            console.log('User Data:', this.userForm.value);
            // Navigate to dashboard or another page after submission
            this.router.navigate(['/dashboard']);
        }
    }
}
