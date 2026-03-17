import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaPassagemComponent } from './form-busca-passagem.component';

describe('FormBuscaPassagemComponent', () => {
  let component: FormBuscaPassagemComponent;
  let fixture: ComponentFixture<FormBuscaPassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuscaPassagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuscaPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
