import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./models/user";
import { SettingsOptions } from "./enums/settings";
import { SettingsService } from "./settings/settings.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentUser$: Observable<IUser> = new Observable();
  notificationSettings$: Observable<SettingsOptions> =
    this.settingsService.currentSettings$;
  selectedNotificationMode: SettingsOptions = SettingsOptions.SHOW;

  constructor(private settingsService: SettingsService) {}

  public get selectedNotificationModeText(): string {
    switch (this.selectedNotificationMode) {
      case SettingsOptions.SHOW:
        return "Show notifications";
      case SettingsOptions.SEND_VIA_EMAIL:
        return "Send notifications via email";
      case SettingsOptions.NOT_SHOW:
        return "Turn off notifications";
    }
  }

  ngOnInit(): void {
    this.notificationSettings$.subscribe((settings) => {
      this.selectedNotificationMode = settings;
    });
  }
}
