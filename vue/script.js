new [Vue](https://www.google.com/search?q=Vue)({
  el: '#app',
  data: {
    result: ''
  },
  methods: {
    appendCharacter(character) {
      this.result += character;
    },
    calculateResult() {
      try {
        this.result = eval(this.result);
      } catch (error) {
        this.result = 'Ошибка';
      }
    },
    clearResult() {
      this.result = '';
    }
  }
});