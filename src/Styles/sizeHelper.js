
export default {
   up() { },
   down(size) {
      const sizes = {
         sm: 555.98,
         md: 800.98,
         lg: 1111.98,
         xl: 1199.98,
         xxl: 1399.98
      }
      return `@media (max-width:${sizes[size]}px)`;
   }
};
