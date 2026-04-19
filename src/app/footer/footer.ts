import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, FontAwesomeModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  linkedInIcon = faLinkedin;
  youtubeIcon = faYoutube;
  githubIcon = faGithub;
}
