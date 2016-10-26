/*!CK:4169749996!*//*1450076872,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w4Cqp"]); }

__d('ReactComposerMediaAttachmentContainer.react',['ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerMediaAttachment.react','ReactComposerMediaStore','ReactComposerMediaUtils','ReactComposerPhotoCarouselStore','ReactComposerPhotoUploadActions','ReactComposerPhotoUploadStore','ReactComposerPhotoUploader','ReactComposerPrefillStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerSlideshowActions','ReactComposerSlideshowStore','ReactComposerStatusUtils','ReactComposerTaggerActions','ReactComposerTaggerStore','ReactComposerTaggerType','ReactComposerVideoUploadActions','ReactComposerVideoUploader','ReactComposerVideoUploadStore','Arbiter','React','ReactDOM','PUWMethods','URLScraper','curry','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja){if(c.__markCompiled)c.__markCompiled();var ka=ea.PropTypes,la=ea.createClass({displayName:'ComposerMediaAttachmentContainer',_uploader:undefined,_videoUploader:undefined,_photoEditorSubscription:undefined,mixins:[s(l,n,p,t,v,y,ca)],propTypes:{additionalTaggers:ka.arrayOf(ka.shape({button:ka.element.isRequired,container:ka.element.isRequired})),config:j.isRequired},statics:{beforeCalculateInitialState:function(ma,na){var oa=r.getAndEraseField(ma,'photosData');oa&&o.prefillPhotos(ma,oa);},calculateState:function(ma,na){return {createAlbumLink:l.getCreateAlbumLink(ma),shouldShowCarouselURLInputArea:n.shouldShowURLEditArea(ma),shouldShowCarouselPreview:t.getMarkup(ma)!==null,isSlideshowSelected:v.isSlideshowSelected(ma),selectedTagger:y.getSelectedTagger(ma),uploads:p.getUploads(ma),video:ca.getVideo(ma),videoProgressBar:l.getVideoProgressBar(ma),videoProgressBarInstance:l.getVideoProgressBarInstance(ma),videoUploader:l.getVideoUploader(ma)};}},componentWillMount:function(){var ma=this.props.config.attachmentsConfig[i.MEDIA];this._uploader=new q(this.context,ma.photoLimit,{disableFaceRecognition:ma.disableFaceboxTagger});this._photoEditorSubscription=da.subscribe(['AttachmentsPhotoEditor/newImage'+this.context.composerID,'AttachmentsPhotoEditor/tagsUpdated'+this.context.composerID],ia(m.onImageEdited,this.context.composerID,this._uploader));},componentDidMount:function(){var ma=this.props.config.attachmentsConfig[i.MEDIA];this._videoUploader=new ba({composerID:this.context.composerID,container:fa.findDOMNode(this.refs.videoContainer),progressBarInstance:this.state.videoProgressBarInstance,uploader:this.state.videoUploader,shouldShowOptimisticVideoPost:ma.shouldShowOptimisticVideoPost,composerEntryPointRef:this.context.composerType});aa.setUploader(this.context.composerID,this._videoUploader);},componentWillUnmount:function(){this._videoUploader&&this._videoUploader.destroy();this._photoEditorSubscription&&this._photoEditorSubscription.unsubscribe();this._photoEditorSubscription=null;},componentWillUpdate:function(ma,na){na=na||{};if((this.state.uploads.size>0||!!this.state.video)&&na.uploads.size===0&&!na.video){h.selectAttachment(this.context.composerID,i.STATUS,true);u.hideSlideshowEditField(this.context.composerID);}},render:function(){return (ea.createElement('div',null,ea.createElement(k,babelHelpers._extends({},this.props,{createAlbumLink:this.state.createAlbumLink,isSlideshowSelected:this.state.isSlideshowSelected,shouldShowCarouselURLInputArea:this.state.shouldShowCarouselURLInputArea,shouldShowCarouselPreview:this.state.shouldShowCarouselPreview,onFilesSelected:this._onFilesSelected,onMentionsInputChange:this._onMentionsInputChange,onMentionsInputFocus:this._onMentionsInputFocus,onPasteFiles:this._onPasteFiles,onPasteRawText:this._onPasteRawText,postButtonModule:this.props.postButtonModule,uploads:this.state.uploads,video:this.state.video,videoProgressBar:this.state.videoProgressBar})),ea.createElement('div',{ref:'videoContainer'})));},_onFilesSelected:function(event,ma){var na=m.handleSpecialMediaUpload(event,ma,this.props.config.attachmentsConfig[i.MEDIA],this.context);if(na)return;!this._uploader?ja(0):undefined;m.uploadPhotosOrVideoFromTarget(this.context.composerID,event.target,this._uploader,this.props.config.targetData.targetSupportsMultiplePhotos);},_onMentionsInputFocus:function(){if(this.state.selectedTagger!==null&&this.state.selectedTagger!==z.PEOPLE)x.selectTaggerWithoutAutofocus(this.context.composerID,z.PEOPLE);},_onPasteFiles:function(ma){w.uploadPastedFile(this.context.composerID,ma[0],this._uploader);o.photosSelect(this.context.composerID,1,ga.COPYPASTE);},_onPasteRawText:function(ma){var na=this.props.config.attachmentsConfig[i.MEDIA],oa=n.shouldShowURLEditArea(this.context.composerID);if(!na.carouselConfig||!oa)return;if(na.carouselConfig.ComposerPhotoCarouselPlaceHolder)w.scrapeLink(this.context.composerID,this.context.targetID,ma,this.context.composerType,this.context.actorID);},_onMentionsInputChange:function(ma){var na=this.props.config.attachmentsConfig[i.MEDIA],oa=n.shouldShowURLEditArea(this.context.composerID);if(!na.carouselConfig||!oa)return;if(na.carouselConfig.ComposerPhotoCarouselPlaceHolder){var pa=ma.getCurrentContent().getPlainText();if(!ha.trigger(pa))w.scrapeLink(this.context.composerID,this.context.targetID,pa,this.context.composerType,this.context.actorID);}}});f.exports=la;},null);