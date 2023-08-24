import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() products!: Product[];;
  dataSource!: MatTableDataSource<Product>;

  displayedColumns: string[] = ['id', 'name','price','description'];


}
