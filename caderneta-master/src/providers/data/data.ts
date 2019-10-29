import { Injectable } from '@angular/core';

@Injectable()
export class dataProvider {
  public viagens:any = [];
  static setData: any;
  static getData: any;

  constructor() {
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
    this.viagens;
  }

  setData(titulo: string,data: string, cidade: string, partida: string, retorno: string, observacoes: string){
       let viagem = {
        titulo:"",
        data:"",
        cidade:"",
        partida:"",
        retorno:"",
        observacoes:""
      } 
      viagem.titulo = titulo;
      viagem.data = data;
      viagem.cidade = cidade;
      viagem.partida = partida;
      viagem.retorno = retorno;
      viagem.observacoes = observacoes;

      localStorage.setItem("viagem",JSON.stringify(viagem));
  }

  getData(){
    return localStorage.getItem("viagem");
  }

}
