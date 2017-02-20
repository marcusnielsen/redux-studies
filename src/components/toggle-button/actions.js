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
