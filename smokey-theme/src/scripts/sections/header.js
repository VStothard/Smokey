/**
 * Header Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
   * @namespace header
 */

theme.Header = (function() {

  var selectors = {
    // addToCart: '[data-add-to-cart]',
    // addToCartText: '[data-add-to-cart-text]',
    // comparePrice: '[data-compare-price]',
  };

  /**
   * Header section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Header(container) {
    console.log('header function');
  }

  Header.prototype = $.extend({}, Header.prototype, {
    //header prototype
  });

  return Header;
})();
