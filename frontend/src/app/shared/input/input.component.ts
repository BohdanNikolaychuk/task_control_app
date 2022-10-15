import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() ngModel!: string;

  @Output()
  myPropChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
