import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css'
})
export class ToastalertComponent {

  constructor(private toatrService : ToastrService){}

  // showSuccess(){
  //   this.toatrService.success('Saved Sucessfull.', 'Success');
  // }
}
