import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../mat.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guard/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: 'register',
    component: RegisterComponent,
    
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    component: HomeComponent,
    
  }
];


@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatModule
  ]
})
export class FeaturesModule { }
