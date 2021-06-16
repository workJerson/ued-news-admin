import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './layouts/auth/auth.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/http-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { StudentsComponent } from './pages/students/students.component';
import { EnrolleesComponent } from './pages/enrollees/enrollees.component';
import { SchoolComponent } from './pages/school/school.component';
import { CreateSchoolComponent } from './pages/school/create-school/create-school.component';
import { ViewSchoolComponent } from './pages/school/view-school/view-school.component';
import { UpdateSchoolComponent } from './pages/school/update-school/update-school.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { UpdateTestimonialComponent } from './pages/testimonial/update-testimonial/update-testimonial.component';
import { ViewTestimonialComponent } from './pages/testimonial/view-testimonial/view-testimonial.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    StudentsComponent,
    EnrolleesComponent,
    SchoolComponent,
    CreateSchoolComponent,
    ViewSchoolComponent,
    UpdateSchoolComponent,
    TestimonialComponent,
    UpdateTestimonialComponent,
    ViewTestimonialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxDropzoneModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
