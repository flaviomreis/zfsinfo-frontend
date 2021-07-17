import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ZfsServer } from '../zfs-server.model';
import { ZfsServerService } from '../zfs-server.service';

@Component({
  selector: 'app-zfs-server-create',
  templateUrl: './zfs-server-create.component.html',
  styleUrls: ['./zfs-server-create.component.css'],
})
export class ZfsServerCreateComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private zfsServerService: ZfsServerService
  ) {}

  ngOnInit(): void {}

  save(): void {
    const zfsServer: ZfsServer = {
      name: 'teste',
      description: 'teste',
    };

    this.zfsServerService.save(zfsServer).subscribe(
      (object) => {
        this.snackBar.open(`Zfs Server ${zfsServer.name} saved.`, 'X', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/zfsservers']);
      },
      (msg) => {
        console.log(msg.error.error);
        this.snackBar.open(`Operation error.\n${msg.error.error}`, 'X', {
          duration: 3000,
          panelClass: 'notif-error',
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }
}
