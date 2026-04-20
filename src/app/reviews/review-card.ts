import { Component, input } from '@angular/core';

@Component({
  selector: 'app-reviews-card',
  standalone: true,
  imports: [],
  template: `
    <div class="review-card">
      <div class="review-header">
        <div class="review-stars">
          @for (star of stars; track star) {
            <svg class="star" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="1">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
        </div>
        <img [src]="avatar()" [alt]="name()" class="avatar"/>
      </div>
      <p class="review-text">{{ text() }}</p>
      <div class="review-author">
        <div class="author-info">
          <span class="author-name">{{ name() }}</span>
          <span class="author-role">{{ role() }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .review-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .review-stars {
        display: flex;
        gap: 0.125rem;
      }

      .star {
        width: 20px;
        height: 20px;
      }

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #e2e8f0;
      }

      .review-text {
        font-size: 0.9375rem;
        line-height: 1.7;
        color: #4a5568;
        margin: 0;
      }

      .review-author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0.75rem;
        border-top: 1px solid #edf2f7;
      }

      .author-info {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
      }

      .author-name {
        font-weight: 600;
        color: #1a202c;
        font-size: 0.9375rem;
      }

      .author-role {
        font-size: 0.8125rem;
        color: #718096;
      }
    `,
  ],
})
export class ReviewsCard {
  rating = input.required<number>();
  name = input.required<string>();
  role = input.required<string>();
  company = input.required<string>();
  avatar = input.required<string>();
  text = input.required<string>();

  stars = Array(5).fill(0);
}
