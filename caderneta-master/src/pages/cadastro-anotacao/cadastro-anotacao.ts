import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {dataProvider, viagem, anotacao} from "../../providers/data/data";
import {ViagemPage} from '../viagem/viagem';

/**
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-anotacao',
  templateUrl: 'cadastro-anotacao.html',
})
export class CadastroAnotacaoPage {

  [x: string]: any;
  
  public cadastroForm = {
    data:"",
    hora:"",
    coordenadas:"",
    texto:"",
    imagem:""
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private data: dataProvider, private toast: ToastController) {
    this.cadastroForm = {
      data:"",
      hora:"",
      coordenadas:"",
      texto:"",
      imagem:"",
    }
    this.model = new anotacao();
    
  }
  setData(data: string, hora: string, coordenadas: string, texto: string){
    let cadastroForm = {
      data:"",
      hora:"",
      coordenadas:"",
      texto:"",
      imagem:"",
    } 
    cadastroForm.data = data;
    cadastroForm.hora = hora;
    cadastroForm.coordenadas = coordenadas;
    cadastroForm.texto = texto;

  }
  logForm(){
    
  }
  getData(){
    return localStorage.getItem("viagens");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAnotacaoPage');
  }

  goViagem(){
    this.navCtrl.push(ViagemPage);
  }

  save() {
    this.saveAnotacao()
      .then(() => {
        this.toast.create({ message: 'Anotacao Salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar anotacao.', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private saveAnotacao() {
    if (this.key) {
      return this.data.updateAnotacao(this.key, this.model);
    } else {
      return this.data.insertAnotacao(this.model);
    }
  }

}
