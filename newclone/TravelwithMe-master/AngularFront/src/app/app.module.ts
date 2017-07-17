
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import {MdlModule} from 'angular2-mdl';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { NgGridModule } from 'angular2-grid';
import { ChartsModule } from 'ng2-charts';
/* components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { CreateBusinesspageComponent } from './components/create-businesspage/create-businesspage.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { TripComponent } from './components/trip/trip.component';
import { SideviewComponent } from './components/sideview/sideview.component';
import { PostComponent } from './components/post/post.component';
import { PagemanagerComponent } from './components/pagemanager/pagemanager.component';
import { PagestatusComponent } from './components/pagemanager/pagestatus/pagestatus.component';
import { SuggestionareaComponent } from './components/suggestionarea/suggestionarea.component';
import { SuggestplacesComponent } from './components/suggestionarea/suggestplaces/suggestplaces.component';
import { SuggestpagesComponent } from './components/suggestionarea/suggestpages/suggestpages.component';
import { SuggestblogsComponent } from './components/suggestionarea/suggestblogs/suggestblogs.component';
import { SearchComponent } from './components/search/search.component';
import { AdminComponent } from './components/admin/admin.component';
import { TrafficChartComponent } from './components/admin/traffic-chart/traffic-chart.component';
import { UsersMapComponent } from './components/admin/users-map/users-map.component';
import { TypewidjetComponent } from './components/home/typewidjet/typewidjet.component';



import { HotelPageComponent } from './components/hotel-page/hotel-page.component';
import { HotelPageHomeComponent } from './components/hotel-page-home/hotel-page-home.component';
import { HotelPageGalleryComponent } from './components/hotel-page-gallery/hotel-page-gallery.component';
import { HotelPageContactComponent } from './components/hotel-page-contact/hotel-page-contact.component';
import { RentingPageComponent } from './components/renting-page/renting-page.component';
import { RentingPageHomeComponent } from './components/renting-page-home/renting-page-home.component';
import { RentingPageItemsComponent } from './components/renting-page-items/renting-page-items.component';
import { RentingPageGalleryComponent } from './components/renting-page-contact/renting-page-gallery/renting-page-gallery.component';

import { RentingPageContactComponent } from './components/renting-page-contact/renting-page-contact.component';

/*Services */
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BusinesspageService } from './services/businesspage.service';
import { GooglemapsService } from './services/googlemaps.service';
import { BlogServiceService } from './services/blog-service.service';
import { Auth0Service } from './services/auth0.service';
import { FacebookService } from './services/facebook.service';
import { GoogleAPIService } from './services/google-api.service';
import { UserServicesService } from './services/user-services.service';
import { LocationPassService } from './shared/location-pass.service';
import { RatingComponent } from './components/rating/rating.component';









/*Routes*/
const appRoute: Routes = [

  {path: '' , component: HomeComponent} ,
  {path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard]} ,
  {path: 'dashboard' , component: DashboardComponent , canActivate: [AuthGuard]} ,
  {path: 'profile/create/businesspage' , component: CreateBusinesspageComponent , canActivate: [AuthGuard]} ,





  {path: 'profile/create/blog' , component: BlogComponent , canActivate: [AuthGuard]} ,
  {path: 'profile/settings/:id' , component: ProfilesettingsComponent , canActivate: [AuthGuard]},
  {path: 'profile/viewpost' , component: ViewpostComponent , canActivate: [AuthGuard]},
  {path: 'profile/newsfeed' , component: NewsfeedComponent , canActivate: [AuthGuard]},
  {path: 'profile/create/trip' , component: TripComponent , canActivate: [AuthGuard]},
  {path: 'profile/pagemanager' , component: PagemanagerComponent },
  {path: 'profile/search' , component: SearchComponent },
  {path: 'profile/admin' , component: AdminComponent },




  {path: 'profile/hotel-page' , component: HotelPageComponent , canActivate: [AuthGuard]},
  {path: 'profile/renting-page' , component:  RentingPageComponent , canActivate: [AuthGuard]},

];


@NgModule({

  declarations: [

    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    CreateBusinesspageComponent,
    BlogComponent,
    ProfilesettingsComponent,
    ViewpostComponent,
    NewsfeedComponent,
    SideviewComponent,
    TripComponent,
    PostComponent,
    PagestatusComponent,
    SuggestionareaComponent,
    SuggestpagesComponent,
    SuggestblogsComponent,
    SearchComponent,
    AdminComponent,
    TrafficChartComponent,
    UsersMapComponent,
    PagemanagerComponent,
    SuggestplacesComponent,
    SearchComponent,
    AdminComponent,
    TrafficChartComponent,
    UsersMapComponent,
    TypewidjetComponent,
    HotelPageComponent,
    HotelPageHomeComponent,
  HotelPageGalleryComponent,
  HotelPageContactComponent,
  RentingPageComponent,
    RentingPageHomeComponent,
    RentingPageItemsComponent,
    RentingPageGalleryComponent,
    RentingPageContactComponent,
    RatingComponent





  ],

  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule ,
    NgGridModule,
    ChartsModule,
    /*FlashMessagesModule,*/
    RouterModule.forRoot(appRoute, { useHash: false }),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()



  ],

  providers: [

    ValidateService,
    AuthService,
    AuthGuard,
    BusinesspageService,
    GooglemapsService,
    BlogServiceService,
    Auth0Service,
    FacebookService,
    GoogleAPIService,
    UserServicesService,
    LocationPassService


  ],

  bootstrap: [AppComponent]

})

export class AppModule {




}






