export default function create ({provider, entity}) {
  const entityState = provider.entityStates[entity]

  return {
    entity,
    entityState
  }
}
