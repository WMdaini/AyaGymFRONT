import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {ContainerComponent} from './layout/container/container.component';
import {HeaderComponent} from './layout/header/header.component';
import {Router} from '@angular/router';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {PagebarComponent} from './layout/pagebar/pagebar.component';
import {ClientComponent} from './layout/client/client.component';
import {McBreadcrumbsModule} from 'ngx6-angular-breadcrumbs';
import {AddclientComponent} from './layout/client/addclient/addclient.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ContainerComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        PagebarComponent,
        ClientComponent,
        AddclientComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule,
        McBreadcrumbsModule.forRoot(),
        FormsModule,
        Ng2SearchPipeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
