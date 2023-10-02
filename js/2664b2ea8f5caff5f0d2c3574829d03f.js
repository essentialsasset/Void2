;// bundle: page___db76ae4cb2eee62e5c87cbacb7f614d7_m
;// files: Upgrades/BuildersClubProductsGrid.js, GenericModal.js, utilities/popover.js, Navigation/ShopAmazon.js, GenericConfirmation.js

;// Upgrades/BuildersClubProductsGrid.js
$(function(){$("a.product-button").click(function(){var n=$(this).data("pid"),t=$("#UserDataInfo").attr("data-auth");window.location.href=t=="false"?Roblox.Endpoints.getAbsoluteUrl("/NewLogin?ReturnUrl=")+encodeURIComponent(location.pathname+location.search):Roblox.Endpoints.getAbsoluteUrl("/Upgrades/purchase?ap=")+n})});

;// GenericModal.js
typeof Roblox.GenericModal=="undefined"&&(Roblox.GenericModal=function(){function s(u,f,e,s,h,c){var l,a;t.isOpen=!0,n=$.extend({},n,c),i=s,l=$("div.GenericModal").filter(":first"),l.find("div.Title").text(u),f===null?l.addClass("noImage"):(l.find("img.GenericModalImage").attr("src",f),l.removeClass("noImage")),l.find("div.Message").html(e),h&&(l.removeClass("smallModal"),l.addClass("largeModal")),a=l.find(o),a.attr("class","btn-large "+n.acceptColor),a.unbind(),a.bind("click",function(){r()}),l.modal(n)}function r(){t.isOpen=!1,$.modal.close(),typeof i=="function"&&i()}var f="btn-primary",u="btn-neutral",e="btn-negative",o=".ImageButton.btn-neutral.btn-large.roblox-ok",t={isOpen:!1},n={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"},acceptColor:u},i;return $(function(){$(document).on("click",".GenericModal .roblox-ok",function(){r()})}),{close:r,open:s,status:t,green:f,blue:u,gray:e}}()),Roblox.GenericModal.Resources={ErrorText:"Error",ErrorMessage:"Sorry, an error occurred."},$(document).keypress(function(n){n.which===13&&Roblox.GenericModal.status.isOpen&&Roblox.GenericModal.close()});

;// utilities/popover.js
var Roblox=Roblox||{};Roblox.Popover=function(){"use strict";function u(n,i){var u=$(n),f=$(i),e=$(t),h=e.outerWidth(),c=u.find(r).outerWidth(),l=e.offset().left,o=0,s;(u.hasClass("bottom")||u.hasClass("top"))&&(s=$("body").outerWidth()-parseInt(f.width()+f.offset().left),o=$("body").outerWidth()-l-s-h/2-c/2,u.find(r).css("right",o))}function f(t){return t.data("hiddenClassName")&&(n=t.data("hiddenClassName")),n}function o(){$(t).on("click touchstart",function(t){var s=$(this).data("bind"),h=s?"#"+s:i,r=$(h),c=$(this).data("container"),l=c?"#"+c:e,o;n=f(r),r.hasClass("manual")||r.toggleClass(n),o=!r.hasClass(n),$(document).triggerHandler("Roblox.Popover.Status",{isOpen:o,eventType:t.type}),o&&u(h,l)})}function s(){$("body").on("click touchstart",function(r){$(t).each(function(){var u=$(this).data("bind"),t=u?$("#"+u):$(i),o="roblox-popover-open-always",e="roblox-popover-close";if(n=f(t),$(t).hasClass(o)&&!$(r.target).hasClass(e))return!1;!$(r.target).hasClass(e)&&($(this).is(r.target)||$(this).has(r.target).length!==0||t.has(r.target).length!==0||t.hasClass(n)||r.type!=="click")||(t.addClass(n),$(document).triggerHandler("Roblox.Popover.Status",{isHidden:!0,eventType:r.type}))})})}function h(){o(),s()}var t=".roblox-popover",i=".roblox-popover-content",e=".roblox-popover-container",r=".arrow",n="hidden";return $(function(){h()}),{setUpTrianglePosition:u}}();

;// Navigation/ShopAmazon.js
Roblox=Roblox||{},Roblox.ShopAmazon=function(){function t(){$("a.roblox-shop-interstitial").on("click",function(n){n.preventDefault(),Roblox.Dialog.open({titleText:"You are leaving ROBLOX",bodyContent:r(),allowHtmlContentInBody:!0,acceptText:"Continue to Shop",declineText:"Cancel",xToCancel:!0,acceptColor:Roblox.Dialog.green,declineColor:Roblox.Dialog.white,onAccept:i})})}function i(){window.open(n,"_blank")}function r(){return"<p>Your are about to visit our amazon store. You will be redirected to ROBLOX merchandise store on <a class='text-link' target='_blank' href='"+n+"' >Amazon.com</a>.</p> <p>Please note that you need to be over 18 to purchase products online. The amazon store is not part of ROBLOX.com and is governed by a separate privacy policy.</p>"}function u(){t()}var n="https://www.amazon.com/roblox?&_encoding=UTF8&tag=r05d13-20&linkCode=ur2&linkId=4ba2e1ad82f781c8e8cc98329b1066d0&camp=1789&creative=9325";$(function(){u()})}();

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function w(){n.isOpen=!1,t()}function k(t){var a,e,o,s,l;n.isOpen=!0,a={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.Resources.GenericConfirmation.yes,declineText:Roblox.Resources.GenericConfirmation.No,acceptColor:u,declineColor:f,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},t=$.extend({},a,t),c.overlayClose=t.dismissable,c.escClose=t.dismissable,e=$(i),e.html(t.acceptText),e.attr("class","btn-large "+t.acceptColor),e.unbind(),e.bind("click",function(){return v(e)?!1:(t.fieldValidationRequired?nt(t.onAccept):h(t.onAccept),!1)}),o=$(r),o.html(t.declineText),o.attr("class","btn-large "+t.declineColor),o.unbind(),o.bind("click",function(){return v(o)?!1:(h(t.onDecline),!1)}),$('[data-modal-handle="confirmation"] div.Title').text(t.titleText),s=$("[data-modal-handle='confirmation']"),t.imageUrl==null?s.addClass("noImage"):(s.find("img.GenericModalImage").attr("src",t.imageUrl),s.removeClass("noImage")),t.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(t.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(t.bodyContent),$.trim(t.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),t.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(t.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(t.footerText),$("[data-modal-handle='confirmation']").modal(c),l=$("a.genericmodal-close"),l.unbind(),l.bind("click",function(){return h(t.onCancel),!1}),t.xToCancel||l.hide(),t.onOpenCallback()}function a(n){n.hasClass(f)?n.addClass(s):n.hasClass(l)?n.addClass(e):n.hasClass(u)&&n.addClass(o)}function v(n){return n.hasClass(o)||n.hasClass(s)||n.hasClass(e)?!0:!1}function b(){var n=$(i),t=$(r);a(n),a(t)}function g(){var u=$(i),t=$(r),n=o+" "+s+" "+e;u.removeClass(n),t.removeClass(n)}function p(){if(n.isOpen){var t=$(i);t.click()}}function y(){var n=$(r);n.click()}function t(t){n.isOpen=!1,typeof t!="undefined"?$.modal.close(t):$.modal.close()}function h(n){t(),typeof n=="function"&&n()}function nt(n){if(typeof n=="function"){var i=n();if(i!=="undefined"&&i==!1)return!1}t()}var l="btn-primary",u="btn-neutral",f="btn-negative",e="btn-disabled-primary",o="btn-disabled-neutral",s="btn-disabled-negative",d="btn-none",i="#roblox-confirm-btn",r="#roblox-decline-btn",n={isOpen:!1},c={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"},onClose:w};return{open:k,close:t,disableButtons:b,enableButtons:g,clickYes:p,clickNo:y,status:n,green:l,blue:u,gray:f,none:d}}()),$(document).keypress(function(n){Roblox.GenericConfirmation.status.isOpen&&n.which===13&&Roblox.GenericConfirmation.clickYes()});