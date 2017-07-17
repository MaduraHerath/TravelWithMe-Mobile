import { Component, OnInit ,ViewEncapsulation,ChangeDetectorRef } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { BlogServiceService } from '../../services/blog-service.service';

import './js1.js';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',

  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

    private javascript1 = require('./js1');

  model = {userid:" ",username:" ",img:" ",postTitle:" ",body:" ",featured_img:" "};


  path='';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

  place:String;
  places:Object;

  profile: any;

  user_id:string;
  postTitle:string;
  body:string;
  featured_img:String;
  alert:string;


  constructor(
    private mapService:GooglemapsService,
    private blogService:BlogServiceService,
    private changeDetectorRef: ChangeDetectorRef,
    // private http:Http,


  ) { }

  ngOnInit() {}


  fileChange(input){
   this.file_srcs= [];
    this.readFiles(input.files);
  }


  readFile(file, reader, callback){
    reader.onload = () => {
      callback(reader.result);
      this.model.featured_img=reader.result;

    }

    reader.readAsDataURL(file);
  }



  readFiles(files, index=0){
     let reader = new FileReader();


    if(index in files){

      this.readFile(files[index], reader, (result) =>{

        var img = document.createElement("img");
        img.src = result;

        this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
          this.debug_size_before.push(before);
          this.debug_size_after.push(after);
          this.file_srcs.push(resized_jpeg);

        });
      });
    }else{
      this.changeDetectorRef.detectChanges();
    }
  }


  resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){

    return img.onload = () => {

      var width = img.width;
      var height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      var canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0,  width, height);

      var dataUrl = canvas.toDataURL('image/jpeg');

      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }


  submitBlogpost(){


    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id,
      profilepic :this.profile.picture_large,
      name :this.profile.name
    };

    /*this.model.userid = data.userid;*/
    this.model.userid = '820503218103311';
    this.model.username = data.name,
    this.model.img = data.profilepic,
    this.model.postTitle = this.postTitle;
    this.model.body = this.body;



    this.blogService.addBlogpost(this.model).subscribe(res=>{

      //this.alert = res;
    })
  }



  placeSearch(){

    console.log(this.place);
    this.mapService.getLocations(this.place).subscribe(res=>{
      this.places= res.results;
      console.log(this.places)
    })

  }

  addTotag(event){

    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    /*this.val = id;*/

  }





}
