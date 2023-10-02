;// bundle: notificationStream___9b1657d91d586cdbd054b8cb3605611a_m
;// files: ~/viewapp/widgets/notificationStream/notificationStreamIcon.js, ~/viewapp/widgets/notificationStream/filters/abbreviateCountFilter.js, ~/viewapp/widgets/notificationStream/notificationStreamI18n.js, ~/viewapp/widgets/notificationStream/services/layoutLibraryI18nService.js, ~/viewapp/widgets/notificationStream/languages/en-us.js, ~/viewapp/widgets/notificationStream/constants/signalR.js, ~/viewapp/widgets/notificationStream/services/notificationStreamUtility.js, ~/viewapp/widgets/notificationStream/services/notificationStreamService.js, ~/viewapp/widgets/notificationStream/controllers/notificationStreamIconController.js, ~/viewapp/widgets/notificationStream/controllers/notificationStreamController.js, ~/viewapp/widgets/notificationStream/controllers/notificationsController.js, ~/viewapp/widgets/notificationStream/directives/notificationIndicatorDirective.js, ~/viewapp/widgets/notificationStream/directives/notificationStreamBodyDirective.js, ~/viewapp/widgets/notificationStream/directives/notificationContentDirective.js, ~/viewapp/widgets/notificationStream/directives/notificationCardDirective.js, ~/viewapp/widgets/notificationStream/directives/friendRequestDirective.js, ~/viewapp/widgets/notificationStream/directives/lazyLoadingDirective.js, ~/viewapp/widgets/notificationStream/directives/clickInCardDirective.js, ~/viewapp/widgets/notificationStream/directives/privateMessageDirective.js, ~/viewapp/widgets/notificationStream/directives/testDirective.js

;// ~/viewapp/widgets/notificationStream/notificationStreamIcon.js
"use strict";var notificationStreamIcon=angular.module("notificationStreamIcon",["notificationStream"]);

;// ~/viewapp/widgets/notificationStream/filters/abbreviateCountFilter.js
"use strict";notificationStreamIcon.filter("abbreivateCount",function(){var n=100,t={100:"99+",1e3:"1K+"};return function(i,r,u){return(r||(r=n),u||(u=t[r]),i>=r)?u:i}});

;// ~/viewapp/widgets/notificationStream/notificationStreamI18n.js
"use strict";var notificationStream=angular.module("notificationStream",[]).config(["$injector",function(n){var t=n.get("languageResourceProvider");t.setLanguageKeysFromFile(Roblox.Lang.notificationStream)}]);

;// ~/viewapp/widgets/notificationStream/services/layoutLibraryI18nService.js
notificationStream.factory("layoutLibraryService",["$log","languageResource",function(n,t){var i=t;return{links:{profileLinkName:"goToProfilePage",profileLink:"/users/{id}/profile",friendRequestLinkName:"viewAllFriendRequests",friendRequestTabName:"Friends",friendRequestLink:"/users/friends#!/friend-requests",settingLinkName:"goToSettingPage",settingTabName:"Settings",settingLink:"/my/account#!/notifications",friendsTabName:"Friends",friendsLink:"/users/friends",inboxTabName:"Messages",inboxLink:"/my/messages/#!/inbox",inboxMessageDetailQuery:"?conversationId="},stringTemplates:{boldLink:"<a class='font-bold'>{username}</a>",userLink:"<a class='text-name small' type='goToProfilePage' user_id='{userid}' href='{profilelink}'>{username}</a>"},newFriendRequests:function(n){return i.get("Message.YouHaveNewFriendRequests",{numberOfRequests:n})},newFriends:function(n){return i.get("Message.YouHaveNewFriends",{numberOfFriends:n})},friendRequestAcceptedSingle:function(n){return i.get("Message.FriendRequestAcceptedSingle",{userOne:n})},friendRequestAcceptedDouble:function(n,t){return i.get("Message.FriendRequestAcceptedDouble",{userOne:n,userTwo:t})},friendRequestAcceptedMultiple:function(n,t,r){return i.get("Message.FriendRequestAcceptedMultiple",{userOne:n,userTwo:t,userMultipleCount:r})},friendRequestSentSingle:function(n){return i.get("Message.FriendRequestSentSingle",{userOne:n})},friendRequestSentDouble:function(n,t){return i.get("Message.FriendRequestSentDouble",{userOne:n,userTwo:t})},friendRequestSentMultiple:function(n,t,r){return i.get("Message.FriendRequestSentMultiple",{userOne:n,userTwo:t,userMultipleCount:r})},confirmAcceptedSingle:function(n){return i.get("Message.ConfirmAcceptedSingle",{userOne:n})},confirmAcceptedDouble:function(n,t){return i.get("Message.ConfirmAcceptedDouble",{userOne:n,userTwo:t})},confirmAcceptedMultiple:function(n,t,r){return i.get("Message.ConfirmAcceptedMultiple",{userOne:n,userTwo:t,userMultipleCount:r})},confirmSentSingle:function(n){return i.get("Message.ConfirmSentSingle",{userOne:n})},confirmSentDouble:function(n,t){return i.get("Message.ConfirmSentDouble",{userOne:n,userTwo:t})},confirmSentMultiple:function(n,t,r){return i.get("Message.ConfirmSentMultiple",{userOne:n,userTwo:t,userMultipleCount:r})},textTemplate:{newNotification:function(n){return i.get("Message.NumberofNewNotifications",{notificationCount:n})},noNetworkConnectionText:i.get("Label.NoNetworkConnectionText")},friendRequestActionType:{acceptIgnoreBtns:"AcceptIgnoreBtns",chatBtn:"chatBtn",viewAllBtn:"ViewAllBtn"},directiveTemplatesName:{notificationIndicatorTemplate:"notification-indicator",notificationContentTemplate:"notification-content",friendRequestReceivedTemplate:"friend-request-received",friendRequestAcceptedTemplate:"friend-request-accepted",friendRequestTemplate:"friend-request",privateMessageTemplate:"private-message",testTemplate:"test"},notificationSourceType:{test:"Test",friendRequestReceived:"FriendRequestReceived",friendRequestAccepted:"FriendRequestAccepted",privateMessageReceived:"PrivateMessageReceived"}}}]);

