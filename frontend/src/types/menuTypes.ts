export enum EMenuType {
	LINK = 'link',
	PRIMARY_BUTTON = 'button-primary',
	SECONDARY_BUTTON = 'button-secondary',
}

export interface IMenuItem {
	link: string;
	text: string;
	type: EMenuType;
}