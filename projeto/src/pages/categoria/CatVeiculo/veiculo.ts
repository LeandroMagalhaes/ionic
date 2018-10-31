import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { RestApiProvider } from '../../../providers/rest-api/rest-api';

@Component({
  selector: 'page-veiculo',
  templateUrl: 'veiculo.html'
})
export class VeiculoPage {
  selectedItem: any;  
  produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApiProvider: RestApiProvider) {
    this.MostraProdutos();   
  }
  
  MostraProdutos() {
    this.restApiProvider.getProduto().then(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }
}