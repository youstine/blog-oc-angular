import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})
export class PostListComponent implements OnInit { 

  
   onAddLoveIt(){
    this.postLoveIts = this.postLoveIts + 1;
  };
  onRemoveLoveIt(){
    this.postLoveIts = this.postLoveIts - 1;
  };
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: Date;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }



}
