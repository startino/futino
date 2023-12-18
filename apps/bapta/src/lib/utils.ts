// Create our number formatter.
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
