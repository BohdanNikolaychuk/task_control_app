import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  dashId!: string;

  @Input() show = false;
  @Input() customClass = '';

  constructor() {}

  ngOnInit(): void {}
}
