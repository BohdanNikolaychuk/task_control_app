import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss'],
})
export class PathNotFoundComponent implements OnInit {
  title = 'Path not found works!';

  constructor() {}

  ngOnInit(): void {}
}
