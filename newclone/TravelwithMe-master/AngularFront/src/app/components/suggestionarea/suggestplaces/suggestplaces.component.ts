import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-suggestplaces',
  templateUrl: './suggestplaces.component.html',
  styleUrls: ['./suggestplaces.component.css']
})
export class SuggestplacesComponent implements OnInit {

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  nearby:any;
  results:any;
  followers:any;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');

    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id
    };

    this.authService.checkId(data).subscribe(res => {
      this.user = res.data;
      this.user.me = this.user.identities[0].user_id;
      console.log(this.user);



      /*places*/

      this.nearby = this.user.nearby.results;
      console.log(this.nearby)


    });



  }

}
