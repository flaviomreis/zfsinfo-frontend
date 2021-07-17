import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZfsServer } from './zfs-server.model';

@Injectable({
  providedIn: 'root',
})
export class ZfsServerService {
  baseUrl = 'http://localhost:5000/zfsservers';

  constructor(private http: HttpClient) {}

  list(): ZfsServer[] {
    let zfsServers: ZfsServer[] = [];

    const zfsServer: ZfsServer = {
      id: '1',
      name: '2',
      description: '3',
      created_at: new Date(),
      updated_at: new Date(),
    };

    zfsServers.push(zfsServer);

    return zfsServers;
  }

  save(zfsServer: ZfsServer): Observable<ZfsServer> {
    return this.http.post<ZfsServer>(this.baseUrl, zfsServer, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MjY0ODYzMjksImV4cCI6MTYyNzA5MTEyOSwic3ViIjoiZDJiYWZjM2UtMGNmYS00OGRmLWEzYjEtOTg1Mzg1YmQxZDhiIn0.Ad3Hqyeav3Mq8eRbKNZNhwSBlo-ojH5MB3wCF9muOiQ',
      },
    });
  }
}
