import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  selectedItem = signal<number | null>(null);

  items: FaqItem[] = [
    {
      question: 'What exactly does the implementation process involve?',
      answer: 'Implementation consists of four phases: configuring the software to match your specific requirements, migrating essential business data, testing your business workflows, and training your team to ensure everyone is ready for a successful launch.',
    },
    {
      question: 'How long does a typical implementation take?',
      answer: 'A basic implementation typically starts at 40 hours by using native Odoo or Moodle features without custom code or complex integrations. The goal is to get your business operational quickly while maintaining a scalable approach for future growth.',
    },
    {
      question: 'How do you charge for your services?',
      answer: 'I bill hourly for implementation via two tiers. Functional Support (15 USD/hour) uses built-in features and basic integrations for speed. Core Support (25 USD/hour) handles custom code and in-depth engineering for highly specific or complex technical requirements.',
    },
    {
      question: 'Do you also provide hosting services for Odoo or Moodle?',
      answer: "Yes. Through my partnerships with R7 Labs and IONOS, I provide high-performance Virtual Private Servers and Bare Metal solutions tailored specifically for Odoo and Moodle environments.",
    }
  ];

  toggleItem(index: number): void {
    this.selectedItem.update((current) => (current === index ? null : index));
  }
}