;// ~/viewapp/widgets/notificationStream/languages/en-us.js
var Roblox=Roblox||{};Roblox.Lang=Roblox.Lang||{},Roblox.Lang.notificationStream=function(){return{"Label.Notifications":"Notifications","Label.Settings":"Settings","Label.NoNotifications":"No Notifications","Action.Accept":"Accept","Action.Ignore":"Ignore","Action.Chat":"Chat","Action.ViewAll":"View All","Label.NoNetworkConnectionText":"Connecting...","Message.NumberofNewNotifications":"{notificationCount, plural, =1 {# New Notification} other {# New Notifications}}","Message.MessageAndPreview":"{titleStart}Message from {username}:{titleEnd} {message}","Message.YouReceivedMessages":"You received {numberOfMessagesText} {numberOfMessages, plural, =1 {message} other {messages}}","Message.YouHaveNewFriendRequests":"You have {numberOfRequests} new {numberOfRequests, plural, =1 {friend request} other {friend requests}}.","Message.YouHaveNewFriends":"You have {numberOfFriends} new {numberOfFriends, plural, =1 {friend} other {friends}}.","Message.FriendRequestAcceptedSingle":"{userOne} accepted your friend request.","Message.FriendRequestAcceptedDouble":"{userOne} and {userTwo} accepted your friend request.","Message.FriendRequestAcceptedMultiple":"{userOne}, {userTwo}, and {userMultipleCount, plural, =1 {# other} other {# others}} accepted your friend request.","Message.FriendRequestSentSingle":"{userOne} sent you a friend request.","Message.FriendRequestSentDouble":"{userOne} and {userTwo} sent you friend requests.","Message.FriendRequestSentMultiple":"{userOne}, {userTwo}, and {userMultipleCount, plural, =1 {# other} other {# others}} sent you friend requests.","Message.ConfirmSentSingle":"{userOne} is now your friend!","Message.ConfirmSentDouble":"{userOne} and {userTwo} are now your friends!","Message.ConfirmSentMultiple":"{userOne}, {userTwo}, and {userMultipleCount, plural, =1 {# other} other {# others}} are now your friends!","Message.ConfirmAcceptedSingle":"{userOne}","Message.ConfirmAcceptedDouble":"{userOne} and {userTwo}","Message.ConfirmAcceptedMultiple":"{userOne}, {userTwo}, and {userMultipleCount, plural, =1 {# other} other {# others}}"}}();

;// ~/viewapp/widgets/notificationStream/constants/signalR.js
notificationStream.constant("signalR",{notifications:{NotificationStream:"NotificationStream",ChatPrivacySettingNotifications:"ChatPrivacySettingNotifications"},types:{NewNotification:"NewNotification",NotificationsRead:"NotificationsRead",NotificationMarkedInteracted:"NotificationMarkedInteracted",NotificationRevoked:"NotificationRevoked",chatEnabled:"ChatEnabled",chatDisabled:"ChatDisabled"}});

