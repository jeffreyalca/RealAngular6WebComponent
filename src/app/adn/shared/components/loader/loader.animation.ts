import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const loaderFade = trigger('loaderFade', [
  transition(':enter', [
    style({ opacity: 1 }),
    animate('0.2s ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', animate('0.2s 0.3s ease-in-out', style({ opacity: 0 }))),
]);
