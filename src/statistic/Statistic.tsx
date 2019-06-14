import React, { Component } from 'react';
import './Statistic.scss';

export default class Statistic extends Component<any, any> {
  constructor(props) {
    super(props);

    this.updateStatistic = this.updateStatistic.bind(this);

    this.state = {
      value: props.value,
      editing: false
    };
  }

  updateStatistic() {
    const { callback } = this.props;
    const { value } = this.state;

    this.setState({ editing: false });

    if (callback) {
      callback(value);
    }
  }

  render() {
    const { label, className, editable } = this.props;
    const { value, editing } = this.state;

    return (
      <div className={ 'statistic flex flex-col ' + className }>
        {editing ? (
          <div className="value flex flex-ac">
            <input
              type="text"
              placeholder="Give your dataset a name"
              autoFocus={ true }
              value={ value }
              onChange={ (e) => { this.setState({value: e.target.value}) } }
            />
            <button className="ml1" onClick={ this.updateStatistic }>Save</button>
          </div>
        ) : (
          <div className="value flex flex-ac">
            {value}
            {editable ? <button className="ml1" onClick={ () => this.setState({ editing: true })}>Edit</button> : null}
          </div>
        )}

        <div className="label">
          {label}
        </div>
      </div>
    );
  }

};
