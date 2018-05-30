import { Injectable } from '@angular/core';

@Injectable()
export class ApscService {
    public checkPrivilege = (name: string) => true;
}