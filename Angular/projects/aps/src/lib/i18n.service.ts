import { Injectable } from '@angular/core';

@Injectable()
export class I18nService {
    public _ = (text: string) => text
}