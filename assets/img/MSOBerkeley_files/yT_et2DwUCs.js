/*!CK:87350736!*//*1450512567,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["s91CM"]); }

__d('MercuryPresenceIndicator.react',['Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=m.PropTypes,r=m.createClass({displayName:'MercuryPresenceIndicator',mixins:[l],propTypes:{threadID:q.string.isRequired},componentDidMount:function(){this._subscriptions=new n();this._subscriptions.addSubscriptions(h.subscribe(i.ON_AVAILABILITY_CHANGED,(function(){return this.forceUpdate();}).bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var s=this._getPresence();return (m.createElement('span',{className:this._getClasses(s)},m.createElement('span',{className:'accessible_elem'},this._getLabel(s))));},_getPresence:function(){if(!j.isCanonical(this.props.threadID)){return null;}else{var s=j.getUserIDFromThreadID(this.props.threadID);return k.get(s);}},_getClasses:function(s){return "presenceIndicator"+(j.isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==i.ACTIVE?' '+"presenceActive":'')+(s==i.MOBILE?' '+"presenceMobile":'');},_getLabel:function(s){switch(s){case i.ACTIVE:return p._("Active");case i.MOBILE:return p._("Mobile");default:return null;}}});f.exports=r;},null);