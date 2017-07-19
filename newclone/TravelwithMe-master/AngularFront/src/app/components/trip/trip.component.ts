import { Component, OnInit } from '@angular/core';
import {LocationPassService} from '../../shared/location-pass.service';
declare var google: any;

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  inputs:['dataArray']
})
export class TripComponent implements OnInit {

  ids:{};
  constructor(private locationService:LocationPassService) { }

  ngOnInit() {

    this.locationService.finalLocations.subscribe(
      data=> console.log(data)
    )




    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true,
     panel: document.getElementById('right-panel')});
     
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 7.25, lng: 80.65}
    });
    directionsDisplay.setMap(map);
    
/*    calculateAndDisplayRoute(directionsService, directionsDisplay);

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {

      var waypts = [];
      var checkboxArray:any[] = [
        'winnipeg', 'regina','calgary'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });

      }

      directionsService.route({
        origin: {'placeId': ''},
        destination: {'placeId': ''},
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }*/
 function computeTotalDistance(result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
          total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        document.getElementById('total').innerHTML = total + ' km';
      }
  }


}
