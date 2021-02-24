import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-builder',
  templateUrl: './type-builder.component.html',
  styleUrls: ['./type-builder.component.scss'],
})
export class TypeBuilderComponent implements OnInit {
  @Input() contentType: any;

  name: string = '';
  constructor() {}

  ngOnInit(): void {
    console.warn('********');
    console.warn(this.contentType);

    this.name = 'Nancy';
  }
}
