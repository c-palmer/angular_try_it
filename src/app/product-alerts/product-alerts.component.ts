import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
