import { Component, OnInit } from '@angular/core';
import * as imageData from '../../../assets/json/images.json';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})
export class GallerySectionComponent implements OnInit {
  rightFiles: String[] = Array();
  leftFiles: String[] = Array();
  closeResult: string;
  items: GalleryItem[] = Array();

  basePath = 'assets/img/gallery/';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    const files: String[] = imageData['default']['pictureUrl'];

    files.forEach(imageSrc => {
      this.items.push(new ImageItem({ src: this.basePath + imageSrc + '.jpg', thumb: this.basePath + 'thumbnails/' + imageSrc + '_tn.jpg' }));
    });

    for (let i = 0; i < 10; i++) {
      this.rightFiles.push(files[Math.floor(Math.random() * files.length)] + '.jpg');
    }
    for (let i = 0; i < 10; i++) {
      this.leftFiles.push(files[Math.floor(Math.random() * files.length)] + '.jpg');
    }
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}
}