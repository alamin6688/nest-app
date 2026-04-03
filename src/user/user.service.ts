import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, name: 'John', email: '[EMAIL_ADDRESS]' },
    { id: 2, name: 'Jane', email: '[EMAIL_ADDRESS]' },
    { id: 3, name: 'Bob', email: '[EMAIL_ADDRESS]' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
