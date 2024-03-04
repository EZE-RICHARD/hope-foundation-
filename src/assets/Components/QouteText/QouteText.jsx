
import "./qoutetext.scss"

const QouteText = (props) => {
  return (
    <div className="card">
      <h3>{props.qoutes[0].header}</h3>
      <p>{props.qoutes[0].paragraph}</p>
    </div>
  );
};

export default QouteText;
