/**
 * prefix "m" – for namespace;
 */
document.addEventListener('DOMContentLoaded', () => {
	const mTabsContainers = document.querySelectorAll('.m-tabs-container');
	for (let tabContainer of mTabsContainers) {
		tabContainer.addEventListener('click', ({ target }) => {

			if (target.classList.contains('m-tabs__header-link')) {
				const tabsBlockContainer = target.closest('.m-tabs-container');
				const links = tabsBlockContainer.querySelectorAll('.m-tabs__header-link');
				const tabs = tabsBlockContainer.querySelectorAll('.m-tabs__tab');
				const innerData = {
					links,
					tabs
				}

				if (links) {
					for (let i = 0; i < links.length; i++) {
						if (target === links[i]) {
							mSelectActiveLink(i, innerData, "m-tabs__header-link--active");
							mSelectTabById(i, innerData, "m-tabs__tab--active");
						}
					}
				}
			}
		})
	}
});

function mSelectTabById(id, innerData, activeClassName) {
	for (let tab of innerData.tabs) {
		if (tab.classList.contains(activeClassName)) {
			tab.classList.remove(activeClassName);
		}
	}

	if (innerData.tabs[id]) {
		innerData.tabs[id].classList.add(activeClassName);
	}

	/**
	 * If selected wrong tab id, change active to first element.
	 */
	if (innerData.tabs[id] === undefined) {
		if (innerData.tabs[0] && innerData.links[0]) {
			innerData.tabs[0].classList.add(activeClassName);
			mSelectActiveLink(0, innerData, "m-tabs__header-link--active");
		}
	}
}

function mSelectActiveLink(id, innerData, activeClassName) {
	for (let link of innerData.links) {
		if (link.classList.contains(activeClassName)) {
			link.classList.remove(activeClassName);
		}
	}

	if (innerData.links[id]) {
		innerData.links[id].classList.add(activeClassName);
	}
}