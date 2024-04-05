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
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
})
export class HomePage {
  public showSelectInIf: boolean = false;
  constructor() {
    setTimeout(() => {
      this.showSelectInIf = true;
    }, 1000);
  }
}
