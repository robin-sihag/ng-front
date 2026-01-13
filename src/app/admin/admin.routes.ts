import { Routes } from "@angular/router";
import { MainControls } from "./main-controls/main-controls";

export const ADMIN_ROUTES:Routes = [
    {
    path:'', redirectTo:'/admin', pathMatch:'full'
},{
  path:'/admin' , component:MainControls  
},]