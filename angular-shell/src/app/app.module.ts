import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { loadRemoteModule } from "./utils/federation-utils";
import { AppComponent } from "./app.component";
import { ProfileUserComponent } from "./profile-user/profile-user.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./profile-user/profile-user.module").then(
        (m) => m.ProfileUserModule
      ),
  },
];

export function initializeApp(): () => void {
  return () => {
    loadRemoteModule({
      remoteEntry: "http://localhost:3001/remoteEntry.js",
      remoteName: "profile_user",
      exposedModule: "./ProfileReactComponent",
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}