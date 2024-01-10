import { Component } from '@angular/core';

interface Profile {
  profile_avatar: string;
  name: string;
  profile_location: string;
}
@Component({
  selector: 'matcha-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  profiles: Array<Profile> = [
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',

    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    }
    ,
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',

    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom', 
    },
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',

    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    }
    ,
    {
      name: 'John Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',

    },
    {
      name: 'Jane Doe',
      profile_avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom', 
    }
  ];
  constructor() {}
}
