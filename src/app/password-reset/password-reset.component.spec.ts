import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordResetComponent } from './password-reset.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetComponent ],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onResetPassword method on form submit', () => {
    spyOn(component, 'onResetPassword');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onResetPassword).toHaveBeenCalled();
  });

  it('should navigate to login page after password reset', () => {
    component.onResetPassword();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
