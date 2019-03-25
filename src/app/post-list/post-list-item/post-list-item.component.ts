import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;


  constructor() { }

  ngOnInit() {
  }

  onLoveIts(){
    this.post.loveIts = this.post.loveIts + 1;
    console.log(this.post.loveIts);
  }
  onDontLoveIts(){
    this.post.loveIts = this.post.loveIts - 1;
    console.log(this.post.loveIts);
  }

}
