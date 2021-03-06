import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WindowModule, WindowRef } from '@angular-architecture-patterns/core/window';
import { EndpointModule } from '@angular-architecture-patterns/core/endpoint';
import { MockModule } from '@angular-architecture-patterns/core/mock';

import { AppComponent } from './app.component';
import { data as navigationMockData } from './navigation.mock';
import { EndpointMockParser } from './endpoint-mock.parser';

const mockConfig = {
  useMocks: true,
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WindowModule.forRoot(),
    EndpointModule.forRoot(WindowRef),
    MockModule.forRoot(mockConfig, navigationMockData, [EndpointMockParser]),
  ],
  providers: [EndpointMockParser],
  bootstrap: [AppComponent],
})
export class AppModule {}
