class Prices extends React.Component {
  state = {
    currency: "USD",
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.currency === "USD" ? (
            <li className="list-group-item">
              Bitcoin rate for {this.props.bpi.USD.description}:{" "}
              <span className="badge badge-info">
                {this.props.bpi.USD.code}
              </span>{" "}
              <strong>{this.props.bpi.USD.rate}</strong>
            </li>
          ) : (
            <li className="list-group-item">
              Bitcoin rate for {this.props.bpi.BRL.description}:{" "}
              <span className="badge badge-success">
                {this.props.bpi.BRL.code}
              </span>{" "}
              <strong>{this.props.bpi.BRL.rate}</strong>
            </li>
          )}
        </ul>
        <br />
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
        </select>
      </div>
    );
  }
}

export default Prices;
