export default function create ({
  dispatch,
  actionTypes,
  entity,
  id,
  field
}) {
  function update (active) {
    dispatch({
      type: actionTypes.update,
      // @TODO: Decide if this should be under the meta key or the payload
      entity,
      id,
      field,
      payload: {
        active
      }
    })
  }

  return {
    update
  }
}
