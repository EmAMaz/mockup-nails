import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  

  idiomas = [] = [
    {
      titulo: 'CONSÍGUELO EN',
      description: 'Encuentra Técnicos Manicure a Domicilio Cerca de Tí Disponibles 24/7',
    },
    {
      titulo: 'GET IN ON',
      description: 'Find Home Manicure Technicians Near You Available 24/7',
    }
  ]

  public tituloBanner:string = this.idiomas[0].titulo;
  public descripBanner:string = this.idiomas[0].description;
  public active:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarIdioma($event:any){
    this.active = false;
    if($event.target.innerHTML == "SPA"){
      this.tituloBanner = this.idiomas[0].titulo;
      this.descripBanner = this.idiomas[0].description;
      this.active = true;
    }else if($event.target.innerHTML == "ENG"){
      this.tituloBanner = this.idiomas[1].titulo;
      this.descripBanner = this.idiomas[1].description;
      this.active = false;
    }
  }
}
