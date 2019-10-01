import Repository from  './Repository'
import Currency from  '../entities/Currency'

class CurrencyRepository extends Repository implements RepositoryInterface<Currency>{


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
}


export default CurrencyRepository
