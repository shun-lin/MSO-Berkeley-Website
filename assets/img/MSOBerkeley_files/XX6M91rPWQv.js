/*!CK:3704455510!*//*1449597045,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uYuUI"]); }

__d('NotificationJewelList.react',['Animation','DOMContainer.react','Event','LoadingIndicator.react','NotificationListPropTypes','NotificationListItem.react','React','ReactDOM','ScrollableArea.react','Vector','cx','debounce','fbt','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=160,x=530,y=40,z=64,aa=430,ba=n.createClass({displayName:'NotificationJewelList',propTypes:l,_isLoadingIndicatorVisible:function(){var ca=this.refs.loading;if(!ca)return false;var da=o.findDOMNode(this.refs.scrollable),ea=q.getElementDimensions(da).y;if(ea===0)return false;var fa=q.getElementPosition(da).y+ea,ga=q.getElementPosition(o.findDOMNode(ca)).y;ga-=y;return ga<fa;},_calculateHeight:function(){var ca=q.getViewportDimensions().y,da=Math.min(this.props.maxHeight||x,ca-w);if(this.props.upsell)return Math.max(da-z,0);return da;},_keepOnLoading:function(){if(this.isMounted())this.props.afterScroll(this._isLoadingIndicatorVisible());},_renderItems:function(){return u(this.props.notifs).map((function(ca){var da=ca.alert_id;return (n.createElement(m,babelHelpers._extends({key:da,visible:!this.props.hiddenState[da],isRead:this.props.readState[da],negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,useChevron:this.props.useChevron,chevronType:this.props.chevronType,onChevronShow:this.props.onChevronShow,onChevronHide:this.props.onChevronHide,paused:this.props.paused,parent:this},ca)));}).bind(this));},componentDidMount:function(){var ca=o.findDOMNode(this.refs.scrollable);j.listen(window,'resize',s((function(){if(!v(this.props.notifs))new h(ca).to('height',this._calculateHeight()+'px').duration(100).go();}).bind(this)));},componentDidUpdate:function(ca){if(this.props.paused&&!ca.paused)if(this.props.shouldScroll&&this.refs.scrollable)this.refs.scrollable.getArea().scrollToTop(false);setTimeout(this._keepOnLoading,0);},render:function(){var ca=this.props.notifs,da=null,ea=null,fa=aa,ga=null;if(!v(ca)){da=n.createElement('ul',{'data-gt':this.props.tracking},this._renderItems());ea=this._calculateHeight();}else if(!this.props.canFetchMore)da=n.createElement('div',{className:"_572e"},t._("No new notifications"));if(this.props.canFetchMore)ga=n.createElement(k,{color:'white',size:'small',ref:'loading',className:"_33i"});var ha=null;if(this.props.upsell){var ia=this.props.upsell.module;ha=n.createElement(ia,this.props.upsell.props);}var ja="_50-t"+(this.props.showingChevron?' '+"_2iy1":'');return (n.createElement('div',{className:ja},n.createElement(p,{ref:'scrollable',width:fa,height:ea,fade:true,persistent:true,onScroll:s(this._keepOnLoading)},da,ga),ha));}});f.exports=ba;},null);