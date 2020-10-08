import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator-basic',
    pathMatch: 'full'
  },
  { path: 'calculator-basic', loadChildren: './pages/calculator-basic/calculator.module#CalculatorPageModule' },
  { path: 'calculator-postfix', loadChildren: './pages/calculator-postfix/calculator.module#CalculatorPostfixPageModule' },
  { path: 'calculator-scientific', loadChildren: './pages/calculator-scientific/calculator-scientific.module#CalculatorScientificPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
