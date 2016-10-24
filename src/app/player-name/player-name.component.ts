import { Component, OnInit,forwardRef  } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {isUndefined} from "util";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PlayerNameComponent),
  multi: true
};

@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class PlayerNameComponent implements OnInit, ControlValueAccessor {

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    var orig = this.__playerName;
    this.__playerName = obj;
    if (this.__playerName != orig) {
      this.onChange(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  constructor() { }

  ngOnInit() {
  }

  private __playerName:string;
  set playerName(v:string) {
    this.writeValue(v);
  }
  get playerName() {
    return this.__playerName;
  }

}
