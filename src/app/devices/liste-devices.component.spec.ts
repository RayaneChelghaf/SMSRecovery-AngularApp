import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListeDevicesComponent} from './liste-devices.component';

describe('ListeDevicesComponent', () => {
    let component: ListeDevicesComponent;
    let fixture: ComponentFixture<ListeDevicesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListeDevicesComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ListeDevicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
