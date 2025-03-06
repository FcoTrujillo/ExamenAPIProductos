import { ProductCardComponent } from './../product-card/product-card.component';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  productService = inject(ProductService)

  @Input() miProduct!: Product;

  ngOnInit(): void {

  }
}
