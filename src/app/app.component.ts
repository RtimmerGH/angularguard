import { Component } from '@angular/core';
import { UserRole } from './services/user-roles';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anon = UserRole.anonymous;
  user = UserRole.user;
  admin = UserRole.admin;
  role = UserRole.anonymous;

  constructor(private userService: UserService) {}

  changeRole(role: UserRole) {
    this.userService.setRole(role);
    this.role = role;    
  }

}
