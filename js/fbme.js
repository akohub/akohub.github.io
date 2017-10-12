window.onload = function () {
  var fbLink = document.createElement('a')
  var fbImg = document.createElement('img')
  fbImg.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI4NHB4IiBoZWlnaHQ9Ijg2cHgiIHZpZXdCb3g9IjAgMCA4NCA4NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pZl9zb2NpYWwtZmFjZWJvb2stbWVzc2VuZ2VyLWNpcmNsZV8xODcxNTcxPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iaWZfc29jaWFsLWZhY2Vib29rLW1lc3Nlbmdlci1jaXJjbGVfMTg3MTU3MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjAwMDAwMCwgLTIzLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjMDA4NEZGIiBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiPjwvY2lyY2xlPiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwyMy41NzIgQzQwLjgwNCwyMy41NzIgMjIsNDEuMTU2IDIyLDYyLjg0NyBDMjIsNzUuMTg2IDI4LjA4Niw4Ni4xOTcgMzcuNjAzLDkzLjM5NyBMMzcuNjAzLDEwOC40MjcgTDUxLjkzNiwxMDAuNDc3IEM1NS43NTcsMTAxLjU0NiA1OS44MDcsMTAyLjEyMSA2My45OTksMTAyLjEyMSBDODcuMTk1LDEwMi4xMjEgMTA1Ljk5OSw4NC41MzggMTA1Ljk5OSw2Mi44NDggQzEwNiw0MS4xNTYgODcuMTk2LDIzLjU3MiA2NCwyMy41NzIgWiBNNjguNDI0LDc2LjIzOSBMNTcuNTYxLDY0Ljk1NiBMMzYuNjQxLDc2LjUyMiBMNTkuNTc3LDUyLjE4MyBMNzAuNDQsNjMuNDY3IEw5MS4zNTgsNTEuODk5IEw2OC40MjQsNzYuMjM5IFoiIGlkPSJCdWJibGVfU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg=='
  addCss('a#fb-msg-btn>img{width: 40px;height: 40px;position: absolute;top: 10px;left: 10px;} a#fb-msg-btn{width: 60px;height: 60px;position: fixed;bottom: 10px;right: 10px;display: block;font-family: inherit;font-size: 14px;font-weight: bold;color: #fff;text-align: center;padding: 15px;margin: 0;background-color: #0084ff;border: 0;border-radius: 50%; -moz-border-radius: 50%; -webkit-border-radius: 50%; cursor: pointer;outline: none;}a:hover#fb-msg-btn {background-color: #0268c7;text-decoration: none;opacity: 1.0;}')
  fbLink.title = 'Contact us on Messenger'
  fbLink.id = 'fb-msg-btn'
  fbLink.target = '_blank'
  fbLink.href = '//akohub.me/message'
  fbLink.appendChild(fbImg)
  document.body.appendChild(fbLink)
}

function addCss (cssCode) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode
  } else {
    styleElement.appendChild(document.createTextNode(cssCode))
  }
  document.getElementsByTagName('head')[0].appendChild(styleElement)
}
