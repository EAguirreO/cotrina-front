import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CuentaCreadaComponent } from './pages/cuenta-creada/cuenta-creada.component';
import { LibroReclamacionesComponent } from './pages/libro-reclamaciones/libro-reclamaciones.component';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { NovedadesDetalleComponent } from './pages/novedades-detalle/novedades-detalle.component';
import { PedidosDetalleComponent } from './pages/pedidos-detalle/pedidos-detalle.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ProcesoCompraAComponent } from './pages/proceso-compra-a/proceso-compra-a.component';
import { ProcesoCompraBComponent } from './pages/proceso-compra-b/proceso-compra-b.component';
import { ProcesoCompraCComponent } from './pages/proceso-compra-c/proceso-compra-c.component';
import { ProcesoCompraDComponent } from './pages/proceso-compra-d/proceso-compra-d.component';
import { RegistroValidacionComponent } from './pages/registro-validacion/registro-validacion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AlterMainComponent } from './layouts/alter-main/alter-main.component';
import { RecuperarContraseniaCComponent } from './pages/recuperar-contrasenia-c/recuperar-contrasenia-c.component';
import { RecuperarContraseniaDComponent } from './pages/recuperar-contrasenia-d/recuperar-contrasenia-d.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  {
    path: 'views', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'cuenta-creada', component: CuentaCreadaComponent },
      { path: 'libro-reclamaciones', component: LibroReclamacionesComponent },
      { path: 'mis-pedidos', component: MisPedidosComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'novedades', component: NovedadesComponent },
      { path: 'novedades-detalle', component: NovedadesDetalleComponent },
      { path: 'pedidos-detalle', component: PedidosDetalleComponent },
      { path: 'perfil-usuario', component: PerfilUsuarioComponent },
      { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
      { path: 'proceso-compra-1', component: ProcesoCompraAComponent },
      { path: 'proceso-compra-2', component: ProcesoCompraBComponent },
      { path: 'proceso-compra-3', component: ProcesoCompraCComponent },
      { path: 'proceso-compra-4', component: ProcesoCompraDComponent },
      { path: 'registro-validacion', component: RegistroValidacionComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'terminos-condiciones', component: TerminosCondicionesComponent }
    ]
  },
  {
    path: 'recuperar-contrasenia', component: AlterMainComponent,
    children: [
      { path: 'paso-3', component: RecuperarContraseniaCComponent},
      { path: 'paso-4', component: RecuperarContraseniaDComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
