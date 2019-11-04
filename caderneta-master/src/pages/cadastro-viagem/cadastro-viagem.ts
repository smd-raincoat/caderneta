import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms'
import {dataProvider, viagem} from "../../providers/data/data";
import {HomePage} from '../home/home'



@IonicPage()
@Component({
  selector: 'page-cadastro-viagem',
  templateUrl: 'cadastro-viagem.html',
})
export class CadastroViagemPage {
  
  [x: string]: any;
  
  public cadastroForm = {
    titulo:"",
    data:"",
    cidade:"",
    partida:"",
    retorno:"",
    observacoes:"",
    anotacoes:[]
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private data: dataProvider, private toast: ToastController) {
    this.model = new viagem();
    
    this.cadastroForm = {
      titulo: '',
      data:'',
      cidade:'',
      partida:'',
      retorno:'',
      observacoes:'',
      anotacoes:[]
    }
    
  }
  setData(titulo: string,data: string, cidade: string, partidaData: string,partidaHora:string, retornoData: string,retornoHora: string, observacoes: string){
    let cadastroForm = {
      titulo: '',
      data:'',
      cidade:'',
      partidaData:'',
      partidaHora:'',
      retornoData:'',
      retornoHora:'',
      observacoes:''
    } 
    cadastroForm.titulo = titulo;
    cadastroForm.data = data;
    cadastroForm.cidade = cidade;
    cadastroForm.partidaData = partidaData;
    cadastroForm.partidaHora = partidaHora;
    cadastroForm.retornoData = retornoData;
    cadastroForm.retornoHora = retornoHora;
    cadastroForm.observacoes = observacoes;

  }
  logForm(){
    console.log(this.cadastroForm);
  }
  getData(){
    return localStorage.getItem("viagens");
  }

  save() {
    this.saveViagem()
      .then(() => {
        this.toast.create({ message: 'Viagem Salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar viagem.', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private saveViagem() {
    if (this.key) {
      return this.data.update(this.key, this.model);
    } else {
      return this.data.insert(this.model);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroViagemPage');
    
  }

}
