/*!CK:4043824608!*//*1449709932,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["N0WCQ"]); }

__d('P2PSendMoneyNUXContextualDialog.react',['CurrentEnvironment','MessengerContextualDialog.react','P2PLogger','P2PNUXFooter.react','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXListItems.react','P2PSendMoneyNUXTitle.react','React','XUIContextualDialog.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=p.PropTypes,t=p.createClass({displayName:'P2PSendMoneyNUXContextualDialog',propTypes:{loggingData:s.object,onNextClick:s.func.isRequired,onToggle:s.func.isRequired,width:s.number},getDefaultProps:function(){var u=h.messengerdotcom;return {flyoutAlignment:u?'right':'left',position:'above',width:u?286:260};},log:function(u,v){j.log(u,babelHelpers._extends({www_event_flow:m.UI_FLOW_P2P_SEND},this.props.loggingData,v));},componentDidMount:function(){this.log(l.UI_ACTN_SEND_MONEY_NUX_SHOWN);},handleNextClick:function(){this.log(l.UI_ACTN_SEND_MONEY_NUX_NEXT_CLICK);this.props.onNextClick();},_handleToggle:function(u){this.props.onToggle(u);},render:function(){var u=h.messengerdotcom?i:q;return (p.createElement(u,{alignment:this.props.flyoutAlignment,context:this.props.context,onBlur:(function(){return this._handleToggle(false);}).bind(this),onToggle:this._handleToggle,position:this.props.position,shown:true,width:this.props.width},p.createElement('div',{className:"_56i7"},p.createElement('div',{className:"_56jc"},p.createElement(o,null)),p.createElement('div',{className:"_56jd"},p.createElement(n,null)),p.createElement(k,{onNextClick:this.handleNextClick}))));}});f.exports=t;},null);