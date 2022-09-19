import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pageId! : any;
  jsonData? : any;
  DetailsData? : any;
  displayedColumns : string[] = ['User Id', 'Post Id', 'Post Title', 'Post Content'];
 constructor(
    private router : Router,
    private activeRoute : ActivatedRoute,
    private postService : PostService,
    private location : Location) {
    this.getPageId();
   }
  ngOnInit(): void {
    console.log('Activated Route', this.activeRoute);
    this.activeRoute.data.subscribe( (data)=> {
      this.DetailsData = data;
    })
  }
  getPageId(){
    this.activeRoute.params.subscribe( (params) => {
      console.log('params ', params);
      this.pageId = +params.id;
      // this.getPostByPageId(this.pageId);
    });
  }
  gotToAnotherDetails(id :number){
    console.log(id);
    this.router.navigate(['material/list', id]);
    // this.router.navigateByUrl(`material/list/${id}`); // بيغير ال url كله
  }
  canDeactivate(){
    return false;
  }
  goBack(){
    setTimeout(() => {
      this.location.back();
      this.location.replaceState('/list/3'); // replace not navigate // or
      this.router.navigate(['/list/3'], { skipLocationChange : true}); // 
    }, 2000);
  }
  getRandomPost(){
    this.postService.getRandomPost().subscribe( (data) => {
      // console.log('data' , data);
      this.jsonData = data;
    })
  }
  // getPostByPageId(id : number){
  //   this.postService.getPostById(id).subscribe( (data)=>{
  //     // console.log('data' , data);
  //     this.jsonData = data;
  //   })
  // }
}
