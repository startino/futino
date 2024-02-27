export const load = async ({ locals: { getSession } }) => {
	const session = await getSession();
	return { userAccessToken: session.access_token };
};
