import { useEffect } from 'react';

export default function MoleHill ({ hasMole, hideMole }) {

  useEffect(() => {
    if (hasMole) {
      let timer = setTimeout(hideMole, 3000)
      return () => clearTimeout(timer)
    }
  }, [hasMole, hideMole])

  return (
    <div className="col-4" onClick={hideMole}>
      {hasMole ? (
        <img className="img-fluid" src="/mole.png" alt="mole" />
      ) : (
        <img className="img-fluid" src="/molehill.png" alt="molehill" />
      )}
    </div>
  )
}