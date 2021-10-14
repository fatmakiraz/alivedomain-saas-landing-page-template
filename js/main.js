const headerToggle = document.querySelector('.js-mobileMenuToggle')
const mobileHeader = document.querySelector('.js-headerWrap')

headerToggle.addEventListener('click', (() => mobileHeader.classList.toggle('is-show')))

const closeSaleModal = document.querySelector('.js-closeSaleModal')

if (closeSaleModal) {
    const saleModal = document.querySelector('.js-saleModal')

    closeSaleModal.addEventListener('click', (() => {
        saleModal.classList.remove('is-show')
        localStorage.hideSaleModal = true
    }))

    if (localStorage.hideSaleModal) {
        saleModal.classList.remove('is-show')
    }
}

const footerDate = document.querySelector('.js-footerDate')

footerDate.innerHTML = new Date().getFullYear()