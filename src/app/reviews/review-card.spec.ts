import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsCard } from './review-card';

describe('ReviewsCard', () => {
  let component: ReviewsCard;
  let fixture: ComponentFixture<ReviewsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsCard);
    component = fixture.componentInstance;
    component.rating.set(5);
    component.name.set('Test User');
    component.role.set('Developer');
    component.company.set('Test Corp');
    component.logo.set('assets/test.png');
    component.text.set('Great service!');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
