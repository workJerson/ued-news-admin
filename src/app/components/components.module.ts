import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MobileSidebarComponent } from './mobile-sidebar/mobile-sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MobileSidebarComponent
  ],
  exports: [
    SidebarComponent,
    MobileSidebarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }