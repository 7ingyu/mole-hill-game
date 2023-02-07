import Mole from './Mole';

export default function MoleHill ({
  hasMole, hideMole, missed, whacked, speed
}) {

  const whack = () => {
    whacked()
    hideMole()
  }

  return (
    <div className="col-4" onClick={whack}>
      {hasMole ? (
        <Mole hideMole={hideMole} missed={missed} speed={speed}/>
      ) : (
        <img className="img-fluid" src="/molehill.png" alt="molehill" />
      )}
    </div>
  )
}