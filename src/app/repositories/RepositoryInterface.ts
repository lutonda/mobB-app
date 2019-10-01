interface RepositoryInterface<T> {

  getOne(id:number):T;
  getAll():Array<T>;
}
