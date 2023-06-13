import { Component } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  standalone: true,
  imports: [],
  template: `
    <div class="backdrop"></div>
    <div class="loading-spinner">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      <div>Loading Data</div>
    </div>

  `,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

}
