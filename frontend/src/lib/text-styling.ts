export const cyrcleOverText = (selector: string) => {
	document.querySelector(selector)?.addEventListener('mousemove', (e) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const x = (e as MouseEvent).clientX - rect.left;
		const y = (e as MouseEvent).clientY - rect.top;
		(e.target as HTMLElement)?.style?.setProperty('--x', `${x}px`);
		(e.target as HTMLElement)?.style.setProperty('--y', `${y}px`);
	});
}