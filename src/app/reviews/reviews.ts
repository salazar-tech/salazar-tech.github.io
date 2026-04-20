import { Component } from '@angular/core';
import { ReviewsCard } from './review-card';

const reviews = [
  {
    rating: 5,
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'TechStart Inc.',
    avatar: 'assets/avatars/sarah-chen.png',
    text: 'Odoo transformed our inventory management. What used to take days now takes hours. The implementation was seamless and the team was incredibly responsive.',
  },
  {
    rating: 4,
    name: 'Marcus Rivera',
    role: 'CTO',
    company: 'GlobalTrade Co.',
    avatar: 'assets/avatars/marcus-rivera.png',
    text: 'We evaluated three consulting firms before choosing this team. Their deep understanding of Odoo modules and business logic saved us months of development time.',
  },
  {
    rating: 5,
    name: 'Emily Watson',
    role: 'VP of Engineering',
    company: 'EduPlatform Ltd.',
    avatar: 'assets/avatars/emily-watson.png',
    text: 'The Moodle customization exceeded our expectations. Student engagement is up 40% since the new system went live. Highly recommend for any education platform.',
  },
];

@Component({
  selector: 'app-reviews',
  imports: [ReviewsCard],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  reviews = reviews;
}
