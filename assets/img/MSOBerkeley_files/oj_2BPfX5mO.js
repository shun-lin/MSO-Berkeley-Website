/*!CK:3735244948!*//*1449768477,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["p786d"]); }

__d('ReactComposerPhotoContainer.react',['ReactComposerPhoto.react','ReactComposerPhotoActions','ReactComposerPhotoStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerNUXActions','ReactComposerNUXStore','ComposerXNUX','ReactComponentWithPureRenderMixin','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=p.PropTypes,s=p.createClass({displayName:'ReactComposerPhotoContainer',mixins:[o,k(m,j)],propTypes:{draggingPhotos:r.bool,dragHandler:r.shape({add:r.func.isRequired,remove:r.func.isRequired}),enableFaceboxTagger:r.bool,disablePhotoEditing:r.bool,nuxConfig:r.object.isRequired,photoID:r.string.isRequired,uploadID:r.string.isRequired},statics:{beforeCalculateInitialState:function(t,u){var v=j.getPhoto(t,u.photoID),w=this._shouldShowStickersNUX(t,v,u.nuxConfig),x=this._shouldShowTaggingNUX(t,v,u.nuxConfig);if(w)l.nuxWasShown(t,n.ADD_STICKERS_NUX,v.id);if(x)l.nuxWasShown(t,n.TAGGING_FLYOUT_NUX,v.id);},calculateState:function(t,u){var v=j.getPhoto(t,u.photoID),w=this._shouldShowStickersNUX(t,v,u.nuxConfig),x=this._shouldShowTaggingNUX(t,v,u.nuxConfig),y=j.getPhotoBeingTagged(t)===u.photoID;return {faceboxes:v.faceboxes,thumbSrc:v.thumbSrc,isRecognizingFaceboxes:v.isRecognizingFaceboxes,showPhotoTagger:y,showStickersNUX:w,showTaggingNUX:x};},_couldShowNUX:function(t,u,v,w){var x=m.getNUXShownPhotoID(t,w),y=m.hasNUXBeenSeen(t,w);return (!!v[w]&&!y&&(!x||x===u.id));},_shouldShowStickersNUX:function(t,u,v){return this._couldShowNUX(t,u,v,n.ADD_STICKERS_NUX);},_shouldShowTaggingNUX:function(t,u,v){return (this._couldShowNUX(t,u,v,n.TAGGING_FLYOUT_NUX)&&u.faceboxes.size>0);}},componentDidMount:function(){setTimeout((function(){var t=this.props.dragHandler;t&&t.add(q.findDOMNode(this.refs.container));}).bind(this),0);},componentWillUnmount:function(){setTimeout((function(){var t=this.props.dragHandler;t&&t.remove(q.findDOMNode(this.refs.container));}).bind(this),0);},render:function(){return (p.createElement(h,babelHelpers._extends({},this.props,this.state,{onEditClick:this._onEditClick,onRemoveButtonClicked:this._onRemoveButtonClicked,onStickersNUXClose:this._onStickersNUXClose,onTagAdded:this._onTagAdded,onTagIntent:this._onTagIntent,onTaggingNUXClose:this._onTaggingNUXClose,onTagRemoved:this._onTagRemoved,ref:'container'})));},_onEditClick:function(){this._onStickersNUXClose();},_onRemoveButtonClicked:function(){i.removePhoto(this.context.composerID,this.props.photoID,this.props.uploadID);},_onStickersNUXClose:function(){l.nuxWasSeen(this.context.composerID,n.ADD_STICKERS_NUX);},_onTagAdded:function(t,u,v){i.tagFacebox(this.context.composerID,this.props.photoID,t,u,v);},_onTaggingNUXClose:function(){l.nuxWasSeen(this.context.composerID,n.TAGGING_FLYOUT_NUX);},_onTagIntent:function(){if(this.state.showTaggingNUX)this._onTaggingNUXClose();},_onTagRemoved:function(t,u){i.untagFacebox(this.context.composerID,this.props.photoID,t,u);}});f.exports=s;},null);