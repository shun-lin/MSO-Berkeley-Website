/*!CK:3812362873!*//*1450123366,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IDdKA"]); }

__d('P2PSendMoneyAmountInput.react',['CurrentEnvironment','React','ReactDOM','XUIError.react','P2PAmountUtils','cx','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=i.PropTypes,q=1,r=i.createClass({displayName:'P2PSendMoneyAmountInput',propTypes:{currencySymbol:p.string,disabled:p.bool,isRequesting:p.bool,onInputChange:p.func,value:p.string},getDefaultProps:function(){return {currencySymbol:'$',disabled:false,isRequesting:false,onInputChange:n,value:''};},getInitialState:function(){var s;if(h.messengerdotcom){s=236;}else s=200;return {inputError:null,maxInputWidth:s,value:this.props.value,width:''};},componentDidMount:function(){this.updateAmount(this.state.value);if(!this.props.disabled)this.initDelayedFocus();},initDelayedFocus:function(){setTimeout(this.focus);},focus:function(){var s,t=this.state.value,u=0;if(this.isMounted()&&this.refs.textInput){s=j.findDOMNode(this.refs.textInput);s.focus();if(t){u=t.length;s.setSelectionRange(u,u);}}},handleAmountInputChange:function(s){var t=s.target.value;this.clearInputError();this.updateAmount(t);},clearInputError:function(){this.setState({inputError:null});},setInputError:function(s){this.setState({inputError:s});},handleAmountInputBlur:function(s){var t=s.target.value,u=t.split('.'),v=u[0],w=u[1];if(w){if(w.length===1)this.updateAmount(t+'0');}else if(w==='')this.updateAmount(v);},updateAmount:function(s){var t=true,u,v=l.isAmountOverLegalLimit(s);s=l.sanitizeAmount(s);u=parseFloat(s);if(v){t=false;this.setInputError(o._("Please enter a smaller amount"));}var w=s.split('.'),x=w[0],y=w[1];if(y!==undefined){s=(x&&parseFloat(x)!==0?x:'0')+'.'+y.substr(0,2);}else if(x)if(parseFloat(x)===0){s='0';}else if(x.length>1&&x[0]==='0')s=s.substr(1,s.length);this.setValue(s);u=parseFloat(s);t=t&&!isNaN(u)&&u>0;this.props.onInputChange(s,t);},setValue:function(s){this.setState({value:s},this.updateWidth);},updateWidth:function(){var s=this.getMockWidth();if(s)this.setState({width:Math.min(s,this.state.maxInputWidth)});},getMockWidth:function(){var s=j.findDOMNode(this.refs.mock_input);return s.offsetWidth+q;},render:function(){var s,t=!this.state.value.length,u,v;if(t)s=i.createElement('div',{ref:'placeholder_input',className:"_1-sv"},'0');return (i.createElement('div',{className:"_ipw"+(this.props.isRequesting?' '+"_1c9h":'')},i.createElement('label',null,v,i.createElement('div',{className:"_4puh"+(t?' '+"_1-sy":'')},u,s,i.createElement('div',{ref:'mock_input',className:"_5fbs"},this.state.value),i.createElement(k,{xuiError:this.state.inputError},i.createElement('span',{className:"_1-sz"},i.createElement('input',{autofocus:true,className:"_5fbv",disabled:this.props.disabled,onBlur:this.handleAmountInputBlur,onChange:this.handleAmountInputChange,ref:'textInput',style:{width:this.state.width},value:this.state.value})))))));}});f.exports=r;},null);