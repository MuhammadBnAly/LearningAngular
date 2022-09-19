import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from '../services/post.service';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class DetailsResolver implements Resolve<any>{

  constructor(private postService : PostService) {
  }
  resolve(next : ActivatedRouteSnapshot) : Observable<any>{
    const pageId = next.paramMap.get('id');
    return pageId ? this.postService.getPostById(parseInt(pageId)).pipe(
      catchError( ()=> {
        return of('No Data')
      })
    ): EMPTY;
  }
}

