import { Component } from '@angular/core';
import { NavController,NavParams, IonicPage,ToastController } from 'ionic-angular';
import { CadastroViagemPage } from '../cadastro-viagem/cadastro-viagem';
import { dataProvider, viagem, viagensList} from '../../providers/data/data';
import { ViagemPage } from '../viagem/viagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public viagens:viagensList[];
  constructor(public navCtrl: NavController,public navParams: NavParams,private data: dataProvider, private toast: ToastController) {  
  }
  
  ionViewWillEnter() {
    this.data.getAll()
      .then((result) => {
        this.viagens = result;
      });
    //console.log(this.viagens);
  }
  
  goCadastroViagemPage():void {
    this.navCtrl.push(CadastroViagemPage);
  }

  goViagemPage(item: viagensList){
    this.navCtrl.push(ViagemPage, { key: item.key, viagem: item.viagem });
    console.log(item);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
    //console.log(this.viagens);
  }

}
