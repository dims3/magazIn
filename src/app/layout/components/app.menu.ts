import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: any[] = [
        {
            label: 'Главная',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
        },
        {
            label: 'Мой профиль',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Мой профиль',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/user-data']
                },
                {
                    label: 'Мои заказы',
                    icon: 'pi pi-fw pi-file',
                    routerLink: ['/my-orders']
                },
                {
                    label: 'Склад',
                    icon: 'pi pi-fw pi-box',
                    routerLink: ['/warehouse']
                },
            ]
        },
    ];
}
