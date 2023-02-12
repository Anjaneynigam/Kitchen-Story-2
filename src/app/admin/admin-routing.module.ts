import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'admin',component:DashboardComponent},
  {path:'admin',
    children:[
  {path: 'header', component:HeaderComponent}, 
  {path: 'menu', component:MenuListComponent},
  {path: 'create-menu', component: CreateMenuComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-menu/:id', component: UpdateMenuComponent},
  {path: 'menu-details/:id', component: MenuDetailsComponent},
  {path: 'login', component:LoginComponent }
]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
