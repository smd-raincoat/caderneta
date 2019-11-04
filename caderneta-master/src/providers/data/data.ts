import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class dataProvider {
  constructor(private storage: Storage,private datepipe:DatePipe) { }
 
  public insert(viagem: viagem) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, viagem);
  }
 
  public update(key: string, viagem: viagem) {
    return this.save(key, viagem);
  }
 
  private save(key: string, viagem: viagem) {
    return this.storage.set(key, viagem);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }
 
  public getAll() {
 
    let viagens: viagensList[] = [];
 
    return this.storage.forEach((value: viagem, key: string, iterationNumber: Number) => {
      let viagem = new viagensList();
      viagem.key = key;
      viagem.viagem = value;
      viagens.push(viagem);
    })
      .then(() => {
        return Promise.resolve(viagens);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class viagem {
    titulo: string;
    data:string;
    cidade:string;
    partida:string;
    retorno:string;
    observacoes:string;
    anotacoes:anotacaoList[];
  }
   
  export class viagensList {
    key: string;
    viagem: viagem;
  }

  export class anotacaoList {
    key: string;
    anotacao: anotacao;
  }

  export class anotacao {
    data: string;
    hora: string;
    coordenadas: string;
    texto: string;
  }
