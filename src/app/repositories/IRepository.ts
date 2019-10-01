interface IRepository<T> {

  getOne(id:number):T;

  getAll():Array<T>;
}
