import {
  animate,
  state,
  style,
  transition,
  trigger,
  animation,
} from '@angular/animations';

export const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ timings }}', style({ opacity: 1 })),
]);

export const fadeOutAnimation = animation([
  style({ opacity: 1 }),
  animate('{{ timings }}', style({ opacity: 0 })),
]);

export const slideInAnimation = animation([
  style({ transform: 'translateY({{ from }})', opacity: 0 }),
  animate('{{ timings }}', style('*')),
]);

export const slideOutAnimation = animation([
  animate(
    '{{ timings }}',
    style({ transform: 'translateY({{ to }})', opacity: 0 }),
  ),
]);

export const rotateAnimation = animation([
  animate(
    '{{ timings }}',
    style({ transform: 'rotate({{ rotate }})', transformOrigin: '50% 50%' }),
  ),
]);

export const CollapseAnimation = trigger('collapse', [
  state('collapsed, void', style({ height: '0px', minHeight: '0' })),
  state('expanded', style({ height: '*' })),
  transition('expanded <=> collapsed', animate('250ms ease-out')),
]);
