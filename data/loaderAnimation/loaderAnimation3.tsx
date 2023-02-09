const motionBlackCloud = {
  1: {
    start: {
      scale: 1
    },
    end: {
      x: ['0vw', '0vw'],
      y: ['0vh', '0vh'],
      backgroundColor: 'red',
      originX: [0, 0],
      originY: [0, 0],
      rotate: ['0deg', '90deg'],
      transition: { duration: 1.5, ease: ['easeOut'] }
    },
    exit: {
      x: ['0vw', '0vw'],
      y: ['0vh', '0vh'],
      originX: [1, 0],
      originY: [0, 0],
      rotate: ['90deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  }
  // 2: {
  //   start: {
  //     originX: 0.5,
  //     originY: 0.5
  //   },
  //   end: {
  //     scale: [2, 0.25],
  //     x: ['30vw', '100vw'],
  //     y: ['0vh', '100vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1.5, ease: ['easeOut'] }
  //   },
  //   exit: {
  //     scale: [1, 2],
  //     x: ['-20vw', '30vw'],
  //     y: ['-50vh', '0vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1, ease: ['easeOut'] }
  //   }
  // },
  // 3: {
  //   start: {
  //     originX: 0.5,
  //     originY: 0.5
  //   },
  //   end: {
  //     scale: [2, 0.5],
  //     x: ['70vw', '-20vw'],
  //     y: ['0vh', '-50vh'],
  //     rotate: ['0deg', '140deg'],
  //     transition: { duration: 1.5, ease: ['easeOut'] }
  //   },
  //   exit: {
  //     scale: [1, 2],
  //     x: ['140vw', '70vw'],
  //     y: ['-10vh', '0vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1, ease: ['easeOut'] }
  //   }
  // },
  // 4: {
  //   start: {
  //     originX: 0.5,
  //     originY: 0.5
  //   },
  //   end: {
  //     scale: [3, 0.25],
  //     x: ['10vw', '70vw'],
  //     y: ['90vh', '-60vh'],
  //     rotate: ['0deg', '60deg'],
  //     transition: { duration: 1.5, ease: ['easeOut'] }
  //   },
  //   exit: {
  //     scale: [1, 3],
  //     x: ['-40vw', '10vw'],
  //     y: ['140vh', '90vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1, ease: ['easeOut'] }
  //   }
  // },
  // 5: {
  //   start: {
  //     originX: 0.5,
  //     originY: 0.5
  //   },
  //   end: {
  //     scale: [2, 0.2],
  //     x: ['50vw', '100vw'],
  //     y: ['80vh', '20vh'],
  //     rotate: ['0deg', '120deg'],
  //     transition: { duration: 1.5, ease: ['easeOut'] }
  //   },
  //   exit: {
  //     scale: [1, 2],
  //     x: ['-30vw', '50vw'],
  //     y: ['140vh', '80vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1, ease: ['easeOut'] }
  //   }
  // },
  // 6: {
  //   start: {
  //     originX: 0.5,
  //     originY: 0.5
  //   },
  //   end: {
  //     scale: [3, 0.2],
  //     x: ['100vw', '40vw'],
  //     y: ['80vh', '120vh'],
  //     rotate: ['0deg', '180deg'],
  //     transition: { duration: 1.5, ease: ['easeOut'] }
  //   },
  //   exit: {
  //     scale: [1, 3],
  //     x: ['140vw', '100vw'],
  //     y: ['130vh', '80vh'],
  //     rotate: ['0deg', '0deg'],
  //     transition: { duration: 1, ease: ['easeOut'] }
  //   }
  // }
};

const motionRedCircle = {
  // 1: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [1, 0.4],
  //     x: ['-20vw', '50vw'],
  //     y: ['10vh', '-50vh'],
  //     rotate: ['0deg', '0deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // },
  // 2: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [0.7, 0.2],
  //     x: ['0vw', '-70vw'],
  //     y: ['100vh', '40vh'],
  //     rotate: ['0deg', '90deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // },
  // 3: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [1, 0.7],
  //     x: ['0vw', '-30vw'],
  //     y: ['100vh', '0vh'],
  //     rotate: ['0deg', '-270deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // },
  // 4: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [1, 0.5],
  //     x: ['10vw', '60vw'],
  //     y: ['30vh', '100vh'],
  //     rotate: ['0deg', '0deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // },
  // 5: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [1, 0.25],
  //     x: ['100vw', '0vw'],
  //     y: ['30vh', '-80vh'],
  //     rotate: ['0deg', '-90deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // },
  // 6: {
  //   start: {
  //     opacity: 0
  //   },
  //   end: {
  //     scale: [1, 0.5],
  //     x: ['30vw', '40vw'],
  //     y: ['40vh', '-60vh'],
  //     rotate: ['0deg', '-90deg'],
  //     opacity: [1, 1],
  //     transition: { duration: 1, ease: 'easeOut', delay: 0.25 }
  //   }
  // }
};

export { motionBlackCloud, motionRedCircle };
