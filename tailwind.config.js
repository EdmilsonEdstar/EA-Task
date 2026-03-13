module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          modalPopIn: {
            '0%': { opacity: 0, transform: 'scale(0.9) translateY(10px)' },
            '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
          },
        },
        animation: {
          'fade-in': 'fadeInUp 0.5s ease-out forwards',
          'modal-pop': 'modalPopIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
        },
      },
    },
  };
  