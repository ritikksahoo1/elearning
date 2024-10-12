import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  passwordResetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.value).subscribe(
        response => {
          console.log('Password reset link sent');
        },
        error => {
          console.error('Password reset failed', error);
        }
      );
    }
  }
}
