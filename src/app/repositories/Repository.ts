import { DomService } from '../services/domServices';

class Repository{
    private storage:Array<any>;

    constructor(source){
        this.storage=DomService.getStored(source)
    }

    One(id:number):any{
      return this.storage.filter(item=>item.id==id);
    }
    All(){
      return this.storage;
    }

    _One(id:number):any{
      return ;
    }
    _All():Array<any>{
      return ;
    }

}

export default Repository;
