import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesComponent } from './features.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { RealTimeNotificationService } from '../notifications/pages/notification.service';
import { CommunicationService } from '../real-time-service/communication.service';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;
  let router: Router;
  let realTimeNotificationService: RealTimeNotificationService;
  let routerEventsSubject: Subject<any>;

  beforeEach(async () => {
    routerEventsSubject = new Subject();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FeaturesComponent],
      providers: [RealTimeNotificationService, CommunicationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    realTimeNotificationService = TestBed.inject(RealTimeNotificationService);

    spyOn(
      realTimeNotificationService,
      'listenForProfileViews',
    ).and.returnValue();
    spyOn(
      realTimeNotificationService,
      'listenForProfileLikes',
    ).and.returnValue();
    spyOn(router.events, 'pipe').and.returnValue(routerEventsSubject);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// NullInjectorError: R3InjectorError(DynamicTestModule)[RealTimeNotificationService -> CommunicationService -> CommunicationService]:
//   NullInjectorError: No provider for CommunicationService!

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { FeaturesComponent } from './features.component';

// describe('FeaturesComponent', () => {
//   let component: FeaturesComponent;
//   let fixture: ComponentFixture<FeaturesComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [FeaturesComponent],
//     });
//     fixture = TestBed.createComponent(FeaturesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
