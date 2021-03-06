import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ProductCardComponent } from "./product-card/product-card.component";

import { ProductService } from "./shared/services/product.service";
import { ShoppingCartService } from "./shared/services/shopping-cart.service";
import { ProductsComponent } from "./products/products.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "**", component: ShoppingCartComponent }
    ])
  ],
  providers: [ShoppingCartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