;// ~/viewapp/widgets/notificationStream/services/notificationStreamUtility.js
"use strict";notificationStream.factory("notificationStreamUtility",["signalR","layoutLibraryService","$log",function(n,t){var r=t.notificationSourceType,u=t.links,f=t.stringTemplates;return{templates:t.directiveTemplatesName,links:u,textTemplate:t.textTemplate,stringTemplates:f,layout:{pageDataInitialized:!1,firstTimeNotificationStream:!1,getRecentDataInitialized:!1,isNotificationContentOpen:!1,isLazyLoadingRequested:!1,isGetRecentDataLoadedRequested:!0,notificationsScrollbarSelector:"#notification-stream-scrollbar",settingLink:Roblox&&Roblox.Endpoints?Roblox.Endpoints.getAbsoluteUrl(u.settingLink):u.settingLink,friendRequestLink:Roblox&&Roblox.Endpoints?Roblox.Endpoints.getAbsoluteUrl(u.friendRequestLink):u.friendRequestLink,bannerEnabled:!1,emptyNotificationEnabled:!1,notificationsLazyLoadingEnabled:!1,isNotificationsLoading:!1,isStreamBodyInteracted:!1,bannerText:"",errorText:"",dataBindSelector:"#notification-stream",dataContainerSelector:"#notification-stream-container"},notificationApiParams:{startIndexOfNotifications:0,pageSizeOfNotifications:10,loadMoreNotifications:!1},library:{unreadNotifications:0,userIdList:[],userLibrary:{},prefixLocalStoragekey:"user_",inApp:!1,isPhone:!1,isTouch:Roblox&&Roblox.DeviceFeatureDetection?Roblox.DeviceFeatureDetection.isTouch:!1,eventStreamMetaData:{}},notificationsName:n.notifications,notificationSourceType:r,signalRType:n.types,friendRequestReceivedLayout:t.friendRequestReceivedLayout,friendRequestAcceptedLayout:t.friendRequestAcceptedLayout,friendRequestActionType:t.friendRequestActionType,getAbsoluteUrl:function(n,t){return Roblox&&Roblox.Endpoints?Roblox.Endpoints.generateAbsoluteUrl(n,t,!0):getFormatString(n,t)},getFormatString:function(n,t){var i,r,u;for(i in t)r=t[i],u=new RegExp("{"+i.toLowerCase()+"(:.*?)?\\??}"),n=n.replace(u,r);return n},isNotificationTypeValid:function(n){var t=!1,i;for(i in r)if(r[i]===n){t=!0;break}return t},isCardClickable:function(n){var t=n.notificationSourceType;switch(t){case r.friendRequestAccepted:return n.eventCount>1||n.eventCount===1&&n.metadataCollection.length===0;case r.privateMessageReceived:return!0}return!1},normalizeUser:function(n,t){var i={userId:null,userName:null};switch(n){case r.friendRequestReceived:i.userId=t.SenderUserId,i.userName=t.SenderUserName;break;case r.friendRequestAccepted:i.userId=t.AccepterUserId,i.userName=t.AccepterUserName;break;case r.privateMessageReceived:i.userId=t.AuthorUserId,i.userName=t.AuthorUserName}return i},getUserHtmlTemplate:function(n,t){var i="";switch(n){case r.friendRequestAccepted:i=t>1?f.boldLink:f.userLink;break;case r.friendRequestReceived:default:i=f.userLink}return i},normalizeYouHaveText:function(n,i){switch(n){case r.friendRequestReceived:return t.newFriendRequests(i);case r.friendRequestAccepted:return t.newFriends(i)}return{}},normalizeSingleDisplayText:function(n,i){switch(n){case r.friendRequestReceived:return t.friendRequestSentSingle(i);case r.friendRequestAccepted:return t.friendRequestAcceptedSingle(i)}return{}},normalizeSingleConfirmedText:function(n,i){switch(n){case r.friendRequestReceived:return t.confirmSentSingle(i);case r.friendRequestAccepted:return t.confirmAcceptedSingle(i)}return{}},normalizeDoubleDisplayText:function(n,i,u){switch(n){case r.friendRequestReceived:return t.friendRequestSentDouble(i,u);case r.friendRequestAccepted:return t.friendRequestAcceptedDouble(i,u)}return{}},normalizeDoubleConfirmedText:function(n,i,u){switch(n){case r.friendRequestReceived:return t.confirmSentDouble(i,u);case r.friendRequestAccepted:return t.confirmAcceptedDouble(i,u)}return{}},normalizeMultipleDisplayText:function(n,i,u,f){switch(n){case r.friendRequestReceived:return t.friendRequestSentMultiple(i,u,f);case r.friendRequestAccepted:return t.friendRequestAcceptedMultiple(i,u,f)}return{}},normalizeMultipleConfirmedText:function(n,i,u,f){switch(n){case r.friendRequestReceived:return t.confirmSentMultiple(i,u,f);case r.friendRequestAccepted:return t.confirmAcceptedMultiple(i,u,f)}return{}},normalizeDisplayText:function(n,t){var i={};switch(n){case r.friendRequestReceived:i={defaultPrefixText:this.friendRequestReceivedLayout.defaultPrefixText,defaultPostfixText:t===1?this.friendRequestReceivedLayout.defaultPostfixTextBySingle:this.friendRequestReceivedLayout.defaultPostfixTextByMulti,displayText:t===1?this.friendRequestReceivedLayout.friendRequestTextBySingle:this.friendRequestReceivedLayout.friendRequestTextByMulti,requestConfirmedText:t===1?this.friendRequestReceivedLayout.requestConfirmedTextBySingle:this.friendRequestReceivedLayout.requestConfirmedTextByMulti};break;case r.friendRequestAccepted:i={defaultPrefixText:this.friendRequestAcceptedLayout.defaultPrefixText,defaultPostfixText:t===1?this.friendRequestAcceptedLayout.defaultPostfixTextBySingle:this.friendRequestAcceptedLayout.defaultPostfixTextByMulti,displayText:this.friendRequestAcceptedLayout.friendRequestAcceptedText,requestConfirmedText:this.friendRequestAcceptedLayout.requestConfirmedText}}return i},buildScrollbar:function(n){var t=angular.element(document.querySelector(n));t.mCustomScrollbar({autoHideScrollbar:!1,autoExpandScrollbar:!1,contentTouchScroll:1e4,documentTouchScroll:!1,mouseWheel:{preventDefault:!0},advanced:{autoScrollOnFocus:!1}})}}}]);

