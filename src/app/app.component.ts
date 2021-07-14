import { Component } from "@angular/core";
import { ProductService } from "./productservice";
import { Product } from "./product";
import { LazyLoadEvent, SelectItem } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  virtualProducts: Product[];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.virtualProducts = Array.from({ length: 139 });
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.productService.getPosts(event.first, event.rows).subscribe(data => {
      Array.prototype.splice.apply(this.virtualProducts, [
        ...[event.first, event.rows],
        ...data
      ]);
  
      this.virtualProducts = [...this.virtualProducts];
    });
  }
}
