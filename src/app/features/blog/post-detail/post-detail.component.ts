import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = new Post();
  loading: boolean=true;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPostById();
  }

  getPostById(){
    this.loading=true;
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.postService.getPostById(id.toString()).subscribe ( post => {
      this.loading=false;
      this.post=post;
    });
  }

  // Push new comment in comments array 
  updateComments (newComment: Comment){
    this.post.comments.push(newComment);
  }

}
