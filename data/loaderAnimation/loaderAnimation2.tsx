const motionBlackCloud = {
  1: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [2.5, 0.5, 0.25],
      x: ['0vw', '30vw', '0vw'],
      y: ['0vh', '10vh', '100vh'],
      originX: [null, 0.3, 1],
      originY: [null, 0.3, 0.5],
      rotate: ['0deg', '90deg', '120deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 2.5],
      x: ['-40vw', '0vw'],
      y: ['-40vh', '0vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  },
  2: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [2, 0.5, 0.25],
      x: ['30vw', '30vw', '100vw'],
      y: ['0vh', '30vh', '100vh'],
      originX: [null, 0.3, 0.1],
      originY: [null, 0.3, 1],
      rotate: ['0deg', '90deg', '0deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 2],
      x: ['-20vw', '30vw'],
      y: ['-50vh', '0vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  },
  3: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [2, 1.5, 0.5],
      x: ['70vw', '50vw', '-20vw'],
      y: ['0vh', '-10vh', '-50vh'],
      originX: [null, 0.3, 0.1],
      originY: [null, 0.3, 1],
      rotate: ['0deg', '90deg', '140deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 2],
      x: ['140vw', '70vw'],
      y: ['-10vh', '0vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  },
  4: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [3, 0.7, 0.25],
      x: ['10vw', '10vw', '70vw'],
      y: ['90vh', '-10vh', '-60vh'],
      originX: [null, 0.5, 0.1],
      originY: [null, 0.5, 0.1],
      rotate: ['0deg', '20deg', '60deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 3],
      x: ['-40vw', '10vw'],
      y: ['140vh', '90vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  },
  5: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [2, 0.4, 0.2],
      x: ['50vw', '70vw', '100vw'],
      y: ['80vh', '50vh', '20vh'],
      originX: [null, 0.9, 0.2],
      originY: [null, 0.1, 0.2],
      rotate: ['0deg', '90deg', '120deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 2],
      x: ['-30vw', '50vw'],
      y: ['140vh', '80vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  },
  6: {
    start: {
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [3, 0.5, 0.2],
      x: ['100vw', '20vw', '40vw'],
      y: ['80vh', '70vh', '120vh'],
      originX: [null, 0.5, 0.5],
      originY: [null, 0.5, 0.5],
      rotate: ['0deg', '180deg', '180deg'],
      transition: { duration: 1.5, ease: ['easeIn', 'easeOut'] }
    },
    exit: {
      scale: [1, 3],
      x: ['140vw', '100vw'],
      y: ['130vh', '80vh'],
      originX: [null, 0.5],
      originY: [null, 0.5],
      rotate: ['0deg', '0deg'],
      transition: { duration: 1, ease: ['easeOut'] }
    }
  }
};

const motionRedCircle = {
  1: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [1, 0.4, 0.4],
      x: ['-20vw', '12vw', '50vw'],
      y: ['10vh', '47vh', '-50vh'],
      originX: [null, 0, 0],
      originY: [null, 0.5, 0.5],
      rotate: ['0deg', '0deg', '0deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1.5, ease: 'easeIn' }
    }
  },
  2: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [0.7, 0.5, 0.2],
      x: ['0vw', '17vw', '-70vw'],
      y: ['100vh', '20vh', '40vh'],
      originX: [null, 1, 0],
      originY: [null, 1, 0.5],
      rotate: ['0deg', '0deg', '90deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1.5, ease: 'easeIn' }
    }
  },
  3: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [1, 0.7],
      x: ['0vw', '0vw', '-30vw'],
      y: ['100vh', '20vh', '0vh'],
      originX: [null, 0, 1],
      originY: [null, 0, 0],
      rotate: ['0deg', '-90deg', '-270deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1.5, ease: 'easeIn' }
    }
  },
  4: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [1, 0.5, 0.5],
      x: ['10vw', '30vw', '60vw'],
      y: ['30vh', '10vh', '100vh'],
      originX: [null, 0.5, 0],
      originY: [null, 0.5, 0.5],
      rotate: ['0deg', '-90deg', '0deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1.5, ease: 'easeIn' }
    }
  },
  5: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [1, 0.25, 0.25],
      x: ['100vw', '30vw', '0vw'],
      y: ['30vh', '0vh', '-80vh'],
      originX: [null, 0, 0],
      originY: [null, 1, 1],
      rotate: ['0deg', '-180deg', '-90deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1.5, ease: 'easeIn' }
    }
  },
  6: {
    start: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5
    },
    end: {
      scale: [1, 0.5],
      x: ['30vw', '40vw'],
      y: ['40vh', '-60vh'],
      originX: [null, 0],
      originY: [null, 0],
      rotate: ['0deg', '-90deg'],
      opacity: [1, 1, 1],
      transition: { duration: 1, ease: 'linear' }
    }
  }
};

export { motionBlackCloud, motionRedCircle };
