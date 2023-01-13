import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../carrito.service';


@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.scss']
})
export class ListaCarritoComponent implements OnInit{

  items:any = [];
  constructor(private carrito: CarritoService, ){}
  ngOnInit(): void{
    this.items = this.carrito.listarCarrito();

  }

  eliminarProductoCard(item:any){
      this.carrito.eliminarProductoCard(item);

  }
  eliminarTodo(){
      this.carrito.limpiarCarrito();
      console.log(this.carrito);
  }
}
