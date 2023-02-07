import { useEffect } from 'react';

export default function MoleHill ({
  hasMole, hideMole, missed, whacked
}) {

  const whack = () => {
    whacked()
    hideMole()
  }

  useEffect(() => {
    const miss = () => {
      missed()
      hideMole()
    }
    if (hasMole) {
      let timer = setTimeout(miss, 3000)
      return () => clearTimeout(timer)
    }
  }, [hasMole, hideMole, missed])

  return (
    <div className="col-4" onClick={whack}>
      {hasMole ? (
        <img className="img-fluid" src="/mole.png" alt="mole" />
      ) : (
        <img className="img-fluid" src="/molehill.png" alt="molehill" />
      )}
    </div>
  )
}