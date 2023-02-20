import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItemsComponent } from './components/to-do-input-add-items/to-do-input-add-items.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItemsComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }