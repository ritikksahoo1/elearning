import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display login button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Login');
  });

  it('should call onLogin method on button click', () => {
    spyOn(component, 'onLogin');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('should navigate to profile page on correct password', () => {
    component.password = 'correct_password';
    component.onLogin();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/profile']);
  });

  it('should navigate to email verification page on incorrect password', () => {
    component.password = 'wrong_password';
    component.onLogin();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/email-verification']);
  });
});
