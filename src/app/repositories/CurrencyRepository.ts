import Repository from './Repository';
//import IRepository from './IRepository';
import Currency from  '../entities/Currency'
import { Version } from '@angular/compiler';

class CurrencyRepository extends Repository implements IRepository<Currency>{

  private identity:string='currency'

  constructor(identity){
    super(identity)
  }
  getAll(){
    return this.All();
  }

  getOne(id:number):Currency{
    return this.One(id);
  }

  findOne(){
    return new Currency();
  }

  findBy(arr:Array<object>):Array<Currency>{
    return ;
  }
  findAll():Array<Currency>{
    return;
  }

}


export default CurrencyRepository
