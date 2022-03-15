import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {
  constructor(public loader: LoadingController) { }
}
