/*!CK:2899615139!*//*1449899358,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["l4FjE"]); }

__d('MercuryThreadReadToggle.react',['MercuryThreadActions','ReactComponentWithPureRenderMixin','React','ReadToggle.react','fbt','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MercuryThreadReadToggle',mixins:[i],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,unreadCount:n.number.isRequired},render:function(){!(this.props.unreadCount>=0)?m(0):undefined;return (j.createElement(k,{isRead:this.props.unreadCount===0,onClick:this._handleClick,readLabel:l._("Mark as Unread"),unreadLabel:l._("Mark as Read")}));},_handleClick:function(p){p.preventDefault();p.stopPropagation();var q=h.getForFBID(this.props.viewer);this.props.unreadCount>0?q.markRead(this.props.threadID):q.markUnread(this.props.threadID);}});f.exports=o;},null);