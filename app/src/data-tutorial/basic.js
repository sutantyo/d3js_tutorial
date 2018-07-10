import React from "react";
import * as d3 from "d3";

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import Code from 'common-components/Code';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

export default class BasicData extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
  }

  componentDidMount(){
    d3.csv("/dataset/publicschool1.csv", function(data) {

    }, function(error,rows){
      if (error)
        console.log(error);
      console.log(rows);
    });
  }

  render() {
    return (
      <div>
        <h2>Basic data tutorial</h2>

        Testing stuffs
        <Code code={codefragment}/>
      </div>
    )
  }
}

const codefragment =
  `for (int i = 0; i < n; i++)
      setCall(i);`
