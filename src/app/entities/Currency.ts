import  CurrencyRepository from '../repositories/CurrencyRepository'
import  Version from './Version'

class Currency extends CurrencyRepository{

constructor(){
  super('currencies')
}
    id:number;

    money:string;

    value:number;

    description: string;

    createdAt: Date;

    version: Version;

    isPublished: boolean
}

export default Currency
