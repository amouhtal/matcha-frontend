import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matcha-complete-signup-form',
  templateUrl: './complete-signup-form.component.html',
  styleUrls: ['./complete-signup-form.component.scss'],
})
export class CompleteSignupFormComponent implements OnInit{
  @Input() progress!: number;
  @Output() newItemEvent = new EventEmitter<number>();
  // @Output() PrevEvent = new EventEmitter<number>();

  tagsStatus : Map<string, boolean> = new Map<string, boolean>();
  tags: string[] = [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7',
    'tag8',
    'tag9',
    'tag10',
    'tag11',
    'tag12',
    'tag13',
    'tag14',
    'tag15',
    'tag16',
  ];
  bioValue = '';  
  genderDropDownStatus = false;
  selectedGender = '';
  genderPlaceholder = 'Chose..';

  sPDropDownStatus = false;
  selectedSP = '';
  sPPlaceholder = 'Chose..';


  ngOnInit(): void {
    for(let i = 0; i < this.tags.length; i++) {
      this.tagsStatus.set(this.tags[i], false);
    }
  }

  Next() {
    this.progress = this.progress + 1;
    this.newItemEvent.emit(this.progress);
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

  toggleTag(tag:string) {
    this.tagsStatus.set(tag, !this.tagsStatus.get(tag));
  }
}
