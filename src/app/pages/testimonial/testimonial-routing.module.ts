import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestimonialComponent } from './create-testimonial/create-testimonial.component';
import { TestimonialComponent } from './testimonial.component';
import { UpdateTestimonialComponent } from './update-testimonial/update-testimonial.component';
import { ViewTestimonialComponent } from './view-testimonial/view-testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialComponent,
  },
  {
    path: 'view/:id',
    component: ViewTestimonialComponent,
  },
  {
    path: 'create',
    component: CreateTestimonialComponent,
  },
  {
    path: 'update/:id',
    component: UpdateTestimonialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialRoutingModule {}
