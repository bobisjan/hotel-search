import {RouterConfig, provideRouter} from '@angular/router';

// Components
import { Search } from './components/search/search.component';
import { Results } from './components/results/results.component';
import { Detail } from './components/detail/detail.component';

const routes: RouterConfig = [
    // Search Top
    { path: '',      component: Search },
    { path: 'search',  component: Search },
    // make sure you match the component type string to the require in asyncRoutes

    // Search Results
    // { path: 'list', component: List},
    { path: 'results', component: Results},

    // Hote Detail
    { path: 'detail', component: Detail},

    // Default
    { path: '**',     component: Search }
];

export const appRouterProviders = [
    provideRouter(routes)
];
