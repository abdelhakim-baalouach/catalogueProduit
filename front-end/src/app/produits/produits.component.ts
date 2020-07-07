import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits/services/produits.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits: any;
  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  constructor(ProduitsService: ProduitsService) { }

  ngOnInit(): void {

  }

}
