import './nav.css';

import {getData, getDelayedData} from 'api/getData';
import render from './nav.art';
import {URL, LAYOUT_ID} from './config';

getData(URL).then(
    data => {
        document.getElementById(LAYOUT_ID).innerHTML = render({
            items : data,
        })
    }
);