require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片相关的数
var imageDatas = require('../data/imagedata.json');
// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

class ImageFigure extends React.Component {
  render() {
    return (
        <figure className="img-figure">
            <img src={this.props.data.imageURL}/>
            <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
            </figcaption>
        </figure>
       
    );
  }
}



 
class AppComponent extends React.Component {
  render() {
      var controllerUnits = [],
       imgFigures = [];
     imageDatas.forEach(function (value) {
         imgFigures.push(<ImageFigure data={value} />);
     });
    return (
        <section className="stage" ref="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
               {controllerUnits}
            </nav>
        </section>
       
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
