import { Component, Injectable, Input, OnDestroy, OnInit } from "@angular/core"
import { Post } from '../post.model'
import { PostService } from "../post.service";
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

@Injectable({providedIn: 'root'})
export class PostListComponent implements OnInit, OnDestroy{

 posts: Post[] = [];
 private postSub: Subscription;

 constructor(public postService: PostService) {}
 ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
 }

 ngOnDestroy() {
    this.postSub.unsubscribe();
 }
}
