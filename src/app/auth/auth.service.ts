import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

interface SignResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
    registered? : boolean
}

@Injectable({providedIn: "root"})
export class AuthService{
    user = new BehaviorSubject<User | null>(null)
    private tokenExpirationTimer: any
    
    constructor(private http: HttpClient, private router: Router){
        
    }   

    private handleAuthentication(email: string, localId: string,  idToken: string, expiresIn: string){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000)
            const user = new User(
                email, 
                localId, 
                idToken, 
                expirationDate
                );
                this.user.next(user);
                this.autoLogout(+expiresIn * 1000)
                localStorage.setItem('userData', JSON.stringify(user))
    }

    signup(email: string, password: string){
        return this.http.post<SignResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCV3gL9QrCwXsFsjGRDC-rJOvvwB25uqjQ',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(res => {
            this.handleAuthentication(
                res.email, 
                res.localId, 
                res.idToken, 
                res.expiresIn
                )
        }))  
    }

    signin(email: string, password: string){
        return this.http.post<SignResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCV3gL9QrCwXsFsjGRDC-rJOvvwB25uqjQ',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(res => {
            this.handleAuthentication(
                res.email, 
                res.localId, 
                res.idToken, 
                res.expiresIn
                )
        }))  
    }

    autoLogin() {
        const userDataString = localStorage.getItem('userData');
        
        if (userDataString) {
            const userData: {
                email: string,
                id: string | null,  
                _token: string,
                _tokenExpirationDate: string
            } = JSON.parse(userDataString);
    
            if (userData.id !== null) {  
                const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
                if (loadedUser.token) {
                    this.user.next(loadedUser);
                    const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
                    this.autoLogout(expirationDuration)
                }
            }
        }
    }

    autoLogout(expirationDuration: number){
        console.log(expirationDuration)
        this.tokenExpirationTimer = setTimeout(() =>{
            this.logout()
        }, expirationDuration)
    }


    logout(){
        this.user.next(null)
        this.router.navigate(["/login"])
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer = null
    }
}