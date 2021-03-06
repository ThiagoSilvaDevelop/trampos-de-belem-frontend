import {RegisterVacancyComponent} from '../admin/register-vacancy/register-vacancy.component';
import {ListVacanciesComponent} from './list-vacancies/list-vacancies.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AdminComponent} from './admin.component';

import {RichTextEditorAllModule} from '@syncfusion/ej2-angular-richtexteditor';
import {ComponentsModule} from '../_components/components.module';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    RegisterVacancyComponent,
    ListVacanciesComponent
  ],
  imports: [
    RichTextEditorAllModule,
    InputTextareaModule,
    ConfirmDialogModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    InputTextModule,
    PanelMenuModule,
    CalendarModule,
    DropdownModule,
    BrowserModule,
    SidebarModule,
    TooltipModule,
    CommonModule,
    EditorModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    TableModule,
    CardModule,
    MenuModule,
  ],
  exports: [AdminComponent]
})
export class AdminModule {
}
