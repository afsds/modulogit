new Vue({
    el: '#app',
    data: {
      num1: 0,
      num2: 0,
      operator: '+',
      result: 0
    },
    watch: {
      num1: function() {
        this.calculate();
      },
      num2: function() {
        this.calculate();
      },
      operator: function() {
        this.calculate();
      }
    },
    methods: {
      calculate: function() {
        switch(this.operator) {
          case '+':
            this.result = parseFloat(this.num1) + parseFloat(this.num2);
            break;
          case '-':
            this.result = parseFloat(this.num1) - parseFloat(this.num2);
            break;
          case '*':
            this.result = parseFloat(this.num1) * parseFloat(this.num2);
            break;
          case '/':
            this.result = parseFloat(this.num1) / parseFloat(this.num2);
            break;
          default:
            this.result = 0;
        }
      }
    }
  });
  
