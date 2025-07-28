import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { Table, TableModule } from 'primeng/table';
import { Customer } from '@/pages/service/customer.service';

@Component({
    selector: 'app-my-orders',
    standalone: true,
    imports: [Select, InputText, TextareaModule, FileUploadModule, InputGroupAddon, ButtonModule, InputGroupModule, RippleModule, TableModule],
    template: `<div class="card">
        <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
            <ng-template #header>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </ng-template>
        </p-table>
    </div> `
})
export class MyOrders {
    order: FormGroup;
    customers1: Customer[] = [];
    loading: boolean = true;
    products: any[];

    constructor(private fb: FormBuilder, private router: Router,) {
        this.order = this.fb.group({

        });
        this.products = [
            { name: 'Elsner', code: '1', category: 'da', quantity: '90' },
            { name: 'Any', code: '11', category: 'net', quantity: '70' },
            { name: 'Elen', code: '3', category: 'da-net', quantity: '900' }
       ]
    }

    ngOnInit() {
    }
}
