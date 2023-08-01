import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropDownStatus = false

 

  openDropdown(){
    if(!this.dropDownStatus){
      this.dropDownStatus = true
    }else{
      this.dropDownStatus = false
    }
  }

}
