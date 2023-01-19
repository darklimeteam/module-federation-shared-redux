import { Component } from "@angular/core";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  standalone: true,
  imports: [SettingsComponent],
  selector: "app-layout",
  template: ` <app-settings></app-settings>`,
})
export class LayoutComponent {}
