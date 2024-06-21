const emulator = {
  StartCashin: function(cb) {
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') cb(100);
      if (e.key === '2') cb(500);
      if (e.key === '3') cb(1000);
    });
  },

  StopCashin: function() {
    // Отключение приема купюр
  },

  BankCardPurchase: function(amount, cb, display_cb) {
    display_cb('Приложите карту');
    setTimeout(() => {
      display_cb('Обработка карты');
      setTimeout(() => {
        display_cb('Связь с банком');
        setTimeout(() => {
          const success = Math.random() > 0.2;
          cb(success);
          display_cb(success ? 'Оплата прошла успешно' : 'Ошибка оплаты');
        }, 2000);
      }, 2000);
    }, 2000);
  },

  BankCardCancel: function() {
    // Отмена операции по банковской карте
  },

  Vend: function(product_idx, cb) {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      cb(success);
    }, 3000);
  }
};

export default emulator;