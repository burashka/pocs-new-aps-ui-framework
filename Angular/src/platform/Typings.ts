export interface View {
    id: 'vps',
    label: 'Add VPS'
}

export interface APS {
    modified: string,
    id: string,
    type: string,
    status: string,
    revision: number
}

interface Address {
    streetAddress: string,
    postalCode: string,
    locality: string,
    countryName: string,
    extendedAddress: string,
    region: string
}

export interface User {
    aps: APS,
    addressPostal: Address,
    telCell: string,
    displayName: string,
    givenName: string,
    fullName: string,
    telWork: string,
    locale: string,
    login: string,
    userId: number,
    telFax: string,
    isAccountAdmin: boolean,
    familyName: string,
    disabled: boolean,
    locked: boolean,
    additionalName: string,
    email: string,
    memberId: number,
    servicesMode: string
}

export interface Map<T> {
    [id: string]: T
}