import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./models/user";
import { SettingsOptions } from "./enums/settings";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  store$!: any;
  selectedNotificationMode: SettingsOptions = SettingsOptions.SHOW;

  constructor() {}

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
    import("store/Store").then((val) => {
      // get initial state of settings
      this.selectedNotificationMode =
        val.default.getState().currentSettingsValue;

      // subscribe to changes of settings
      this.store$ = val.default;
      this.store$.subscribe(() => {
        this.selectedNotificationMode =
          val.default.getState().currentSettingsValue;
      });
    });
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }
}
