import { OnDestroy, OnInit, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from './ngx-spinner.service';
import { Subject } from 'rxjs';
import { Size, NgxSpinner } from './ngx-spinner.enum';
import * as ɵngcc0 from '@angular/core';
export declare class NgxSpinnerComponent implements OnDestroy, OnInit, OnChanges {
    private spinnerService;
    private changeDetector;
    /**
     * To set backdrop color
     * Only supports RGBA color format
     * @memberof NgxSpinnerComponent
     */
    bdColor: string;
    /**
     * To set spinner size
     *
     * @memberof NgxSpinnerComponent
     */
    size: Size;
    /**
     * To set spinner color(DEFAULTS.SPINNER_COLOR)
     *
     * @memberof NgxSpinnerComponent
     */
    color: string;
    /**
     * To set type of spinner
     *
     * @memberof NgxSpinnerComponent
     */
    type: string;
    /**
     * To toggle fullscreen mode
     *
     * @memberof NgxSpinnerComponent
     */
    fullScreen: boolean;
    /**
     * Spinner name
     *
     * @memberof NgxSpinnerComponent
     */
    name: string;
    /**
     * z-index value
     *
     * @memberof NgxSpinnerComponent
     */
    zIndex: number;
    /**
     * Custom template for spinner/loader
     *
     * @memberof NgxSpinnerComponent
     */
    template: string;
    /**
     * Spinner Object
     *
     * @memberof NgxSpinnerComponent
     */
    spinner: NgxSpinner;
    /**
     * Array for spinner's divs
     *
     * @memberof NgxSpinnerComponent
     */
    divArray: Array<number>;
    /**
     * Counter for div
     *
     * @memberof NgxSpinnerComponent
     *
     */
    divCount: number;
    /**
     * Show spinner
     *
     * @memberof NgxSpinnerComponent
    **/
    show: boolean;
    /**
     * Unsubscribe from spinner's observable
     *
     * @memberof NgxSpinnerComponent
    **/
    ngUnsubscribe: Subject<void>;
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    constructor(spinnerService: NgxSpinnerService, changeDetector: ChangeDetectorRef);
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnInit(): void;
    /**
     * To set default ngx-spinner options
     *
     * @memberof NgxSpinnerComponent
     */
    setDefaultOptions: () => void;
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    getClass(type: string, size: Size): string;
    /**
     * Check if input variables have changed
     *
     * @memberof NgxSpinnerComponent
     */
    onInputChange(): void;
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxSpinnerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgxSpinnerComponent, "ngx-spinner", never, {
    "bdColor": "bdColor";
    "zIndex": "zIndex";
    "color": "color";
    "type": "type";
    "size": "size";
    "fullScreen": "fullScreen";
    "name": "name";
    "template": "template";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm5neC1zcGlubmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThIQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpemUsIE5neFNwaW5uZXIgfSBmcm9tICcuL25neC1zcGlubmVyLmVudW0nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4U3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgc3Bpbm5lclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjtcbiAgICAvKipcbiAgICAgKiBUbyBzZXQgYmFja2Ryb3AgY29sb3JcbiAgICAgKiBPbmx5IHN1cHBvcnRzIFJHQkEgY29sb3IgZm9ybWF0XG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBiZENvbG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVG8gc2V0IHNwaW5uZXIgc2l6ZVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBzaXplOiBTaXplO1xuICAgIC8qKlxuICAgICAqIFRvIHNldCBzcGlubmVyIGNvbG9yKERFRkFVTFRTLlNQSU5ORVJfQ09MT1IpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgICAqL1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVG8gc2V0IHR5cGUgb2Ygc3Bpbm5lclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVG8gdG9nZ2xlIGZ1bGxzY3JlZW4gbW9kZVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBmdWxsU2NyZWVuOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwaW5uZXIgbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogei1pbmRleCB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBDdXN0b20gdGVtcGxhdGUgZm9yIHNwaW5uZXIvbG9hZGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU3Bpbm5lciBPYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAgICovXG4gICAgc3Bpbm5lcjogTmd4U3Bpbm5lcjtcbiAgICAvKipcbiAgICAgKiBBcnJheSBmb3Igc3Bpbm5lcidzIGRpdnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAgICovXG4gICAgZGl2QXJyYXk6IEFycmF5PG51bWJlcj47XG4gICAgLyoqXG4gICAgICogQ291bnRlciBmb3IgZGl2XG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgICAqXG4gICAgICovXG4gICAgZGl2Q291bnQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTaG93IHNwaW5uZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAgKiovXG4gICAgc2hvdzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIHNwaW5uZXIncyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgICoqL1xuICAgIG5nVW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyQ29tcG9uZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzcGlubmVyU2VydmljZTogTmd4U3Bpbm5lclNlcnZpY2UsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6YXRpb24gbWV0aG9kXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG8gc2V0IGRlZmF1bHQgbmd4LXNwaW5uZXIgb3B0aW9uc1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXREZWZhdWx0T3B0aW9uczogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBPbiBjaGFuZ2VzIGV2ZW50IGZvciBpbnB1dCB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xuICAgICAgICBbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRvIGdldCBjbGFzcyBmb3Igc3Bpbm5lclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRDbGFzcyh0eXBlOiBzdHJpbmcsIHNpemU6IFNpemUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaW5wdXQgdmFyaWFibGVzIGhhdmUgY2hhbmdlZFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBvbklucHV0Q2hhbmdlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IGRlc3Ryb3kgZXZlbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==