import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPostById();
  }

  getPostById(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.postService.getPostById(id.toString()).subscribe ( post => {
      this.post=post;
    });
  }

}
