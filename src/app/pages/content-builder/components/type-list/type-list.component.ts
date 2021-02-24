import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent implements OnInit {
  @Input() typesList: any[];
  @Output() contentTypeSecleted = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.typesList);
  }

  onTypeSelect(type: any) {
    this.contentTypeSecleted.emit(type);
  }
}
