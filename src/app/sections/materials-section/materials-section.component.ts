import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as egyenData from '../../../assets/json/egyen.json';

@Component({
  selector: 'app-materials-section',
  templateUrl: './materials-section.component.html',
  styleUrls: ['./materials-section.component.css']
})
export class MaterialsSectionComponent implements OnInit {
  closeResult: string;
  dressData: DressData[]  = egyenData['default'];


  constructor(private modalService: NgbModal) {
  }

  open(content, type, modalDimension) {
      if (modalDimension === 'sm' && type === 'modal_mini') {
          this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else if (modalDimension === '' && type === 'Notification') {
        this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
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

  ngOnInit() {
  }

}

interface DressData {
    name: String;
    description: String;
    pictureUrl: String;
}
