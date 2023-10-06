import { Injectable } from '@angular/core';
import { UserRole } from './user-roles';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role: UserRole = UserRole.anonymous;

  constructor() { }

  getRole(): UserRole {
    return this.role;
  }

  setRole(role:UserRole): void {
    this.role = role;
  }
}
