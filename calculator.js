document.addEventListener('DOMContentLoaded', function () {
    // Get the calculator buttons
    const buttons = Array.from(document.querySelectorAll('.button'));
    
    // Get the result element
    const resultElement = document.querySelector('.result');
    
    // Add event listeners to the buttons
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Get the clicked button's text
        const value = button.textContent.trim();
  
        // Handle different button values
        switch (value) {
          case '=':
            calculateResult();
            break;
          case 'AC':
            clearResult();
            break;
          case 'sin':
            calculateTrigFunction('sin');
            break;
          case 'cos':
            calculateTrigFunction('cos');
            break;
          case 'tan':
            calculateTrigFunction('tan');
            break;
          case 'sqr()':
            calculateSquare();
            break;
          case 'log':
            calculateLog();
            break;
          case 'ln':
            calculateLn();
            break;
          case '!':
            calculateFactorial();
            break;
          case 'x^':
            setExponent();
            break;
         
          default:
            appendValue(value);
            break;
        }
      });
    });
  
    // Append the clicked button's value to the result element
    function appendValue(value) {
      resultElement.textContent += value;
    }
  
    // Clear the result element
    function clearResult() {
      resultElement.textContent = ' ';
    }
  
    // Calculate and display the result
    function calculateResult() {
      try {
        const result = eval(resultElement.textContent); // Using eval for simplicity (be cautious in production)
        resultElement.textContent = result;
      } catch (error) {
        resultElement.textContent = 'Error';
      }
    }
    function calculateTrigFunction(func) {
        try {
          const value = parseFloat(resultElement.textContent);
          let result;
          switch (func) {
            case 'sin':
              result = Math.sin(value);
              break;
            case 'cos':
              result = Math.cos(value);
              break;
            case 'tan':
              result = Math.tan(value);
              break;
          }
          resultElement.textContent = result.toFixed(2);
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
    function calculateSquare() {
        try {
          const value = parseFloat(resultElement.textContent);
          const result = value * value;
          resultElement.textContent = result;
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
      function calculateLog() {
        try {
          const value = parseFloat(resultElement.textContent);
          const result = Math.log10(value);
          resultElement.textContent = result.toFixed(2);
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
    
      // Calculate and display the natural logarithm (base e) of the number
      function calculateLn() {
        try {
          const value = parseFloat(resultElement.textContent);
          const result = Math.log(value);
          resultElement.textContent = result.toFixed(2);
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
    
      // Calculate and display the factorial of the number
      function calculateFactorial() {
        try {
          const value = parseInt(resultElement.textContent);
          if (value < 0) {
            throw new Error('Factorial is not defined for negative numbers');
          }
          let result = 1;
          for (let i = 2; i <= value; i++) {
            result *= i;
          }
          resultElement.textContent = result;
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
    
      // Set the exponent value
      function setExponent() {
        try {
          const value = parseFloat(resultElement.textContent);
          resultElement.textContent = value + '^';
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      }
    
  });