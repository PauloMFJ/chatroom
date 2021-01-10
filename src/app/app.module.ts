import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatroomComponent } from "./shared/components/chatroom/chatroom/chatroom.component";
import { MessageComponent } from "./shared/components/chatroom/message/message.component";
import { ChangeNameComponent } from "./shared/components/change-name/change-name.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { WatermarksComponent } from "./shared/components/watermarks/watermarks.component";

import { ChatService } from "./shared/services/chat.service";

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    ChangeNameComponent,
    MessageComponent,
    HeaderComponent,
    WatermarksComponent
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
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
