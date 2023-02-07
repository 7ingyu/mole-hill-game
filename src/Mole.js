import { useEffect } from 'react';

export default function Mole ({ hideMole, missed, speed }) {

  useEffect(() => {
    const miss = () => {
      missed()
      hideMole()
    }
      let timer = setTimeout(miss, (3000 / speed))
      return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <img className="img-fluid" src="/mole.png" alt="mole" />
  )
}