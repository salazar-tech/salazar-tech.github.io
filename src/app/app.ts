import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Features } from "./features/features";
import { Footer } from "./footer/footer";
import { Faq } from "./faq/faq";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, RouterOutlet, Features, Footer, FontAwesomeModule, Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('salazar-tech');
}
