export default function create ({React, propTypes, update}) {
  function onClickWrapper (active) {
    return function onClick () {
      update(!active)
    }
  }

  function render ({active}) {
    return (
      <div onClick={onClickWrapper(active)}>
        {JSON.stringify(active, null, 2)}
      </div>
    )
  }

  render.propTypes = propTypes

  return render
}
