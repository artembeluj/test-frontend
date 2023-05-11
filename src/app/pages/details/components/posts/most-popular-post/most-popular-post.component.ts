import { Component, Input } from '@angular/core';

import { Post } from 'src/app/shared/intaerfaces/post';

@Component({
  selector: 'app-most-popular-post',
  templateUrl: './most-popular-post.component.html',
  styleUrls: ['./most-popular-post.component.scss']
})
export class MostPopularPostComponent {
  @Input() mostPopularPost!: Post;
}
