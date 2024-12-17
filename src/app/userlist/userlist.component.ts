import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../getdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  userdata: any = [];
  posts: any = [];
  comments:any=[]
  userid: any;
  ispostclick :boolean=false;
  iscommentclick:boolean=false;
  constructor(private ServiceNameService: ServiceNameService) {}

  ngOnInit(): void {
    this.ServiceNameService.getuserlist().subscribe((res) => {
      console.log(res);
      this.userdata = res.data;
    });
  }

  getposts(id: any) {
    console.log(id);
    this.userid=id
    this.ServiceNameService.posts(this.userid).subscribe((res) => {
      console.log(res);
      this.ispostclick=true
      this.posts=res.data
    });
  }

  getcomments(id: any) {

    this.ServiceNameService.getcomments(id).subscribe(res=>{
this.iscommentclick=true;
this.comments=res.data
    })
  }

}