;// ~/viewapp/widgets/notificationStream/services/notificationStreamService.js
"use strict";notificationStream.factory("notificationStreamService",["httpService","$q","$log","urlService",function(n,t,i,r){var u="/notification-stream/notification-stream-data",f="/api/friends/acceptfriendrequest",e="/api/friends/declinefriendrequest";return{endpoints:{initializeData:{url:r.getAbsoluteUrl(u),retryable:!0},acceptFriendRequest:{url:r.getAbsoluteUrl(f),retryable:!1},ignoreFriendRequest:{url:r.getAbsoluteUrl(e),retryable:!1}},setApiEndpoints:function(n){var t=n+"/v2/";this.endpoints.unreadCount={url:t+"stream-notifications/unread-count",retryable:!0,withCredentials:!0},this.endpoints.getRecent={url:t+"stream-notifications/get-recent",retryable:!0,withCredentials:!0},this.endpoints.clearUnread={url:t+"stream-notifications/clear-unread",retryable:!1,withCredentials:!0},this.endpoints.markInteracted={url:t+"stream-notifications/mark-interacted",retryable:!1,withCredentials:!0},this.endpoints.updateNotificationSettings={url:t+"notifications/update-notification-settings",retryable:!1,withCredentials:!0}},initialize:function(){var t={};return n.httpGet(this.endpoints.initializeData,t)},unreadCount:function(){var t={};return n.httpGet(this.endpoints.unreadCount,t)},clearUnread:function(){var t={};return n.httpPost(this.endpoints.clearUnread,t)},getRecentNotifications:function(t,i){var r={startIndex:t,maxRows:i};return n.httpGet(this.endpoints.getRecent,r)},markInteracted:function(t){var i={eventId:t};return n.httpPost(this.endpoints.markInteracted,i)},acceptFriend:function(t,i){var r={targetUserID:i,invitationID:t};return n.httpPost(this.endpoints.acceptFriendRequest,r)},ignoreFriend:function(t,i){var r={targetUserID:i,invitationID:t};return n.httpPost(this.endpoints.ignoreFriendRequest,r)},updateNotificationSettings:function(t,i){var u={notificationSourceType:t,receiverDestinationType:"NotificationStream",isEnabled:i},r=[];return r.push(u),n.httpPost(this.endpoints.updateNotificationSettings,r)}}}]);

;// ~/viewapp/widgets/notificationStream/controllers/notificationStreamIconController.js
"use strict";notificationStreamIcon.controller("notificationStreamIconController",["$scope","$document","$log",function(){}]);

