import { Component, OnInit,Input } from '@angular/core';
import { GoogleAPIService } from '../../services/google-api.service';
import { Router } from '@angular/router';
import {Auth0Service} from '../../services/auth0.service'
import {LocationPassService} from '../../shared/location-pass.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() dataArray:any;

  flocation:any;
  fautoplace:any;
  tautoplace:any;
  tlocation:any;
  profile: any;
  actoken: any;
  userid:any;
  Fresult:any;
  Tresult:any;




  constructor(
    /*private flashMessage:FlashMessagesService,*/
    private route:Router,
    private auth: Auth0Service,
    private googleApi:GoogleAPIService,
    private locationService:LocationPassService
  ) { }

  ngOnInit() {
    this.fautoplace='';
    this.tautoplace='';
    this.dataArray = {};


    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id
    };
  }

  logoutClick(){

    this.auth.logout();
    this.route.navigate([""]);
    return false;

    }

  getFromLocation(){

    this.googleApi.getPlaces(this.flocation).subscribe(res=>{
      this.Fresult = res.data.predictions;
      console.log(this.Fresult)
    })

  }

  getToLocation(){

    this.googleApi.getPlaces(this.tlocation).subscribe(res=>{
      this.Tresult = res.data.predictions;
      console.log(this.Tresult)
    })

  }

  addToTagfrom(e){
    this.dataArray.first = e.target.id;
    this.fautoplace = e.target.innerText;
    this.Fresult = '';
    this.flocation = '';
    return false;
  }


  addToTagto(e){
    this.dataArray.last = e.target.id;
    this.tautoplace = e.target.innerText;
    this.Tresult = '';
    this.tlocation = '';
    return false;


  }

  callLocationPass():void {

    this.locationService.shareLocations(this.dataArray)
  }








}
