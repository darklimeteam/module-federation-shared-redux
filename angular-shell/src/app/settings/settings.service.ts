import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {SettingsOptions} from "../enums/settings";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private currentSettingsSubject = new BehaviorSubject<SettingsOptions>(SettingsOptions.SHOW);
  public currentSettings$: Observable<SettingsOptions> = this.currentSettingsSubject;

  constructor() {}

  setNewSettings(settingsOption: SettingsOptions) {
    console.log('888 settingsOption', settingsOption)
    this.currentSettingsSubject.next(settingsOption);
  }
}