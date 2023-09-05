import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initalValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initalValue = this.countriesService.cacheStore.byCapital.term;
  }

  serachByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
