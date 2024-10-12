import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent {
  constructor(private authService: AuthService) {}

  resendEmail(): void {
    this.authService.resendVerificationEmail().subscribe(
      response => {
        console.log('Verification email resent');
      },
      error => {
        console.error('Failed to resend email', error);
      }
    );
  }
}
