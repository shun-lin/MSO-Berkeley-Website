/*!CK:2002482677!*//*1450540655,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8jK5y"]); }

__d('FBPaymentsCreditCardNumberFormField.react',['Image.react','FBPaymentsFormField.react','FBPaymentsFormFieldUtils','PaymentMethodUtils','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=l.PropTypes,p=l.createClass({displayName:'FBPaymentsCreditCardNumberFormField',propTypes:{allowCredit:o.bool,disabled:o.bool,shouldValidateBIN:o.bool,initiallyFocused:o.bool,name:o.string.isRequired,onChange:o.func.isRequired,showIcon:o.bool,showPlaceholder:o.bool,showSecondaryIcon:o.bool,value:o.string},getDefaultProps:function(){return {allowCredit:true,showIcon:true,showPlaceholder:true,showSecondaryIcon:false};},getInitialState:function(){return {errorMessage:null};},calculateLimit:function(q){return (k.getCardType(q).digits+(this.getGrouping(q).length-2));},getGrouping:function(q){var r=[0,4,8,12,16],s=r;switch(k.getCardType(q).name){case 'visa':case 'mc':case 'disc':s=r;break;case 'amex':s=[0,4,10,15];break;case 'diners':s=[0,4,10,14];break;default:s=r;break;}return s;},formatValue:function(q,r,s){return j.formatCardNumber(q,r,s,this.getGrouping(q),' ');},validate:function(q){var r=this.isValidCardType(q),s;if(!this.props.allowCredit){s=m._("Please enter a debit card. Credit cards can't be used.");}else s=m._("Please enter a valid debit or credit card number.");this.setState({errorMessage:!r?s:null});return !!(k.isValidCCNumber(q)&&r&&!this.props.binError);},isValidCardType:function(q){var r=['mc','visa','unknown'];if(this.props.allowCredit)r.push('diners','disc','jcb','amex');var s=k.getCardType(q),t=s?s.name:'',u=r.indexOf(t)>=0;return u;},getSaveError:function(){return this.props.binError||this.props.saveError;},getSecondaryIcon:function(q){var r,s;if(!this.props.showSecondaryIcon)return null;s=k.getCardType(q).name;switch(s){case 'visa':r=n('/images/payments/icons/modularization/visa-cc.png');break;case 'mc':r=n('/images/payments/icons/modularization/mastercard-cc.png');break;case 'amex':r=n('/images/payments/icons/modularization/amex-cc.png');break;case 'disc':r=n('/images/payments/icons/modularization/discover-cc.png');break;case 'jcb':r=n('/images/payments/icons/modularization/jcb-cc.png');break;default:r=n('/images/payments/icons/modularization/CC.png');break;}return (l.createElement(h,{height:20,src:r,width:30}));},render:function(){var q=m._("Card Number"),r,s,t;if(this.props.showLabel){s=q;r='0000 0000 0000 0000';}else if(this.props.showPlaceholder)r=q;if(this.props.showIcon)t={normal:l.createElement(h,{height:12,src:n('/images/p2p/card-grey_s.png'),width:12}),focused:l.createElement(h,{height:12,src:n('/images/p2p/card-blue_s.png'),width:12})};return (l.createElement(i,babelHelpers._extends({autoCompleteName:'cc-number',cursorPositionUpdater:j.getUpdatedCursorPosition,errorMessage:this.state.errorMessage,formatValue:this.formatValue,icon:t,label:s,limit:this.calculateLimit,placeholder:r,ref:'input',validate:this.validate,value:this.props.value},this.props,{saveError:this.getSaveError(),getSecondaryIcon:this.getSecondaryIcon})));}});f.exports=p;},null);