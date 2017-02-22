export default function create ({React, propTypes}) {
  function render ({active}) {
    return (
      <div>
        {JSON.stringify(active, null, 2)}
      </div>
    )
  }

  render.propTypes = propTypes

  return render
}
