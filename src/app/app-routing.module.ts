import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZfsServerCreateComponent } from './components/zfs-server/zfs-server-create/zfs-server-create.component';
import { HomeComponent } from './views/home/home.component';
import { ZfsServersComponent } from './views/zfs-servers/zfs-servers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'zfsservers',
    component: ZfsServersComponent,
  },
  {
    path: 'zfsservers/create',
    component: ZfsServerCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
