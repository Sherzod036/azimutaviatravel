document.addEventListener('DOMContentLoaded', () => {
	const headerBtn = document.querySelector('.header__menu')
	const menu = document.querySelector('.menu')
	const headerMenuTxt = document.querySelector('.header__menu-text')

	const headerPhone = document.querySelector('.header__phone')

	const logoDefault = document.querySelector('.logo_default')
	const logoLight = document.querySelector('.logo_light')

	const headerWorkHours = document.querySelectorAll('.header__work-hours span')
	const headerBreakHours = document.querySelectorAll(
		'.header__break-hours span'
	)

	headerBtn.addEventListener('click', (e) => {
		e.preventDefault()

		menu.classList.toggle('open')

		headerPhone.classList.toggle('dark')

		Array.from(headerWorkHours).map((i) => i.classList.toggle('dark'))
		Array.from(headerBreakHours).map((i) => i.classList.toggle('dark'))

		logoDefault.classList.toggle('active')
		logoLight.classList.toggle('disabled')

		// if (menu.classList.contains('open')) {
		// 	headerMenuTxt.textContent = 'Закры'
		// } else {
		// 	headerMenuTxt.textContent = 'Меню'
		// }
	})
})
