export const load = async ({ locals: { apiClient } }) => {
	const paymentMethod = await apiClient.getUserBillingMethod();
	return {
		paymentMethod: paymentMethod ? { card: paymentMethod.card, id: paymentMethod.id } : null
	};
};
