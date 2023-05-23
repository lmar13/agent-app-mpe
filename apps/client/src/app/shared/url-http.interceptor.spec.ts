import { TestBed } from '@angular/core/testing';

import { UrlHttpInterceptorInterceptor } from './url-http.interceptor';

describe('UrlHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UrlHttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UrlHttpInterceptorInterceptor = TestBed.inject(UrlHttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
