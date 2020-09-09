import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') items: any[];



  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

  }

  getPageDetails(imageUrl: string) {
    console.log(imageUrl);
    this.dataService.getPage()
      .subscribe((response) => {
        if (response['message'] === 'Sucessfully retrieved page information') {
          this.dataService.createPost(imageUrl).subscribe((res) => {
            alert(res['message']);
          });
        }
      });
  }

}
