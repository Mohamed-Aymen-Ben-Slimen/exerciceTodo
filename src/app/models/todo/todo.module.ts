import {Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
  private readonly nom: string;
  private readonly contenu: string;

  constructor(@Inject('nom')nom: string, @Inject('contenu')contenu: string) {
    this.nom = nom;
    this.contenu = contenu;
  }
  public isValid(): boolean {
    return (this.nom.length > 0 && this.contenu.length > 0);
  }

  // Getters
  public getNom(): string {
    return this.nom;
  }
  public getContenu(): string {
    return this.contenu;
  }
}
