import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { TypeSelectDialogComponent } from '../type-select-dialog/type-select-dialog.component';
@Component({
  selector: 'app-type-builder',
  templateUrl: './type-builder.component.html',
  styleUrls: ['./type-builder.component.scss'],
})
export class TypeBuilderComponent implements OnInit {
  @Input() contentType: any;
  @Output() propAdded = new EventEmitter<any>();
  @Output() propRemoved = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openTypeSelect() {
    const dialogRef = this.dialog.open(TypeSelectDialogComponent, {
      width: '400px',
      data: {
        optionSelect: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.newPropertyTypeCreated(result.optionSelect);
    });
  }

  newPropertyTypeCreated(type) {
    let obj = {
      id: this.contentType.id,
      type: type,
    };
    this.propAdded.emit(obj);
  }

  propertyTypeRemoved(prop, index) {
    let obj = {
      id: this.contentType.id,
      prop: prop,
      propIndex: index,
    };
    this.propRemoved.emit(obj);
  }
}
