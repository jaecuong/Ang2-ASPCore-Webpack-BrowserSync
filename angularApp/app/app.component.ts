﻿import { Component } from '@angular/core';

// AoT compilation doesn't support 'require'.
import './app.component.css';
import '../style/app.css';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent { }