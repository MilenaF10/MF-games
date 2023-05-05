import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostaMenu= new Subject<boolean>();

  constructor() { }

  login(usuario:string, senha:string):void{
    if(usuario=="Aluno" && senha == "1234"){
      localStorage.setItem('token',"qwer1234");
      this.mostaMenu.next(false);
    }else{
      this.mostaMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostaMenu.next(valor);
  }

  getMostraMenu(){
    return this.mostaMenu.asObservable();
  }



}
