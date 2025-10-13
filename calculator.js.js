// calculator.js - внешний файл с кодом калькулятора

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed - калькулятор инициализирован");
    
    // Получаем элементы DOM
    const quantityInput = document.getElementById('productQuantity');
    const productSelect = document.getElementById('productSelect');
    const calculateButton = document.getElementById('calculateButton');
    const resultSection = document.getElementById('resultSection');
    const totalCostElement = document.getElementById('totalCost');
    const quantityError = document.getElementById('quantityError');
    
    // Функция для проверки корректности ввода количества
    function validateQuantity(input) {
        const regex = /^\d+$/; // Регулярное выражение для проверки на целое число
        return regex.test(input);
    }
    
    // Функция для расчета стоимости заказа
    function calculateOrderCost() {
        // Получаем значения из формы
        const quantity = quantityInput.value.trim();
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const price = parseInt(selectedOption.value);
        
        // Проверяем корректность ввода количества
        if (!validateQuantity(quantity)) {
            quantityInput.classList.add('input-error');
            quantityError.style.display = 'block';
            resultSection.style.display = 'none';
            return;
        }
        
        // Если все корректно, скрываем сообщение об ошибке
        quantityInput.classList.remove('input-error');
        quantityError.style.display = 'none';
        
        // Вычисляем общую стоимость
        const totalCost = parseInt(quantity) * price;
        
        // Отображаем результат
        totalCostElement.textContent = Стоимость заказа: ${totalCost} руб.;
        resultSection.style.display = 'block';
    }
    
    // Назначаем обработчик события на кнопку расчета
    calculateButton.addEventListener('click', calculateOrderCost);
    
    // Дополнительно: обработка нажатия Enter в поле ввода количества
    quantityInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateOrderCost();
        }
    });
});