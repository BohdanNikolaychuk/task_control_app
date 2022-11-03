import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name!: string;

  get getNameButton(): string {
    return this.name;
  }

  constructor() {}

  ngOnInit(): void {}
}
