import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    /**
     * .toBe() => egalité à (équivalent au ===)
     * .toEqual() => egalité à (équivalent au ==)
     * .toContain() => contient l'élément donnée, utilisateur sur un array ou un string
     * .toBeDefined() => est défini
     * .toBeNull() => est null
     * .toBeTruthy() /.
     */
  });

  /**
   * Mock
   */
});
