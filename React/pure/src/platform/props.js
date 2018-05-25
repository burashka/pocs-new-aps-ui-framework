import { shape, arrayOf, string, number, bool } from 'prop-types';

export const aps = shape({
	modified: string,
	id: number,
	type: string,
	status: string,
	revision: number
}).isRequired;

export const context = shape({
	wizardState: arrayOf(
		shape({
			label: string.isRequired,
			id: string.isRequired
		})
	),
	selectedUser: shape({
		addressPostal: shape({
			streetAddress: string,
			postalCode: string,
			locality: string,
			countryName: string,
			extendedAddress: string,
			region: string
		}),
		telCell: string,
		telWork: string,
		aps,
		displayName: string,
		givenName: string,
		fullName: string,
		locale: string,
		login: string,
		userId: number,
		isAccountAdmin: bool,
		familyName: bool,
		disabled: bool,
		locked: bool,
		email: string,
		servicesMode: string
	}),
	user: shape({
		addressPostal: shape({
			streetAddress: string,
			postalCode: string,
			locality: string,
			countryName: string,
			extendedAddress: string,
			region: string
		}),
		telCell: string,
		aps,
		displayName: string,
		givenName: string,
		fullName: string,
		telWork: string,
		locale: string,
		login: string,
		userId: number,
		telFax: string,
		isAccountAdmin: bool,
		familyName: string,
		disabled: bool,
		locked: bool,
		additionalName: string,
		email: string,
		memberId: number,
		servicesMode: string
	})
});