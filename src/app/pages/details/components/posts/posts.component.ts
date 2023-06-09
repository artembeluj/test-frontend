import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { CommentService } from 'src/app/core/services/comment.service';
import { Post } from 'src/app/shared/intaerfaces/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  public id!: number;
  public posts!: Post[];
  public comments!: Comment;
  public mostPopularPost!: Post;
  private destroy$: Subject<void> = new Subject();

  public constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) { };

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPostsByUserId(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {

        for (const post of data) {
          this.commentService.getCommentsForPosts(post.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe((comments) => {
              post.comments = comments;
            });
        };

        let allPosts = data;
        this.mostPopularPost = this.getPostWithMostComments(allPosts);
        this.posts = data.filter(p => p.id !== this.mostPopularPost.id);
      });
  };

  private getPostWithMostComments(posts: any[]): Post {
    let postWithMostComments = posts[0];

    for (let post of posts) {
      if (post.comments && post.comments.length > postWithMostComments.comments.length) {
        postWithMostComments = post;
      };
    };

    return postWithMostComments;
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
