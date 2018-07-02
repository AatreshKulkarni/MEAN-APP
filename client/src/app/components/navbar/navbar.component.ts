import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
  ) { }

  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.ngFlashMessageService.showFlashMessage({
      messages: ['You are logged out'],
      dismissible: true,
      timeout: false,
      type: 'info'
    });
    this.router.navigate(['/']); // Navigate back to home page
  }

  ngOnInit() {
  }

}
