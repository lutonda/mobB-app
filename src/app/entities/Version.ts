import  VersionRepository from '../repositories/VersionRepository'
import  Currency from './Currency'

class Version extends VersionRepository{

    constructor(){
      super('version')
    }
    id: number;

    version: number;

    description: string;

    curencies: Array<Currency>;

    createdAt: Date;

    isPublished: boolean;
}

export default Version;
