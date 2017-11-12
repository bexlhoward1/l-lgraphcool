import { fromEvent } from 'graphcool-lib'
  
export default async event => {
  const userID = event.context.auth.nodeId;
  const lib = fromEvent(event);
  const client = lib.api('simple/v1');
  const { allPosts, _allPostsMeta } = await client.request(`{
    allPosts { 
      id
    }
    _allPostsMeta (filter: {
      author: {
        id: "${userID}"
      }
    }){
      count
    }
  }`);

  return {
    data: {
      totalPosts: `You have posted ${_allPostsMeta.count} of ${allPosts.length} posts!`
    }
  };
}
