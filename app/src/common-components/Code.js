import React from "react";
import * as d3 from "d3";

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

export default class Code extends React.Component{
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
        <SyntaxHighlighter language='cpp'
          style={tomorrow}
          customStyle = {styles.code}
          showLineNumbers>
          {this.props.code}
        </SyntaxHighlighter>
    )
  }
}

const styles = {
  code: {
    maxWidth: '100%',
    fontSize: '10pt',
  }
}
