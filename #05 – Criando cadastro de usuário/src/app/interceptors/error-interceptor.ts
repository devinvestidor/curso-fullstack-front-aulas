import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { NbToastrService } from '@nebular/theme';
import HttpStatusCode from 'app/models/http-status-code';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastrService: NbToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === HttpStatusCode.NO_CONTENT) {
            this.toastrService.warning('Nenhum registro localizado.', 'Atenção');
            return null;
          }
        }

        return event;
      }), catchError((err: HttpErrorResponse) => {
        const { error } = err;
        if (error.status) {
          if (this.isServerError(error)) this.toastrService.danger(error.message, 'Atenção');
          else this.toastrService.warning(error.message, 'Atenção');
        } else {
          this.toastrService.danger('Erro ao se conectar com o servidor.', 'Atenção');
        }

        return throwError(err);
      }));
  }

  private isServerError(error): boolean {
    return error.status === HttpStatusCode.INTERNAL_SERVER_ERROR;
  }
}
