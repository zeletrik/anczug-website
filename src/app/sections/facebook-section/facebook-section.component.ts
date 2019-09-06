import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/service/FacebookService';

@Component({
  selector: 'app-facebook-section',
  templateUrl: './facebook-section.component.html',
  styleUrls: ['./facebook-section.component.css']
})
export class FacebookSectionComponent implements OnInit {
  posts: FacebookEntry[] = new Array();
  pageId = '749832225118453';

  constructor(private facebookService: FacebookService){ }

  ngOnInit() {
      this.getFeed();
  }


  getFeed(): void {
    this.facebookService.getEntries().subscribe(result => {
      const outher = result['posts'];
      const posts: FacebookEntry[] = outher['data'];
      posts.forEach(entry => {
        entry.id = entry.id.split('_')[1];
      });

      this.posts = posts;
  });
  }
}

interface FacebookEntry {
  created_time: Date;
  message: String;
  id: String;
}
