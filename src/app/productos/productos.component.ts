import { Component } from '@angular/core';
import { productos } from '../productos';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos = productos;


  constructor(private carrito:CarritoService){}

  adicionarCarrito(producto:any){
    this.carrito.adicionarCarrito(producto);

  }

}