;// ~/viewapp/widgets/notificationStream/controllers/notificationStreamController.js
"use strict";notificationStream.controller("notificationStreamController",["$scope","$document","$timeout","notificationStreamService","notificationStreamUtility","userService","eventStreamService","$log",function(n,t,i,r,u,f,e,o){function h(){n.layout=angular.copy(u.layout),n.notificationApiParams=angular.copy(u.notificationApiParams),n.getUnreadNotificationCount(),n.library.inApp&&(n.openNotificationStream(),n.layout.isNotificationContentOpen=!0)}function c(){n.library=u.library,n.resetNotificationStreamData(),r.initialize().then(function(t){t&&(r.setApiEndpoints(t.NotificationDomain),u.layout.pageDataInitialized=!0,n.updateSettingsInLibrary(t))},function(){o.debug("----- initialize data request failed ----")})}n.updatePopoverLayout=function(){Roblox&&Roblox.Popover&&i(function(){return Roblox.Popover.setUpTrianglePosition(n.layout.dataBindSelector,n.layout.dataContainerSelector)})},n.buildNotificationsList=function(t){var i=[],r;t.forEach(function(t){var f=t.metadataCollection;r=t.notificationSourceType,u.isNotificationTypeValid(r)&&(f.forEach(function(t){var e=u.normalizeUser(r,t),f,o;if(e&&e.userId!=null&&e.userName!=null){if(f=e.userId,o=e.userName,n.library.userIdList.indexOf(f)>-1)return!1;i.push(f),n.library.userIdList.push(f),n.library.userLibrary[f]={id:f,name:o,profileLink:u.getAbsoluteUrl(u.links.profileLink,{id:f})}}}),t.isClickable=u.isCardClickable(t),n.notificationIds.indexOf(t.id)<0&&n.notificationIds.push(t.id),n.notifications[t.id]=t)}),n.layout.emptyNotificationEnabled=n.notificationIds.length===0,i.length>0&&f.getUserAvatar(i).then(function(t){t&&t.length>0&&t.forEach(function(t,r){n.library.userLibrary[i[r]].thumbnail=t})},function(){o.debug("----- getUserAvatar request failed ----")})},n.getRecentNotifications=function(){n.layout.getRecentDataInitialized=!1,r.getRecentNotifications(n.notificationApiParams.startIndexOfNotifications,n.notificationApiParams.pageSizeOfNotifications).then(function(t){n.layout.getRecentDataInitialized=!0,n.layout.isGetRecentDataLoadedRequested=!1,t&&t.length>0&&(n.buildNotificationsList(t),n.layout.isLazyLoadingRequested=!0,t.length===n.notificationApiParams.pageSizeOfNotifications&&(n.notificationApiParams.startIndexOfNotifications=n.notificationApiParams.startIndexOfNotifications+n.notificationApiParams.pageSizeOfNotifications,n.notificationApiParams.loadMoreNotifications=!0))},function(){o.debug("--- getRecentNotifications call failed ----- "),n.layout.getRecentDataInitialized=!0})},n.clearUnreadNotifications=function(){n.library.unreadNotifications>0&&(n.library.unreadNotifications=0,t.triggerHandler("Roblox.NotificationStream.UnreadNotifications",{count:0,isNotificationContentOpen:n.layout.isNotificationContentOpen}))},n.openNotificationStream=function(){n.layout.isGetRecentDataLoadedRequested&&(n.resetNotificationStreamData(),n.getRecentNotifications()),n.library.unreadNotifications>0&&r.clearUnread().then(function(){n.clearUnreadNotifications()},function(){o.debug("--- clearUnread call failed ----- ")})},n.toggleNotificationContent=function(t){t?n.layout.isNotificationContentOpen=!1:(n.layout.isNotificationContentOpen=!n.layout.isNotificationContentOpen,n.layout.isNotificationContentOpen&&n.layout.isGetRecentDataLoadedRequested&&(n.openNotificationStream(),n.updatePopoverLayout())),n.layout.isNotificationContentOpen&&n.layout.bannerEnabled&&(n.layout.bannerEnabled=!1),n.layout.isLazyLoadingRequested&&(n.layout.isLazyLoadingRequested=!1)},n.getUnreadNotificationCount=function(){r.unreadCount().then(function(i){i&&(n.library.unreadNotifications=i.unreadNotifications,n.layout.isNotificationContentOpen?n.appMeta.isI18nEnabled?n.layout.bannerText=u.textTemplate.newNotification(n.library.unreadNotifications):(n.layout.bannerText=n.library.unreadNotifications+u.textTemplate.newNotificationPostfix,n.layout.bannerText+=n.library.unreadNotifications>1?"s":""):t.triggerHandler("Roblox.NotificationStream.UnreadNotifications",{count:i.unreadNotifications,isNotificationContentOpen:n.layout.isNotificationContentOpen}))},function(){o.debug("--- unreadCount call failed ----- ")})},n.resetNotificationStreamData=function(){n.notificationIds=[],n.notifications={},n.notificationApiParams&&(n.notificationApiParams.startIndexOfNotifications=0)},n.reloadNotificationStreamData=function(){n.resetNotificationStreamData(),n.library.unreadNotifications>0&&r.clearUnread(),n.getRecentNotifications(),n.layout.bannerEnabled=!1},n.updateNewNotificationInfo=function(){n.layout.isGetRecentDataLoadedRequested=!0,n.getUnreadNotificationCount(),n.layout.isNotificationContentOpen&&n.$evalAsync(function(){n.layout.bannerEnabled=!0})},n.updateSettingsInLibrary=function(t){n.library.currentUserId=t.CurrentUserId,n.library.inApp=t.InApp,n.library.isPhone=t.IsUserOnPhone,n.library.inAndroidApp=t.InAndroidApp,n.library.iniOSApp=t.IniOSApp,n.library.inUWPApp=t.InUWPApp,n.library.bannerDismissTimeSpan=t.BannerDismissTimeSpan,n.library.signalRDisconnectionResponseInMilliseconds=t.SignalRDisconnectionResponseInMilliseconds,n.library.isChatDisabledByPrivacySetting=t.IsChatDisabledByPrivacySetting,n.library.eventStreamMetaData={userId:t.CurrentUserId,inApp:t.InApp},n.appMeta={isI18nEnabled:t.IsI18nEnabled}},n.handleSignalRSuccess=function(){n.$evalAsync(function(){n.layout.errorBannerEnabled=!1})},n.handleSignalRError=function(){i(function(){n.layout.errorBannerEnabled=!0,n.layout.errorText=u.textTemplate.noNetworkConnectionText},n.library.signalRDisconnectionResponseInMilliseconds)},n.handleNotificationStreamNotification=function(t){o.debug("--------- this is NotificationStream subscription -----------"+t.Type);switch(t.Type){case u.signalRType.NewNotification:n.updateNewNotificationInfo();break;case u.signalRType.NotificationsRead:n.clearUnreadNotifications();break;case u.signalRType.NotificationRevoked:n.getUnreadNotificationCount(),n.layout.isStreamBodyInteracted||n.reloadNotificationStreamData()}},n.handleChatPrivacySettingNotification=function(t){o.debug("--------- this is ChatPrivacySettingNotifications subscription -----------"+t.Type);try{switch(t.Type){case u.signalRType.chatEnabled:n.library.isChatDisabledByPrivacySetting=!1;break;case u.signalRType.chatDisabled:n.library.isChatDisabledByPrivacySetting=!0}}catch(r){var i="ChatPrivacySettingNotifications:"+t.Type+": ";r&&r.message&&(i+=r.message),o.debug(i)}},n.initializeRealTimeSubscriptions=function(){if(angular.isDefined(Roblox.RealTime)){var t=Roblox.RealTime.Factory.GetClient();t.SubscribeToConnectionEvents(n.handleSignalRSuccess,n.handleSignalRSuccess,n.handleSignalRError),t.Subscribe(u.notificationsName.NotificationStream,n.handleNotificationStreamNotification),t.Subscribe(u.notificationsName.ChatPrivacySettingNotifications,n.handleChatPrivacySettingNotification)}},c(),t.bind("Roblox.Popover.Status",function(t,i){o.debug("notificationStreamController"),n.layout&&n.$evalAsync(function(){if(!n.layout.isNotificationContentOpen&&!i.isHidden){var t=angular.copy(n.library.eventStreamMetaData);t.countOfUnreadNotification=n.library.unreadNotifications,e.sendEventWithTarget(e.eventNames.notificationStream.openContent,i.eventType,t)}n.toggleNotificationContent(i.isHidden)})});var s=n.$watch(function(){return u.layout.pageDataInitialized},function(t,i){angular.isDefined(t)&&t&&t!==i&&(o.debug("----- initializeLayout ----"),h(),n.initializeRealTimeSubscriptions())});n.$on("$destroy",function(){s&&s()})}]);

