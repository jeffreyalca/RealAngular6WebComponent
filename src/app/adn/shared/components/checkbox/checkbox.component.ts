import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'adn-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Output() change = new EventEmitter<undefined>();

  @Input() id: string;
  @Input() value: any;

  _value: any = '';
  propagateChange: any = () => {};

  onChange(event, value: any): void {
    this.change.emit(value);
    this.propagateChange(event.target.checked);
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {}
}
