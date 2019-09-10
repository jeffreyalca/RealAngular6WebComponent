import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'adn-hero-toolbar',
  templateUrl: './hero-toolbar.component.html',
  styleUrls: ['./hero-toolbar.component.scss'],
})
export class HeroToolbarComponent {
  @HostBinding('class.hero__toolbar') true;
}
