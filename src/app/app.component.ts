import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';

  posts: Array<Post> = [new Post("Post 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor massa, volutpat vel nisi a, varius suscipit urna. Nullam vel maximus tellus. Pellentesque non nulla dapibus tortor varius fringilla quis eu est.")
  ,new Post("Post 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor massa, volutpat vel nisi a, varius suscipit urna. Nullam vel maximus tellus. Pellentesque non nulla dapibus tortor varius fringilla quis eu est.")
  ,new Post("Post 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor massa, volutpat vel nisi a, varius suscipit urna. Nullam vel maximus tellus. Pellentesque non nulla dapibus tortor varius fringilla quis eu est.")
  ];

}

export class Post{
  title: string
  content: string
  loveIts: number
  created_at: Date

  constructor(title: string, content:string){
    this.title = title
    this.content = content
    this.loveIts = 0
    this.created_at = new Date()
  }
}
