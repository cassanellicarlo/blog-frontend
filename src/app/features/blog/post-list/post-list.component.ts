import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService:PostService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts (){
    this.postService.getPosts().subscribe( posts => {
      console.log(posts);
      this.posts=posts;
    });
  }

}
