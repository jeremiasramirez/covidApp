import { Routes ,RouterModule} from "@angular/router"
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';
import { ExploreComponent } from './explore/explore.component';
import { CreditComponent } from './credit/credit.component';



const routes:Routes = [
    
    {path: 'search', component: SearchComponent },
     {path: 'credit', component: CreditComponent },
    {path: 'home', component: HomeComponent },
    {path: 'explore', component: ExploreComponent },
    {path: '', component: InitComponent },
    {path: '**', component: InitComponent },
     
] 


export const ROUTING = RouterModule.forRoot(routes)