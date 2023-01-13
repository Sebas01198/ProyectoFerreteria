import { Injectable } from '@angular/core';
import { productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos:any = productos;
  items:any = [];


  constructor() { }

  adicionarCarrito(producto:any){
    let encontrado = false;
    this.items.forEach((element:any) => {
      if(element.id === producto.id){
        encontrado = true;
        element.cantidad += 1;
      }
    });

    if(!encontrado){
      this.items.push(producto);
    }

  }

  limpiarCarrito(){
    this.items = [];
    this.productos.next(this.items);
  }
  listarCarrito(){
    return this.items;
  }
  eliminarProductoCard(producto:any){
    this.items.map((a:any, index:any)=>{
      if(producto.id === a.id){
        this.items.splice(index,1);
      }
    })
  }
}
