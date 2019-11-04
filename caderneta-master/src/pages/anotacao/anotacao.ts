import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';
import { anotacao, dataProvider } from '../../providers/data/data';

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
  model:anotacao;
  key:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private data: dataProvider) {
    
  }
  ionViewWillEnter() {
    this.model = this.navParams.data.anotacao;
    this.key =  this.navParams.data.key;
    console.log(this.navParams.data.anotacao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotacaoPage');
  }

  apagarAnotacao(k:string){
    let alert = this.alertCtrl.create({
      title: 'Apagar Anotação!',
      message: 'Você deseja mesmo apagar essa anotação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Apagar',
          handler: () => {
            this.removeContact(k);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
    
  }
  removeContact(key: string) {
    this.data.removeAnotacao(key);
  }

}
