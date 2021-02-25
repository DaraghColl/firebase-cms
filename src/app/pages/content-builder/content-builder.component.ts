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
      id: 0,
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
    {
      id: 1,
      title: 'customer',
      description: 'customer list',
      props: [
        {
          title: 'customer name',
          type: 'input',
        },
        {
          title: 'customer description',
          type: 'textarea',
        },
        {
          title: 'customer label',
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

  propAdded(data: any) {
    console.warn(data);
    console.log(this.getPropType(data.type));
    this.typesList[data.id].props.push(this.getPropType(data.type));
  }

  propRemoved(data: any) {
    this.typesList[data.id].props.splice(data.index, 1);
  }

  private getPropType(type) {
    switch (type) {
      case 'input':
        return {
          title: '',
          type: 'input',
        };
    }
  }
}
