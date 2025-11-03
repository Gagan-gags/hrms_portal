import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-leave-roaster',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-roaster.component.html',
  styleUrls: ['./leave-roaster.component.css'] 
})
export class LeaveRoasterComponent implements AfterViewInit {

  ngAfterViewInit() {
    // ✅ Initialize all dropdowns dynamically after view loads
    const dropdownEls = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownEls.forEach((el) => new Dropdown(el));
  }

  // ✅ Mock data for days
  days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // ✅ Employee data
  employees = [
    { name: 'Nadine Ferne', role: 'Management', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '9–5', '9–5', '9–5', '9–5', '', ''] },
    { name: 'Hannah Gibbs', role: 'Floor Staff', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '9–5', '', '9–5', '', '', ''] },
    { name: 'Cecilio Parvan', role: 'Accounts', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '9–5', '9–5', '', '9–5', '', ''] },
    { name: 'Lillie Coleen', role: 'Management', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '9–5', '9–5', 'Annual', '', '', ''] },
    { name: 'Emily Stewart', role: 'Floor Staff', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '', '9–5', '', '9–5', '', ''] },
    { name: 'David Lee', role: 'Deliveries', avatar: 'https://via.placeholder.com/40', shifts: ['9–5', '9–5', '', '9–5', '', '', ''] }
  ];
}