;// ~/viewapp/widgets/notificationStream/controllers/notificationsController.js
"use strict";notificationStream.controller("notificationsController",["$scope","notificationStreamService","notificationStreamUtility","hybridService","eventStreamService","urlService","chatDispatchService","$document","$log",function(n,t,i,r,u,f,e,o,s){function h(t,i,r){var e=n.notifications[i],f=angular.copy(n.library.eventStreamMetaData);f.notificationType=e.notificationSourceType,u.sendEventWithTarget(t,r,f)}n.acceptFriend=function(r,f,e){s.debug("---------------- acceptFriend --------- ");var c=n.notifications[f];n.interactNotification(c),t.acceptFriend(n.library.currentUserId,r).then(function(){var t=n.notifications[f];t.friendRequestActionType=i.friendRequestActionType.chatBtn,t.metadataCollection[0].IsAccepted=!0,t.isFlipped=!0,o.triggerHandler("Roblox.Friends.CountChanged"),h(u.eventNames.notificationStream.acceptFriendRequest,f,e.type)})},n.ignoreFriend=function(i,r,f){s.debug("---------------- ignoreFriend --------- ");var e=n.notifications[r];n.interactNotification(e),t.ignoreFriend(n.library.currentUserId,i).then(function(){var t=n.notifications[r];t.isSlideOut=!0,h(u.eventNames.notificationStream.ignoreFriendRequest,r,f.type)})},n.removeNotification=function(t){s.debug("---------------- removeNotification --------- notificationId:  "+t);var i=n.notificationIds.indexOf(t);n.notificationIds.splice(i,1),delete n.notifications[t]},n.chat=function(t,i,r){var o,f;n.library.isChatDisabledByPrivacySetting||(o=n.notifications[i],n.interactNotification(o),f=e.buildPermissionVerifier(n.library),f.uwpApp.hybridRequired=!0,e.startChat(t,f),h(u.eventNames.notificationStream.chat,i,r.type))},n.interactNotification=function(n){n.isInteracted||t.markInteracted(n.id).then(function(){n.isInteracted=!0})},n.clickCard=function(t){var u="",e={},h,o;switch(t.notificationSourceType){case i.notificationSourceType.friendRequestReceived:n.interactNotification(t),t.eventCount>1||t.metadataCollection.length===0?(u=i.links.friendRequestLink,n.library.inApp?(e={feature:i.links.friendRequestTabName,urlPath:u},r.navigateToFeature(e,function(n){s.debug("openUserFriendsPage ---- status:"+n)})):window.location.href=f.getAbsoluteUrl(u)):t.metadataCollection&&t.metadataCollection.length>0&&(o=t.metadataCollection[0],u=i.links.profileLink,h=o.SenderUserId,n.library.inApp?r.openUserProfile(parseInt(h),function(n){s.debug("openUserProfile ---- status:"+n)}):window.location.href=i.getAbsoluteUrl(u,{id:h}));break;case i.notificationSourceType.friendRequestAccepted:n.interactNotification(t),u=i.links.friendsLink,n.library.inApp?(e={feature:i.links.friendsTabName,urlPath:u},r.navigateToFeature(e,function(n){s.debug("openUserFriendsPage ---- status:"+n)})):window.location.href=f.getAbsoluteUrl(u);break;case i.notificationSourceType.privateMessageReceived:n.interactNotification(t),t.eventCount>1||t.metadataCollection.length===0?u=i.links.inboxLink:t.metadataCollection&&t.metadataCollection.length>0&&(o=t.metadataCollection[0],u=i.links.inboxLink+i.links.inboxMessageDetailQuery+o.MessageId),n.library.inApp?(e={feature:i.links.inboxTabName,urlPath:u},r.navigateToFeature(e,function(n){s.debug("openUserProfile ---- status:"+n)})):window.location.href=f.getAbsoluteUrl(u)}},n.notificationSourceType=i.notificationSourceType}]);

;// ~/viewapp/widgets/notificationStream/directives/notificationIndicatorDirective.js
"use strict";notificationStreamIcon.directive("notificationIndicator",["notificationStreamUtility","$document","$log",function(n,t,i){return{restrict:"A",replace:!0,scope:!0,templateUrl:n.templates.notificationIndicatorTemplate,link:function(n){function f(t){n.layout=n.layout||{},n.layout.unreadNotifications=t.count,n.layout.isNotificationContentOpen=t.isNotificationContentOpen}t.bind("Roblox.NotificationStream.UnreadNotifications",function(t,r){i.debug(" ----- notificationStreamIconController --- args.count --------"+r.count),n.$evalAsync(f(r))})}}}]);

