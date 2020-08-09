import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './shared/components/chatroom/chatroom.component';
import { NameFormComponent } from './shared/components/name-form/name-form.component';
import { MessageComponent } from './shared/components/message/message.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { WatermarkComponent } from './shared/components/watermark/watermark.component';

import { ChatService } from './shared/services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    NameFormComponent,
    MessageComponent,
    HeaderComponent,
    WatermarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
