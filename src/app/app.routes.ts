import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'Contacts',
  //   redirectTo: 'folder/Contacts',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  // {
  //   path: 'Categories',
  //   loadComponent: () =>
  //     import(
  //       './components/customer/customer-items/customer-items.component'
  //     ).then((m) => m.CustomerItemsComponent),
  // },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import(
  //       './components/auth/login/login.component'
  //     ).then((m) => m.LoginComponent),
  // },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth-module.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
