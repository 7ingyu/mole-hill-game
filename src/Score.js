export default function Score ({ whacked, missed }) {
  return (
    <div className="row">
      <div className="col-12 col-md-6 text-center">
        <div>Whacked</div>
        <hr/>
        <div className="h4">{whacked}</div>
      </div>
      <div className="col-12 col-md-6 text-center">
        <div>Missed</div>
        <hr/>
        <div className="h4">{missed}</div>
      </div>
    </div>
  )
}