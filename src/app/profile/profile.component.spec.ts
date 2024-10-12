import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user profile details', () => {
    component.user = { name: 'John Doe', email: 'john.doe@example.com', profilePic: '/assets/images/profile-pic.jpg' };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.profile-name').textContent).toContain('John Doe');
    expect(compiled.querySelector('.profile-email').textContent).toContain('john.doe@example.com');
  });
});
