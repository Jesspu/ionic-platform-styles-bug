import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    IonList,
    IonItem,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="false">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-select label="Select Normal">
            <ion-select-option></ion-select-option>
          </ion-select>
        </ion-item>
        @if(showSelectInIf) {
        <ion-item>
          <ion-select label="Select In If">
            <ion-select-option></ion-select-option>
          </ion-select>
        </ion-item>
        }
      </ion-list>
    </ion-content>
  `,
  styles: [``],
})
export class HomePage {
  public showSelectInIf: boolean = false;
  constructor() {
    setTimeout(() => {
      this.showSelectInIf = true;
    }, 1000);
  }
}
