import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

export const routes: Routes = [

    { path: "home", component: ProductListComponent },
    { path: "product/:_id", component: ProductViewComponent},
    {path: "**", redirectTo: ""}

];
