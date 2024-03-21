export class OtherUserResultDTO {
  user: OtherUserDto = new OtherUserDto();
  rating: userRatingDTO = new userRatingDTO();
}

export class userRatingDTO {
  exist: boolean = false;
  rating: number = -1;
}
export class OtherUserDto {
  id: number = -1;
  username: string = 'Loading...';
  first_name: string = 'Loading...';
  last_name: string = 'Loading...';
  images: string[] = [
    '../../../../assets/images/missing picture4.png',
    '../../../../assets/images/missing picture4.png',
    '../../../../assets/images/missing picture4.png',
    '../../../../assets/images/missing picture4.png',
    '../../../../assets/images/missing picture4.png',
  ];
  gender: string = 'Loading...';
  sexual_preference: string = 'Loading...';
  biography: string = 'Loading...';
  tags: string[] = [
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
  ];
  fane_rating: number[] = [];
  city: string = 'Loading...';
  country: string = 'Loading...';
  birthdate: Date = new Date();
  rating: number = 4;
}
