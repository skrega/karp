Fancybox.bind("[data-fancybox]");

// preloader
window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('_hide');
  setInterval(function () {
    preloader.style.display = 'none';
  }, 990);
}



// burger menu
let headerBurger = document.querySelector('#hamburger');
let headerMenu = document.querySelector('.header__menu');
let isClosed = true;
headerBurger.addEventListener('click', function () {
  burgerToggle();
});

function burgerToggle() {
  if (isClosed == false) {
    headerBurger.classList.remove('is-open');
    headerBurger.classList.add('is-closed');

    headerMenu.classList.remove('_show');
    document.body.classList.remove('_lock');
    document.querySelector('.wrapper').classList.remove('_lock');

    isClosed = true;
  } else {
    headerBurger.classList.remove('is-closed');
    headerBurger.classList.add('is-open');

    headerMenu.classList.add('_show');
    document.body.classList.add('_lock');
    document.querySelector('.wrapper').classList.add('_lock');

    isClosed = false;
  }
}


// mobile menu
document.querySelector('.header__links-open').addEventListener('click', el => {
  document.querySelector('.header__links').classList.toggle('_show');
});
// menu-item-has-children
document.querySelector('.menu-item-has-children').addEventListener('click', el => {
  if (el.target.tagName === 'A') return;
  document.querySelector('.sub-menu').classList.toggle('_show');
  el.currentTarget.classList.toggle('_active');
});


// ACCORDION
const accordionItems = document.querySelectorAll('.faq__item');
if (accordionItems.length > 0) {
  accordionItems.forEach((item) => {
    const accordionRow = item.querySelector('.faq__row');
    accordionRow.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-open');
      toogleItem(item);
      if (openItem && openItem !== item) {
        toogleItem(openItem);
      }
    });
  });
}
const toogleItem = (item) => {
  const accordionContent = item.querySelector('.faq__content');
  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
}

// // TABS
// let tabLinks = document.querySelectorAll('.services__nav li a');
// tabLinks.forEach(el => {
//   el.addEventListener('click', btn => {
//     btn.preventDefault();
//     let id = el.getAttribute('href');
//     document.querySelectorAll('.services__content').forEach(el => el.classList.remove('_show'));
//     document.querySelectorAll('.services__nav li a').forEach(el => el.classList.remove('_active'));

//     el.classList.add('_active');
//     document.querySelector(id).classList.add('_show');
//   });
// });






const introSlider = new Swiper('.intro', {
  slidesPerView: 1,
  // allowTouchMove: false,
  // autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
});


const productsSlider = new Swiper('.products__slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  runCallbacksOnInit: true,
  observer: true,
  updateOnImagesReady: true,
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
    1023: {
      spaceBetween: 24,
      slidesPerView: 4,
    },
    1439: {
      spaceBetween: 32,
    }
  }
});



