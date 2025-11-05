import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements AfterViewInit {

  ngAfterViewInit() {
    const numberDaysInput = document.getElementById('numberDays') as HTMLInputElement;

    flatpickr('#dateDuration', {
      mode: 'range',
      dateFormat: 'F j, Y',
      minDate: 'today',
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          const start = selectedDates[0];
          const end = selectedDates[1];
          // Calculate number of days (inclusive)
          const diffTime = end.getTime() - start.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
          numberDaysInput.value = diffDays.toString();
        } else {
          numberDaysInput.value = '';
        }
      }
    });
  }
}
