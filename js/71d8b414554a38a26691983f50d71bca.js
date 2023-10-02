/* Bundle: page_splitApps___d5d74edcfd48919bcaba339368cca787_m */"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { $templateCache.put("player-search-page", "<div class=top-row><h3 ng-if=!appMeta.isI18nEnabled class=header>Player Results for <span class=keyword>{{pageData.keyword}}</span></h3><h3 ng-if=appMeta.isI18nEnabled class=header><span ng-bind-html=\"'Heading.PlayerResultsFor'|translate:{startSpan:'&lt;span class=keyword>',endSpan:'&lt;/span>',keyword:pageData.keyword}\"></span></h3><div class=search-container ng-hide=pageData.inApp><div class=input-group><input class=\"form-control input-field\" type=text placeholder=Search ng-keyup=\"$event.keyCode==13&amp;&amp;startNewSearch($event)\" ng-model=formData.keyword><div class=input-group-btn><button class=input-addon-btn ng-click=startNewSearch()><span class=icon-search></span></button></div></div></div><div class=\"row results-count ng-cloak\" ng-if=!appMeta.isI18nEnabled ng-show=\"pageData.totalResults>0\"><span class=\"text-secondary hideable\">{{layout.resultsStart|number}} - {{layout.resultsInPage|number}} of</span> <span class=text-secondary>{{pageData.totalResults|number}} <ng-pluralize count=pageData.totalResults when=\"{'1':'Result','other':'Results'}\"> </ng-pluralize></span></div><div class=\"row results-count ng-cloak\" ng-if=appMeta.isI18nEnabled ng-show=\"pageData.totalResults>0\"><span ng-bind-html=\"'Label.ShowingCountOfResults'|translate:{countStartSpan:'&lt;span class=\\'text-secondary hideable\\'>',resultsStart:layout.resultsStart,resultsInPage:layout.resultsInPage,countEndSpan:'&lt;/span>',totalStartSpan:'&lt;span class=text-secondary>',totalResults:pageData.totalResults,totalEndSpan:'&lt;/span>'}\"></span></div></div><div class=\"col-xs-12 section-content-off no-results\" ng-if=!appMeta.isI18nEnabled ng-show=showNoMatches()>There are no matches available for \"{{pageData.keyword}}\"</div><div class=\"col-xs-12 section-content-off no-results\" ng-if=appMeta.isI18nEnabled ng-show=showNoMatches()><span ng-bind=\"'Label.NoMatchesAvailable'|translate:{keyword:pageData.keyword}\"></span></div><div class=\"col-xs-12 section-content-off no-results\" ng-if=!appMeta.isI18nEnabled ng-show=layout.isKeywordTooShort>Please enter at least {{pageData.keywordMinLength}} characters.</div><div class=\"col-xs-12 section-content-off no-results\" ng-if=appMeta.isI18nEnabled ng-show=layout.isKeywordTooShort><span ng-bind=\"'Label.EnterMinCharacters'|translate:{keywordMinLength:pageData.keywordMinLength}\"></span></div><div class=\"col-xs-12 section-content-off unsafe-input\" ng-if=!appMeta.isI18nEnabled ng-show=layout.unsafeInputDetected>You have entered unsafe input. Please try your search again.</div><div class=\"col-xs-12 section-content-off unsafe-input\" ng-if=appMeta.isI18nEnabled ng-show=layout.unsafeInputDetected><span ng-bind=\"'Label.UnsafeInput'|translate\"></span></div><ul class=\"search-result avatar-cards\" ng-hide=!layout.inMobile&amp;&amp;layout.resultsLoading ng-include=\"'search-result-item'\" infinite-scroll=getNextScrollResults() infinite-scroll-always-disabled=!layout.inMobile></ul><div class=results-loading ng-show=layout.resultsLoading><img ng-src={{layout.loadingImageUrl}} class=\"loading-default load-image\"></div><div class=row ng-show=\"!layout.inMobile&amp;&amp;results.length>0&amp;&amp;!layout.resultsLoading\" current-page=layout.curPage items-per-page=pageData.maxRows num-pages=layout.numPages model-changed=pageModelChanged page-changed=pageUpdate scroll-to-top=true pagination></div>");$templateCache.put("search-result-item", "<li class=\"player-item avatar-card responsive-card\" ng-repeat=\"user in results\"><div class=avatar-card-container><div class=avatar-card-content ng-click=openProfile(user.UserProfilePageUrl,$event)><div class=avatar-card-fullbody ng-if=!layout.inMobile><a ng-href={{user.UserProfilePageUrl}} ng-click=$event.stopPropagation() class=avatar-card-link><img class=avatar-card-image ng-src={{user.Thumbnail.Url}} thumbnail=user.Thumbnail reset-src=true image-retry></a> <a href=\"\" class=avatar-status ng-show=user.IsOnline ng-class=user.StatusClass><span ng-class=\"'icon-'+user.StatusClass\" title={{user.LastLocation}}></span></a></div><div class=\"avatar avatar-headshot avatar-headshot-md\" ng-if=layout.inMobile><a ng-href={{user.UserProfilePageUrl}} ng-click=$event.stopPropagation() class=avatar-card-link><img class=avatar-card-image ng-src={{user.Thumbnail.Url}} thumbnail=user.Thumbnail reset-src=true image-retry></a> <span class=avatar-status ng-show=user.IsOnline ng-class=user.StatusClass></span></div><div class=avatar-card-caption ng-include=\"'player-card-content'\"></div></div><ng-include src=\"'player-card-buttons'\"></ng-include></div></li>");$templateCache.put("player-card-content", "<div class=\"text-overflow avatar-name\">{{user.Name}}</div><div class=avatar-card-label ng-switch=labelToShow(user)><span class=previous-name ng-switch-when=aka><span ng-if=!appMeta.isI18nEnabled class=text>aka.</span> <span ng-if=appMeta.isI18nEnabled class=text><span ng-bind=\"'Label.Aka'|translate\"></span></span> <span class=small-oneline>{{user.MatchingPreviousName}}</span> <span class=mobile-extra-details ng-if=layout.inMobile><span class=friends ng-if=\"user.FriendshipStatus===layout.friendship.Friends\"><span class=icon-nav-friends></span> <span ng-if=!appMeta.isI18nEnabled class=icon-text>You are friends</span> <span ng-if=appMeta.isI18nEnabled class=icon-text><span ng-bind=\"'Label.YouAreFriends'|translate\"></span></span></span> <span class=following ng-if=user.IsFollowed&amp;&amp;!appMeta.isI18nEnabled>You are following</span> <span class=following ng-if=user.IsFollowed&amp;&amp;appMeta.isI18nEnabled><span ng-bind=\"'Label.YouAreFollowing'|translate\"></span></span></span></span> <span ng-if=!appMeta.isI18nEnabled class=friends ng-switch-when=friends><span class=icon-nav-friends></span> <span class=icon-text>You are friends</span></span> <span ng-if=appMeta.isI18nEnabled class=friends ng-switch-when=friends><span class=icon-nav-friends></span> <span class=icon-text ng-bind-html=\"'Label.YouAreFriends'|translate\"></span></span> <span ng-if=!appMeta.isI18nEnabled class=following ng-switch-when=following>You are following</span> <span ng-if=appMeta.isI18nEnabled class=following ng-switch-when=following><span ng-bind=\"'Label.YouAreFollowing'|translate\"></span></span> <span ng-if=!appMeta.isI18nEnabled class=yourself ng-switch-when=yourself>This is you</span> <span ng-if=appMeta.isI18nEnabled class=yourself ng-switch-when=yourself><span ng-bind=\"'Label.ThisIsYou'|translate\"></span></span> <span class=online ng-if=\"!((getUserInfo(user)===layout.userInfo.game||getUserInfo(user)===layout.userInfo.studio))\" ng-switch-default>{{user.LastLocation}}</span></div><div class=avatar-status-container ng-if=\"(getUserInfo(user)===layout.userInfo.game||getUserInfo(user)===layout.userInfo.studio)\"><div ng-if=!user.AbsolutePlaceUrl class=avatar-card-label>{{user.LastLocation}}</div><a ng-if=user.AbsolutePlaceUrl ng-href={{user.AbsolutePlaceUrl}} ng-click=$event.stopPropagation() title={{user.LastLocation}} class=\"text-link text-overflow avatar-status-link\">{{user.LastLocation}}</a></div><div class=avatar-status-container ng-if=\"getUserInfo(user)===layout.userInfo.group\"><div class=avatar-card-label>Primary Group</div><a ng-href={{user.PrimaryGroupUrl}} ng-click=$event.stopPropagation() title={{user.PrimaryGroup}} class=\"text-link text-overflow avatar-status-link\">{{user.PrimaryGroup}}</a></div>");$templateCache.put("player-card-buttons", "<div class=avatar-card-btns ng-if=user.YourOwnResult><h5 ng-if=!appMeta.isI18nEnabled class=info-text>This is you</h5><h5 ng-if=appMeta.isI18nEnabled class=info-text><span ng-bind=\"'Label.ThisIsYou'|translate\"></span></h5></div><div class=avatar-card-btns ng-class=\"{'not-visible':pageData.inMobileOrTabletBrowser}\" ng-if=showButtonsForFriends(user)&amp;&amp;!appMeta.isI18nEnabled><button class=\"btn-control-md join-game\" type=button ng-click=joinGame(user) ng-if=user.InGame&amp;&amp;user.AllowedToFollowInGame>Join Game</button> <button class=btn-control-md type=button ng-click=startChat(user.UserId) ng-hide=layout.isChatDisabledByPrivacySetting ng-class=\"{'full-size':!(user.InGame&amp;&amp;user.AllowedToFollowInGame)}\">Chat</button></div><div class=avatar-card-btns ng-class=\"{'not-visible':pageData.inMobileOrTabletBrowser}\" ng-if=showButtonsForFriends(user)&amp;&amp;appMeta.isI18nEnabled><button class=\"btn-control-md join-game\" type=button ng-click=joinGame(user) ng-if=user.InGame&amp;&amp;user.AllowedToFollowInGame><span ng-bind=\"'Action.JoinGame'|translate\"></span></button> <button class=btn-control-md type=button ng-click=startChat(user.UserId) ng-hide=layout.isChatDisabledByPrivacySetting ng-class=\"{'full-size':!(user.InGame&amp;&amp;user.AllowedToFollowInGame)}\" ng-bind=\"'Action.Chat'|translate\"></button></div><div class=avatar-card-btns ng-class=\"{'not-visible':user.YourOwnResult}\" ng-if=showButtonsForNonFriends(user)&amp;&amp;!appMeta.isI18nEnabled><button class=\"btn-control-md disabled full-size\" type=button ng-disabled=true ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnOtherUser\">Request Sent</button> <button class=\"btn-control-md full-size\" type=button ng-click=acceptFriend(user.UserId,pageData.currentUserId) ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnCurrentUser\">Accept Request</button> <button class=\"btn-control-md full-size\" type=button ng-click=addFriend(user.UserId) ng-if=\"user.FriendshipStatus===layout.friendship.NoFriendship\">Add Friend</button></div><div class=avatar-card-btns ng-class=\"{'not-visible':user.YourOwnResult}\" ng-if=showButtonsForNonFriends(user)&amp;&amp;appMeta.isI18nEnabled><button class=\"btn-control-md disabled full-size\" type=button ng-disabled=true ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnOtherUser\"><span ng-bind=\"'Action.RequestSent'|translate\"></span></button> <button class=\"btn-control-md full-size\" type=button ng-click=acceptFriend(user.UserId,pageData.currentUserId) ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnCurrentUser\"><span ng-bind=\"'Action.AcceptRequest'|translate\"></span></button> <button class=\"btn-control-md full-size\" type=button ng-click=addFriend(user.UserId) ng-if=\"user.FriendshipStatus===layout.friendship.NoFriendship\"><span ng-bind=\"'Action.AddFriend'|translate\"></span></button></div><div class=mobile-btn-container ng-if=!layout.isUserGuest&amp;&amp;!user.YourOwnResult><div class=mobile-card-btn ng-click=startChat(user.UserId) ng-if=\"user.FriendshipStatus===layout.friendship.Friends&amp;&amp;pageData.inApp\"><span class=\"btn-chat icon-chat\"></span></div><div class=mobile-card-btn ng-click=addFriend(user.UserId) ng-if=\"user.FriendshipStatus===layout.friendship.NoFriendship\"><span class=\"btn-add-friend icon-addfriend\"></span></div><div class=mobile-card-btn ng-click=acceptFriend(user.UserId,pageData.currentUserId) ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnCurrentUser\"><span class=\"btn-add-friend icon-acceptfriend\"></span></div><div class=mobile-card-btn ng-if=\"user.FriendshipStatus===layout.friendship.PendingOnOtherUser\"><span class=\"btn-pending-friend icon-sandglass inactive\"></span></div></div>");$templateCache.put("rbx-pagination", "<div class=rbx-pager><ul class=pager><li ng-if=pagination.showFirstLast class=first ng-class=\"{'disabled':pagination.isLoading||pagination.curPage===1}\"><a ng-click=\"pagination.pageUpdated('first')\"><span class=icon-first-page></span></a><li class=pager-prev ng-class=\"{'disabled':pagination.isLoading||pagination.curPage===1}\"><a ng-click=\"pagination.pageUpdated('prev')\"><span class=icon-left></span></a><li class=pager-cur><span id=rbx-current-page>{{pagination.curPage|number}}</span><li class=pager-total><span>of</span> <span>{{pagination.totalPages|number}}</span><li class=pager-next ng-class=\"{'disabled':pagination.isLoading||pagination.curPage===pagination.totalPages}\"><a ng-click=\"pagination.pageUpdated('next')\"><span class=icon-right></span></a><li ng-if=pagination.showFirstLast class=last ng-class=\"{'disabled':pagination.isLoading||pagination.curPage===pagination.totalPages}\"><a ng-click=\"pagination.pageUpdated('last')\"><span class=icon-last-page></span></a></ul></div>");$templateCache.put("system-feedback", "<div class=alert-system-feedback><div class=\"alert alert-warning\"></div></div>"); }]);