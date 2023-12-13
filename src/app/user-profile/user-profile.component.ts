import { Component } from '@angular/core';
import { User } from './user-profile.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: User;
  showAge: boolean = false;
  editingQuote: boolean = false;
  editedQuote: string = '';

  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      'two beer or not to beer',
      'https://randomuser.me/api/portraits/lego/2.jpg'
    );
    this.editedQuote = this.user.quote;
    console.log(this.user);
  }

  toggleAge() {
    this.showAge = !this.showAge;
  }
  enterEditMode() {
    this.editingQuote = true;
  }
  saveQuote() {
    this.user.quote = this.editedQuote;
    this.editingQuote = false;
  }
}
