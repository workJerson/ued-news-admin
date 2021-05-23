import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { AuthGuardService } from './services/guard/auth-guard.service';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./layouts/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "main",
    loadChildren: () =>
      import("./layouts/main/main.module").then((m) => m.MainModule),
    canActivate: [AuthGuardService],
  },
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "**", redirectTo: "main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
