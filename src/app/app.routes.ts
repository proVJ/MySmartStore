import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Contacts',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'customeritems',
    loadComponent: () =>
      import(
        './components/customer/customer-items/customer-items.component'
      ).then((m) => m.CustomerItemsComponent),
  },
];
