import {Injectable} from "@angular/core";
// import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/empty";
import { Http, Headers, Response } from "@angular/http";

var fetchModule = require("fetch");

@Injectable()
export class WeatherService {
    static BASE_URL: string = 'https://secure.digitalsignage.com/Weather/';

    constructor(private http:Http) {
    }

    search(query: string): Observable<any> {
        // if you wish to use ?q=param_here you can use
        //const search:URLSearchParams = new URLSearchParams();
        //search.set('q', query);
        //return this.http.get(`${WeatherService.BASE_URL}`, new RequestOptions({search}))

        let headers = new Headers();
        headers.append("Content-Type", "application/json");


        return this.http.get('https://secure.digitalsignage.com/Weather/91301/1',
            { headers: headers }
        ).catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    // do is a great way to trace for debugging Observables
    // return fetchModule.fetch(`${WeatherService.BASE_URL}${query}`)
    //     .do(x => {
    //         console.log(`Weather response: ${x.status}`)
    //     })
    //     .map((res:any) => res.json())
    //     .map((e) => {
    //         var items:Array<any> = e[0].data.weather;
    //         return items;
    //     })
    //     .catch(function (e) {
    //         return Observable.empty();
    //     });
    // //.map((item: Array<{item: IWeatherItem}>) => item.map((item: {show: IWeatherItem}));
    // }
}