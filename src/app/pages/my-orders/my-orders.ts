import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TextareaModule } from 'primeng/textarea';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-my-orders',
    standalone: true,
    imports: [
        TextareaModule,
        FileUploadModule,
        CommonModule,
        ButtonModule,
        ToastModule,
        InputGroupModule,
        RippleModule,
        TableModule,
        TagModule,
        RatingModule,
        FormsModule,
        IconField,
        InputIcon,
        InputText
    ],
    template: `
        <div class="card">
            <p-table
                #dt2
                [value]="products"
                dataKey="id"
                [tableStyle]="{ 'min-width': '60rem' }"
                [rows]="10"
                [rowsPerPageOptions]="[10, 25, 50]"
                [expandedRowKeys]="expandedRows"
                (onRowExpand)="onRowExpand($event)"
                [paginator]="true"
                (onRowCollapse)="onRowCollapse($event)"
                [globalFilterFields]="['name', 'orders.description', 'status', 'inventoryStatus', 'category', 'price']">
                <ng-template #caption>
                    <div>
                        <p-iconfield iconPosition="right" class="ml-auto">
                            <p-inputicon>
                                <i class="pi pi-search"></i>
                            </p-inputicon>
                            <input pInputText type="text"
                                   (input)="dt2.filterGlobal($any($event.target).value, 'contains')"
                                   placeholder="Search keyword" />
                        </p-iconfield>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th style="width: 5rem"></th>
                        <th pSortableColumn="name">Наименование
                            <p-sortIcon field="name" />
                        </th>
                        <th></th>
                        <th pSortableColumn="price">Цена
                            <p-sortIcon field="price" />
                        </th>
                        <th pSortableColumn="category">Категория
                            <p-sortIcon field="category" />
                        </th>
                        <!--                        <th pSortableColumn="rating">Reviews <p-sortIcon field="rating" /></th>-->
                        <th pSortableColumn="inventoryStatus">Статус
                            <p-sortIcon field="inventoryStatus" />
                        </th>
                    </tr>
                </ng-template>
                <ng-template #body let-product let-expanded="expanded">
                    <tr>
                        <td>
                            <p-button type="button" pRipple [pRowToggler]="product" [text]="true" [rounded]="true"
                                      [plain]="true" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'" />
                        </td>
                        <td>{{ product.name }}</td>
                        <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                                 [alt]="product.name" width="50" class="shadow-lg" /></td>
                        <td>{{ product.price | currency : 'USD' }}</td>
                        <td>{{ product.category }}</td>
                        <!--                        <td><p-rating [(ngModel)]="product.rating" [readonly]="true" /></td>-->
                        <td>
                            <p-tag [value]="product.inventoryStatus"
                                   [severity]="getSeverity(product.inventoryStatus)" />
                        </td>
                    </tr>
                </ng-template>
                <ng-template #expandedrow let-product>
                    <tr>
                        <td colspan="7">
                            <div class="p-4">
                                <h5>Заказ {{ product.name }}</h5>
                                <p-table stripedRows [value]="product.orders" dataKey="id">
                                    <ng-template #header>
                                        <tr>
                                            <th pSortableColumn="description">Описание
                                                <p-sortIcon field="description" />
                                            </th>
                                            <th pSortableColumn="customer">Клиент
                                                <p-sortIcon field="customer" />
                                            </th>
                                            <th pSortableColumn="date">Дата
                                                <p-sortIcon field="date" />
                                            </th>
                                            <th pSortableColumn="amount">Кол-во в шт
                                                <p-sortIcon field="amount" />
                                            </th>
                                            <th pSortableColumn="status">Статус
                                                <p-sortIcon field="status" />
                                            </th>
                                            <th style="width: 4rem"></th>
                                        </tr>
                                    </ng-template>
                                    <ng-template #body let-order>
                                        <tr>
                                            <td class="w-1/4">{{ order.description }}</td>
                                            <td>{{ order.customer }}</td>
                                            <td>{{ order.date }}</td>
                                            <td>{{ order.amount }}</td>
                                            <td>
                                                <p-tag [value]="order.status"
                                                       [severity]="getStatusSeverity(order.status)" />
                                            </td>
                                            <td></td>
                                        </tr>
                                    </ng-template>
                                    <ng-template #emptymessage>
                                        <tr>
                                            <td colspan="6">Заказаов данной продукции на данный момент нет.</td>
                                        </tr>
                                    </ng-template>
                                </p-table>
                            </div>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})

export class MyOrders {

    order: FormGroup;
    expandedRows = {};
    id: any;
    products = [
        {
            id: '1000',
            name: 'Кухонный гарнитур Лофт',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Мебель',
            rating: 4,
            inventoryStatus: 'В НАЛИЧИИ',
            orders: [
                {
                    id: 'A001',
                    description: 'Изготовление кухонного гарнитура в стиле лофт. Фасады МДФ, цвет - графит. Столешница из искусственного камня.',
                    customer: 'John Doe',
                    date: '2025-07-01',
                    amount: 130,
                    status: 'ДОСТАВЛЕН'
                },
                {
                    id: 'A002',
                    description: 'Изготовление кухонного гарнитура в стиле лофт. Фасады МДФ, цвет - графит.',
                    customer: 'Jane Smith',
                    date: '2025-07-05',
                    amount: 65,
                    status: 'ОЖИДАЕТСЯ'
                }
            ]
        },
        {
            id: '1001',
            name: 'Шкаф-купе в спальню',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Мебель',
            rating: 5,
            inventoryStatus: 'МАЛО',
            orders: [
                {
                    id: 'B001',
                    description: 'Встроенный шкаф-купе с зеркальными дверями. Наполнение: полки, штанги, ящики. Материал ЛДСП \'Дуб Сонома\'.',
                    customer: 'Alice Brown',
                    date: '2025-07-10',
                    amount: 2,
                    status: 'ОТМЕНЕН'
                }
            ]
        },
        {
            id: '1002',
            name: 'Рабочий стол для кабинета',
            image: 'blue-t-shirt.jpg',
            price: 25,
            category: 'Мебель',
            rating: 3,
            inventoryStatus: 'НЕТ В НАЛИЧИИ',
            orders: [{
                description: 'Письменный стол из массива ясеня с двумя тумбами. Покрытие - матовый лак.',
                customer: 'Alice Brown',
                date: '2025-07-10',
                amount: 7,
                status: 'ОТМЕНЕН'
            }]
        },
        {
            id: '1003',
            name: 'Книжный стеллаж',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Мебель',
            rating: 5,
            inventoryStatus: 'МАЛО',
            orders: [
                {
                    id: 'B001',
                    description: 'Письменный стол из массива ясеня с двумя тумбами. Покрытие - матовый лак.',
                    customer: 'Alice Brown',
                    date: '2025-07-10',
                    amount: 32,
                    status: 'ОТМЕНЕН'
                }
            ]
        },
        {
            id: '1004',
            name: 'Тумба под ТВ',
            image: 'blue-t-shirt.jpg',
            price: 25,
            category: 'Мебель',
            rating: 3,
            inventoryStatus: 'НЕТ В НАЛИЧИИ',
            orders: [{
                description: 'Подвесная тумба под ТВ с глянцевыми фасадами без ручек (система push-to-open).',
                id: 'B001',
                customer: 'Alice Brown',
                date: '2025-07-10',
                amount: 10,
                status: 'ОТМЕНЕН'
            }]
        }

    ];

    constructor(private fb: FormBuilder, private router: Router) {
        this.order = this.fb.group({});
    }

    ngOnInit() {
    }

    getSeverity(status: any) {
        switch (status) {
            case 'В НАЛИЧИИ':
                return 'success';
            case 'МАЛО':
                return 'warn';
            case 'НЕТ В НАЛИЧИИ':
                return 'danger';
            default:
                return 'info';
        }
    }

    getStatusSeverity(status: any) {
        switch (status) {
            case 'ОЖИДАЕТСЯ':
                return 'warn';
            case 'ДОСТАВЛЕН':
                return 'success';
            case 'ОТМЕНЕН':
                return 'danger';
            default:
                return 'info';
        }
    }

    onRowExpand(event: TableRowExpandEvent) {
    }

    onRowCollapse(event: TableRowCollapseEvent) {
    }
}
