import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CuentaCreadaComponent } from './cuenta-creada/cuenta-creada.component';
import { LibroReclamacionesComponent } from './libro-reclamaciones/libro-reclamaciones.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { NovedadesDetalleComponent } from './novedades-detalle/novedades-detalle.component';
import { PedidosDetalleComponent } from './pedidos-detalle/pedidos-detalle.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { ProcesoCompraAComponent } from './proceso-compra-a/proceso-compra-a.component';
import { ProcesoCompraBComponent } from './proceso-compra-b/proceso-compra-b.component';
import { ProcesoCompraCComponent } from './proceso-compra-c/proceso-compra-c.component';
import { ProcesoCompraDComponent } from './proceso-compra-d/proceso-compra-d.component';
import { RegistroValidacionComponent } from './registro-validacion/registro-validacion.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarContraseniaCComponent } from './recuperar-contrasenia-c/recuperar-contrasenia-c.component';
import { RecuperarContraseniaDComponent } from './recuperar-contrasenia-d/recuperar-contrasenia-d.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoDetalleComponent } from './catalogo-detalle/catalogo-detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarritoComponent,
    CuentaCreadaComponent,
    LibroReclamacionesComponent,
    MisPedidosComponent,
    NosotrosComponent,
    NovedadesComponent,
    NovedadesDetalleComponent,
    PedidosDetalleComponent,
    PerfilUsuarioComponent,
    PreguntasFrecuentesComponent,
    ProcesoCompraAComponent,
    ProcesoCompraBComponent,
    ProcesoCompraCComponent,
    ProcesoCompraDComponent,
    RegistroValidacionComponent,
    RegistroComponent,
    RecuperarContraseniaCComponent,
    RecuperarContraseniaDComponent,
    TerminosCondicionesComponent,
    CatalogoComponent,
    CatalogoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    HomeComponent,
    CarritoComponent,
    CuentaCreadaComponent,
    LibroReclamacionesComponent,
    MisPedidosComponent,
    NosotrosComponent,
    NovedadesComponent,
    NovedadesDetalleComponent,
    PedidosDetalleComponent,
    PerfilUsuarioComponent,
    PreguntasFrecuentesComponent,
    ProcesoCompraAComponent,
    ProcesoCompraBComponent,
    ProcesoCompraCComponent,
    ProcesoCompraDComponent,
    RegistroValidacionComponent,
    RegistroComponent,
    RecuperarContraseniaCComponent,
    RecuperarContraseniaDComponent,
    TerminosCondicionesComponent,
    CatalogoComponent,
    CatalogoDetalleComponent
  ]
})
export class PagesModule { }
