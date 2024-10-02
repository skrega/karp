// Регистрируем MotionPathPlugin
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const fish = document.querySelector('.fish-box');
const screenWidth = window.innerWidth - 350; // Конечная точка до начала кругового движения
const radius = 175; // Радиус кругового движения

gsap.to(fish, {
  duration: 15,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: 1, // Начало пути — конец
    end: 0, // Конец пути — начало
  },
  // ease: "power1.inOut",
  repeat: -1, // Круговое движение повторяется бесконечно
  yoyo: false,

});

// при скролле //

// gsap.to(fish, {
//   duration: 1, // Продолжительность анимации в процентах от скролла
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: true
//   },
//   ease: "none", // Линейное движение по траектории
//   scrollTrigger: {
//     trigger: "#scroll-section", // Элемент, внутри которого происходит скролл
//     start: "top top", // Начало скролла
//     end: "bottom bottom", // Конец скролла
//     scrub: 1, // Связь между прокруткой и анимацией
//     pin: true, // Фиксация элемента во время прокрутки
//     markers: true // Убираем маркеры для отладки
//   }
// });
// при скролле //


// Анимация движения рыбы
// gsap.to(fish, {
//   duration: 10,
//   x: screenWidth, // Рыба движется к правому краю
//   ease: "power1.inOut",
//   onUpdate: () => {
//     // Добавляем вертикальное плавание
//     const yPos = Math.sin(gsap.getProperty(fish, 'x') / 100) * 30;
//     gsap.set(fish, { y: yPos });
//   },
//   onComplete: () => {
//     // После достижения края экрана запускаем круговое движение
//     gsap.to(fish, {
//       duration: 10,
//       motionPath: {
//         path: "#path",
//         align: "#path",
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true,
//       },
//       ease: "power1.inOut",
//       repeat: -1, // Круговое движение повторяется бесконечно
//       yoyo: false
//     });
//   }
// });

// Добавляем покачивание для имитации движения плавников
// gsap.to(fish, {
//   duration: 2,
//   rotation: "random(185, 150)", // Покачивание от 150 до 185 градусов
//   ease: "sine.inOut",
//   repeat: -1,
//   yoyo: true
// });




/// Рабочий код для движене с лево на право 
// const fish = document.querySelector('.fish');
// // Анимация рыбы
// gsap.to(fish, {
//     duration: 10,
//     x: window.innerWidth - 350, // Рыба движется с левого края до правого
//     ease: "power1.inOut",
//     repeat: -1, // Бесконечная анимация
//     yoyo: true, // Возвращается назад
//     onUpdate: () => {
//         // Добавляем небольшое плавание вверх и вниз
//         const yPos = Math.sin(gsap.getProperty(fish, 'x') / 100) * 30;
//         gsap.set(fish, {
//             y: yPos
//         });
//     }
// });

// // Добавляем вращение для имитации покачивания
// gsap.to(fish, {
//     duration: 2,
//     rotation: "random(185, 150)", // Покачивание на несколько градусов
//     ease: "sine.inOut",
//     repeat: -1,
//     yoyo: true
// });