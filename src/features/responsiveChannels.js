const toggleClass = 'refined-discord_mobile-toggle'

window.addEventListener('load', () => {
	const toggleElement = document.createElement('div')
	toggleElement.className = toggleClass
	toggleElement.innerHTML = 'toggle channels'

	toggleElement.addEventListener('click', () => {
		toggleElement.classList.toggle('show-channels')
	})
	document.body.insertAdjacentElement('afterbegin', toggleElement)

	setTimeout(() => {
		if (document.querySelector('[class*="members"]')) {
			document.querySelector('svg[name="People"]').parentElement.click()
		}
	}, 1000)
})
