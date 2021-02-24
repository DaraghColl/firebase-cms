import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-builder',
  templateUrl: './content-builder.component.html',
  styleUrls: ['./content-builder.component.scss'],
})
export class ContentBuilderComponent implements OnInit {
  isOpen = true;
  fixed: true;
  constructor() {}

  ngOnInit(): void {}
}
