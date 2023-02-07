import { useEffect } from 'react';

export default function Mole ({ hideMole, missed }) {

  useEffect(() => {
    const miss = () => {
      missed()
      hideMole()
    }
      let timer = setTimeout(miss, 3000)
      return () => clearTimeout(timer)
  }, [hideMole, missed])

  return (
    <img className="img-fluid" src="/mole.png" alt="mole" />
  )
}