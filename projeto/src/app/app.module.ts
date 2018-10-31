import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { ProdutoPage } from '../pages/produto/produto';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { CameraPage } from '../pages/camera/camera';
import { PesquisaPage } from '../pages/pesquisar/pesquisar'

// Categoria dos Anúncios
import { EsportePage } from '../pages/categoria/CatEsporte/esporte';
import { EletronicoPage } from '../pages/categoria/CatEletronico/eletronico';
import { EmpregoPage } from '../pages/categoria/CatEmprego/emprego';
import { ImovelPage } from '../pages/categoria/CatImovel/imovel';
import { MusicaPage } from '../pages/categoria/CatMusica/musica';
import { AnimalPage } from '../pages/categoria/CatAnimal/animal';
import { VeiculoPage } from '../pages/categoria/CatVeiculo/veiculo';

import { RestApiProvider } from '../providers/rest-api/rest-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsuarioPage,
    ProdutoPage,
    AnuncioPage,
    CameraPage,
    PesquisaPage,
    EsportePage,
    EletronicoPage,
    EmpregoPage,
    ImovelPage,
    MusicaPage,
    AnimalPage,
    VeiculoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuarioPage,
    ProdutoPage,
    AnuncioPage,
    CameraPage,
    PesquisaPage,
    EsportePage,
    EletronicoPage,
    EmpregoPage,
    ImovelPage,
    MusicaPage,
    AnimalPage,
    VeiculoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    RestApiProvider   
  ]
})
export class AppModule {}
