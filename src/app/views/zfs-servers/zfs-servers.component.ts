import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZfsServerService } from 'src/app/components/zfs-server/zfs-server.service';

@Component({
  selector: 'app-zfsservers',
  templateUrl: './zfs-servers.component.html',
  styleUrls: ['./zfs-servers.component.css'],
})
export class ZfsServersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToZfsServerCreate(): void {
    this.router.navigate(['/zfsservers/create']);
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
