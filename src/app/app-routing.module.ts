import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent
},

// {
//   path: 'alunos',
//   component: AlunosComponent
// },

// {
//   path: 'professores',
//   component: ProfessorComponent
// },

 {
   path: '**',
   component: NotFoundComponent 
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
