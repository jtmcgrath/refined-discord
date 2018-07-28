const countContainerClass = 'refined-discord_textarea-count'
const countValueClass = 'refined-discord_textarea-count-value'

const selectCountElement = countContainer => countContainer.children[0]

const createCountElement = target => {
	const countContainer = document.createElement('div')
	countContainer.className = countContainerClass
	countContainer.innerHTML = `<span class="${countValueClass}">${
		target.value.length
	}</span>/2000`
	target.insertAdjacentElement('afterend', countContainer)
	return selectCountElement(countContainer)
}

const getCountElement = target =>
	target.nextSibling.className === countContainerClass
		? selectCountElement(target.nextSibling)
		: createCountElement(target)

window.addEventListener('keyup', ({ target }) => {
	if (target.type === 'textarea') {
        getCountElement(target).innerHTML = target.value.length
	}
})
