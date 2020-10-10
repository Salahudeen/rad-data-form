import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
  })
  export class EditFormComponent implements OnInit {
    private _data: View;
    private _category: Array<string>;

    ngOnInit(): void {
        // tslint:disable-next-line: no-use-before-declare
        this._data = new View();

        this._category = new Array<string>();
        this._category.push('LTS');
        this._category.push('LTE');
        this._category.push('GSM');
    }

    get data() {
        return this._data;
    }

    set data(value: View) {
        this._data = value;
    }

    get category(): Array<string> {
        return this._category;
    }

    set category(value: Array<string>) {
        this._category = value;
    }
}

export class View {
    network = 'LTS';
}
