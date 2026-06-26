import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface ContentCard {
  type: string;
  title: string;
  content: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-content',
  imports: [MatCardModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  cards: ContentCard[] = [
    {
      type: 'Blog',
      title: 'Enabling Kajabi Strict DMARC when using your own Name Server',
      content: 'Enabling Kajabi Strict DMARC when using your own Name Server',
      image: 'assets/dmarc-post.png',
      alt: 'DMARC'
    },
    {
      type: 'Webinar',
      title: 'Learning how to use an Odoo MCP Server with Claude Subscription',
      content: 'Learning how to use an Odoo MCP Server with Claude Subscription',
      image: 'assets/odoo-post.png',
      alt: 'Odoo'
    },
    {
      type: 'Blog',
      title: 'Vibe Coding Your Way to Better Emails Campaigns with Claude Code',
      content: 'Vibe Coding Your Way to Better Emails Campaigns with Claude Code',
      image: 'assets/email-post.png',
      alt: 'Email'
    }
  ];
}