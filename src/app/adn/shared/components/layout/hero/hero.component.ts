import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'adn-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit {
  @HostBinding('class.hero') true;
  @HostBinding('class.hero--fullsize')
  @Input()
  fullsize = false;

  @Input() logo: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  constructor(private cdr: ChangeDetectorRef) {}

  getImageProperties(path: string): any {
    const parsed = path.split(/\.(gif|jpg?g|png|webp)$/i);
    return {
      path: parsed[0],
      ext: parsed[1],
    };
  }

  getImagePaths(image: string): any {
    const { path, ext } = this.getImageProperties(image);
    return {
      original: image,
      large: `${path}_large.${ext}`,
      medium: `${path}_medium.${ext}`,
      small: `${path}_small.${ext}`,
    };
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
