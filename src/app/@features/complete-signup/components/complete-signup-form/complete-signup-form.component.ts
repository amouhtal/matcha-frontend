import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageInfoDto } from '../DTO/image-info-dto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'matcha-complete-signup-form',
  templateUrl: './complete-signup-form.component.html',
  styleUrls: ['./complete-signup-form.component.scss'],
})
export class CompleteSignupFormComponent implements OnInit {
  @Input() progress!: number;
  @Output() newItemEvent = new EventEmitter<number>();

  completeSingupForm: FormGroup = new FormGroup({
    bio: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z '-:;]+$/),
    ]),
    birthDayDate: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
    ]),
  });

  imageErrorMesaage: string = '';
  bioErrorMesaage: string = '';
  birthDayErrorMesaage: string = '';
  tagsStatus: Map<string, boolean> = new Map<string, boolean>();
  tagsValid: boolean = false;
  tags: string[] = [
    'Sports',
    'Movies',
    'Books',
    'Music',
    'Travel',
    'Fitness',
    'Food',
    'Technology',
    'Gaming',
    'Art',
    'Fashion',
    'Pets',
    'Outdoor Activities',
    'Cooking',
    'Photography',
    'DIY',
    'Tea',
    'Coffee',
    'Board Games',
    'Hiking',
  ];

  genderDropDownStatus = false;
  selectedGender = '';
  genderPlaceholder = 'Chose..';

  sPDropDownStatus = false;
  selectedSP = '';
  sPPlaceholder = 'Chose..';

  /// file variables
  profilePictureIndex: number = -1;
  imagesData: Array<ImageInfoDto> = [];
  photosNote: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private platform: Platform,
  ) {}

  ngOnInit(): void {
    if (this.platform.ANDROID || this.platform.IOS)
      this.photosNote =
        'NOTE : The highlighted Photo will be your profile picture , hold photo to highlight it';
    else
      this.photosNote =
        'NOTE : The highlighted Photo will be your profile picture , double click photo to highlight it';
    for (let i = 0; i < this.tags.length; i++) {
      this.tagsStatus.set(this.tags[i], false);
    }
    for (let i = 0; i < 5; i++) {
      this.imagesData.push(new ImageInfoDto());
    }
  }

  Next() {
    if (this.progress == 0) {
      let date = this.completeSingupForm.get('birthDayDate')?.value;
      let currentYear = new Date().getFullYear();
      let year = date.split('-')[0];
      console.log(year, ' current year : ', currentYear);
      let regex = new RegExp(
        /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
      );
      if (!regex.test(date) || currentYear - year < 18 || year < 1900) {
        if (currentYear - year < 18)
          this.birthDayErrorMesaage =
            'Invalid date : you must be 18+ years old';
        else if (year < 1900)
          this.birthDayErrorMesaage = 'Invalid date : too old';
        else this.birthDayErrorMesaage = 'Invalid date';
        setTimeout(() => {
          this.birthDayErrorMesaage = '';
        }, 4000);
      } else if (
        this.completeSingupForm.get('bio')?.invalid ||
        this.completeSingupForm.get('bio')?.value.length > 255
      ) {
        if (this.completeSingupForm.get('bio')?.invalid)
          this.bioErrorMesaage =
            'Invalid bio : only letters, spaces, and - : ; are allowed';
        else
          this.bioErrorMesaage = 'Invalid bio : max length is 255 characters';
        setTimeout(() => {
          this.bioErrorMesaage = '';
        }, 4000);
      } else {
        this.progress = this.progress + 1;
        this.newItemEvent.emit(this.progress);
      }
    } else {
      this.progress = this.progress + 1;
      this.newItemEvent.emit(this.progress);
    }
  }

  Prev() {
    this.progress = this.progress - 1;
    this.newItemEvent.emit(this.progress);
  }
  openDropdown(field: string) {
    if (field == 'gender')
      this.genderDropDownStatus = !this.genderDropDownStatus;
    else this.sPDropDownStatus = !this.sPDropDownStatus;
  }

  ChooseGender(gender: string) {
    this.genderDropDownStatus = false;
    this.selectedGender = gender;
    this.genderPlaceholder = gender;
  }

  ChooseSP(gender: string) {
    this.sPDropDownStatus = false;
    this.selectedSP = gender;
    this.sPPlaceholder = gender;
  }

  toggleTag(tag: string) {
    this.tagsStatus.set(tag, !this.tagsStatus.get(tag));
    let count = 0;
    this.tagsStatus.forEach((value, key) => {
      if (value == true) {
        count++;
        if (count > 3) {
          this.tagsValid = true;
        } else {
          this.tagsValid = false;
        }
      }
    });
  }

  selectFile(event: any, number: number): void {
    console.log('=>>', number);
    this.imagesData[number].selectedFiles = event.target.files;

    if (this.imagesData[number].selectedFiles) {
      const file: File | null = this.imagesData[number].selectedFiles!.item(0);
      console.log('file : ', this.imagesData[number].selectedFiles);
      if (file) {
        if (file.size > 2000000) {
          this.imageErrorMesaage = 'Invalid image : max size is 2MB';
          setTimeout(() => {
            this.imageErrorMesaage = '';
          }, 4000);
          return;
        }
        this.imagesData[number].currentFile = file;

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagesData[number].imageBackgroundUrl =
            `url(${e.target.result})`;
          this.imagesData[number].imageBackgroundColor = 'transparent';
          this.imagesData[number].addIconStatus = false;
        };

        reader.readAsDataURL(this.imagesData[number].currentFile);
      }
    }
  }

  doubleClickFunction(number: any, event: any) {
    event.preventDefault();
    if (this.profilePictureIndex == number) {
      this.profilePictureIndex = -1;
    } else {
      this.profilePictureIndex = number;
    }
  }

  removeImage(number: number) {
    this.imagesData[number] = new ImageInfoDto();
    if (this.profilePictureIndex == number) {
      this.profilePictureIndex = -1;
    }
  }

  submit() {
    const formData: FormData = new FormData();

    //// add Personal info
    formData.append('gender', this.selectedGender);
    formData.append('sexualPreference', this.selectedSP);
    formData.append('biography', this.completeSingupForm.get('bio')?.value);
    formData.append(
      'birthdate',
      this.completeSingupForm.get('birthDayDate')?.value,
    );
    //// add tags
    let tags: string[] = [];
    for (let [key, value] of this.tagsStatus) {
      if (value) {
        tags.push(key);
      }
    }
    formData.append('tags', JSON.stringify(tags));
    //// add profile pictures
    formData.append(
      'photos',
      this.imagesData[this.profilePictureIndex].currentFile,
    );
    let photosIndex = 0;
    for (let imageData of this.imagesData) {
      if (!imageData.addIconStatus && photosIndex != this.profilePictureIndex)
        formData.append('photos', imageData.currentFile);
      photosIndex++;
    }

    this.http
      .post('http://localhost:3000/user/test', formData, {
        withCredentials: true,
      })
      .subscribe({
        next: (ret) => {
          console.log(ret);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error.error);
        },
      });
  }

  onBioChange() {
    // trim the date

    console.log(
      'data : |',
      typeof this.completeSingupForm.get('birthDayDate')?.value,
    );
  }
}
0;
