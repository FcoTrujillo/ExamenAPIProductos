import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ApiResponse } from '../../interfaces/api-response';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  arrProducts: Product[] = [];


  productService = inject(ProductService)

  ngOnInit(): void{
    this.getProducts();
}

getProducts(): void {
  this.productService.getProducts().subscribe({
    next: (response: ApiResponse) => {
      this.arrProducts = response.results;
    },
    error: (error) => {
      console.error('Error al obtener los productos:', error);
    },
  });
}

}
