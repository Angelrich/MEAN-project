import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from '../post.model'
import { PostService } from "../post.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle ='';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>(); // @Output is to make the event emission
                                              // accessible by outside i.e, parent app.component

  constructor(public postService: PostService){}

  onAddPost(form: NgForm) {
    if (form.invalid){
      return;
    }
      const post: Post = {
        id: null,
        title: form.value.title,
        content: form.value.content
      };
      this.postService.addPost(form.value.title, form.value.content)
      form.resetForm();
  }
}
