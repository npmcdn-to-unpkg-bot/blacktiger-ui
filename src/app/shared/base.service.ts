import { Http, Response, RequestOptionsArgs, URLSearchParams, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './login.service';
import { environment } from '../'

export interface IBaseEntity {
    id: string;
}

export interface Error {
    type: string;
    message: string;
}

export class PageRequest {
    page: number;
    size: number;
    order: string
    search: string;
}

export interface IService<T> {
    query(pageRequest?: PageRequest): Observable<T[]>;
    get(id: string): Observable<T>;
    save(entity: T): Observable<T>;
    delete(entity: string | T): Observable<void>;
}


export class ErrorHandler {
    protected handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg;
        try {
            let errorObj: Error = error.json();
            errMsg = errorObj.type + ': ' + errorObj.message;
        } catch (ex) {
            errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        }
         
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }

}

export class BaseService<T extends IBaseEntity> extends ErrorHandler implements IService<T> {
    constructor(protected http: Http, private authenticationService: LoginService, protected resourcePath: string) {
        super();
     }

    private isString(x: any): x is string {
        return typeof x === "string";
    }

    protected appendAuthToken(headers?: Headers): Headers {
        if(!headers) {
            headers = new Headers();
        }
        headers.append('X-Auth-Token', this.authenticationService.currentToken.token);
        return headers;
    }

    protected resolveFullPath(appendix?: string) {
        let path = environment.serviceUrl + this.resourcePath;
        if (appendix) {
            path += appendix;
        }
        return path;
    }

    
    query(pageRequest?: PageRequest): Observable<T[]> {
        var params: URLSearchParams = new URLSearchParams();

        if (pageRequest) {
            if (pageRequest.order) {
                params.append('order', pageRequest.order);
            }
            if (pageRequest.page) {
                params.append('page', pageRequest.page.toString());
            }
            if (pageRequest.size) {
                params.append('size', pageRequest.size.toString());
            }
            if (pageRequest.search) {
                params.append('search', pageRequest.search);
            }
        }
        return this.http.get(this.resolveFullPath(), { search: params, headers: this.appendAuthToken() })
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    get(id: string): Observable<T> {
        return this.http.get(this.resolveFullPath(`/${id}`), {headers: this.appendAuthToken()})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    save(entity: T): Observable<T> {
        let path: string;

        if (entity.id && entity.id !== null) {
            path = this.resolveFullPath(`/${entity.id}`);
        } else {
            path = this.resolveFullPath();
        }

        return this.http.post(path, entity, {headers: this.appendAuthToken()})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    delete(entity: string | T): Observable<void> {

        let id: string;
        if (this.isString(entity)) {
            id = entity;
        } else {
            id = entity.id;
        }

        return this.http.delete(this.resolveFullPath(`/${id}`), {headers: this.appendAuthToken()})
            .map((res: Response) => null)
            .catch(this.handleError);
    }
}