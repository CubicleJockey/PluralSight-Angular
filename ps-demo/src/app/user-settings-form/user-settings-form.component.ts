import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  private emptyUserSettings = {
     name:''
    ,emailOffers: false
    ,interfaceStyles: ''
    ,subscriptionType: ''
    ,notes: ''
  };



  //Initialize Empty
  public originalUserSettings: IUserSettings = this.emptyUserSettings;
  public userSettings: IUserSettings = this.emptyUserSettings;

  constructor() { }

  ngOnInit(): void {
    this.originalUserSettings = {
      name: 'André Davis'
     ,emailOffers: true
     ,interfaceStyles: 'dark'
     ,subscriptionType: 'Annual'
     ,notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis.'
   };

   //make a non-deep copy of a flat object
   this.userSettings = { ... this.originalUserSettings };
  }
}
