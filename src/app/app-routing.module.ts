import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'carrito', component:ListaCarritoComponent},
  {path:'productos', component: ProductosComponent},
  {path:'about',component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
