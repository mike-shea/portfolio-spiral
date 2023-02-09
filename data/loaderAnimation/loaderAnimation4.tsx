const motionBlackCloud = {
  variants: {
    '1': {
      start: {
        scale: 1
      },
      end: {
        x: ['0vw', '0vw'],
        y: ['0vh', '0vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['0deg', '90deg']
      },
      exit: {
        x: ['0vw', '0vw'],
        y: ['0vh', '0vh'],
        originX: [1, 0],
        originY: [0, 0],
        rotate: ['90deg', '0deg']
      }
    },
    '2': {
      start: {
        scale: 1
      },
      exit: {
        x: ['100vw', '100vw'],
        y: ['0vh', '0vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['0deg', '90deg']
      },
      end: {
        x: ['100vw', '100vw'],
        y: ['0vh', '0vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['90deg', '180deg']
      }
    },
    '3': {
      start: {
        scale: 1
      },
      exit: {
        x: ['0vw', '0vw'],
        y: ['100vh', '100vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['0deg', '-90deg']
      },
      end: {
        x: ['0vw', '0vw'],
        y: ['100vh', '100vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['-90deg', '0deg']
      }
    },
    '4': {
      start: {
        scale: 1
      },
      exit: {
        x: ['100vw', '100vw'],
        y: ['100vh', '100vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['270deg', '180deg']
      },
      end: {
        x: ['100vw', '100vw'],
        y: ['100vh', '100vh'],
        originX: [0, 0],
        originY: [0, 0],
        rotate: ['180deg', '270deg']
      }
    }
  }
};

const motionRedCircle = {
  variants: {
    '1': {
      end: {
        scale: [0.5, 1],
        x: ['70vw', '40vw'],
        y: ['0vh', '100vh'],
        originX: [0.5, 0.5],
        originY: [0, 0],
        rotate: ['90deg', '0deg']
      },
      exit: {
        scale: [0.25, 1],
        x: ['70vw', '40vw'],
        y: ['0vh', '50vh'],
        originX: [0.5, 1],
        originY: [0, 0],
        rotate: ['90deg', '0deg']
      }
    }
  }
};

export { motionBlackCloud, motionRedCircle };
