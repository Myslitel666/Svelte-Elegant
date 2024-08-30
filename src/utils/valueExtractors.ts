export function getInputValue(e: Event) {
    const target = e.target as HTMLInputElement;
    return target.value;
}

export function getElementById(id: string) {
    const inputElement = document.getElementById(id);
    return inputElement as HTMLElement;
}