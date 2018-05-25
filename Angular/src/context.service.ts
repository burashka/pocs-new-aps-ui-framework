import { User, View, Map } from './platform/Typings';
import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
    wizardState: View[] = [{
        id: "vps",
        label: "Add VPS"
    }];
    vars: Map<any> = {
        "selectedUser":{
            "addressPostal": {
                "streetAddress": "Khimki",
                "postalCode": "141410",
                "locality": "Khimki",
                "countryName": "ru",
                "extendedAddress": "Leningradskoe 66",
                "region": "MOS"
            },
            "telCell": "7#926#1234567#",
            "telWork": "7#926#1234567#",
            "aps": {
                "modified": "2017-11-21T10:46:53Z",
                "id": "78ffbc39-ce89-a2d9-ca96-a3cbf6c1a71b",
                "type": "http://parallels.com/aps/types/pa/service-user/1.2",
                "status": "aps:ready",
                "revision": 2
            },
            "displayName": "Konstantine Konstantinopolskii",
            "givenName": "Konstantine",
            "fullName": "Konstantine Konstantinopolskii",
            "locale": "en_US",
            "login": "konst@example.com",
            "userId": 73,
            "isAccountAdmin": false,
            "familyName": "Konstantinopolskii",
            "disabled": false,
            "locked": false,
            "email": "konst@sample.com",
            "servicesMode": "NONE"
        }
    };
    user: User = {
        "addressPostal": {
            "streetAddress": "Khimki",
            "postalCode": "141410",
            "locality": "Khimki",
            "countryName": "ru",
            "extendedAddress": "Leningradskoe 66",
            "region": "MOS"
        },
        "telCell": "7#926#1234567#",
        "aps": {
            "modified": "2017-10-30T11:24:38Z",
            "id": "57109936-e1d7-4538-8187-a827b8e52d9d",
            "type": "http://parallels.com/aps/types/pa/admin-user/1.2",
            "status": "aps:ready",
            "revision": 2
        },
        "displayName": "Harry Potter",
        "givenName": "Harry",
        "fullName": "Harry Potter",
        "telWork": "7#926#1234567#",
        "locale": "en_US",
        "login": "hp@example.com",
        "userId": 61,
        "telFax": "",
        "isAccountAdmin": true,
        "familyName": "Potter",
        "disabled": false,
        "locked": false,
        "additionalName": "",
        "email": "hp@example.com",
        "memberId": 1000016,
        "servicesMode": "NONE"
    };
}