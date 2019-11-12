import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {

  myInput: string;
  constructor(private router: Router) { }

  ngOnInit() {}

  postClick(){
    alert (this.myInput);
  }

  clearClick(){
    this.router.navigate(['/tabs'])
  }
}
