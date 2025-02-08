import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialImports: any[] = [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
]

const others: any[] = [
    ReactiveFormsModule,
    FormsModule
]

@NgModule({
    imports: [...materialImports, ...others],
    exports: [...materialImports, ...others],
    declarations: []
})
export class CommonImports {}