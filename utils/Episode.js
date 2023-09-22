export class Episode {
  constructor ({
    name,
    air_date: airDate,
    episode,
    created
  } = {}) {
    this.name = name
    this.airDate = airDate
    this.episode = episode
    this.created = created
  }
}
