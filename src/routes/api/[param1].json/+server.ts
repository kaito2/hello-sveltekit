// You should not import the general types from `@sveltejs/kit`.
import type { RequestEvent, RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
  const _param1 = params.param1;

  return new Response(JSON.stringify(params));
};
