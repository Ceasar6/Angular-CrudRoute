import {Injectable} from '@angular/core';
import {IUsers} from '../iusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUsers[] = [
    {
      id: 1,
      name: 'Wayne',
      email: 'Wayne@gmail.com',
      address: 'LA',
      role: 1
    },
    {
      id: 2,
      name: 'Wayne2',
      email: 'Wayne2@gmail.com',
      address: 'NY',
      role: 1
    },
    {
      id: 3,
      name: 'Wayne3',
      email: 'Wayne3@gmail.com',
      address: 'Cali',
      role: 2
    },
    {
      id: 4,
      name: 'Wayne4',
      email: 'Wayne4@gmail.com',
      address: 'LA',
      role: 2
    },
    {
      id: 5,
      name: 'Wayne5',
      email: 'Wayne5@gmail.com',
      address: 'NY',
      role: 1
    }
  ];

  constructor() {
  }

  getAll(): IUsers[] {
    return this.users;
  }

  // tslint:disable-next-line:typedef
  add(user: IUsers) {
    return this.users.push(user);
  }

  // tslint:disable-next-line:typedef
  getUserId(id: number) {
    return this.users.find(user => user.id === id);
  }

  // tslint:disable-next-line:typedef
  edit(user: IUsers, id: number) {
    // tslint:disable-next-line:no-shadowed-variable triple-equals
    const index = this.users.findIndex(user => user.id === id);
    return this.users.splice(index, 1, user);
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    return this.users.splice(index, 1);
  }

}
