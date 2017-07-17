import { Component, OnInit } from '@angular/core';
import { NgGridModule } from 'angular2-grid';
import { BlogServiceService } from  '../../services/blog-service.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],

})
export class NewsfeedComponent implements OnInit{

  public scroller = require('./scrollcontent');

  constructor(
    private BlogService:BlogServiceService,
    private authService: AuthService,

  ) { }

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  nearby:any;
  results:any;
  followers:any;
  posts:any;


  ngOnInit() {


    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');

    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id,
      profilepic :this.profile.picture_large,
      name :this.profile.name
    };


    if(data){



      this.authService.checkId(data).subscribe(res => {
        console.log("recieved");
        this.user = res.data;



        const follow = this.user.personal.followeusers;

        if (follow.length>0){

          const Userdata = {id:data.id};

          this.BlogService.getPosts(Userdata.id).subscribe(res=>{
            this.posts = res.data[ res.data.length-1]
            console.log(this.posts)


          });
        }else{


        }

      });

    }


  }





}

interface NgGridItemEvent {

  'col': 2,               //  The start column for the item
  'row': 1,               //  The start row for the item
  'sizex': 1,             //  The start width in terms of columns for the item
  'sizey': 1,             //  The start height in terms of rows for the item
  'dragHandle': null,     //  The selector to be used for the drag handle. If null, uses the whole item
  'resizeHandle': null,   //  The selector to be used for the resize handle. If null, uses 'borderSize' pixels from the right for horizontal resize,
                          //    'borderSize' pixels from the bottom for vertical, and the square in the corner bottom-right for both
  'borderSize': 15,
  'fixed': false,         //  If the grid item should be cascaded or not. If yes, manual movement is required
  'draggable': true,      //  If the grid item can be dragged. If this or the global setting is set to false, the item cannot be dragged.
  'resizable': true,      //  If the grid item can be resized. If this or the global setting is set to false, the item cannot be resized.
  'payload': null,        //  An optional custom payload (string/number/object) to be used to identify the item for serialization
  'maxCols': 2,           //  The maximum number of columns for a particular item. This value will only override the value from the grid (if set) if it is smaller
  'minCols': 1,           //  The minimum number of columns for a particular item. This value will only override the value from the grid if larger
  'maxRows': 0,           //  The maximum number of rows for a particular item. This value will only override the value from the grid (if set) if it is smaller
  'minRows': 1,           //  The minimum number of rows for a particular item. This value will only override the value from the grid if larger
  'minWidth': 0,          //  The minimum width of a particular item. This value will override the value from the grid, as well as the minimum columns if the resulting size is larger
  'minHeight': 0,         //  The minimum height of a particular item. This value will override the value from the grid, as well as the minimum rows if the resulting size is larger
}
