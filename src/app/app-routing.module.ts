import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from '@app/shared/components/chatroom/chatroom/chatroom.component';

const routes: Routes = [
    {
        path: '**',
        redirectTo: 'chatroom',
    },
    {
        path: 'chatroom',
        component: ChatroomComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
