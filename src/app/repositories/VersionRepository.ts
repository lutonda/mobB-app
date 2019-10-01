import Repository from  './Repository'
import Version from  '../entities/Version'

class VersionRepository extends Repository implements RepositoryInterface<Version>{


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
