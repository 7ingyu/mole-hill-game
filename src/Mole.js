import { useEffect } from 'react';
import { getRandomInt} from './utils'

export default function Mole ({ hideMole, missed, speed }) {

  useEffect(() => {
    const miss = () => {
      missed()
      hideMole()
    }
      let time = getRandomInt(3000 - (100 * speed), 3000 / speed)
      let timer = setTimeout(miss, time)
      return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <img className="img-fluid" src="/mole.png" alt="mole" />
  )
}