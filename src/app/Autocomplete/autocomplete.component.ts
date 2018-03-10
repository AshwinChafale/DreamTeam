import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete.component.html',
  styleUrls: ['autocomplete.component.css']
})
export class AutocompleteFilterExample {
  @Input()
  name: String;
  cricketer : any;
  options = [
    'One',
    'Two',
    'Three'
  ];
  autocomplete(event) {
    var result = this.options.filter(function(value){
          return (value.toLowerCase().includes(event.target.value.toLowerCase()))
    });
    console.log(result);
    this.cricketer = result
  }
  ngOnInit() {

  }





}