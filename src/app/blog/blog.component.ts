import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  apidata;
  resData;
  constructor(private show:BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParams;
    console.log(id);
    //const data = id['id'];

    this.show.show(id).subscribe((data)=>{
      // this.show.getdata(id).subscribe(
        // console.log(data);
         this.apidata=data['user'];
        data=>
        {
              
              this.resData=data;
              this.apidata=this.resData.user;
              console.log(this.apidata);
        }
      });


  }

}