;// ~/viewapp/widgets/notificationStream/directives/notificationStreamBodyDirective.js
"use strict";notificationStream.directive("notificationStreamBody",["$document","$log",function(n,t){return{restrict:"A",replace:!0,scope:!0,link:function(i,r){n.on("click touchstart",function(n){i.layout&&(!i.layout.isStreamBodyInteracted&&r.has(n.target).length>0?i.layout.isStreamBodyInteracted=!0:i.layout.isStreamBodyInteracted&&!r.has(n.target).length>0&&(i.layout.isStreamBodyInteracted=!1),t.debug(" ------------------scope.layout.isStreamBodyInteracted----------------- "+i.layout.isStreamBodyInteracted))})}}}]);

;// ~/viewapp/widgets/notificationStream/directives/notificationContentDirective.js
"use strict";notificationStream.directive("notificationContent",["notificationStreamService","notificationStreamUtility","$log",function(n,t){return{restrict:"A",replace:!0,scope:!0,templateUrl:t.templates.notificationContentTemplate}}]);

;// ~/viewapp/widgets/notificationStream/directives/notificationCardDirective.js
"use strict";notificationStream.directive("notificationCard",["$log","notificationStreamService",function(n,t){var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},r=function(){var n,t=document.createElement("supportedEvent");for(n in i)if(angular.isDefined(t.style[n]))return i[n]},u=r();return{restrict:"A",link:function(i,r){r.bind(u,function(t){n.debug("got a css transition event",t);var r=t.target.className.search("slide-out-left");r>=0&&i.$evalAsync(function(){i.removeNotification(i.notification.id)})}),i.updateNotificationSetting=function(r){t.updateNotificationSettings(i.notification.notificationSourceType,r).then(function(t){n.debug("turnOffNotification -- success",t),i.notification.isTurnOff=!r},function(){n.debug("turnOffNotification --fail")})}}}}]);

;// ~/viewapp/widgets/notificationStream/directives/friendRequestDirective.js
"use strict";notificationStream.directive("friendRequest",["notificationStreamService","notificationStreamUtility","$log",function(n,t){return{restrict:"A",replace:!0,scope:{notification:"=",library:"=",appMeta:"=",acceptFriend:"&",ignoreFriend:"&",chat:"&",interactNotification:"&"},templateUrl:t.templates.friendRequestTemplate,link:function(n){n.notificationSourceType=t.notificationSourceType,n.friendRequestLink=t.layout.friendRequestLink;var h=n.notification.metadataCollection,e=n.notification.notificationSourceType,f=h.length,u=n.notification.eventCount?n.notification.eventCount:f,o="",s="",c="",l=function(){var r,i,l;n.userIds=[],n.notificationDisplayText="",h.forEach(function(i,r){var l=t.normalizeUser(e,i),f=l.userId,v=l.userName,y=n.library.userLibrary[f]&&n.library.userLibrary[f].profileLink?n.library.userLibrary[f].profileLink:t.getAbsoluteUrl(t.links.profileLink,{id:f}),a,h;n.userIds.indexOf(f)<0&&n.userIds.push(f),a=t.getUserHtmlTemplate(e,u),h=t.getFormatString(a,{userId:f,userName:v,profileLink:y}),r<1?(o+=h,s+=h):r<2&&(c+=h,u>2?o+=", "+h+", ":u===2&&(o+=" and "+h))}),n.appMeta.isI18nEnabled?f===0?n.notificationDisplayText=t.normalizeYouHaveText(e,u):u>2||u>f?(r=f>2?u-2:u-f,n.notificationDisplayText=t.normalizeMultipleDisplayText(e,s,c,r),n.requestConfirmedText=t.normalizeMultipleConfirmedText(e,s,c,r)):u===2?(n.notificationDisplayText=t.normalizeDoubleDisplayText(e,s,c),n.requestConfirmedText=t.normalizeDoubleConfirmedText(e,s,c)):(n.notificationDisplayText=t.normalizeSingleDisplayText(e,s),n.requestConfirmedText=t.normalizeSingleConfirmedText(e,s)):(i=t.normalizeDisplayText(e,u),f===0?(o=i.defaultPrefixText+u+i.defaultPostfixText,n.notificationDisplayText=o):((u>2||u>f)&&(l=f>2?u-2:u-f,o+=" and "+l+(l===1?" other":" others")),n.notificationDisplayText=o+i.displayText,n.requestConfirmedText=o+i.requestConfirmedText))},a=function(){n.friendRequestActionType=t.friendRequestActionType,n.notification.notificationSourceType===t.notificationSourceType.friendRequestReceived?n.notification.friendRequestActionType=f!==1||u!==1||h[0].IsAccepted?f===1&&u===1&&h[0].IsAccepted?t.friendRequestActionType.chatBtn:t.friendRequestActionType.viewAllBtn:h[0].IsAccepted?t.friendRequestActionType.chatBtn:t.friendRequestActionType.acceptIgnoreBtns:n.notification.notificationSourceType===t.notificationSourceType.friendRequestAccepted&&f===1&&u===1&&(n.notification.friendRequestActionType=t.friendRequestActionType.chatBtn)},v=function(){l(),a()};v()}}}]);

