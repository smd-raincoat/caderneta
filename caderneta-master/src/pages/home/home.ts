import { Component } from '@angular/core';
import { NavController,NavParams, IonicPage } from 'ionic-angular';
import { CadastroViagemPage } from '../cadastro-viagem/cadastro-viagem';
import { ViagemPage} from '../viagem/viagem';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public viagens = JSON.parse(localStorage.getItem("viagens"));
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    
    
  }
  
  ionViewWillEnter() {
    this.viagens = JSON.parse(localStorage.getItem("viagens"));
    if(!this.viagens) {
      this.viagens = [''];
    }
  }
  
  goCadastroViagemPage():void {
    this.navCtrl.push(CadastroViagemPage);
  }

  goViagemPage(i):void {
    localStorage.setItem("indexViagem",i);
    this.navCtrl.push(ViagemPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.viagens);
  }

}
