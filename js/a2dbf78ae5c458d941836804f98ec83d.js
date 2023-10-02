;// bundle: page___92ec848b86a531a70e2e99b8e8788dc3_m
;// files: Login/CookieConstraintCountdown.js, GenericConfirmation.js

;// Login/CookieConstraintCountdown.js
Roblox=Roblox||{},Roblox.CookieConstraint=function(){function n(n){$("#countDown").toggle(n)}function t(n){var o=1e3,u=o*60,e=u*60,s=e*24,f=Math.floor(n/s),t=Math.floor(n%s/e),i=Math.floor(n%e/u),r="",h;return f&&(r=f==1?f+" day ":f+" days "),t==1||t==0?r+="0"+t+" hr ":(t<10&&(t="0"+t),r+=t+" hrs "),i==1||i==0?r+="0"+i+" min ":(i<10&&(i="0"+i),r+=i+" mins "),n<=u&&(h=Math.floor(n%u/o),r+=h+" secs "),r}function i(){function u(){var o=new Date(r),s=new Date,u=o-s,f,e;if(u>0)f=t(u),$("#countDown").is(":visible")||n(!0),e=$("#timer"),e.html(f);else{clearInterval(i),n(!1);return}}var i,r=$("#cookie-constraint-container").attr("data-count-down-utc-time")+" UTC";i=setInterval(u,1e3)}return{Timer:i}}(),Roblox.CookieConstraint.Timer();

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function w(){n.isOpen=!1,t()}function k(t){var a,e,o,s,l;n.isOpen=!0,a={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.Resources.GenericConfirmation.yes,declineText:Roblox.Resources.GenericConfirmation.No,acceptColor:u,declineColor:f,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},t=$.extend({},a,t),c.overlayClose=t.dismissable,c.escClose=t.dismissable,e=$(i),e.html(t.acceptText),e.attr("class","btn-large "+t.acceptColor),e.unbind(),e.bind("click",function(){return v(e)?!1:(t.fieldValidationRequired?nt(t.onAccept):h(t.onAccept),!1)}),o=$(r),o.html(t.declineText),o.attr("class","btn-large "+t.declineColor),o.unbind(),o.bind("click",function(){return v(o)?!1:(h(t.onDecline),!1)}),$('[data-modal-handle="confirmation"] div.Title').text(t.titleText),s=$("[data-modal-handle='confirmation']"),t.imageUrl==null?s.addClass("noImage"):(s.find("img.GenericModalImage").attr("src",t.imageUrl),s.removeClass("noImage")),t.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(t.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(t.bodyContent),$.trim(t.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),t.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(t.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(t.footerText),$("[data-modal-handle='confirmation']").modal(c),l=$("a.genericmodal-close"),l.unbind(),l.bind("click",function(){return h(t.onCancel),!1}),t.xToCancel||l.hide(),t.onOpenCallback()}function a(n){n.hasClass(f)?n.addClass(s):n.hasClass(l)?n.addClass(e):n.hasClass(u)&&n.addClass(o)}function v(n){return n.hasClass(o)||n.hasClass(s)||n.hasClass(e)?!0:!1}function b(){var n=$(i),t=$(r);a(n),a(t)}function g(){var u=$(i),t=$(r),n=o+" "+s+" "+e;u.removeClass(n),t.removeClass(n)}function p(){if(n.isOpen){var t=$(i);t.click()}}function y(){var n=$(r);n.click()}function t(t){n.isOpen=!1,typeof t!="undefined"?$.modal.close(t):$.modal.close()}function h(n){t(),typeof n=="function"&&n()}function nt(n){if(typeof n=="function"){var i=n();if(i!=="undefined"&&i==!1)return!1}t()}var l="btn-primary",u="btn-neutral",f="btn-negative",e="btn-disabled-primary",o="btn-disabled-neutral",s="btn-disabled-negative",d="btn-none",i="#roblox-confirm-btn",r="#roblox-decline-btn",n={isOpen:!1},c={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"},onClose:w};return{open:k,close:t,disableButtons:b,enableButtons:g,clickYes:p,clickNo:y,status:n,green:l,blue:u,gray:f,none:d}}()),$(document).keypress(function(n){Roblox.GenericConfirmation.status.isOpen&&n.which===13&&Roblox.GenericConfirmation.clickYes()});
