import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CadastroViagemPage } from '../cadastro-viagem/cadastro-viagem';
import { ViagemPage} from '../viagem/viagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public viagens:any = localStorage.getItem('viagens');
  public viagem:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.viagens = JSON.parse(this.viagens);
    this.viagens;
    this.viagem;
  }
  goCadastroViagemPage():void {
    this.navCtrl.push(CadastroViagemPage);
  }

  goViagemPage(i):void {
    localStorage.setItem("indexViagem",i);
    this.navCtrl.push(ViagemPage);
  }

}
