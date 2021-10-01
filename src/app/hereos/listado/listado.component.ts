import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Trunks'];
  heroeBorrado: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarHereo() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
