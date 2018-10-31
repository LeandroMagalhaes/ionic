import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html'
})
export class AnimalPage {
  selectedItem: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
}