;// ~/viewapp/widgets/notificationStream/directives/lazyLoadingDirective.js
"use strict";notificationStream.directive("lazyLoading",["notificationStreamService","notificationStreamUtility","$document","$log",function(n,t,i,r){return{restrict:"A",scope:!0,link:function(t,u){t.callbackLazyLoad=function(){if(!t.notificationApiParams)return!1;t.notificationApiParams.loadMoreNotifications&&(t.layout.notiticationsLazyLoadingEnabled=!0,n.getRecentNotifications(t.notificationApiParams.startIndexOfNotifications,t.notificationApiParams.pageSizeOfNotifications).then(function(n){t.layout.notiticationsLazyLoadingEnabled=!1,n&&n.length>0?(t.buildNotificationsList(n),t.notificationApiParams.startIndexOfNotifications=t.notificationApiParams.startIndexOfNotifications+t.notificationApiParams.pageSizeOfNotifications,n.length<t.notificationApiParams.pageSizeOfNotifications&&(t.notificationApiParams.loadMoreNotifications=!1,t.notificationApiParams.startIndexOfNotifications=0)):(t.notificationApiParams.loadMoreNotifications=!1,t.notificationApiParams.startIndexOfNotifications=0)},function(){t.layout.notiticationsLazyLoadingEnabled=!1,r.debug("---error from get Notificaitons in lazyLoadingDirective.js---")}))},t.setupScrollbar=function(){u.mCustomScrollbar({autoExpandScrollbar:!1,scrollInertia:5,contentTouchScroll:1,mouseWheel:{preventDefault:!0},callbacks:{onTotalScrollOffset:100,onTotalScroll:t.callbackLazyLoad,onOverflowYNone:t.callbackLazyLoad}})},t.destroyScrollbar=function(){r.debug("----- destroyScrollbar ----"),u.mCustomScrollbar("destroy")};var o=function(){t.library.inApp?(Roblox.Scrollbar.setUpOverflowY(u,t.callbackLazyLoad),Roblox.Scrollbar.listenToScroll(i,null,t.callbackLazyLoad)):t.setupScrollbar()},e=t.$watch(function(){return t.layout&&t.layout.isLazyLoadingRequested},function(n,i){angular.isDefined(n)&&n!==i&&(r.debug("----- initializeLayout ----"),n?o():t.library.inApp||t.destroyScrollbar())},!0);t.$on("$destroy",function(){e&&e()})}}}]);

;// ~/viewapp/widgets/notificationStream/directives/clickInCardDirective.js
"use strict";notificationStream.directive("clickInCard",["eventStreamService","hybridService","notificationStreamUtility","$log",function(n,t,i,r){return{restrict:"A",scope:!0,link:function(u,f){f.bind("click",function(f){var e,o,h,l,s,c;if(!f.target)return!1;if(e=angular.element(f.target),o=e.attr("type"),f.target&&o&&(h=angular.copy(u.library.eventStreamMetaData),u.notification&&(h.notificationType=u.notification.notificationSourceType,u.interactNotification(u.notification)),l=n.eventNames.notificationStream[o],n.sendEventWithTarget(l,f.type,h),u.library.inApp)){f.stopPropagation(),f.preventDefault();switch(o){case i.links.settingLinkName:s={feature:i.links.settingTabName,urlPath:i.links.settingLink},t.navigateToFeature(s,function(n){r.debug("navigateToFeature ---- status:"+n)});break;case i.links.friendRequestLinkName:s={feature:i.links.friendRequestTabName,urlPath:i.links.friendRequestLink},t.navigateToFeature(s,function(n){r.debug("openUserProfile ---- status:"+n)});break;case i.links.profileLinkName:c=e.attr("href")&&e.attr("href").match(/users\/(\d+)/,"")?e.attr("href").match(/users\/(\d+)/,"")[1]:u.userIds[0],t.openUserProfile(parseInt(c),function(n){r.debug("openUserProfile ---- status:"+n)})}return!1}})}}}]);

;// ~/viewapp/widgets/notificationStream/directives/privateMessageDirective.js
"use strict";notificationStream.directive("privateMessage",["notificationStreamService","notificationStreamUtility","$log",function(n,t){return{restrict:"A",replace:!0,scope:{notification:"=",appMeta:"=",library:"="},templateUrl:t.templates.privateMessageTemplate,link:function(n){var u=function(){var i,u,r;n.notificationSourceType=t.notificationSourceType,n.friendRequestLink=t.layout.friendRequestLink,n.privateMessageLayout={displayUserId:null,displayUserName:"",messagePreview:"",isStacked:!1},i=n.notification.metadataCollection,u=n.notification.notificationSourceType,(n.notification.eventCount>1||i&&i.length===0)&&(n.privateMessageLayout.isStacked=!0),i&&i.length>0&&(r=t.normalizeUser(u,i[0]),n.privateMessageLayout.displayUserId=r.userId,n.privateMessageLayout.displayUserName=r.userName,n.privateMessageLayout.messagePreview=i[0].BodyPreview)};u()}}}]);

;// ~/viewapp/widgets/notificationStream/directives/testDirective.js
"use strict";notificationStream.directive("test",["notificationStreamUtility","$log",function(n){return{restrict:"A",replace:!0,scope:!0,templateUrl:n.templates.testTemplate,link:function(n){var r=n.notification.metadataCollection;n.notificationDisplayText="",r.forEach(function(t){n.notificationDisplayText+=t.Detail})}}}]);
