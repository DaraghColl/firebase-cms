import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-builder',
  templateUrl: './content-builder.component.html',
  styleUrls: ['./content-builder.component.scss'],
})
export class ContentBuilderComponent implements OnInit {
  sidebarOpen = true;
  sidebarFixed = true;
  selectedContentType: any;
  typesList: any[] = [
    {
      title: 'post',
      description: 'blog post',
      props: [
        {
          title: 'post title',
          type: 'input',
        },
        {
          title: 'post description',
          type: 'textarea',
        },
        {
          title: 'post label',
          type: 'dropdown',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  contentTypeSelected(event) {
    this.selectedContentType = event;
  }
}
