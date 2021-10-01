import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'hereo.component.html'
})
export class HereoComponent{
    nombre: string = 'Iroman';
    edad: number = 45;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    getNombre() :string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}