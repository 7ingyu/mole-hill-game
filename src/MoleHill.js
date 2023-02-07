import Mole from './Mole';

export default function MoleHill ({
  hasMole, hideMole, missed, whacked
}) {

  const whack = () => {
    whacked()
    hideMole()
  }

  return (
    <div className="col-4" onClick={whack}>
      {hasMole ? (
        <Mole hideMole={hideMole} missed={missed}/>
      ) : (
        <img className="img-fluid" src="/molehill.png" alt="molehill" />
      )}
    </div>
  )
}