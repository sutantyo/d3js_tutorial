import React from "react";
import * as d3 from "d3";
import { Link, Route } from "react-router-dom";

import BasicSVG from "./basic";

export default class SVGMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Link to={`${this.props.url}/basic`}>
            Basic SVG
          </Link>
        </div>
        <div>
          <Route path={`${this.props.url}/basic`} component={BasicSVG} />
        </div>
      </div>
    )
  }

}
