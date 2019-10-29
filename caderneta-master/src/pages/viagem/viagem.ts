import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {

  public viagens:any;
  public viagem:any;
  public indexViagem:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagemPage');
    console.log(this.viagem); 
  }
  //public data:any = dataProvider.getData;


}
