import { Component, OnInit } from '@angular/core';
import * as membersData from '../../../assets/json/members.json';

@Component({
  selector: 'app-members-section',
  templateUrl: './members-section.component.html',
  styleUrls: ['./members-section.component.css']
})
export class MembersSectionComponent implements OnInit {
  members: MembersData[]  = membersData['default'];
  memberSize = this.members.length;
  constructor() { }

  ngOnInit() {
    const nucleoView = document.getElementsByClassName('icons-container')[0];
    window.addEventListener('scroll', function (e) {
    if (this.isInViewport(nucleoView)) {
       nucleoView.classList.add('on-screen');
     } else {
        nucleoView.classList.remove('on-screen');
      }
    }.bind(this), false);
  }
  isInViewport(elem) {
      const bounding = elem.getBoundingClientRect();
      return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
}

interface MembersData {
  name: String;
  alias: String;
  pictureUrl: String;
}
