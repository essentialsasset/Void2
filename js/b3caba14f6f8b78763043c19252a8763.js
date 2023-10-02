/* Bundle: page_splitApps___95e3ea87b8e5a364f2b900b7e1351a47_m */"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { $templateCache.put("verify-email", "<div class=modal-header><button type=button class=close ng-click=$dismiss()><span aria-hidden=true><span class=icon-close></span></span><span class=sr-only ng-bind=layout.labels.close></span></button><h4 ng-bind=layout.headerText></h4></div><div class=modal-body><div ng-class=\"{'form-has-error form-has-feedback':layout.error}\"><div ng-bind=layout.labels.unverifiedEmailInstructions></div><p class=form-control-label ng-bind=layout.error></div></div><div class=modal-footer><div toggle-loading is-loading=layout.isSubmitBusy><button type=submit class=\"btn-secondary-md btn-full-width\" ng-click=sendVerificationEmail() ng-show=!layout.emailSent ng-bind=layout.labels.sendVerificationEmail></button> <button type=submit class=\"btn-fixed-width btn-control-md\" ng-click=$dismiss() ng-show=layout.emailSent ng-bind=layout.labels.ok></button><div ng-show=layout.emailSent class=resend-email-container><span ng-bind=layout.labels.didntReceiveIt></span> <span ng-click=sendVerificationEmail() class=\"text-link resend-email-link\" ng-bind=layout.labels.resendEmail></span></div></div></div>");$templateCache.put("login-form", "<system-feedback ng-if=$ctrl.params.IncludeMessageBanner banner-text=$ctrl.bannerErrorMessage show-error-banner=$ctrl.showErrorBanner> </system-feedback><div class=login-form-container><form class=login-form role=form name=loginForm rbx-form-context context={{$ctrl.params.Context}}><div class=\"form-group username-form-group\"><input id=login-username name=username type=text class=\"form-control input-field\" placeholder={{$ctrl.getCredentialPlaceholder()}} ng-model=$ctrl.credentialValue ng-keypress=$ctrl.clearError() rbx-form-interaction></div><div class=\"form-group password-form-group\"><input id=login-password name=password type=password class=\"form-control input-field\" placeholder=\"{{'Label.Password'|translate}}\" ng-model=$ctrl.password key-press-enter=$ctrl.submit(true) ng-keypress=$ctrl.clearError() rbx-form-interaction><p class=\"form-control-label xsmall text-error login-error\" ng-bind=$ctrl.error></div><div toggle-loading is-loading=$ctrl.isProcessing><button id=login-button class=\"btn-full-width login-button\" ng-class=\"$ctrl.usePrimaryButtonClass?'btn-primary-md':'btn-secondary-md'\" ng-bind=\"'Action.LogInCapitalized'|translate\" ng-click=$ctrl.submit(true)></button></div><div class=\"text-center forgot-credentials-link\"><a id=forgot-credentials-link class=text-link href={{$ctrl.data.forgotCredentialsUrl}} ng-bind=\"'Action.ForgotPasswordOrUsernameQuestionCapitalized'|translate\"></a></div></form><div ng-if=$ctrl.params.IsFacebookSignInEnabled><div class=fb-divider-container><div class=\"rbx-divider fb-divider\"></div><div class=divider-text-container><span class=\"divider-text xsmall\" ng-bind=\"'Label.LoginWithYour'|translate\"></span></div></div><button id=facebook-login-button ng-if=!$ctrl.params.UseFacebookRedirect class=\"btn-full-width btn-control-md fb-button social-login\" data-rbx-provider=facebook><span class=fb-icon></span> <span ng-bind=\"'Action.Facebook'|translate\"></span></button> <button id=facebook-login-button ng-if=$ctrl.params.UseFacebookRedirect class=\"btn-full-width btn-control-md fb-button\" ng-click=$ctrl.loginWithFb()><span class=fb-icon></span> <span ng-bind=\"'Action.Facebook'|translate\"></span></button></div></div><div captcha captcha-model=$ctrl.captchaSetting captcha-type=$ctrl.captchaSetting.captchaType on-captcha-success=$ctrl.captchaSetting.successCB on-captcha-error=$ctrl.captchaSetting.errorCB></div><div ng-if=$ctrl.params.SamlRequest><form method=post name=$ctrl.samlRequestForm><input name=RelayState value={{$ctrl.params.SamlRelayState}} type=hidden> <input name=SAMLRequest value={{$ctrl.params.SamlRequest}} type=hidden></form></div>");$templateCache.put("horizontal-login-form", "<div class=horizontal-login-form><form class=login-form role=form name=loginForm rbx-form-context context={{$ctrl.params.Context}}><div class=\"form-group username-form-group\"><input id=horizontal-login-username name=username type=text class=form-control placeholder={{$ctrl.getCredentialPlaceholder()}} ng-model=$ctrl.credentialValue rbx-form-interaction autofocus></div><div class=\"form-group password-form-group\"><input id=horizontal-login-password name=password type=password class=form-control placeholder=\"{{'Label.Password'|translate}}\" ng-model=$ctrl.password key-press-enter=$ctrl.submit(true) rbx-form-interaction></div><div class=submit-button-container toggle-loading is-inline=true is-loading=$ctrl.isProcessing><button id=horizontal-login-button class=\"btn-primary-sm login-button\" ng-bind=\"'Action.LogInCapitalized'|translate\" ng-click=$ctrl.submit(true)></button></div></form><div class=forgot-credentials-link><a id=horizontal-forgot-credentials-link class=text-link href={{$ctrl.data.forgotCredentialsUrl}} ng-bind=\"'Action.ForgotPasswordOrUsernameQuestionCapitalized'|translate\"></a></div></div><div captcha captcha-model=$ctrl.captchaSetting captcha-type=$ctrl.captchaSetting.captchaType on-captcha-success=$ctrl.captchaSetting.successCB on-captcha-error=$ctrl.captchaSetting.errorCB></div>");$templateCache.put("fun-captcha-template", "<div id={{captchaElem.id}} ng-show=showContainer></div>");$templateCache.put("fun-captcha-modal-template", "<div class=modal-header><button type=button class=close ng-click=$close()><span aria-hidden=true><span class=icon-close></span></span><span class=sr-only>Close</span></button><div class=modal-title><h4 class=modal-title-text ng-bind=\"'Response.CaptchaNotEnteredError'|translate\"></h4></div></div><div class=modal-body><div id=funcaptcha-modal-body></div></div>"); }]);