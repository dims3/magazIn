import { Routes } from '@angular/router';
import { UserList } from './userlist';
import { UserData } from './user-data';

export default [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', data: { breadcrumb: 'List' }, component: UserList },
    { path: 'create', data: { breadcrumb: 'Create' }, component: UserData }
] as Routes;
