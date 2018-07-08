import React from "react";
import * as d3 from "d3";
import { Link, Route } from "react-router-dom";

import BasicData from "./basic";

export default class DataMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>
          <Link to={`${this.props.match.url}/basic`}>
            Basic data
          </Link>
        </div>
        <div>
          <Route path={`${match.url}/basic`} component={BasicData} />
        </div>
      </div>
    )
  }

}
