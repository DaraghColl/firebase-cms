import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-type-select-dialog',
  templateUrl: './type-select-dialog.component.html',
  styleUrls: ['./type-select-dialog.component.scss'],
})
export class TypeSelectDialogComponent implements OnInit {
  typeOptions = [
    {
      option: 'input',
      icon: 'text_format',
    },
    {
      option: 'textarea',
      icon: 'text_format',
    },
    {
      option: 'dropdown',
      icon: 'text_format',
    },
    {
      option: 'image',
      icon: 'text_format',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<TypeSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  selectType(type: string) {
    this.data.optionSelect = type;
    this.dialogRef.close(this.data);
  }
}
