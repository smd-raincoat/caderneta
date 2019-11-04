import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import{CadastroAnotacaoPage} from '../cadastro-anotacao/cadastro-anotacao';
import{AnotacaoPage} from '../anotacao/anotacao';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {dataProvider, viagem, viagensList} from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {

  model:viagem;
  key:string;

  viagens: viagensList;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private data: dataProvider, private toast: ToastController) {
    
  }

  ionViewWillEnter() {
    this.model = this.navParams.data.viagem;
    this.key =  this.navParams.data.key;
    console.log(this.model);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagemPage');
    
  }
  
  goCadastroAnotacaoPage(){
    this.navCtrl.push(CadastroAnotacaoPage);
  }

  goAnotacaoPage(i):void {
    localStorage.setItem("indexAnotacao",i);
    this.navCtrl.push(AnotacaoPage);
  }

  apagarViagem(k:string){
    let alert = this.alertCtrl.create({
      title: 'Apagar Viagem!',
      message: 'Você deseja mesmo apagar essa viagem?',
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
    this.data.remove(key);
  }


}
