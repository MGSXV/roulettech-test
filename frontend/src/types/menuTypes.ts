export enum EMenuType {
	LINK = 'link',
	BUTTON = 'button',
}

export interface IMenu {
	menu: IMenuItem[];
}

export interface IMenuItem {
	link: string;
	text: string;
	type: EMenuType;
}