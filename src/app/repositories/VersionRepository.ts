import Repository from  './Repository';
import IRepository from  './IRepository';
import Version from  '../entities/Version'

class VersionRepository extends Repository implements IRepository<Version>{

  private identity:string='version'

  constructor(identity){
    super(identity)
  }

  getAll(){
    return this.All();
  }

  getOne(id:number):Version{
    return this.One(id);
  }

}

export default VersionRepository
