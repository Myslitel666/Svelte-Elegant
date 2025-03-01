export const valueExtractors = {
	getInputValue(e: Event): string {
		const target = e.target as HTMLInputElement;
		return target.value;
	},

	getChecked(e: Event): boolean {
		const target = e.target as HTMLInputElement;
		return target.checked;
	},

	getElementById(id: string): HTMLElement {
		const inputElement = document.getElementById(id);
		return inputElement as HTMLElement;
	}
};

export default valueExtractors;
