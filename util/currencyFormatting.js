/**
 * Intl:
 *
 * The Intl object is the namespace for the ECMAScript Internationalization API,
 * which provides language sensitive string comparison, number formatting,
 * and date and time formatting.
 *
 * Intl.NumberFormat:
 *
 * The Intl.NumberFormat object enables language-sensitive number formatting.
 */

const number = 123456.789;

const indianCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
}).format(number);

const europeCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "EUR",
}).format(number);

const usaCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "USD",
}).format(number);

console.table({ indianCurrency, europeCurrency, usaCurrency });
