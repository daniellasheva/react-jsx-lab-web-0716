import React from 'react';
import REACTDOM from 'react-dom'

class FillerText extends React.Component {
  render(){
    return React.createElement('p', {}, "I am a filler text. I can be used to fill your screen. Amazing!")
  }
}

module.exports= FillerText;
