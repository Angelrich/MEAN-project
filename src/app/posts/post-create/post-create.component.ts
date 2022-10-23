import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle ='';
  enteredContent = '';
  @Output() postCreated = new EventEmitter(); // @Output is to make the event emission
                                              // accessible by outside i.e, parent app.component


  onAddPost() {
      const post = {
        title: this.enteredTitle,
        content: this.enteredContent
      };
      this.postCreated.emit(post);
  }
}
