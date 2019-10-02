interface IRepository<T> {

  getOne(id:number):T;

  getAll():Array<T>;

  findOne(id:number):T;

  findBy(arr:Array<object>):Array<T>;

  findAll():Array<T>;

}
