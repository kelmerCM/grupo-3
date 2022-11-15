import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
import { MostrarcochesComponent } from './components/coches/mostrarcoches/mostrarcoches.component';
import { CrearcochesComponent } from './components/coches/crearcoches/crearcoches.component';
import { ActualizarcochesComponent } from './components/coches/actualizarcoches/actualizarcoches.component';
import { EliminarcochesComponent } from './components/coches/eliminarcoches/eliminarcoches.component';
import { MostrarmarcaComponent } from './components/marca/mostrarmarca/mostrarmarca.component';
import { CrearmarcaComponent } from './components/marca/crearmarca/crearmarca.component';
import { ActualizarmarcaComponent } from './components/marca/actualizarmarca/actualizarmarca.component';
import { EliminarmarcaComponent } from './components/marca/eliminarmarca/eliminarmarca.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './components/venta/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './components/venta/eliminar-venta/eliminar-venta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    MostrarcochesComponent,
    CrearcochesComponent,
    ActualizarcochesComponent,
    EliminarcochesComponent,
    MostrarmarcaComponent,
    CrearmarcaComponent,
    ActualizarmarcaComponent,
    EliminarmarcaComponent,
    MostrarVentaComponent,
    CrearVentaComponent,
    ActualizarVentaComponent,
    EliminarVentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
