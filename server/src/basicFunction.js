// export default async event => {
//     // you can use ES7 with async/await and even TypeScript in your functions :)
  
//     await new Promise(r => setTimeout(r, 50))
  
//     return {
//       data: {
//         totalPosts: `Hello ${event.data.name || 'World'}`
//       }
//     }
//   }

  // const fromEvent = require('graphcool-lib').fromEvent
  
  
  // module.exports = function(event) {
  //   const graphcool = fromEvent(event)
  //   const api = graphcool.api('simple/v1')

  //   const queryResult = api.request(`
  //     query {
  //       _allPostsMeta{
  //         totalPosts
  //       }
  //     }`)

  //   return {
  //     data: {
  //       totalPosts: `Hello ${event.data.name || 'World'}`
  //     }
  //   }
  // }
  
  // import { fromEvent } from 'graphcool-lib'
  
  // export default async event => {
  //   const lib = fromEvent(event)
  //   const client = lib.api('simple/v1')
  //   const allUsers = await client.request(`
  //     query {
  //       allUsers {
  //           name
  //         }
  //       }
  //   `).then((response) => {
  //     console.log(response)
  //     return {
  //       data: {
  //         totalPosts: "allUsers._allPostsMeta.totalPosts"
  //       }
  //     }
  //   })
  // }

  import { fromEvent } from 'graphcool-lib'
  
  export default async event => {
    const lib = fromEvent(event)
    const client = lib.api('simple/v1')
    const {allUsers} = await client.request(`{allUsers{id}}`)
  
    return {
      data: {
        totalPosts: allUsers
      }
    }
  }