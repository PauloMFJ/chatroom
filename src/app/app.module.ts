import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './shared/components/chatroom/chatroom.component';
import { NameFormComponent } from './shared/components/name-form/name-form.component';
import { MessageComponent } from './shared/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    NameFormComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
