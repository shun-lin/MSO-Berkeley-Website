/*!CK:87047486!*//*1449710777,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8S9NQ"]); }

__d('legacy:connect-xd',['XD'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.UnverifiedXD=c('XD').UnverifiedXD;b.XD=c('XD').XD;},3);
__d('DisablePlatformButton',['ge','CSS','Event'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=false,l={init:function(m){for(var n=0;n<m.length;n++){var o=h(m[n]);j.listen(o,'click',function(p){if(k){return false;}else{k=true;for(var q=0;q<m.length;q++)i.addClass(m[q],'uiButtonDisabled');}});}}};f.exports=l;},null);
__d('FriendListPrivacyOptions',['Arbiter','AsyncDialog','AsyncRequest','Dialog','DOMQuery','PageTransitions','Parent','SelectorDeprecated','$','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=false,s=false,t=null,u={},v=function(x){if(!Object.keys(u).length)m.registerHandler(function(){u={};r=false;s=false;});var y=x.getAttribute('data-name');u[y]=x;o.listen(x,'select',function(z){var aa=z.option,ba=l.find(aa,'a.itemAnchor'),ca=ba.getAttribute('data-flid');if(!ca)return;var da=ba.getAttribute('data-dynamic');if(da&&r){w.showSmartListNux(aa,ca);}else if(!da&&s)w.showDumbListNux([ca]);});},w={listen:function(x,y,z){var aa=q(x);if(!aa)return;var ba=n.byClass(aa,'audienceSelector');if(ba){v(ba);r=y;s=z;}},showSmartListNux:function(x,y){x=p(x);new j('/ajax/friends/lists/smart_list_publish_nux.php').setData({option_id:x.id,flid:y}).send();r=false;},setContextualDialog:function(x,y){y=p(y);var z=n.byClass(y,'audienceSelector');if(z){x.setContext(z);x.show();var aa=h.subscribe('composer/publish',function(){x.hide();});x.subscribe('hide',function(){aa.unsubscribe();});}},showDumbListNux:function(x){i.send(new j('/ajax/friends/lists/dumb_list_publish_nux.php').setData({flids:x}));s=false;},showBothListsNux:function(x,y){t=p(x);w.showDumbListNux(y);},setDialogX:function(x){if(!t)return;x.subscribe('hide',function(){w.showSmartListNux(t);t=null;});},setDialog:function(){if(!t)return;var x=k.getCurrent();if(x)x.setCloseHandler(function(){w.showSmartListNux(t);t=null;});}};f.exports=w;},null);
__d('ProfileWizardUIEvents',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={CUSTOM_HIDE_HANDLE:'ProfileWizardUIEvents/customHideHandle',CUSTOM_SHOW_HANDLE:'ProfileWizardUIEvents/customShowHandle',HIDE_POPUP:'ProfileWizardUIEvents/hidePopup',PROFILE_PIC_UPLOADED:'ProfileWizardUIEvents/profilePicUploaded',SHOW_POPUP:'ProfileWizardUIEvents/showPopup',STEP_COMPLETE:'ProfileWizardUIEvents/stepComplete',STEP_EDITED:'ProfileWizardUIEvents/stepEdited'};f.exports=h;},null);
__d("XProfileWizardImpressionController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile\/wizard_impression\/{surface}\/",{error_code:{type:"Int"},step:{type:"Int",required:true},surface:{type:"Enum",required:true,enumType:1}});},null);
__d('ProfileWizardUIManager',['Arbiter','AsyncRequest','ProfileWizardUIEvents','XProfileWizardImpressionController','invariant','destroyOnUnload'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';var p=arguments.length<=1||arguments[1]===undefined?null:arguments[1];this.$ProfileWizardUIManager1=o;this.$ProfileWizardUIManager2=p||this.$ProfileWizardUIManager1[0];var q=h.subscribe(j.STEP_COMPLETE,this.stepComplete.bind(this));if(p!=null)n.informShowPopupForStep(p);m(function(){return q.unsubscribe();});}n.prototype.stepComplete=function(o,p){'use strict';var q=this.getNextStepIndex(p.stepNumber);if(q){n.informShowPopupForStep(q);this.$ProfileWizardUIManager2=q;}};n.prototype.getCurrentStepIndex=function(){'use strict';return this.$ProfileWizardUIManager2;};n.prototype.getNextStepIndex=function(o){'use strict';var p=this.$ProfileWizardUIManager1.indexOf(o);!(p!==-1)?l(0):undefined;if(p<this.$ProfileWizardUIManager1.length-1)return this.$ProfileWizardUIManager1[p+1];return null;};n.prototype.hasNextStep=function(){'use strict';return !!this.getNextStepIndex(this.getCurrentStepIndex());};n.informShowPopupForStep=function(o){'use strict';h.inform(j.SHOW_POPUP+o,{stepNumber:o},h.BEHAVIOR_PERSISTENT);};n.informHidePopupForStep=function(o){'use strict';h.inform(j.HIDE_POPUP+o,{stepNumber:o},h.BEHAVIOR_PERSISTENT);};n.informStepComplete=function(o){'use strict';h.inform(j.STEP_COMPLETE,{stepNumber:o});};n.informCustomShowHandler=function(o){'use strict';h.inform(j.CUSTOM_SHOW_HANDLE+o,{stepNumber:o},h.BEHAVIOR_PERSISTENT);};n.informCustomHideHandler=function(o){'use strict';h.inform(j.CUSTOM_HIDE_HANDLE+o,{stepNumber:o},h.BEHAVIOR_PERSISTENT);};n.subscribeShowPopupForStep=function(o,p,q){'use strict';return n.$ProfileWizardUIManager3(j.SHOW_POPUP,o,q);};n.subscribeHidePopupForStep=function(o,p,q){'use strict';return n.$ProfileWizardUIManager3(j.HIDE_POPUP,o,q);};n.subscribeCustomShowHandler=function(o,p){'use strict';return n.$ProfileWizardUIManager3(j.CUSTOM_SHOW_HANDLE,o,p);};n.subscribeCustomHideHandler=function(o,p){'use strict';return n.$ProfileWizardUIManager3(j.CUSTOM_HIDE_HANDLE,o,p);};n.$ProfileWizardUIManager3=function(event,o,p){'use strict';var q=h.subscribe(event+o,p);m(function(){return q.unsubscribe();});return q;};n.markStepImpression=function(o,p){'use strict';var q=k.getURIBuilder().setInt('step',o).setEnum('surface',p).getURI();new i().setURI(q).send();};n.init=function(o){'use strict';var p=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return new n(o,p);};f.exports=n;},null);
__d("XTimelineCoverPhotoGalleryController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/timeline\/cover\/gallery\/",{});},null);
__d('TimelineCoverPhotoNUX',['AsyncRequest','CSS','ProfileWizardUIManager','XTimelineCoverPhotoGalleryController','$','cx','destroyOnUnload'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o='fbProfileCover',p="_3y4k",q={init:function(r,s,t,u){this._dialog=s;this._coverPhotoContainer=l(o);this._popover=r.getPopover();this._hasCoverPhoto=u;j.subscribeCustomShowHandler(t,(function(){return this._showDialog();}).bind(this));j.subscribeCustomHideHandler(t,(function(){return this._hideDialog();}).bind(this));this._popoverToken=this._popover.subscribeOnce('show',(function(){if(this._hasCoverPhoto||this._showDialogCalled)return;this._popover.hideLayer();this._showDialog();}).bind(this));var v=this._dialog.subscribe('cancel',(function(){i.removeClass(this._coverPhotoContainer,p);}).bind(this)),w=this._dialog.subscribe('confirm',(function(){this._popover.showLayer();this._hideDialog();}).bind(this));n((function(){this._dialog.unsubscribe(v);this._dialog.unsubscribe(w);this._popover.unsubscribe(this._popoverToken);}).bind(this));},_hideDialog:function(){this._dialog.hide();i.removeClass(this._coverPhotoContainer,p);},_showDialog:function(){if(this._showDialogCalled)return;this._dialog.show();if(!this._hasCoverPhoto){i.addClass(this._coverPhotoContainer,p);new h().setURI(k.getURIBuilder().getURI()).send();}this._showDialogCalled=true;}};f.exports=q;},null);
__d("XProfileRefresherDialogImpressionController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile\/refresher\/dialog_impression\/",{});},null);
__d('ProfileActionsUpdateInfoButton',['AsyncRequest','CSS','Event','ProfileWizardUIManager','XProfileRefresherDialogImpressionController','destroyOnUnload'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p,q,r,s,t){'use strict';var u;this.$ProfileActionsUpdateInfoButton1=j.listen(o,'click',(function(){if(t){p.hide();i.hide(q);this.$ProfileActionsUpdateInfoButton2();return true;}if(u&&!u.hasNextStep()){this.$ProfileActionsUpdateInfoButton3();return true;}if(!u){u=k.init(r,s);p.hide();i.hide(q);this.$ProfileActionsUpdateInfoButton2();}else k.informStepComplete(u.getCurrentStepIndex(),'refresher');return false;}).bind(this));this.$ProfileActionsUpdateInfoButton4=p.subscribe('cancel',(function(){return this.$ProfileActionsUpdateInfoButton2();}).bind(this));m((function(){return this.$ProfileActionsUpdateInfoButton3();}).bind(this));}n.prototype.$ProfileActionsUpdateInfoButton3=function(){'use strict';this.$ProfileActionsUpdateInfoButton1&&this.$ProfileActionsUpdateInfoButton1.remove();};n.prototype.$ProfileActionsUpdateInfoButton2=function(){'use strict';new h().setURI(l.getURIBuilder().getURI()).send();};f.exports=n;},null);
__d('ProfileWizardStepFlyout',['DOMScroll','Event','ProfileWizardUIManager','destroyOnUnload'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o){'use strict';j.subscribeShowPopupForStep(n,o,function(){h.scrollTo(m.getCausalElement(),500,false,false,20,function(){j.informCustomShowHandler(n);m.show();});});j.subscribeHidePopupForStep(n,o,function(){j.informCustomHideHandler(n);m.hide();});var p=i.listen(m.getCausalElement(),'click',function(){return j.informHidePopupForStep(n);}),q=[m.subscribe('cancel',function(){j.informStepComplete(n);j.markStepImpression(n,o);}),m.subscribe('confirm',function(){m.hide();j.markStepImpression(n,o);})];k(function(){while(q.length)m.unsubscribe(q.pop());p.remove();});}f.exports=l;},null);
__d('InfoReviewInputSelectNoValidAnswer',['Arbiter','CSS','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={addPrivacySelector:function(l){h.subscribe('no-valid-answer-select',function(m,n){i.conditionClass(l,"_1gq7",n.selected);});}};f.exports=k;},null);
__d('InfoReviewQuestionForm',['Arbiter','DOMQuery','Event','InfoReviewInstanceManager','getActiveElement'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=[];function n(o,p,q,r){'use strict';this.$InfoReviewQuestionForm1=p;this.$InfoReviewQuestionForm2=r;this.$InfoReviewQuestionForm3=q;this.$InfoReviewQuestionForm4=j.listen(p,'submit',this.$InfoReviewQuestionForm5.bind(this),j.Priority.URGENT);m.push(this);k.addInstanceRoot(o,p);}n.prototype.cleanup=function(){'use strict';this.$InfoReviewQuestionForm4.remove();this.$InfoReviewQuestionForm4=null;};n.cleanupInstances=function(){'use strict';while(m.length)m.pop().cleanup();k.cleanupInstances();};n.triggerErrorEvent=function(o){'use strict';h.inform('InfoReviewQuestionForm/error',o);};n.prototype.$InfoReviewQuestionForm5=function(event){'use strict';var o=l();if(i.contains(this.$InfoReviewQuestionForm1,o)&&o.getAttribute('value')===this.$InfoReviewQuestionForm3)return h.inform('InfoReviewQuestionForm/beforeSubmit',{formToken:this.$InfoReviewQuestionForm2});return true;};f.exports=n;},null);
__d('InfoReviewRequestForm',['CSS','DOM','Event','csx','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n="_3k3-",o=[];function p(q,r){'use strict';this.$InfoReviewRequestForm1=q;this.$InfoReviewRequestForm2=[j.listen(r,'change',this.$InfoReviewRequestForm3.bind(this)),j.listen(r,'click',this.$InfoReviewRequestForm4.bind(this))];m(this.$InfoReviewRequestForm2);o.push(this);}p.prototype.cleanup=function(){'use strict';this.$InfoReviewRequestForm1=null;while(this.$InfoReviewRequestForm2.length)this.$InfoReviewRequestForm2.pop().remove();this.$InfoReviewRequestForm2=null;};p.prototype.$InfoReviewRequestForm3=function(event){'use strict';h.conditionClass(this.$InfoReviewRequestForm1,n,event.getTarget().checked);};p.prototype.$InfoReviewRequestForm4=function(event){'use strict';var q=event.getTarget();q.blur();q.focus();};p.initNUX=function(q,r){'use strict';m(j.listen(q,'click',function(){var s=i.scry(r,"._58al")[0];s&&s.focus();}));};p.cleanupInstances=function(){'use strict';while(o.length>0)o.pop().cleanup();};p.setDialogListener=function(q,r,s){'use strict';m(q.subscribe('error',function(t,u){i.setContent(s,u.response.errorDescription);h.show(r);return false;}));};f.exports=p;},null);
__d('legacy:xd-arbiter',['XdArbiter'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();c('XdArbiter');},3);