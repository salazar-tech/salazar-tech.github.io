import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Features } from "./features/features";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, RouterOutlet, Features],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('salazar-tech');
}
