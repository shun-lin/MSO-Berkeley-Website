/*!CK:2237851423!*//*1449678557,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5PSGC"]); }

__d('FBPaymentsCreditCardExpDateFormField.react',['Image.react','FBPaymentsFormField.react','FBPaymentsFormFieldUtils','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'FBPaymentsCreditCardExpDateFormField',propTypes:{initiallyFocused:n.bool,name:n.string.isRequired,onChange:n.func.isRequired,showIcon:n.bool,showPlaceholder:n.bool},getDefaultProps:function(){return {showIcon:true,showPlaceholder:true};},getLimit:function(){return 5;},formatValue:function(p,q,r){var s=String.fromCharCode(r);p=p.replace(/[^0-9\/]+/g,'');var t=p.split('/'),u=t[0],v=t[1];if(v&&v.length===4)p=u+'/'+v.substr(-2);if(!/^\d+$/.test(s)&&r!==191&&r!==111)return p;p=j.stripNonDigits(p);if(/^\d$/.test(p)&&(p!=='0'&&p!=='1')){p='0'+p+'/';}else if(p.length>=2&&p.indexOf('/')===-1)p=p.substr(0,2)+'/'+p.substr(2,2);return p;},validate:function(p){var q=p.split('/'),r=new Date(),s=parseInt(r.getFullYear().toString().substring(2),10),t=r.getMonth()+1,u=parseInt(q[0],10),v=parseInt(q[1],10);if(p.length!==5||!u||!v||isNaN(u)||isNaN(v)||u<1||u>12)return false;if(v<s||v===s&&u<t||u>12||u<1)return false;return true;},render:function(){var p,q,r;if(this.props.showLabel)q=l._("Expiration");if(this.props.showPlaceholder)p=l._("MM\/YY");if(this.props.showIcon)r={normal:k.createElement(h,{height:12,src:m('/images/p2p/events-grey_s.png'),width:12}),focused:k.createElement(h,{height:12,src:m('/images/p2p/events-blue_s.png'),width:12})};return (k.createElement(i,babelHelpers._extends({autoCompleteName:'cc-exp',formatValue:this.formatValue,icon:r,label:q,limit:this.getLimit(),placeholder:p,ref:'input',validate:this.validate},this.props)));}});f.exports=o;},null);