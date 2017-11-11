export default async (event) => {
  if (event.data.name.length <=1 ) {
    return { error: `${event.data.name} is not a valid name` }
  }
  return { data: event.data }
}