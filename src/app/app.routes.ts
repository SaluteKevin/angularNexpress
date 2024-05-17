import { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { SandboxComponent } from "./pages/sandbox/sandbox.component";

export const routes = [
    {path: '', component:LandingComponent},
    {path: 'sandbox', component:SandboxComponent}
];