export const currencyUSDFormatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
});
export const currencyUAHFormatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 0,
    maximumSignificantDigits: 4,
});
export const dateFormatter = new Intl.DateTimeFormat();
export const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
});

