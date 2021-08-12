import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  //Initialize Empty
  public userSettings: IUserSettings = {
     name:''
    ,emailOffers: false
    ,interfaceStyles: ''
    ,subscriptionType: ''
    ,notes: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.userSettings = {
      name: 'André Davis'
     ,emailOffers: true
     ,interfaceStyles: 'dark'
     ,subscriptionType: 'Annual'
     ,notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis.'
   };
  }
}
