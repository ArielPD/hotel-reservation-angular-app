import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  //property
  countries: any;
  formGroup: FormGroup;

  constructor(private countriesService:CountriesService) { 
    this.formGroup = new FormGroup({
      email: new FormControl(null),
      customerName: new FormControl(null),
      country: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      (response) => {
        this.countries = response;
      }, (error) => {
        console.log(error);
      })
  }

}
