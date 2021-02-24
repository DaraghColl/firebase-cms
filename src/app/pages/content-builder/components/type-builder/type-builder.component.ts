import { Component, OnInit, Inject, Input } from '@angular/core';
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
      console.log('The dialog was closed');
      console.warn(result);
    });
  }
}
