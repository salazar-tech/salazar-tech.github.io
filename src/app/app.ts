import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Footer } from "./footer/footer";
import { Faq } from "./faq/faq";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, RouterOutlet, Footer, FontAwesomeModule, Faq, About],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('salazar-tech');
}
