import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EditViewModule } from './ui/EditView/EditView.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(EditViewModule);