import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { DataService } from 'src/app/core/services/data.service';
import { Post } from 'src/app/shared/intaerfaces/post';

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
    private dataService: DataService
  ) { };

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getPostsByUserId(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {

        for (const post of data) {
          this.dataService.getCommentsForPosts(post.id)
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

  private getPostWithMostComments(posts: any[]): any {
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
