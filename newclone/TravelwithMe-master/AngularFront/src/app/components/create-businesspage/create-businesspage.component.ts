import { Component, OnInit } from '@angular/core';
import { BusinesspageService } from '../../services/businesspage.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-businesspage',
  templateUrl: './create-businesspage.component.html',
  styleUrls: ['./create-businesspage.component.css'],
})
export class CreateBusinesspageComponent implements OnInit {

  user:any;
  pagename:String;
  businesstype:Number;
  pageimage:String;
  targetareas:String;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  private sub:any;
  private id:any;

  constructor(
    private bservices:BusinesspageService,
    private route:Router,
    private acroute: ActivatedRoute



  ) { }





  

  ngOnInit() {

    this.zoom = 2;
    this.latitude = 7.7505019;
    this.longitude = 80.1652569;

    this.sub = this.acroute.params.subscribe(params => {
      this.id = +params['me'];
      console.log(this.id)

    });


  }


  pageCreate(){

   const user = {

      id:this.id,
      pagename: this.pagename,
      businesstype: this.businesstype,
      pageimage:'test',
      targetareas:"1,2,3,4"
    };
    this.bservices.submitPagedata(user).subscribe(data=>{

      if(data.success){
       console.log("done");
        this.route.navigate(['/profile'])
      }else{

        console.log("error")
        //this.flashMessage.show('something went wrong',{cssClass:'alert-danger',timeout:3000});
        //this.route.navigate(['/profile'])

      }

    });

  }




}

