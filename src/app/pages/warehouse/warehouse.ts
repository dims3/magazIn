import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';
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
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['warehouse.css'],
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
        InputText,
        DialogModule,
        ReactiveFormsModule
    ],
})


export class Warehouse {

    order: FormGroup;
    expandedRows = {};
    addProductDialog: boolean = false;
    addProductForm: FormGroup;
    uploadedImage: string = '';
    countries: any[] = [];
    id: any;
    products = [
        {
            id: '1000',
            name: 'Кухонный гарнитур Лофт',
            image: 'bamboo-watch.jpg',
            price: 65,
            salePrice: 75,
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
                    status: 'ДОСТАВЛЕН',
                    size: '2x2'
                },
                {
                    id: 'A002',
                    description: 'Изготовление кухонного гарнитура в стиле лофт. Фасады МДФ, цвет - графит.',
                    customer: 'Jane Smith',
                    date: '2025-07-05',
                    amount: 65,
                    status: 'ОЖИДАЕТСЯ',
                    size: '2x2'

                }
            ]
        },
        {
            id: '1001',
            name: 'Шкаф-купе в спальню',
            image: 'black-watch.jpg',
            price: 72,
            salePrice: 88,
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
                    status: 'ОТМЕНЕН',
                    size: '2x2'

                }
            ]
        },
        {
            id: '1002',
            name: 'Рабочий стол для кабинета',
            image: 'blue-t-shirt.jpg',
            price: 25,
            salePrice: 30,
            category: 'Мебель',
            rating: 3,
            inventoryStatus: 'НЕТ В НАЛИЧИИ',
            orders: [{
                description: 'Письменный стол из массива ясеня с двумя тумбами. Покрытие - матовый лак.',
                customer: 'Alice Brown',
                date: '2025-07-10',
                amount: 7,
                status: 'ОТМЕНЕН',
                size: '2x2'

            }]
        },
        {
            id: '1003',
            name: 'Книжный стеллаж',
            image: 'black-watch.jpg',
            price: 72,
            salePrice: 90,
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
                    status: 'ОТМЕНЕН',
                    size: '2x2'

                }
            ]
        },
        {
            id: '1004',
            name: 'Тумба под ТВ',
            image: 'blue-t-shirt.jpg',
            price: 25,
            salePrice: 35,
            category: 'Мебель',
            rating: 3,
            inventoryStatus: 'НЕТ В НАЛИЧИИ',
            orders: [{
                description: 'Подвесная тумба под ТВ с глянцевыми фасадами без ручек (система push-to-open).',
                id: 'B001',
                customer: 'Alice Brown',
                date: '2025-07-10',
                amount: 10,
                status: 'ОТМЕНЕН',
                size: '2x2'
            }]
        }
    ];



    constructor(private fb: FormBuilder, private router: Router) {
        this.order = this.fb.group({});
        this.addProductForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            size: [''],
            price: [null, Validators.required],
            category: [''],
        });
    }
    ngOnInit() {
        this.countries = [
            { name: 'ТОО Да', code: 'AU' },
            { name: 'ООО нет', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
    showAddProductDialog() {
        this.addProductDialog = true;
        this.addProductForm.reset();
        this.uploadedImage = '';
    }

    onFileUpload(event: any) {
        const file = event.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.uploadedImage = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    saveProduct() {
        if (this.addProductForm.valid) {
            const newProduct = {
                ...this.addProductForm.value,
                image: this.uploadedImage || 'default.png', // либо placeholder
                id: this.products.length + 1,
                salePrice: this.addProductForm.value.price * 1.2,
                category: 'Не указано',
                orders: []
            };

            this.products.push(newProduct);
            this.addProductDialog = false;
        }
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
