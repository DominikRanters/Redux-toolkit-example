import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { request, ResponseType } from 'chayns-helper';
import App from './components/App';
import store from './store';
import { baseUrl } from './constants/baseUrl';
import * as logger from 'chayns-logger';
import { IS_DEV, IS_STAGING } from './constants/enviroment';

chayns.ready
    .then(() => {
        try {
            // configure request helper
            logger.init({
                applicationUid: '',
                overrideOnError: true,
                defaults: {
                    frontend: 'Tapp',
                    user: {
                        userId: chayns.env.user.id,
                        Name: chayns.env.user.name,
                    },
                    SiteUrl: chayns.env.site.url,
                    siteId: chayns.env.site.id,
                    locationId: chayns.env.site.locationId,
                    tappId: chayns.env.site.tapp.id,
                    // eslint-disable-next-line no-nested-ternary
                    device: chayns.env.isIOS ? 'IOS' : chayns.env.isAndroid ? 'Android' : 'other',
                },
                useDevServer: IS_DEV || IS_STAGING,
            });

            request.defaults(baseUrl,{}, { responseType: ResponseType.Object });

            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
                , document.querySelector('#root'));
        } catch (e) {
            console.error('Encountered error at `ReactDOM.render`: ', e);
        }
    })
    .catch((error) => {
        console.warn('No chayns environment found.', error);
    });
