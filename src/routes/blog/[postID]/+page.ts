import type { PageLoad } from "./$types";

type OutputProps = { postID: string };

export const load: PageLoad<OutputProps> = async ({ params, data }) => {
  console.log(params.postID);

  return {
    postID: params.postID,
  };
};
