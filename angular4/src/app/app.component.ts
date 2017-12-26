import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my new app';
  fcolor="brown";
  lcolor="green";

  users = [

    {fname:"rajith",lname:"thennakoon"},
    {fname:"kamal",lname:"thennakoon"},
    {fname:"nimal",lname:"thennakoon"},
    {fname:"kumara",lname:"thennakoon"}

  ]


}
