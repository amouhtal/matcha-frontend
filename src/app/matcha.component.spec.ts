import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatchaComponent } from './matcha.component';

describe('MatchaComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [MatchaComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MatchaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'matcha-frontend'`, () => {
    const fixture = TestBed.createComponent(MatchaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('matcha-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MatchaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('matcha-frontend app is running!');
  });
});
