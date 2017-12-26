import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  id:any;
  qparam:any;

  constructor( router:ActivatedRoute) {
    router.paramMap.subscribe(params=>{

      this.id = params.get('id');

    });

    router.queryParamMap.subscribe(params=>{
      this.qparam = params.get('item');
      console.log(this.qparam)
    })





  }

  ngOnInit() {
  }

}
