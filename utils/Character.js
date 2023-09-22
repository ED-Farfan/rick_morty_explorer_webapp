import { Origin } from './Origin'
import { Location } from './Location'
export class Character {
  constructor ({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    created
  } = {}) {
    this.id = id || 'unknown'
    this.name = name || 'unknown'
    this.status = status || 'unknown'
    this.species = species || 'unknown'
    this.type = type || 'unknown'
    this.gender = gender || 'unknown'
    this.origin = new Origin(origin)
    this.location = new Location(location)
    this.image = image || 'unknown'
    this.episode = episode || []
    this.created = created || 'unknown'
  }
}
