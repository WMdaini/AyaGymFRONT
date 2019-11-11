import {Component, OnInit} from '@angular/core';
import {DynamicScriptLoaderService} from '../../services/dynamic-script-loader.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
    }

    ngOnInit() {
        this.loadScripts();
    }

    private loadScripts() {
        // You can load multiple scripts by just providing the key as argument into load method of the service
        this.dynamicScriptLoader.load('home-data').then(data => {
            // Script Loaded Successfully
        }).catch(error => console.log(error));
    }
}
