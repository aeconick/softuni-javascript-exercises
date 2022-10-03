function editElement(ref, match, replacer) {
	let elementToEdit = ref.textContent;
	let reg = new RegExp(match, 'g');
	let edited = elementToEdit.replace(reg, replacer);
	ref.textContent = edited;
}
