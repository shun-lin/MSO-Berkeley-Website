/*!CK:3689839292!*//*1449768476,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["tOKSF"]); }

__d('ReactComposerFailedPhotoUpload.react',['ReactComponentWithPureRenderMixin','React','Tooltip','XUIButton.react','XUICloseButton.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=i.PropTypes,p=i.createClass({displayName:'ReactComposerFailedPhotoUpload',mixins:[h],propTypes:{error:o.object.isRequired,filename:o.string,onDismissClick:o.func,onRemoveClick:o.func,onRetryClick:o.func,uploadID:o.string.isRequired},render:function(){var q=this.props.error.summary+': '+this.props.error.description,r=this.props.error.transient?i.createElement(k,{className:"_2n21",label:n._("Retry"),onClick:this.props.onRetryClick,size:'small',use:'special'}):i.createElement(k,{className:"_2n22",label:n._("Okay"),onClick:this.props.onDismissClick,size:'small'});return (i.createElement('div',babelHelpers._extends({},j.propsFor(q),{className:"_2n23"}),i.createElement(l,{className:"_2n25",onClick:this.props.onRemoveClick,size:'medium',shade:'light'}),i.createElement('p',{className:"_2n26"},n._("Error")),i.createElement('div',{className:"_2n27"},i.createElement('p',{className:"_2n28"},this.props.filename)),r));}});f.exports=p;},null);