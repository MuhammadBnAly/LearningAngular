import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Component({
  selector: 'app-http.client',
  templateUrl: './http.client.component.html',
  styleUrls: ['./http.client.component.scss']
})
export class HttpClientComponent implements OnInit {

  returnedData : any;
  constructor(private apiService : ApiService) { }

  // offline window
  isOffline? : boolean;
  @HostListener('window.offline', ['$event'])
  isWindowOffline(event: any){
    console.log('Is it Offline ? ', event);
    
  }

  ngOnInit(): void {
  }
  // get
  getData(){
    // this.apiService.getMethod().toPromise().then( (res) => {console.log(res); }); //promise ex
    this.apiService.getMethod().subscribe((res) => {
      this.returnedData = res;
      console.log(res);
    });
  }
  // delete
  deleteData(){
    this.apiService.deleteMethod().subscribe((res) => {
      this.returnedData = res;
      console.log(res);
    });
  }
  // post
  postData(){
    this.apiService.postMethod().subscribe((res) => {
      this.returnedData = res;
      console.log(res);
    });
  }
  // put
  putData(){
    this.apiService.putMethod().subscribe((res) => {
      this.returnedData = res;
      console.log(res);
    });
  }
  // ---
  // progress request
  getProgress(){
    this.apiService.getProgress().subscribe( (event : HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.DownloadProgress:
          console.log(`${Math.round(event.loaded) / 1024} KB Downloaded` );
          break;
        case HttpEventType.UploadProgress:
          console.log(`${Math.round(event.loaded) / 1024} KB Downloaded` );
          break;
      }
    })
  }
}
