const headerHeight = document.querySelector('.header').offsetHeight;
const content = document.querySelector('.content');
const main = document.querySelector('.main');
const minWidthForSidebarToShow = 1400;


defineOnScroll(); // turn the sidebar fixed when header is no longer on screen

function defineOnScroll() {
	document.onscroll = () => {
		const windowLargeEnough = window.innerWidth > minWidthForSidebarToShow;
		if(! windowLargeEnough)
			return;
		if (window.pageYOffset > headerHeight) {
			content.classList.add('show-menu');
		} else {
			content.classList.remove('show-menu');
		}
	}
}

function menuToggle() {
	const windowLargeEnough = window.innerWidth > minWidthForSidebarToShow;
	if(windowLargeEnough)
		return;

	if(content.classList.contains('show-menu')) {
		content.classList.remove('show-menu');
		main.onclick = () => {};
	} else {
		content.classList.add('show-menu');
		main.onclick = () => menuToggle();
	}
}
