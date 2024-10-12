import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailVerificationComponent } from './email-verification.component';
import { Router } from '@angular/router';

describe('EmailVerificationComponent', () => {
  let component: EmailVerificationComponent;
  let fixture: ComponentFixture<EmailVerificationComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerificationComponent ],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onVerify method on button click', () => {
    spyOn(component, 'onVerify');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onVerify).toHaveBeenCalled();
  });

  it('should navigate to password reset page after email verification', () => {
    component.onVerify();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/password-reset']);
  });
});
