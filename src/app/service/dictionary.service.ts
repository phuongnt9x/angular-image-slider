import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iwords: IWord[] =[{
    word: 'hello',
    mean: 'xin chao'
  }, {
    word: 'dictionary',
    mean: 'tu dien'
  }, {
    word: 'phone',
    mean: 'dien thoai'
  }, {
    word: 'computer',
    mean: 'maytinh'
  }]
  constructor() { }
  translate(word: any){
    return this.iwords.find(item => item.word==word)
  }
}
