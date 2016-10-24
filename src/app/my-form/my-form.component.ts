import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public positions = ['Pitcher', 'Catcher','1st Baseman', '2nd Baseman', '3rd Baseman', 'Shortstop','Left fielder', 'Center Fielder','Right Fielder', 'Designated Hitter'];

}
