import { getRequestEvent, query } from '$app/server';

export const getUser = query(() => getRequestEvent().locals.user);
