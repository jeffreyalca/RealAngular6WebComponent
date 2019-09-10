import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { loaderFade } from './loader.animation';

@Component({
  selector: 'adn-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [loaderFade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @HostBinding('class.loader') true;

  @HostBinding('@loaderFade') animate = true;

  @Input() backdrop = true;

  @HostBinding('class.fluid')
  @Input()
  fluid = true;
}
