import { Observable } from 'rxjs';
import { NgxSpinner, Spinner } from './ngx-spinner.enum';
import * as ɵngcc0 from '@angular/core';
export declare class NgxSpinnerService {
    /**
     * Spinner observable
     *
     * @memberof NgxSpinnerService
     */
    private spinnerObservable;
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor();
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    getSpinner(name: string): Observable<NgxSpinner>;
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name?: string, spinner?: Spinner): Promise<unknown>;
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    hide(name?: string, debounce?: number): Promise<unknown>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxSpinnerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJuZ3gtc3Bpbm5lci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyLCBTcGlubmVyIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5lbnVtJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBTcGlubmVyIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3Bpbm5lck9ic2VydmFibGU7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyU2VydmljZS5cbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIC8qKlxuICAgICogR2V0IHN1YnNjcmlwdGlvbiBvZiBkZXNpcmVkIHNwaW5uZXJcbiAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgICoqL1xuICAgIGdldFNwaW5uZXIobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxOZ3hTcGlubmVyPjtcbiAgICAvKipcbiAgICAgKiBUbyBzaG93IHNwaW5uZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgICAqL1xuICAgIHNob3cobmFtZT86IHN0cmluZywgc3Bpbm5lcj86IFNwaW5uZXIpOiBQcm9taXNlPHVua25vd24+O1xuICAgIC8qKlxuICAgICogVG8gaGlkZSBzcGlubmVyXG4gICAgKlxuICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAgKi9cbiAgICBoaWRlKG5hbWU/OiBzdHJpbmcsIGRlYm91bmNlPzogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPjtcbn1cbiJdfQ==