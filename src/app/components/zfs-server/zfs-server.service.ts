import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZfsServer } from './zfs-server.model';

@Injectable({
  providedIn: 'root',
})
export class ZfsServerService {
  constructor(private snackBar: MatSnackBar) {}

  list(): ZfsServer[] {
    this.snackBar.open('Listing Zfs Servers.', 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });

    let zfsServers: ZfsServer[] = [];

    const zfsServer: ZfsServer = {
      id: '1',
      name: '2',
      descripton: '3',
      created_at: new Date(),
      updated_at: new Date(),
    };

    zfsServers.push(zfsServer);

    return zfsServers;
  }
}
