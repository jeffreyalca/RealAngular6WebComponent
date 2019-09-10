import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface ToggleStatus {
  element: ElementRef;
  active: boolean;
}

@Directive({ selector: '[ecpToggle]' })
export class ToggleDirective implements AfterViewInit {
  public element: any;
  private status = false;
  private selfClick = false;
  private status$ = new BehaviorSubject<ToggleStatus>({
    element: null,
    active: this.status,
  });

  private className = 'is-active';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input()
  set ecpToggle(value: string) {
    if (!value) return;
    this.className = value;
  }

  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
    this.status$.next({
      element: this.element,
      active: this.status,
    });
  }

  @HostListener('click')
  onClick() {
    this.status = !this.status;
    this.status$.next({
      element: this.element,
      active: this.status,
    });
    this.toggle();
    this.selfClick = true;
  }

  @HostListener('document:keydown.escape', ['$event'])
  @HostListener('document:click', ['$event'])
  onEscKeyPressed() {
    if (!this.selfClick) {
      this.setStatus(false);
    }

    this.selfClick = false;
  }

  toggle() {
    if (this.status) {
      this.renderer.addClass(this.element, this.className);
    } else {
      this.renderer.removeClass(this.element, this.className);
    }
  }

  setStatus(status: boolean) {
    this.status = status;
    this.toggle();
  }

  statusChange(): Observable<ToggleStatus> {
    return this.status$.asObservable();
  }
}