const gallerySlider = new Swiper('.gallery__list', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4.16,
  coverflowEffect: {
    rotate: 32,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  breakpoints: {
    320: {
      slidesPerView: 1.6,
      coverflowEffect: {
        rotate: 52,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
    },
    767: {
      slidesPerView: 2.8,
      coverflowEffect: {
        rotate: 32,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    1023: {
      slidesPerView: 4.16,
    },
  }
});


const teamSlider = new Swiper('.team__slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
    1023: {
      spaceBetween: 24,
      slidesPerView: 4,
    },
    1439: {
      spaceBetween: 32,
    }
  }
});


// Фильтр products
$('.js-slider-list .swiper-slide').css('display', 'none')
$('.js-slider-list .swiper-slide' + $('.js-slider-filter a').attr('data-filter')).css('display', '')
$('.js-slider-filter').on('click', 'a', function () {
  var filter = $(this).attr('data-filter');

  $('.js-slider-list .swiper-slide').css('display', 'none')
  $('.js-slider-list .swiper-slide' + filter).css('display', '')
  $('.js-slider-filter a').removeClass('_accent');
  $(this).addClass('_accent');

  if (productsSlider.length > 1) {
    productsSlider.forEach(el => {
      el.updateSize();
      el.updateSlides();
      el.updateProgress();
      el.updateSlidesClasses();
      el.slideTo(0);
    });
  } else {
    productsSlider.updateSize();
    productsSlider.updateSlides();
    productsSlider.updateProgress();
    productsSlider.updateSlidesClasses();
    productsSlider.slideTo(0);
  }

  return false;
});

// показывать информаию о товаре
jQuery(function ($) {
  $('body').on('click', '.js-open-modal', function () {
    $(this).closest('.product-card').addClass('_show');
  });
  $('body').on('click', '.js-close-modal', function () {
    $(this).closest('.product-card').removeClass('_show');
  });
});
// document.querySelectorAll('.js-open-modal').forEach(el => {
//   el.addEventListener('click', event => {
//     el.closest('.product-card').classList.add('_show');
//   });
// });
// document.querySelectorAll('.js-close-modal').forEach(el => {
//   el.addEventListener('click', event => {
//     el.closest('.product-card').classList.remove('_show');
//   });
// });
// if (document.querySelector('.about__content-open')){
//   let contentOpen = document.querySelector('.about__content-open');
//   contentOpen.addEventListener('click',el => {
//     document.querySelector('.about__content').classList.toggle('_show');
//     contentOpen.classList.toggle('_active');
//   });
// }

// header scroll to section
// const smoothLinks = document.querySelectorAll('.header__menu-list li a');
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener('click', function (e) {
//     const id = smoothLink.getAttribute('href').replace('/', '');
//     if (id == '#') return;

//     e.preventDefault();
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// }










// BTN UP
const defaultOffset = 200;
const btnUp = {
  el: document.querySelector('.scroll-top'),
  show() {
    this.el.classList.remove('_hide');
  },
  hide() {
    this.el.classList.add('_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > defaultOffset ? this.show() : this.hide();
    });
    document.querySelector('.scroll-top').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
if (document.querySelector('.scroll-top')) {
  btnUp.addEventListener();
}






let phoneInputs = document.querySelectorAll('input[type="tel"]');
let getInputNumbersValue = function (input) {
  return input.value.replace(/\D/g, '');
}
let onPhonePaste = function (e) {
  let input = e.target,
    inputNumbersValue = getInputNumbersValue(input);
  let pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
}
let onPhoneInput = function (e) {
  let input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";
  if (!inputNumbersValue) {
    return input.value = "";
  }
  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumbersValue;
    }
    return;
  }
  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
}
let onPhoneKeyDown = function (e) {
  let inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode == 8 && inputValue.length == 1) {
    e.target.value = "";
  }
}
for (let phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
}






class PortableBlocks {
  constructor(type) {
    this.type = type
  }
  init() {
    this.оbjects = []
    this.daClassname = 'js-portable'
    this.nodes = [...document.querySelectorAll('[data-transfer]')]
    this.nodes.forEach((node) => {
      const data = node.dataset.transfer.trim()
      const dataArray = data.split(',')
      const оbject = {}
      оbject.element = node
      оbject.parent = node.parentNode
      оbject.destination = document.querySelector(`.${dataArray[0].trim()}`)
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767'
      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last'
      оbject.index = this.indexInParent(оbject.parent, оbject.element)
      this.оbjects.push(оbject)
    })
    this.arraySort(this.оbjects)
    this.mediaQueries = this.оbjects
      .map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
      .filter((item, index, self) => self.indexOf(item) === index)
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',')
      const matchMedia = window.matchMedia(mediaSplit[0])
      const mediaBreakpoint = mediaSplit[1]
      const оbjectsFilter = this.оbjects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint)
      matchMedia.addEventListener('change', () => {
        this.mediaHandler(matchMedia, оbjectsFilter)
      })
      this.mediaHandler(matchMedia, оbjectsFilter)
    })
  }
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        this.moveTo(оbject.place, оbject.element, оbject.destination)
      })
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index)
        }
      })
    }
  }
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname)
    if (place === 'last' || place >= destination.children.length) {
      destination.append(element)
      return
    }
    if (place === 'first') {
      destination.prepend(element)
      return
    }
    destination.children[place].before(element)
  }
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname)
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element)
    } else {
      parent.append(element)
    }
  }
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element)
  }
  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0
          }
          if (a.place === 'first' || b.place === 'last') {
            return -1
          }
          if (a.place === 'last' || b.place === 'first') {
            return 1
          }
          return 0
        }
        return a.breakpoint - b.breakpoint
      })
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0
          }
          if (a.place === 'first' || b.place === 'last') {
            return 1
          }
          if (a.place === 'last' || b.place === 'first') {
            return -1
          }
          return 0
        }
        return b.breakpoint - a.breakpoint
      })
      return
    }
  }
}
const portableBlocks = new PortableBlocks("max");
portableBlocks.init();






// Переход на страницу оплаты
if (document.querySelector('.checkout__next')) {
  document.querySelector('.checkout__next').addEventListener('click', el => {
    let tab1 = document.querySelector('.checkout__tab._tab-1');
    let tab2 = document.querySelector('.checkout__tab._tab-2');
  
    tab1.classList.toggle('_hide');
    tab2.classList.toggle('_show');
  
    // Активация последнего шага
    document.querySelector('.checkout-steps > li:last-child').classList.add('_active');
  
    // Вставка информации введенной
    let checkoutName = document.querySelector('#billing_first_name').value;
    let checkoutPhone = document.querySelector('#billing_phone').value;
    let checkoutAddress = document.querySelector('#billing_address_1').value;
    let checkoutDate = document.querySelector('#billing_date').value;
    let checkoutPersons = document.querySelector('#billing_quantity').value;
    document.querySelectorAll('.checkout__info li').forEach(el => {
      let value = el.querySelector('span');
      if (el.classList.contains('checkout-name')) {
        value.innerText = checkoutName;
      }
      if (el.classList.contains('checkout-phone')) {
        value.innerText = checkoutPhone;
      }
      if (el.classList.contains('checkout-address')) {
        value.innerText = checkoutAddress;
      }
      if (el.classList.contains('checkout-date')) {
        value.innerText = checkoutDate;
      }
      if (el.classList.contains('checkout-persons')) {
        value.innerText = checkoutPersons;
      }
    });
  });
}


// По времени или как можно скорее
if (document.querySelector('[name="billing_quicker"]')) {
  document.querySelectorAll('[name="billing_quicker"]').forEach(el => {
    el.addEventListener('change', event => {
      console.log(el.value);

      if (el.value != 'Организация') {
        document.querySelector('#billing_date').style.display = 'none';
      } else {
        document.querySelector('#billing_date').removeAttribute('style');
      }
    });
  });
}

// Частный дом или нет
if (document.querySelector('[name="billing_private"]')) {
  document.querySelector('[name="billing_private"]').addEventListener('change', event => {
    if (event.target.checked) {
      document.querySelector('#billing_apartment_field').style.display = 'none';
      document.querySelector('#billing_floor_field').style.display = 'none';
      document.querySelector('#billing_entrance_field').style.display = 'none';
      document.querySelector('#billing_intercom_field').style.display = 'none';
    } else {
      document.querySelector('#billing_apartment_field').removeAttribute('style');
      document.querySelector('#billing_floor_field').removeAttribute('style');
      document.querySelector('#billing_entrance_field').removeAttribute('style');
      document.querySelector('#billing_intercom_field').removeAttribute('style');
    }
  });
}