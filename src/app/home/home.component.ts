import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  api;
  apidata;
  resData;
  constructor(private route:Router, private Active : ActivatedRoute, private http:HttpClient, private service:BlogService) { }
 

  go(){
    console.log("sanuu");
		this.route.navigate(['blog'], {relativeTo: this.Active}); // navigate to other page
	}

  ngOnInit(): void {
    
    // const url="http://127.0.0.1:8000/api/allData"
    // this.http.get(url).subscribe(res=>{
    //   console.log(res);
    //   this.api=res;
    //   this.apidata=this.api.user;
    // })

    this.service.getdata().subscribe(
      data=>
      {
            console.log(data);
            this.resData=data;
            this.apidata=this.resData.user;
            console.log(this.apidata);
      }
    )
   


  }

}
