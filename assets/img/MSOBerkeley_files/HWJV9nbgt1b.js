/*!CK:746417225!*//*1450540078,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["i+kG3"]); }

__d("P2PBannerType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={REQUEST_SENDER_NUX:"REQUEST_SENDER_NUX"};},null);
__d('P2PBannerStore',['EventEmitter','P2PActionConstants','P2PAPI','P2PDispatcher','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;'use strict';var o,p={},q=false,r=false;m=babelHelpers.inherits(s,h);n=m&&m.prototype;function s(){n.constructor.call(this);o=k.register(this.onEventDispatched.bind(this));}s.prototype.onEventDispatched=function(t){var u=t.type,v=t.data;switch(u){case i.BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(v);this.emit('change');break;case i.BANNER_DISMISSED:this.handleBannerDismissed(v);this.emit('change');break;case i.BANNER_COMPLETED:this.handleBannerCompleted(v);this.emit('change');break;}};s.prototype.handleBannerStatesUpdated=function(t){q=true;p=t;};s.prototype.handleBannerDismissed=function(t){var u=this.getBannerState(t);u.hasBeenDismissed=true;};s.prototype.shouldShowBanner=function(t){var u;if(!r){j.getBannerStates();r=true;return false;}if(!q)return false;u=this.getBannerState(t);return (u.eligible&&!u.hasBeenDismissed);};s.prototype.handleBannerCompleted=function(t){var u=this.getBannerState(t);u.eligible=false;};s.prototype.getBannerState=function(t){var u=p[t];!u?l(0):undefined;return u;};f.exports=new s();},null);
__d('P2PPlatformContextStore',['Arbiter','ChannelConstants','CurrentUser','EventEmitter','ImmutableObject','Map','MercuryIDs','P2PActions','P2PActionConstants','P2PAPI','P2PChannelType','P2PDispatcher'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t,u;'use strict';var v=new m(),w=new m(),x=null;t=babelHelpers.inherits(y,k);u=t&&t.prototype;function y(){u.constructor.call(this);x=s.register(this.onEventDispatched.bind(this));h.subscribe(i.getArbiterType(r.PLATFORM_CONTEXT_NEW),this.handleChannelUpdated.bind(this));h.subscribe(i.getArbiterType(r.PLATFORM_CONTEXT_ELIGIBLE_ITEM_UPDATED),this.handleChannelChanged.bind(this));h.subscribe(i.getArbiterType(r.PLATFORM_CONTEXT_DISMISSED),this.handleChannelChanged.bind(this));}y.prototype.onEventDispatched=function(z){var aa=z.type,ba=z.data;switch(aa){case p.PLATFORM_CONTEXT_ADDED:this.handlePlatformContextAdded(ba);this.emit('change');break;case p.PLATFORM_CONTEXT_ADDED_ERROR:this.handlePlatformContextAddedError(ba);this.emit('change');break;case p.PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED:this.handlePlatformContextSaveErrorsCleared(ba);this.emit('change');break;case p.PLATFORM_CONTEXT_BANNER_DISMISSED:this.handlePlatformContextBannerDisimssed(ba);this.emit('change');break;case p.PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:this.handlePlatformContextProductItemSold(ba);this.emit('change');break;case p.PLATFORM_CONTEXT_CHANGED:this.handlePlatformContextChanged(ba);this.emit('change');break;}};y.prototype.handleChannelUpdated=function(z,aa){var ba=aa.obj;o.addPlatformContext(ba);};y.prototype.handleChannelChanged=function(z,aa){var ba=aa.obj;o.platformContextChanged(ba);};y.prototype.handlePlatformContextAdded=function(z){this.setPlatformContext(z);};y.prototype.handlePlatformContextAddedError=function(z){w.set(z.itemID,z.error);};y.prototype.handlePlatformContextSaveErrorsCleared=function(z){w['delete'](z);};y.prototype.handlePlatformContextChanged=function(z){v.forEach((function(aa,ba){if(aa.id===z.id)this.setPlatformContext(z);}).bind(this));};y.prototype.handlePlatformContextBannerDisimssed=function(z){v.forEach((function(aa,ba){if(aa.id===z){if(this.isViewerSellerForPlatformContext(aa)){aa=l.set(aa,{banner:l.set(aa.banner,{shouldShowToSeller:false})});}else if(this.isViewerBuyerForPlatformContext(aa))aa=l.set(aa,{banner:l.set(aa.banner,{shouldShowToBuyer:false})});v.set(ba,aa);}}).bind(this));};y.prototype.handlePlatformContextProductItemSold=function(z){v.forEach(function(aa,ba){if(aa.id===z){aa=l.set(aa,{product:l.set(aa.product,{isAvailable:false})});v.set(ba,aa);}});};y.prototype.setPlatformContext=function(z){var aa=new l(z);aa=l.set(aa,{product:new l(z.product)});aa=l.set(aa,{banner:new l(z.banner)});v.set(this.getOtherUserIDForPlatformContext(z),aa);};y.prototype.shouldShowBanner=function(z){var aa,ba;if(!z)return false;aa=this.getPlatformContextByOtherUserID(z);if(!aa){v.set(z,new l({}));q.getPlatformContextByOtherUserID({otherUserID:z});return false;}ba=aa.banner;return !!(this.isViewerSellerForPlatformContext(aa)&&ba.shouldShowToSeller||this.isViewerBuyerForPlatformContext(aa)&&ba.shouldShowToBuyer);};y.prototype.isViewerSellerForPlatformContext=function(z){return z.sellerID===j.getID();};y.prototype.isViewerBuyerForPlatformContext=function(z){return z.buyerID===j.getID();};y.prototype.getOtherUserIDForPlatformContext=function(z){return (this.isViewerSellerForPlatformContext(z)?z.buyerID:z.sellerID);};y.prototype.getPlatformContextByOtherUserID=function(z){return v.get(z);};y.prototype.getThreadIDFromPlatformContext=function(z){var aa=this.getOtherUserIDForPlatformContext(z);return n.getThreadIDFromUserID(aa);};y.prototype.getSaveError=function(z){return w.get(z);};y.prototype.getDispatchToken=function(){return x;};f.exports=new y();},null);
__d('P2PChatThreadBannerContainer.react',['BootloadedComponent.react','JSResource','P2PBannerStore','P2PBannerType','P2PPlatformContextStore','StoreAndPropBasedStateMixin','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=n.PropTypes,p=n.createClass({displayName:'P2PChatThreadBannerContainer',mixins:[m(j,l)],propTypes:{isVisible:o.bool,otherUserID:o.string,threadID:o.string},statics:{calculateState:function(q){return {productItemBannerShown:l.shouldShowBanner(q.otherUserID),requestSenderNUXBannerShown:j.shouldShowBanner(k.REQUEST_SENDER_NUX)};}},renderRequestSenderNUXBanner:function(){if(!this.props.threadID||!this.props.isVisible)return null;return (n.createElement(h,{bootloadLoader:i('P2PRequestSenderNUXChatThreadBanner.react'),bootloadPlaceholder:n.createElement('span',null),threadID:this.props.threadID}));},renderProductItemBanner:function(){var q=this.props.otherUserID,r;if(q)r=l.getPlatformContextByOtherUserID(q);if(!r)return null;return (n.createElement(h,{bootloadLoader:i('P2PProductItemChatThreadBanner.react'),bootloadPlaceholder:n.createElement('span',null),platformContext:r}));},render:function(){var q;if(this.state.productItemBannerShown){q=this.renderProductItemBanner();}else if(this.state.requestSenderNUXBannerShown)q=this.renderRequestSenderNUXBanner();return (n.createElement('div',null,q));}});f.exports=p;},null);