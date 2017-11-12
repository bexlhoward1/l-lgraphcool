const fromEvent = require('graphcool-lib').fromEvent


module.exports = function(event) {
  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  return api.request(`
    query {
      _allPostsMeta{
        totalPosts
      }
    }`)
    .then((userQueryResult) => {
      if (userQueryResult.error) {
        return Promise.reject(userQueryResult.error)
      } else {
        return userQueryResult._allPostsMeta.totalPosts
      }
    })
}
