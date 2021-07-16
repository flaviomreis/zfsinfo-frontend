import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zfsservers',
  templateUrl: './zfsservers.component.html',
  styleUrls: ['./zfsservers.component.css'],
})
export class ZfsserversComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToZfsServerCreate(): void {
    this.router.navigate(['/zfsservers/create']);
    console.log('browsing');
  }
}
