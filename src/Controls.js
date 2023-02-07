export default function Controls ({
  initialState, setMoles, running, setRunning, whacked, missed, setWhacked, setMissed
}) {

  const reset = () => {
    setWhacked(0)
    setMissed(0)
    setMoles(initialState)
  }

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6">
        <button
          className="btn btn-secondary w-100"
          onClick={() => setRunning(!running)}
        >
          {!running && (!!whacked || !!missed) && 'Resume Game'}
          {!running && !whacked && !missed && 'Start Game'}
          {running && 'Pause Game'}
        </button>
      </div>

      <div className="col-12 col-md-6">
        <button
          className="btn btn-secondary w-100"
          onClick={reset}
          disabled={!whacked && !missed}
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}