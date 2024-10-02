gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1
const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1

const path = [
    // 1
    {
        x: 800,
        y: 200
    },
    {
        x: 900,
        y: 20
    },
    {
        x: 1100,
        y: 100
    },
    // 2
    {
        x: 1000,
        y: 200
    },
    {
        x: 900,
        y: 20
    },
    {
        x: 10,
        y: 500
    },
    // 3
    {
        x: 100,
        y: 300
    },
    {
        x: 500,
        y: 400
    },
    {
        x: 1000,
        y: 200
    },
    // 4
    {
        x: 1100,
        y: 300
    },
    {
        x: 400,
        y: 400
    },
    {
        x: 200,
        y: 250
    },
    // 5
    {
        x: 100,
        y: 300
    },
    {
        x: 500,
        y: 450
    },
    {
        x: 1100,
        y: 500
    }
]

const scaledPath = path.map(({
    x,
    y
}) => {
    return {
        x: x * rx,
        y: y * ry
    }
})

const sections = [...document.querySelectorAll('section')]
const fish = document.querySelector('.fish-box')



const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1.5,
    },
})
tl.to(fish, {
    motionPath: {
        path: scaledPath,
        align: 'self',
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    duration: 10,
    immediateRender: true,
    // ease: 'power4'
})
tl.to(fish, {
    rotateX: 180
}, 1)
tl.to(fish, {
    rotateX: 0
}, 2.5)
tl.to(fish, {
    z: -500,
    duration: 2,
}, 2.5)
tl.to(fish, {
    rotateX: 180
}, 4)
tl.to(fish, {
    rotateX: 0
}, 5.5)
tl.to(fish, {
    z: -50,
    duration: 2,
}, 5)
tl.to(fish, {
    rotate: 0,
    duration: 1,
}, '-=1')


tl.pause()



const rotateFish = (self) => {
    if (self.direction === -1) {
        gsap.to(fish, {
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
            duration: 0.4
        })
    } else {
        gsap.to(fish, {
            transform: 'matrix(-1, 0, 0, -1, 0, 0)',
            duration: 0.4
        })
    }
}


sections.forEach((section, i) => {
    const p = section.querySelector('p')
    // gsap.to(p, {
    //     opacity: 0
    // })

    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onUpdate: (self) => rotateFish(self)
    })
})