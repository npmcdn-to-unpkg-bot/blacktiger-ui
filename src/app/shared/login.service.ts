import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../'
import { ErrorHandler } from './base.service';

export interface IToken {
    token: string;
    expires: number;
}

@Injectable()
export class LoginService extends ErrorHandler {
    private _onAuthenticationChange: EventEmitter<boolean>;

    private _isAuthenticated: boolean = false;

    private _currentCredentials: string;
    private _currentToken: IToken;

    constructor(private http: Http) {
        super();
        this._onAuthenticationChange = new EventEmitter<boolean>();
    }

    private doAuthenticate(basicToken: string, remember?: boolean): Observable<IToken> {
        let headers: Headers = new Headers();
        //var deferred: ng.IDeferred<Token> = this.$q.defer();
        this._currentCredentials = basicToken;
        headers.append('Authorization', 'Basic ' + basicToken);

        //let ob: Observable<IToken> = Observable.create();

        //this.$log.info('Authenticating using basic auth.');

        return this.http.get(environment.serviceUrl + '/system/authenticate', { headers: headers })
            .map((res: Response) => {
                //this.$log.info('Authentication response received.');
                if (res.status !== 200) {
                    var reason = res.status === 404 ? null : <any>res.json();
                    if (!reason) {
                        reason = {
                            message: 'Unable to communicate with server'
                        };
                    }
                    //this.localStorageService.remove(this.credentialsKey);
                    //this.$log.info('Unable to authenticate: ' + reason.message);
                    throw 'Unable to authenticate. Reason: ' + reason.message;
                }

                /*if (remember) {
                    this.localStorageService.add(this.credentialsKey, basicToken);
                }*/

                var token: IToken = res.json();
                this._currentToken = token;

                //this.$log.info('Authenticated. Returning user.');
                //this.authorizationHeader.setToken(token);

                //this.$log.info('Logged in with ' + token.token);
                //this.currentToken = token;
                //this.$rootScope.$broadcast('login', token);
                //deferred.resolve(token);


                this._isAuthenticated = true;
                this._onAuthenticationChange.emit(true);
                return token;
            }).catch(this.handleError);

    }

    public authenticate(username: string, password: string, remember?: boolean): Observable<IToken> {
        let basicToken: string;
        //var deferred: ng.IDeferred<Token> = this.$q.defer();
        /*if (!username && !password) {
            basicToken = this.localStorageService.get(this.credentialsKey);
        } else if (username && password) {*/
        basicToken = btoa(username.trim() + ':' + password.trim());
        //}

        let obs = this.doAuthenticate(basicToken, remember);
        obs.subscribe(() => {

        });
        return obs;
    }


    public reauthenticate(): Observable<IToken> {
        return this.doAuthenticate(this._currentCredentials);
    }

    public deauthenticate() {
        var token = this._currentToken;
        //this.authorizationHeader.setToken(undefined);
        //this.localStorageService.remove(this.credentialsKey);
        this._currentToken = null;
        this._currentCredentials = null;
        this._isAuthenticated = false;
        this._onAuthenticationChange.emit(false);
    }

    public isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    public get currentToken() {
        return this._currentToken;
    }

    public get onAuthenticationChange(): EventEmitter<boolean> {
        return this._onAuthenticationChange;
    }

}
