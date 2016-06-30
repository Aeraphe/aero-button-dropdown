import {Component, Input, EventEmitter, Output,  OnInit} from 'angular2/core';

@Component({
    selector: 'aero-button-dropdown',
    template: `
    <div class="row" style="padding-top:0px;padding-bottom:0px;">
  <div class="col-lg-3">

      <div  class="input-group-btn" [class.open]="showDropList">
        <button (click)="showDropListAction()" type="button" class="btn btn-white  btn-sm ">{{buttonTitle}} <span class="caret"></span></button>
        <ul (mouseleave)="showDropListAction()" class="dropdown-menu ">
                
          <li  *ngFor="let item of buttonData"><i class=" {{item.icon}} text-danger" > </i><a (click)="clickEvent(item.action)"> {{item.name}}</a> </li>

        </ul>
      </div><!-- /btn-group -->

  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<style>
.dropdown-menu > li{position:relative;font-size:12px}
.dropdown-menu > li > i{position:absolute;left:7px;top:9px;}
</style>
    `
})

export /**
 * AeroTableFilterComponent
 */
    class AeroButtonDropdowComponent implements  OnInit {



    @Input() buttonData: Array<any>;
    @Input() buttonTitle:string="Button Title";
    @Output() public buttonClickEvent = new EventEmitter<Object>();

    public showDropList: boolean = false;

    constructor() {}

    /**
     * Load data for te menu
     */
    ngOnInit() {}

    /**
     * Method for show or hide the dropdown menu
     */
    showDropListAction() {
        this.showDropList = !this.showDropList;
    }
    
    clickEvent(action:string){
        this.buttonClickEvent.emit(action);
    }


}
