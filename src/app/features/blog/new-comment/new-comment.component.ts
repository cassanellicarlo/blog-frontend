import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/author';
import { Comment } from 'src/app/core/models/comment';
import { PostService } from 'src/app/core/services/post.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  commentAuthor: Author = {
    id: '',
    username: ''
  }

  newComment: Comment = {
    text: '',
    author: this.commentAuthor
  };


  constructor(private postService: PostService, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addComment () {
    this.newComment.author.id=this.auth.getUserDetails()._id;
    this.newComment.author.username=this.auth.getUserDetails().name;

    const id = this.route.snapshot.paramMap.get('id'); // post id

    this.postService.addComment(id.toString(),this.newComment).subscribe ( data => {
      console.log(data.message);
    });
  }

}
