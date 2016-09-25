(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])

    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
  function ToBuyShoppingController( ShoppingListCheckOffService){
      console.log("ToBuyShoppingController loading...");
      ShoppingListCheckOffService.addToBuyItem( 'Chocolate', 10);
      ShoppingListCheckOffService.addToBuyItem( 'Tomatoe', 20);
      ShoppingListCheckOffService.addToBuyItem( 'Salat', 3);
      ShoppingListCheckOffService.addToBuyItem( 'Pumpkin', 2);
      ShoppingListCheckOffService.addToBuyItem( 'Onion', 5);

      var vm = this;

      vm.items = ShoppingListCheckOffService.getToBuyItems();

      vm.markAsBoughtItem = function (itemIndex) {
        ShoppingListCheckOffService.markAsBoughtItem(itemIndex);
      };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtShoppingController( ShoppingListCheckOffService){
      console.log("AlreadyBoughtShoppingController loading...");

      var vm = this;

      vm.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
      var service = this;

      // List of shopping items
      var toBuyItems = [];
      var boughtItems = [];

      service.addToBuyItem = function (itemName, quantity) {
        toBuyItems.push({
          name: itemName,
          quantity: quantity
        });
      };

      service.markAsBoughtItem = function (itemIdex) {
        var justBought = toBuyItems.splice(itemIdex, 1);
        boughtItems.push( justBought[0]);
        console.log(boughtItems);
      };

      service.getToBuyItems = function () {
        return toBuyItems;
      };
      service.getBoughtItems = function () {
        return boughtItems;
      };
  }

}());
