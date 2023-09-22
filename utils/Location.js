export class Location {
  constructor (
    {
      name,
      url
    } = {}
  ) {
    this.name = name || 'unknown'
    this.url = url || null
  }
}
