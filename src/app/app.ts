import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Footer } from "./footer/footer";
import { Faq } from "./faq/faq";
import { About } from "./about/about";
import { Booking } from "./booking/booking";
import { Content } from "./content/content";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Footer, Faq, About, Booking, Content],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('salazar-tech');
}
