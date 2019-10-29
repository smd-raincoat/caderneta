import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html',
})


export class AnotacaoPage {
  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public indexAnotacao:any;
  public anotacao:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    this.indexAnotacao = localStorage.getItem('indexAnotacao');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacao = this.viagens[this.indexViagem].anotacoes[this.indexAnotacao];
    console.log(this.anotacao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotacaoPage');
  }

}
