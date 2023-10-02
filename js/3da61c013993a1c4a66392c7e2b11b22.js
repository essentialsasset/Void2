; // bundle: chat___76d544532de1a83023e09f1996f2f756_m
; // files: angular/angular.audio.js, ~/viewapp/pages/chat/chat.js, ~/viewapp/pages/chat/services/chatService.js, ~/viewapp/pages/chat/services/partyService.js, ~/viewapp/pages/chat/services/messageService.js, ~/viewapp/pages/chat/services/cookieService.js, ~/viewapp/pages/chat/services/chatUtilityService.js, ~/viewapp/pages/chat/services/chatClientStorageUtilityService.js, ~/viewapp/pages/chat/services/chatHybridService.js, ~/viewapp/pages/chat/directives/chatDataDirective.js, ~/viewapp/pages/chat/controllers/chatController.js, ~/viewapp/pages/chat/controllers/dialogsController.js, ~/viewapp/pages/chat/directives/chatBarDirective.js, ~/viewapp/pages/chat/directives/lazyLoadDirective.js, ~/viewapp/pages/chat/directives/dialogDirective.js, ~/viewapp/pages/chat/directives/groupSelectDirective.js, ~/viewapp/pages/chat/directives/abuseReportDirective.js, ~/viewapp/pages/chat/directives/friendsSelectionDirective.js, ~/viewapp/pages/chat/controllers/dialogController.js, ~/viewapp/pages/chat/directives/dialogLazyLoadDirective.js, ~/viewapp/pages/chat/directives/dialogMinimizeDirective.js, ~/viewapp/pages/chat/directives/minimizeItemDirective.js, ~/viewapp/pages/chat/directives/chatSettingDirective.js, ~/viewapp/pages/chat/controllers/friendsController.js, ~/viewapp/pages/chat/directives/friendsLazyLoadDirective.js, ~/viewapp/pages/chat/directives/backBtnDirective.js, ~/viewapp/pages/chat/directives/removeFocusDirective.js, ~/viewapp/pages/chat/directives/chatPlaceholderDirective.js
; // angular/angular.audio.js
"use strict";
angular.module("ngAudio", []).directive("ngAudio", ["$compile", "$q", "ngAudio", function(n, t, i) {
    return {
        restrict: "AEC",
        scope: {
            volume: "=",
            start: "=",
            currentTime: "=",
            loop: "=",
            clickPlay: "=",
            disablePreload: "="
        },
        controller: function(n, t, r, u) {
            function e() {
                f = i.load(t.ngAudio, n), n.$audio = f, f.unbind()
            }
            var f;
            n.disablePreload || e();
            r.on("click", function() {
                n.clickPlay !== !1 && (n.disablePreload && e(), f.audio.play(), f.volume = n.volume || f.volume, f.loop = n.loop, f.currentTime = n.start || 0, u(function() {
                    f.play()
                }, 5))
            });
            r.on("$destroy", function() {
                f.destroy()
            })
        }
    }
}]).directive("ngAudioHover", ["$compile", "$q", "ngAudio", function(n, t, i) {
    return {
        restrict: "AEC",
        controller: function(n, t, r) {
            var f = i.load(t.ngAudioHover, n);
            r.on("mouseover rollover hover", function() {
                f.audio.play(), f.volume = t.volumeHover || f.volume, f.loop = t.loop, f.currentTime = t.startHover || 0
            });
            r.on("$destroy", function() {
                f.destroy()
            })
        }
    }
}]).service("localAudioFindingService", ["$q", function(n) {
    this.find = function(t) {
        var i = n.defer(),
            r = document.getElementById(t);
        return r ? i.resolve(r) : i.reject(t), i.promise
    }
}]).service("remoteAudioFindingService", ["$q", function(n) {
    this.find = function(t) {
        var r = n.defer(),
            i = new Audio;
        return i.addEventListener("error", function() {
            r.reject()
        }), i.addEventListener("loadstart", function() {
            r.resolve(i)
        }), setTimeout(function() {
            i.src = t
        }, 1), r.promise
    }
}]).service("cleverAudioFindingService", ["$q", "localAudioFindingService", "remoteAudioFindingService", function(n, t, i) {
    this.find = function(r) {
        var u = n.defer();
        return r = r.replace("|", "/"), t.find(r).then(u.resolve, function() {
            return i.find(r)
        }).then(u.resolve, u.reject), u.promise
    }
}]).value("ngAudioGlobals", {
    muting: !1,
    songmuting: !1,
    performance: 25,
    unlock: !0
}).factory("NgAudioObject", ["cleverAudioFindingService", "$rootScope", "$interval", "$timeout", "ngAudioGlobals", function(n, t, i, r, u) {
    return function(r, f) {
        function d() {
            o.play(), o.pause(), window.removeEventListener("click", d)
        }

        function rt() {
            w || (h && i.cancel(h), k && k(), s && s(), w = !0)
        }

        function ft() {
            w || (s = b.$watch(function() {
                return {
                    volume: e.volume,
                    currentTime: e.currentTime,
                    progress: e.progress,
                    muting: e.muting,
                    loop: e.loop,
                    playbackRate: e.playbackRate
                }
            }, function(n, t) {
                n.currentTime !== t.currentTime && e.setCurrentTime(n.currentTime), n.progress !== t.progress && e.setProgress(n.progress), n.volume !== t.volume && e.setVolume(n.volume), n.playbackRate !== t.playbackRate && e.setPlaybackRate(n.playbackRate), l = n.loop, n.muting !== t.muting && e.setMuting(n.muting)
            }, !0))
        }

        function ut() {
            s && s(), o && (o.volume = p || u.isMuting ? 0 : e.volume !== undefined ? e.volume : 1, y && (o.play(), y = !1), nt && (o.pause(), o.currentTime = 0, nt = !1), v && (o.pause(), v = !1), a && (o.playbackRate = tt, a = !1), c && (o.volume = c, c = undefined), it && (e.currentTime = o.currentTime, e.duration = o.duration, e.remaining = o.duration - o.currentTime, e.progress = o.currentTime / o.duration, e.paused = o.paused, e.src = o.src, e.currentTime >= e.duration && g.forEach(function(n) {
                n(e)
            }), l && e.currentTime >= e.duration && (l !== !0 && (l--, e.loop--), e.setCurrentTime(0), e.play())), p || u.isMuting || (e.volume = o.volume), e.audio = o), ft()
        }
        var s, k, y = !1,
            v = !1,
            nt = !1,
            a = !1,
            tt = !1,
            c, l, p = !1,
            it = !0,
            w = !1,
            b = f || t,
            o, e = this,
            g, h;
        this.id = r, this.safeId = r.replace("/", "|"), this.loop = 0, this.unbind = function() {
            it = !1
        }, this.play = function() {
            return y = !0, this
        }, g = [], this.complete = function(n) {
            g.push(n)
        }, this.pause = function() {
            v = !0
        }, this.restart = function() {
            nt = !0
        }, this.stop = function() {
            this.restart()
        }, this.setVolume = function(n) {
            c = n
        }, this.setPlaybackRate = function(n) {
            tt = n, a = !0
        }, this.setMuting = function(n) {
            p = n
        }, this.setProgress = function(n) {
            o && o.duration && isFinite(n) && (o.currentTime = o.duration * n)
        }, this.setCurrentTime = function(n) {
            o && o.duration && (o.currentTime = n)
        }, this.destroy = rt, b.$on("$destroy", function() {
            rt()
        }), n.find(r).then(function(n) {
            o = n, u.unlock && (window.addEventListener("click", d), o.addEventListener("playing", function() {
                window.removeEventListener("click", d)
            })), o.addEventListener("canplay", function() {
                e.canPlay = !0
            })
        }, function(n) {
            e.error = !0, console.warn(n)
        }), h = i(ut, u.performance), k = b.$watch(function() {
            return u.performance
        }, function() {
            i.cancel(h), h = i(ut, u.performance)
        })
    }
}]).service("ngAudio", ["NgAudioObject", "ngAudioGlobals", function(n, t) {
    this.play = function(t, i) {
        var r = new n(t, i);
        return r.play(), r
    }, this.load = function(t, i) {
        return new n(t, i)
    }, this.mute = function() {
        t.muting = !0
    }, this.unmute = function() {
        t.muting = !1
    }, this.toggleMute = function() {
        t.muting = !t.muting
    }, this.setUnlock = function(n) {
        t.unlock = n
    }
}]).filter("trackTime", function() {
    return function(n) {
        var t = Math.floor(n | 0),
            f = "",
            u = 0,
            i = 0,
            r = 0;
        return t > 3599 ? (u = Math.floor(t / 3600), i = Math.floor((t - u * 3600) / 60), r = t - (i * 60 + u * 3600), u.toString().length == 1 && (u = "0" + Math.floor(t / 3600).toString()), i.toString().length == 1 && (i = "0" + Math.floor((t - u * 3600) / 60).toString()), r.toString().length == 1 && (r = "0" + (t - (i * 60 + u * 3600)).toString()), f = u + ":" + i + ":" + r) : t > 59 ? (i = Math.floor(t / 60), r = t - i * 60, i.toString().length == 1 && (i = "0" + Math.floor(t / 60).toString()), r.toString().length == 1 && (r = "0" + (t - i * 60).toString()), f = i + ":" + r) : (r = t, r.toString().length == 1 && (r = "0" + t.toString()), f = t + "s"), typeof Number.isNaN == "function" && Number.isNaN(f), f
    }
});; // ~/viewapp/pages/chat/chat.js
"use strict";
var chat = angular.module("chat", ["robloxApp.helpers", "monospaced.elastic", "ngAudio"]);; // ~/viewapp/pages/chat/services/chatService.js
"use strict";
chat.factory("chatService", ["$q", "partyService", "chatUtility", "chatClientStorageUtilityService", "httpService", "$log", function(n, t, i, r, u, f) {
    var e = {},
        s = 100,
        o = 100,
        l = function(n) {
            var t = "/thumbnail/avatar-headshots",
                i = {
                    userIds: n
                },
                r = {
                    url: t,
                    withCredentials: !0,
                    retryable: !0
                };
            return u.httpGet(r, i, !0)
        },
        a = function(n) {
            var t = "/presence/users",
                i = {
                    userIds: n
                },
                r = {
                    url: t,
                    withCredentials: !0,
                    retryable: !0
                };
            return u.httpGet(r, i, !0)
        },
        h = function(n) {
            var u = [];
            angular.forEach(n, function(n) {
                u.push(n.Id)
            });
            for (var t = 0, i = s >= o ? parseInt(s) : parseInt(o), r = u.slice(t, i), f = []; r.length > 0;) f.push(l(r)), f.push(a(r)), t++, r = u.slice(t * i, t * i + i);
            return f
        },
        v = function(n, t) {
            for (var u = [], f = [], r = 0, o = n.length, i; r < o;) u = u.concat(n[r].data), f = f.concat(n[r + 1].data), r = r + 2;
            for (i in t) u[i] && (t[i].AvatarThumb = u[i]), f[i] && (t[i].UserPresenceType = f[i].UserPresenceType), e[t[i].Id] = t[i], Roblox && Roblox.Endpoints && (e[t[i].Id].UserProfileLink = Roblox.Endpoints.generateAbsoluteUrl("/users/{id}/profile", {
                id: t[i].Id
            }, !0));
            return t
        },
        y = function(n) {
            if (n.length === 0) return [];
            var i = {
                    conversationIds: n
                },
                r = {
                    url: t.apiSets.getPartiesForConversationsApi.url,
                    withCredentials: !0,
                    retryable: !0
                };
            return u.httpGet(r, i, !0)
        },
        p = function(t, r) {
            var u = [];
            return i.isInApp() || (u = u.concat(y(t))), u = u.concat(h(r)), n.all(u).then(function(n) {
                var u = {
                        parties: [],
                        users: []
                    },
                    f, e;
                return n && n.length > 0 && (f = t.length > 0 && !i.isInApp() ? n[0].data : [], e = i.isInApp() ? n : n.slice(1), r = v(e, r), u = {
                    parties: f,
                    users: r
                }), u
            })
        },
        w = function(n) {
            return e[n] && angular.isDefined(e[n].AvatarThumb) && angular.isDefined(e[n].UserPresenceType)
        },
        c = function(t) {
            var i = h(t);
            return n.all(i).then(function(n) {
                for (var f = [], o = [], u = 0, s = i.length, r; u < s;) f = f.concat(n[u].data), o = o.concat(n[u + 1].data), u = u + 2;
                for (r in t) f[r] && (t[r].AvatarThumb = f[r]), o[r] && (t[r].UserPresenceType = o[r].UserPresenceType), e[t[r].Id] = t[r];
                return t
            })
        },
        b = function(n) {
            var t = null;
            if (n) t = n;
            else {
                var u = r.getFromStorage(r.storageDictionary.chatFriendsListReloadTime),
                    e = +new Date,
                    f = u ? (e - u) / 1e3 : null;
                f && f < i.friendsListOutputCacheDurationInSeconds && (t = u)
            }
            return t
        };
    return {
        invitedParties: [],
        apiSets: {
            getFriendListUrl: {
                url: "/friends/list",
                retryable: !0,
                withCredentials: !0
            },
            getUserAvatarUrl: {
                url: "/thumbnail/avatar-headshot",
                retryable: !0
            },
            getPresenceUserUrl: {
                url: "/presence/user",
                retryable: !0
            }
        },
        setParams: function(n) {
            this.apiSets.markAsReadApi = {
                url: n + "/v1.0/mark-as-read",
                retryable: !1,
                withCredentials: !0
            }, this.apiSets.markAsSeenApi = {
                url: n + "/v1.0/mark-as-seen",
                retryable: !1,
                withCredentials: !0
            }, this.apiSets.sendMessageApi = {
                url: n + "/v1.0/send-message",
                retryable: !1,
                withCredentials: !0
            }, this.apiSets.conversationsApi = {
                url: n + "/v1.0/get-conversations",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.userConversationsApi = {
                url: n + "/v1.0/get-user-conversations",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.unreadConversationsApi = {
                url: n + "/v1.0/get-unread-conversations",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.getMessagesApi = {
                url: n + "/v1.0/get-messages",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.multiGetLatestMessagesApi = {
                url: n + "/v1.0/multi-get-latest-messages",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.unreadMessagesApi = {
                url: n + "/v1.0/get-unread-messages",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.getUnreadConversationCountApi = {
                url: n + "/v1.0/get-unread-conversation-count",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.startOneToOneConversationApi = {
                url: n + "/v1.0/start-one-to-one-conversation",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.startGroupConversationApi = {
                url: n + "/v1.0/start-group-conversation",
                retryable: !1,
                withCredentials: !0
            }, this.apiSets.addToConversationApi = {
                url: n + "/v1.0/add-to-conversation",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.removeFromConversationApi = {
                url: n + "/v1.0/remove-from-conversation",
                retryable: !0,
                withCredentials: !0
            }
        },
        setAvatarHeadshotsMultigetLimit: function(n) {
            s = n
        },
        setUserPresenceMultigetLimit: function(n) {
            o = n
        },
        getFriendsDict: function() {
            return e
        },
        getUnreadConversationCount: function() {
            return u.httpGet(this.apiSets.getUnreadConversationCountApi, null)
        },
        getUnreadConversations: function(t, r, e) {
            var o = this,
                s = {
                    pageNumber: t,
                    pageSize: r
                };
            return u.httpGet(this.apiSets.unreadConversationsApi, s).then(function(t) {
                var r = t;
                if (r.length > 0) {
                    var u = {},
                        h = [],
                        s = [];
                    return r.forEach(function(n) {
                        h.push(n.Id), u[n.Id] = n, s.push(o.getMessages(n.Id, null, e).then(function(t) {
                            return {
                                messages: t,
                                conversationId: n.Id
                            }
                        }))
                    }), n.all(s).then(function(n) {
                        var t = [];
                        return angular.forEach(n, function(n) {
                            var o = n.conversationId,
                                f = n.messages,
                                e = u[o];
                            e.ChatMessages = f, f.length > 0 ? (i.sanitizeMessage(f[0]), e.DisplayMessage = f[0]) : e.DisplayMessage = [], t.push(e)
                        }), t
                    }, function() {
                        f.debug("------------ get messages request failed -------------")
                    })
                }
                return null
            })
        },
        getUserConversations: function(r, e) {
            var s = {
                    pageNumber: r,
                    pageSize: e
                },
                o = [u.httpGet(this.apiSets.userConversationsApi, s, !0)];
            return i.isInApp() || o.push(u.httpGet(t.apiSets.getCurrentPartyApi, null, !0)), n.all(o).then(function(n) {
                var r = n[0].data ? n[0].data : [],
                    u = n[1] && n[1].data ? n[1].data : [],
                    f = [],
                    e = [],
                    o = [],
                    t = {};
                return r.forEach(function(n) {
                    angular.forEach(n.ParticipantUsers, function(n) {
                        f.indexOf(n.Id) < 0 && !w(n.Id) && (f.push(n.Id), e.push(n))
                    }), u && u.ConversationId === n.Id && (n.party = u, n.dialogType = i.dialogType.PARTY), n.dialogType || (n.dialogType = n.IsGroupChat ? i.dialogType.GROUPCHAT : i.dialogType.CHAT), o.push(n.Id), t[n.Id] = n
                }), p(o, e).then(function(n) {
                    var u = n.parties;
                    return u && u.length > 0 && u.forEach(function(n) {
                        t[n.ConversationId] && !t[n.ConversationId].party && (t[n.ConversationId].party = n, t[n.ConversationId].dialogType = i.dialogType.PENDINGPARTY)
                    }), r
                }, function() {
                    return r
                })
            }, function() {
                f.debug("------------ get user conversation request failed -------------")
            })
        },
        getUserInfo: function(t) {
            var i = {
                userId: t.Id
            };
            return n.all([u.httpGet(this.apiSets.getUserAvatarUrl, i, !0), u.httpGet(this.apiSets.getPresenceUserUrl, i, !0)]).then(function(n) {
                var i = n[0].data,
                    r = n[1].data;
                return t.AvatarThumb = i, t.UserPresenceType = r.UserPresenceType, Roblox && Roblox.Endpoints && (t.UserProfileLink = Roblox.Endpoints.generateAbsoluteUrl("/users/{id}/profile", {
                    id: t.Id
                }, !0)), t
            })
        },
        getUserPresence: function(n) {
            var t = {
                userId: n.Id
            };
            return u.httpGet(this.apiSets.getPresenceUserUrl, t)
        },
        getFriends: function(n, t, i, r) {
            var f = {
                    userId: n,
                    startIndex: t,
                    pageSize: i
                },
                e = b(r);
            return e && (f.timeStamp = e), u.httpGet(this.apiSets.getFriendListUrl, f).then(function(n) {
                return angular.isDefined(n.Friends) && n.Friends.length > 0 ? c(n.Friends) : null
            })
        },
        getConversations: function(n) {
            var t = {
                conversationIds: n
            };
            return u.httpGet(this.apiSets.conversationsApi, t)
        },
        addToConversation: function(n, t) {
            var i = {
                participantUserIds: n,
                conversationId: t
            };
            return u.httpPost(this.apiSets.addToConversationApi, i)
        },
        removeFromConversation: function(n, t) {
            var i = {
                participantUserId: n,
                conversationId: t
            };
            return u.httpPost(this.apiSets.removeFromConversationApi, i)
        },
        startOneToOneConversation: function(n) {
            var t = {
                participantUserId: n
            };
            return u.httpPost(this.apiSets.startOneToOneConversationApi, t)
        },
        startGroupConversation: function(n) {
            var t = {
                participantUserIds: n
            };
            return u.httpPost(this.apiSets.startGroupConversationApi, t)
        },
        getMessages: function(n, t, i) {
            var r = {
                conversationId: n,
                exclusiveStartMessageId: t,
                pageSize: i
            };
            return u.httpGet(this.apiSets.getMessagesApi, r)
        },
        multiGetLatestMessages: function(n, t) {
            var i = {
                conversationIds: n,
                pageSize: t
            };
            return u.httpGet(this.apiSets.multiGetLatestMessagesApi, i)
        },
        markAsRead: function(n, t) {
            var i = {
                conversationId: n,
                endMessageId: t
            };
            return u.httpPost(this.apiSets.markAsReadApi, i)
        },
        markAsSeen: function(n) {
            return u.httpPost(this.apiSets.markAsSeenApi, n)
        },
        sendMessage: function(n, t) {
            var i = {
                conversationId: n,
                message: t
            };
            return u.httpPost(this.apiSets.sendMessageApi, i)
        }
    }
}]);; // ~/viewapp/pages/chat/services/partyService.js
"use strict";
chat.factory("partyService", ["chatHybridService", "$document", "httpService", "$log", function(n, t, i) {
    return {
        apiSets: {
            getPlaceUrl: {
                url: "/thumbnail/place",
                retryable: !0
            }
        },
        setParams: function(n) {
            this.apiSets.partyCreateApi = {
                url: n + "/v1.0/party/create",
                retryable: !1,
                withCredentials: !0
            }, this.apiSets.partyInviteApi = {
                url: n + "/v1.0/party/invite",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.partyLeaveApi = {
                url: n + "/v1.0/party/leave",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.partyJoinApi = {
                url: n + "/v1.0/party/join",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.getInvitedPartiesApi = {
                url: n + "/v1.0/party/get-invites",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.getCurrentPartyApi = {
                url: n + "/v1.0/party/get-current",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.removeFromPartyApi = {
                url: n + "/v1.0/party/remove-from-party",
                retryable: !0,
                withCredentials: !0
            }, this.apiSets.getPartiesForConversationsApi = {
                url: n + "/v1.0/party/get-parties-for-conversations",
                retryable: !0,
                withCredentials: !0
            }
        },
        partyCreate: function(n, t) {
            var r = {
                invitedUserIds: t,
                conversationId: n
            };
            return i.httpPost(this.apiSets.partyCreateApi, r)
        },
        partyInvite: function(n, t) {
            var r = {
                invitedUserId: t,
                partyId: n
            };
            return i.httpPost(this.apiSets.partyInviteApi, r)
        },
        partyLeave: function(n) {
            var t = {
                partyId: n
            };
            return i.httpPost(this.apiSets.partyLeaveApi, t)
        },
        partyJoin: function(n) {
            var t = {
                partyId: n
            };
            return i.httpPost(this.apiSets.partyJoinApi, t)
        },
        getInvitedParties: function(n, t) {
            var r = {
                pageNumber: n,
                pageSize: t
            };
            return i.httpGet(this.apiSets.getInvitedPartiesApi, r)
        },
        getPartiesForConversations: function(n) {
            var t = {
                conversationIds: n
            };
            return i.httpGet(this.apiSets.getPartiesForConversationsApi, t)
        },
        getCurrentParty: function() {
            return i.httpGet(this.apiSets.getCurrentPartyApi, null)
        },
        removeFromParty: function(n, t) {
            var r = {
                partyId: n,
                userId: t
            };
            return i.httpPost(this.apiSets.removeFromPartyApi, r)
        },
        getPlace: function(n) {
            var t = {
                placeId: n
            };
            return i.httpGet(this.apiSets.getPlaceUrl, t)
        },
        joinGame: function(n) {
            var r = n.party,
                u, f;
            r.GameId && r.GamePlaceId && (t.triggerHandler("Roblox.Chat.PartyInGame", {
                placeId: r.GamePlaceId
            }), u = "PlaceLauncherStatusPanel", f = angular.element(document.querySelector("#" + u)), this.getPlace(r.GamePlaceId).then(function(t) {
                n.placeThumbnail = t
            }), Roblox.GamePlayEvents && Roblox.GamePlayEvents.SendGamePlayIntent("Party", r.GamePlaceId), f.data("is-game-launch-interface-enabled") === "True" ? Roblox.GameLauncher.joinGameWithParty(r.GamePlaceId, r.Id, r.GameId) : Roblox.Client.WaitForRoblox(function() {
                RobloxLaunch.RequestPlayWithParty(u, r.GamePlaceId, r.Id, r.GameId)
            }))
        }
    }
}]);; // ~/viewapp/pages/chat/services/messageService.js
"use strict";
chat.factory("messageService", ["chatService", "chatUtility", "$rootScope", "$filter", "$log", function(n, t, i, r, u) {
    function f(n) {
        n.Sent && !n.parsedTimestamp && (n.parsedTimestamp = parseInt(typeof n.Sent == "string" && n.Sent.search("Date") > -1 ? n.Sent.slice(6, -2) : n.Sent))
    }

    function e(n, t, i) {
        var f = angular.isDefined(i) ? i : new Date,
            u = new Date(t),
            e = u.toDateString(),
            s = Math.round(Math.abs(f.getTime() - u.getTime()) / o),
            h = u.getDay();
        n.displayTimeStamp = f.toDateString() === e ? r("date")(t, "h:mm a") : s <= h ? r("date")(t, "EEE | h:mm a") : r("date")(t, "MMM d, yyyy | h:mm a")
    }
    var o = 864e5;
    return {
        setFallbackClusterMaster: function(n, t) {
            angular.isUndefined(n.ChatMessages) && (n.ChatMessages = []);
            var r = n.ChatMessages.length - 1;
            t.displayTimeStamp && (t.isClusterMaster = !0), n.ChatMessages.length > 0 && n.ChatMessages[r].SenderUserId !== t.SenderUserId && (n.ChatMessages[r].isClusterMaster = !0), n.ChatMessages.push(t)
        },
        setClusterMaster: function(n, t) {
            angular.isUndefined(n.ChatMessages) && (n.ChatMessages = []), (n.ChatMessages.length > 0 && n.ChatMessages[0].SenderUserId !== t.SenderUserId || t.displayTimeStamp) && (t.isClusterMaster = !0), t.resetClusterMessage || n.ChatMessages.unshift(t)
        },
        buildFallbackTimeStamp: function(n, i, r) {
            var o, u;
            if (!n.Sent) return !1;
            o = parseInt(t.parytChromeDisplayTimeStampInterval), f(n), u = n.parsedTimestamp, (!i.startTimeStamp || u + o < i.startTimeStamp) && (e(n, u, r), i.startTimeStamp = u)
        },
        buildTimeStamp: function(n, i, r) {
            var o, u;
            return n.Sent ? (o = parseInt(t.parytChromeDisplayTimeStampInterval), f(n), u = n.parsedTimestamp, i.previousTimeStamp || (i.startTimeStamp = u), (!i.previousTimeStamp || u - o > i.previousTimeStamp) && (e(n, u, r), i.previousTimeStamp = u), !0) : !1
        },
        manipulateMessages: function(r, f, e) {
            var l, h, s, o, c;
            if (f || (r.messagesDict = {}, r.unreadMessageIds = [], r.unreadMessageTimestamps = []), angular.isUndefined(r.messagesDict) && (r.messagesDict = {}), angular.isUndefined(r.unreadMessageIds) && (r.unreadMessageIds = [], r.unreadMessageTimestamps = []), f && f.length > 0) {
                for (l = f.length, h = [], r.previousTimeStamp = null, s = l - 1; s >= 0; s--) o = f[s], this.buildTimeStamp(o, r), r.messagesDict[o.Id] || (t.sanitizeMessage(o), r.messagesDict[o.Id] = o, this.setClusterMaster(r, o), o.Read || (r.unreadMessageIds.push(o.Id), r.unreadMessageTimestamps.push(o.parsedTimestamp))), e && !e[o.SenderUserId] && h.indexOf(o.SenderUserId) < 0 && (u.debug(" ----- new friend information for this message, trying to get now -----" + o.SenderUserId), c = {
                    Id: o.SenderUserId
                }, h.push(o.SenderUserId), n.getUserInfo(c).then(function(n) {
                    n && (e[c.Id] = n)
                }, function() {
                    u.debug(" ----- getUserInfo failed -----")
                }));
                r.unreadMessageIds.length > 0 && i.$broadcast("Roblox.Chat.LoadUnreadConversationCount")
            }
        },
        appendMessages: function(n, r) {
            var e, s, h, o, u, c, l;
            if (angular.isUndefined(n.unreadMessageIds) && (n.unreadMessageIds = [], n.unreadMessageTimestamps = []), t.sanitizeMessages(r), n.ChatMessages && n.ChatMessages.length !== 0) {
                if (n.ChatMessages) {
                    for (e = {}, o = 0; o < n.ChatMessages.length; o++)
                        if (s = n.ChatMessages[o], !s.isSystemMessage && !s.sendMessageHasError && !s.resetClusterMessage) {
                            e = n.ChatMessages[o], f(e);
                            break
                        } for (h = r.length, o = h - 1; o >= 0; o--) u = r[o], f(u), c = u.Id === e.Id || e.Id && typeof e.Id != "string" && e.Id.toString() === u.Id, l = !angular.isUndefined(n.messagesDict) && !angular.isUndefined(u.Id) && !angular.isUndefined(n.messagesDict[u.Id]), (angular.equals({}, e) || u.parsedTimestamp > e.parsedTimestamp) && !c && !l && (this.buildTimeStamp(u, n), this.setClusterMaster(n, u)), u.Read || (n.HasUnreadMessages = !0, n.unreadMessageIds.push(u.Id), n.unreadMessageTimestamps.push(u.parsedTimestamp))
                }
            } else n.ChatMessages = r;
            n.DisplayMessage = r[0], n.unreadMessageIds.length > 0 && i.$broadcast("Roblox.Chat.LoadUnreadConversationCount")
        },
        markMessagesAsRead: function(t) {
            var u, f, e, r;
            t.ChatMessages && t.unreadMessageIds && (u = t.ChatMessages, f = u.length, t.unreadMessageTimestamps.length > 0 && t.unreadMessageTimestamps[0] >= u[f - 1].parsedTimestamp && (e = t.unreadMessageIds.length, r = t.unreadMessageIds[e - 1], angular.isUndefined(t.pendingUnreadMessageId) && (t.pendingUnreadMessageId = []), t.pendingUnreadMessageId.indexOf(r) < 0 && (t.pendingUnreadMessageId.push(r), n.markAsRead(t.Id, r).then(function(n) {
                n.Success && (t.HasUnreadMessages = !1, t.unreadMessageIds = [], t.unreadMessageTimestamps = [], t.pendingUnreadMessageId.splice(r, 1), i.$broadcast("Roblox.Chat.LoadUnreadConversationCount"))
            }, function() {}))))
        },
        buildSystemMessage: function(n, i) {
            var r = angular.copy(t.systemMessage),
                e = new Date,
                u;
            r.Sent = e.getTime().toString();
            switch (n) {
                case t.notificationType.iCreatedParty:
                    r.Content = "<a class='xsmall text-link' href='" + t.party.gamesPageLink + "'>Find Games</a>" + t.party.createPartyText;
                    break;
                case t.notificationType.iJoinedParty:
                    r.Content = t.party.joinPartyText;
                    break;
                case t.notificationType.partyUserJoined:
                    u = i.newJoinedUsernames.length > 0 ? i.newJoinedUsernames : "Member", r.Content = u + t.party.memberJoinText
            }
            angular.isUndefined(i.ChatMessages) && (i.ChatMessages = []), f(r), this.setClusterMaster(i, r)
        },
        resetConversationUnreadStatus: function(t, r) {
            r.length === 0 && t.HasUnreadMessages && n.markAsRead(t.Id, null).then(function(n) {
                n.Success && (t.HasUnreadMessages = !1, i.$broadcast("Roblox.Chat.LoadUnreadConversationCount"))
            }, function() {})
        }
    }
}]);; // ~/viewapp/pages/chat/services/cookieService.js
"use strict";
chat.factory("cookieService", ["$log", function() {
    return {
        isCookieDefined: function(n) {
            return angular.isDefined($.cookie(n)) && $.cookie(n)
        },
        updateCookie: function(n, t, i) {
            $.cookie(n, JSON.stringify(t), i)
        },
        retrieveCookie: function(n) {
            return this.isCookieDefined(n) ? JSON.parse($.cookie(n)) : []
        },
        destroyCookie: function(n, t) {
            $.cookie(n, null, t)
        }
    }
}]);; // ~/viewapp/pages/chat/services/chatUtilityService.js
"use strict";
chat.factory("chatUtility", ["$filter", "$log", function(n) {
    function l(n, t, i) {
        return t.maxHeightOfInput = i.tabletInApp ? parseInt(t.maxHeightOfTextInput) + 12 : parseInt(t.maxHeightOfTextInput) + 17, t.maxHeightOfInput < n ? t.maxHeightOfInput : n
    }
    var o, i = {
            FRIEND: -1,
            CHAT: 0,
            GROUPCHAT: 1,
            NEWGROUPCHAT: 2,
            PARTY: 3,
            NEWPARTY: 4,
            PENDINGPARTY: 5,
            ADDFRIENDS: 6
        },
        u = {
            INIT: 0,
            OPEN: 1,
            REPLACE: 2,
            MINIMIZE: 3,
            COLLAPSE: 4,
            REMOVE: 5,
            REFRESH: 6
        },
        s = {
            dialogType: i.NEWGROUPCHAT,
            layoutId: "newGroup",
            title: "Create Group"
        },
        f = {
            MESSAGE: 0,
            FRIENDSELECTION: 1
        },
        h = {
            PENDING: 0,
            MEMBER: 1,
            LEADER: 2
        },
        c = {
            newMessage: "NewMessage",
            newMessageBySelf: "NewMessageBySelf",
            newConversation: "NewConversation",
            addedToConversation: "AddedToConversation",
            removedFromConversation: "RemovedFromConversation",
            participantAdded: "ParticipantAdded",
            participantLeft: "ParticipantLeft",
            invitedToParty: "InvitedToParty",
            partyUserJoined: "PartyUserJoined",
            partyUserLeft: "PartyUserLeft",
            iLeftParty: "ILeftParty",
            partyJoinedGame: "PartyJoinedGame",
            partyLeftGame: "PartyLeftGame",
            partyDeleted: "PartyDeleted",
            iCreatedParty: "ICreatedParty",
            iJoinedParty: "IJoinedParty",
            friendshipDestroyed: "FriendshipDestroyed",
            friendshipCreated: "FriendshipCreated",
            presenceOffline: "UserOffline",
            presenceOnline: "UserOnline"
        },
        r = angular.element("#chat-data-model"),
        e = r.data("smallerchatenabled");
    return {
        parytChromeDisplayTimeStampInterval: r.data("parytchromedisplaytimestampinterval"),
        isLocalStorageEnabledForClient: r.data("localstorageenabledforchat"),
        friendsListOutputCacheDurationInSeconds: r.data("friendslistoutputcachedurationinseconds"),
        chatLayout: {
            scrollbarClassName: "#chat-friend-list",
            collapsed: !0,
            pageInitializing: !1,
            pageDataLoading: !1,
            chatBarInitialized: !1,
            isChatLoading: !1,
            widthOfChatCollapsed: 112,
            widthOfChat: e ? 256 : 262,
            widthOfDialog: e ? 250 : 300,
            spaceOfDialog: e ? 6 : 12,
            widthOfDialogMinimize: 200,
            numberOfDialogOpen: 0,
            defaultChatZIndex: 1030,
            errorMaskEnable: !1,
            isFriendListEmpty: !1,
            isUserConversationEmpty: !1,
            chatLandingEnabled: !1,
            thresholdMobile: 768,
            thresholdChatBarOpen: 1738,
            resizing: !1,
            defaultTitleForMessage: " says ...",
            defaultTitleForPartyInvite: "Party invite from ",
            heightOfMobileInput: 50,
            heightOfTabletInput: 80,
            urlParseInitialized: !1
        },
        chatApiParams: {
            pageNumberOfUnreadConversations: 1,
            pageSizeOfUnreadConversations: 30,
            pageNumberOfPartyInvites: 1,
            pageSizeOfPartyInvites: 30,
            pageNumberOfConversations: 1,
            pageSizeOfConversations: 30,
            pageSizeOfDisplayMessages: 1,
            pageSizeOfUnreadMessages: 30,
            pageSizeOfGetMessages: 30,
            startIndexOfFriendList: 0,
            pageSizeOfFriendList: 50,
            loadMoreUnreadConversations: !1,
            loadMoreConversations: !0,
            loadMoreFriends: !0,
            loadMoreInvitedParties: !1,
            loadMoreCurrentParty: !1
        },
        partyApiParams: {
            pageNumberOfPartyInvites: 1,
            pageSizeOfPartyInvites: 30,
            loadMoreInvitedParties: !1,
            loadMoreCurrentParty: !1
        },
        dialogParams: {
            loadMoreMessages: !0,
            sendingMessage: !1,
            sendMessageHasError: !1,
            loadMoreFriends: !1,
            startIndexOfFriendList: 0,
            pageSizeOfFriendList: 50,
            pageSizeOfGetMessages: 30
        },
        dialogLayout: {
            lookUpMembers: !1,
            focusMeEnabled: !0,
            hasFocus: !1,
            active: !1,
            isChatLoading: !1,
            collapsed: !1,
            isConfirmationOn: !1,
            isMembersOverloaded: !1,
            scrollToBottom: !1,
            IsdialogContainerVisible: !1,
            inviteBtnDisabled: !0,
            limitMemberDisplay: 6,
            heightOfInput: 40,
            maxHeightOfTextInput: 56 * 1.2,
            maxHeightOfInput: 56 * 1.2 + 10,
            limitCharacterCount: 160,
            templateUrl: Roblox.ChatTemplates.DialogTemplate,
            scrollbarElm: null,
            listenToScrollInitialized: !1
        },
        userPresenceTypes: [{
            className: "",
            title: "Offline"
        }, {
            className: "online",
            title: "Online"
        }, {
            className: "game",
            title: "In Game"
        }, {
            className: "studio",
            title: "In Studio"
        }],
        dialogType: i,
        newGroup: s,
        scrollBarType: f,
        newParty: {
            dialogType: i.NEWPARTY,
            layoutId: "newParty",
            title: "Create Party",
            isCreated: !1,
            partyName: "Party : "
        },
        party: {
            partyName: "Party",
            partyInviteMsg: "PARTY INVITE!",
            isPartyExisted: !1,
            isPartyLeader: !1,
            partyLeaderTooltip: " is the party leader",
            partyMemberTooltip: " is in the party",
            pendingMemberTooltip: " is not in the party",
            memberJoinText: " joined the party",
            joinPartyText: "The party leader is finding a game to play.",
            createPartyText: " to play with your friends!"
        },
        memberStatus: h,
        dialogInitValue: {
            isUpdated: !0,
            updateStatus: u.INIT,
            markAsActive: !1,
            activeType: null,
            autoOpen: !1
        },
        dialogStatus: u,
        conversationInitStatus: {
            remove: !1
        },
        notificationType: c,
        systemMessage: {
            isSystemMessage: !0
        },
        deviceType: {
            COMPUTER: "Computer",
            PHONE: "Phone",
            TABLET: "Tablet"
        },
        activeType: {
            NEWMESSAGE: "New message",
            PARTYINVITE: "Party Invite"
        },
        performanceMarkLabels: {
            chatPageDataLoaded: "chat_pageData_loaded",
            chatConversationsLoading: "chat_conversations_loading",
            chatConversationsLoaded: "chat_conversations_loaded",
            chatSignalRInitializing: "chat_signalR_initializing",
            chatSignalRSucceeded: "chat_signalR_succeeded"
        },
        buildScrollbar: function(n) {
            var t = angular.element(document.querySelector(n));
            t.mCustomScrollbar({
                autoExpandScrollbar: !1,
                scrollInertia: 1,
                contentTouchScroll: 1,
                mouseWheel: {
                    preventDefault: !0
                }
            })
        },
        updateScrollbar: function(n) {
            var t = angular.element(document.querySelector(n));
            t.mCustomScrollbar("update")
        },
        removeParty: function(n, t) {
            var r = t.layoutId,
                f, e;
            t.party ? (t.dialogType = i.PENDINGPARTY, f = t.party.Id, t.party.LeaderUser.Id === n.userId && t.party.MemberUsers.length === 1 && t.party.MemberUsers[0].Id === n.userId && (t.party = null, t.placeThumbnail = null, t.dialogType = t.IsGroupChat ? i.GROUPCHAT : i.CHAT), angular.isDefined(n.partyIds) && (e = n.partyIds.indexOf(f), e > -1 && n.partyIds.splice(e, 1)), angular.isDefined(n.partiesDict) && delete n.partiesDict[f]) : t.dialogType = t.IsGroupChat ? i.GROUPCHAT : i.CHAT, n.dialogDict[r] && n.dialogIdList.indexOf(r) > -1 && (n.dialogDict[r].isUpdated = !0, n.dialogDict[r].updateStatus = u.REFRESH)
        },
        deleteParty: function(n, t, i) {
            if (n.partyIds.length > 0) {
                var r = angular.copy(n.partyIds),
                    u = this;
                r.forEach(function(r) {
                    if (r === i) {
                        var f = n.partiesDict[r].layoutId,
                            e = t[f];
                        u.removeParty(n, e)
                    }
                })
            }
        },
        cleanPartyList: function(n, t, i) {
            if (n.partyIds.length > 0) {
                var r = angular.copy(n.partyIds),
                    u = this;
                r.forEach(function(r) {
                    if (r !== i) {
                        var f = n.partiesDict[r].layoutId,
                            e = t[f];
                        u.removeParty(n, e)
                    }
                })
            }
        },
        htmlEntities: function(n) {
            return String(n).replace(/&/g, "&amp;").replace(/</g, "<").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        linkify: function(n) {
            return angular.isDefined(Roblox) && angular.isDefined(Roblox.Linkify) && typeof Roblox.Linkify.String == "function" ? Roblox.Linkify.String(n) : n
        },
        sortFriendList: function(t, i) {
            var f = n("orderBy"),
                r = [],
                u = [],
                e = [];
            return t.friendIds.forEach(function(n) {
                var i = t.friendsDict[n];
                i.UserPresenceType > 0 ? r.push(i) : u.push(i), e.push(n)
            }), i.forEach(function(n) {
                e.indexOf(n.Id) < 0 && (n.UserPresenceType > 0 ? r.push(n) : u.push(n)), t.friendIds.indexOf(n.Id) < 0 && t.friendIds.push(n.Id)
            }), r = f(r, "+Username"), u = f(u, "+Username"), i = r.concat(u)
        },
        getScrollBarSelector: function(n, t) {
            var i = n.layoutId;
            angular.isUndefined(t) && (t = n.scrollBarType);
            switch (t) {
                case f.FRIENDSELECTION:
                    return "#scrollbar_friend_" + n.dialogType + "_" + i;
                case f.MESSAGE:
                default:
                    return "#scrollbar_" + n.dialogType + "_" + i
            }
        },
        sanitizeMessage: function(n) {
            n && n.Content && (n.Content = this.htmlEntities(n.Content), n.Content = this.linkify(n.Content))
        },
        sanitizeMessages: function(n) {
            var t, i;
            if (n && n.length > 0)
                for (t = 0; t < n.length; t++) i = n[t], this.sanitizeMessage(i)
        },
        getDataForMarkingSeen: function(n) {
            var t = [];
            return document.hasFocus && document.hasFocus() && angular.forEach(n, function(n) {
                n.isConversation && t.push(n.Id)
            }), t
        },
        updateDialogStyle: function(n, t, i) {
            if (i.inApp && t.inAppStyle) {
                var u = i.inAppLayout,
                    r = u.topBarHeight,
                    e = 0,
                    f = 0,
                    o = 0,
                    s = r / 2 - 9;
                t.inAppStyle.headerStyle = {
                    height: r + "px",
                    "padding-top": s + "px"
                }, n.isPartyExisted || n.partyInGame ? (f = r + 40, t.inAppStyle.bannerStyle = {
                    top: r + "px"
                }) : f = r, o = f + u.inputHeight, e = "calc(" + u.dialogHeight + " - " + o + "px)", t.inAppStyle.dialogStyle = {
                    top: f + "px",
                    height: e
                }, t.inAppStyle.friendsListStyle = {
                    top: r + u.searchHeight + "px",
                    height: "100%"
                }
            }
        },
        setInAppLayout: function(n) {
            var t = n.inAppLayout,
                r = t.topBarHeight / 2 - 9,
                i;
            t.headerStyle = {
                height: t.topBarHeight + "px",
                "padding-top": r + "px"
            }, i = "calc(100% - " + t.topBarHeight + "px)", t.chatBodyHeight = {
                height: i
            }
        },
        setResizeInputLayout: function(n, t, i, r) {
            var o, f, u = n.inApp ? n.inAppLayout : n.layout,
                e = u.topBarHeight,
                h = l(t, r, n),
                s;
            i.isPartyExisted || i.partyInGame ? (o = e + u.bannerHeight, f = e + h + u.bannerHeight) : (o = e, f = e + h), s = n.inApp ? "calc(" + u.dialogHeight + " - " + f + "px)" : u.dialogHeight - f + "px", n.inApp ? (r.inAppStyle.dialogStyle = {
                top: o + "px",
                height: s
            }, r.inAppStyle.inputStyle = {
                height: t
            }) : (r.defaultStyle.dialogStyle = {
                height: s
            }, r.defaultStyle.inputStyle = {
                height: t
            })
        },
        setInApp: function(n) {
            o = n
        },
        isInApp: function() {
            return o
        }
    }
}]);; // ~/viewapp/pages/chat/services/chatClientStorageUtilityService.js
"use strict";
chat.factory("chatClientStorageUtilityService", ["chatUtility", "localStorageService", "cookieService", function(n, t, i) {
    return {
        storageDictionary: {
            dialogIdList: "dialogIdList",
            dialogDict: "dialogDict",
            dialogsLayout: "dialogsLayout",
            chatBarLayout: "chatBarLayout",
            chatFriendsListReloadTime: "chatFriendsListReloadTime"
        },
        isStorageDefined: function(t) {
            return typeof Storage != "undefined" && n.isLocalStorageEnabledForClient ? this.getFromStorage(t) : i.isCookieDefined(t)
        },
        getFromStorage: function(r) {
            return typeof Storage != "undefined" && n.isLocalStorageEnabledForClient ? t.getLocalStorage(r) : i.retrieveCookie(r)
        },
        updateStorage: function(r, u, f) {
            typeof Storage != "undefined" && n.isLocalStorageEnabledForClient ? t.setLocalStorage(r, u) : i.updateCookie(r, u, f)
        },
        removeFromStorage: function(r, u) {
            typeof Storage != "undefined" && n.isLocalStorageEnabledForClient ? t.removeLocalStorage(r) : i.destroyCookie(r, u)
        },
        updateChatFriendsListReloadTime: function(n) {
            this.updateStorage(this.storageDictionary.chatFriendsListReloadTime, n)
        }
    }
}]);; // ~/viewapp/pages/chat/services/chatHybridService.js
"use strict";
chat.factory("chatHybridService", ["$log", function() {
    function t() {
        return Roblox && Roblox.Hybrid && Roblox.Hybrid.Chat
    }
    return {
        urlParamNames: {
            startConversationWithUserid: "startConversationWithUserid",
            conversationId: "conversationId"
        },
        setNewMessageNotification: function(n, i) {
            t() && (angular.isUndefined(i) && (i = function() {}), Roblox.Hybrid.Chat.newMessageNotification(n, i))
        },
        joinGame: function(n, i) {
            t() && (angular.isUndefined(i) && (i = function() {}), Roblox.Hybrid.Game.launchPartyForPlaceId(n, i))
        },
        getTopBarHeight: function(n) {
            t() && Roblox.Hybrid.Chat.getTopBarHeight(n)
        },
        openDialog: function(n) {
            t() && (angular.isUndefined(n) && (n = function() {}), Roblox.Hybrid.Chat.enterConversation(n))
        },
        closeDialog: function(n) {
            t() && (angular.isUndefined(n) && (n = function() {}), Roblox.Hybrid.Chat.leaveConversation(n))
        }
    }
}]);; // ~/viewapp/pages/chat/directives/chatDataDirective.js
"use strict";
chat.directive("chatData", ["chatService", "partyService", "ngAudio", "chatUtility", "chatHybridService", "googleAnalyticsEventsService", "$log", function(n, t, i, r, u, f) {
    return {
        restrict: "A",
        scope: {
            chatViewModel: "=",
            chatLibrary: "="
        },
        link: function(e, o, s) {
            var h = "https://www." + s.domain,
                l = "https://www." + s.domain,
                c;
            e.chatViewModel = {
                chatDomain: h,
                friendsDict: {},
                friendsHasConversation: [],
                chatUserDict: {},
                signalRDomain: l,
                signalRHubName: "userNotificationHub",
                convIdsForInvitedParties: [],
                invitedParties: {}
            }, e.chatLibrary.domain = s.domain, e.chatLibrary.gamesPageLink = s.gamespagelink, r.party.gamesPageLink = s.gamespagelink, e.chatLibrary.userId = parseInt(s.userid), e.chatLibrary.spinner = s.spinner, e.chatLibrary.deviceType = s.devicetype, e.chatLibrary.inApp = s.inapp === "true", e.chatLibrary.togglechatbarenabled = s.togglechatbarenabled === "true", e.chatLibrary.tabletInApp = s.devicetype === r.deviceType.TABLET && s.inapp === "true", e.chatLibrary.phoneInApp = s.devicetype === r.deviceType.PHONE && s.inapp === "true", e.chatLibrary.maxNumberOfPartyMembers = s.numberofmembersforpartychrome, e.chatLibrary.quotaOfPartyMembers = s.numberofmembersforpartychrome - 1, e.chatLibrary.intervalOfChangeTitleForPartyChrome = s.intervalofchangetitleforpartychrome, e.chatLibrary.audio = i.load(Roblox.Chat.SoundFile), e.chatLibrary.cookieOption = {
                domain: s.domain,
                path: "/",
                expires: null
            }, e.chatLibrary.dialogLocalStorageName = "dialogLibrary_" + s.domain, e.chatLibrary.cleanPartyFromConversationEnabled = s.cleanpartyfromconversationenabled === "true", e.chatLibrary.initialConversationToDisplay = s.initialconversationtodisplay, e.chatLibrary.isClientSideUrlParseEnabled = s.isclientsideurlparseenabled === "true", c = e.chatLibrary.inApp ? f.eventActions.ChatEmbedded : f.eventActions.Chat, c += ": " + f.getUserAgent(), e.chatLibrary.googleAnalyticsEvent = {
                category: f.eventCategories.JSErrors,
                action: c
            }, n.setParams(h), n.setAvatarHeadshotsMultigetLimit(s.avatarheadshotsmultigetlimit), n.setUserPresenceMultigetLimit(s.userpresencemultigetlimit), t.setParams(h), r.setInApp(e.chatLibrary.inApp), e.chatLibrary.layout = {
                inputHeight: 32,
                topBarHeight: 32,
                dialogHeight: 320,
                bannerHeight: 40,
                searchHeight: 34
            }, e.chatLibrary.inApp && (e.chatLibrary.inAppLayout = {}, u.getTopBarHeight(function(n, t) {
                e.chatLibrary.inAppLayout = {
                    inputHeight: e.chatLibrary.tabletInApp ? r.chatLayout.heightOfTabletInput : r.chatLayout.heightOfMobileInput,
                    topBarHeight: parseInt(t.topBarHeight),
                    dialogHeight: "100%",
                    bannerHeight: 40,
                    searchHeight: 42
                }, r.setInAppLayout(e.chatLibrary)
            })), e.chatLibrary.tabletInApp && (e.chatLibrary.chatPlaceholderEnabled = !0)
        }
    }
}]);; // ~/viewapp/pages/chat/controllers/chatController.js
"use strict";
chat.controller("chatController", ["$scope", "chatService", "partyService", "messageService", "chatUtility", "chatClientStorageUtilityService", "localStorageService", "chatHybridService", "performanceService", "googleAnalyticsEventsService", "$window", "$document", "$log", function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    var p = function(t) {
            n.chatLibrary.dialogDict[t] && (n.chatLibrary.dialogDict[t].isUpdated = !0, n.chatLibrary.dialogDict[t].updateStatus = u.dialogStatus.REFRESH)
        },
        ht = function() {
            var t = c.innerWidth,
                i = t - u.chatLayout.widthOfChat - u.chatLayout.widthOfDialogMinimize,
                r = u.chatLayout.widthOfDialog + u.chatLayout.spaceOfDialog;
            n.chatLibrary.chatLayout.availableNumberOfDialogs = Math.floor(i / r), n.chatLibrary.chatLayout.numberOfDialogs = n.chatLibrary.dialogIdList.length, a.debug(" -------------numberOfDialogs = -------------- " + n.chatLibrary.chatLayout.numberOfDialogs), a.debug(" -------------availableNumberOfDialogs = -------------- " + n.chatLibrary.chatLayout.availableNumberOfDialogs)
        },
        lt = function() {
            var t = c.innerWidth;
            return n.chatLibrary.chatLayout.numberOfDialogs >= n.chatLibrary.chatLayout.availableNumberOfDialogs && t > u.chatLayout.thresholdMobile
        },
        wt = function() {
            var t = c.innerWidth;
            return n.chatLibrary.chatLayout.numberOfDialogs < n.chatLibrary.chatLayout.availableNumberOfDialogs && t > u.chatLayout.thresholdMobile
        },
        k = function(t, i) {
            var r, f, e;
            if (n.chatLibrary.inApp && (n.chatLibrary.dialogIdList.forEach(function(t) {
                    n.closeDialog(t)
                }), n.chatLibrary.dialogIdList = []), ht(), lt() && n.chatLibrary.deviceType === u.deviceType.COMPUTER)
                while (n.chatLibrary.dialogIdList.length >= n.chatLibrary.chatLayout.availableNumberOfDialogs) {
                    if (r = n.chatLibrary.dialogIdList.pop(), angular.isUndefined(r)) break;
                    n.chatLibrary.dialogDict[r].isUpdated = !0, n.chatLibrary.dialogDict[r].updateStatus = u.dialogStatus.MINIMIZE, f = n.chatLibrary.minimizedDialogIdList.indexOf(t), f > -1 && (n.chatLibrary.minimizedDialogIdList.splice(f, 1), delete n.chatLibrary.minimizedDialogData[t])
                }
            n.chatLibrary.dialogIdList.push(t), e = angular.copy(u.dialogInitValue), angular.isDefined(i) && i && (e.autoOpen = !0), n.chatLibrary.dialogDict[t] = e
        },
        at = function(t, i) {
            n.chatLibrary.dialogDict[t] && (n.chatLibrary.dialogDict[t].markAsActive = !0, n.chatLibrary.dialogDict[t].activeType = i)
        },
        y = function(t) {
            n.chatLibrary.dialogDict[t.layoutId] && p(t.layoutId), n.chatLibrary.deviceType === u.deviceType.COMPUTER && !n.chatLibrary.dialogDict[t.layoutId] && (t.dialogType === u.dialogType.PENDINGPARTY || t.DisplayMessage && t.DisplayMessage.Content) && n.launchDialog(t.layoutId, !0)
        },
        yt = function(t, i) {
            n.chatLibrary.partyIds.indexOf(t) < 0 && (n.chatLibrary.partyIds.push(t), n.chatLibrary.partiesDict[t] = {
                conversationId: i.Id,
                layoutId: i.layoutId
            }), n.chatLibrary.partyIds.length > 0 && (n.chatLibrary.party.isPartyExisted = !0)
        },
        dt = function(i) {
            i.length > 0 && t.multiGetLatestMessages(i, u.chatApiParams.pageSizeOfDisplayMessages).then(function(t) {
                angular.forEach(t, function(t) {
                    var i = t.ChatMessages,
                        e = i.length > 0 ? i[0] : {},
                        f;
                    n.chatLibrary.conversationsDict[t.ConversationId] && (f = n.chatLibrary.conversationsDict[t.ConversationId].layoutId, u.sanitizeMessage(e), n.chatUserDict[f].DisplayMessage = e, r.resetConversationUnreadStatus(n.chatUserDict[f], i))
                })
            }, function() {
                a.debug("----- multiGetLatestMessages request is failed ! ------")
            })
        },
        g = function() {
            (n.chatLibrary.chatLayout.collapsed || n.chatLibrary.inApp) && t.getUnreadConversationCount().then(function(t) {
                n.chatViewModel.conversationCount = t, n.chatLibrary.inApp && o.setNewMessageNotification(t)
            }, function() {
                a.debug("----- getUnreadConversationCount request is failed ! ------")
            })
        },
        et = function(i) {
            var r = [];
            r.push(i), t.getConversations(r).then(function(t) {
                n.buildChatUserListByUnreadConversations(t)
            }, function() {
                a.debug(" -------- fetchConversation request failed ------ ")
            })
        },
        ct = function(i, f) {
            var o = n.getLayoutId(i, u.dialogType.CHAT),
                e;
            angular.isUndefined(n.chatUserDict[o]) ? et(i) : (e = n.chatUserDict[o], t.getMessages(i, null, u.dialogParams.pageSizeOfGetMessages).then(function(i) {
                if (i && i.length > 0 && (r.appendMessages(e, i), n.updateChatViewModel(e, !0), y(e), !f)) {
                    at(e.layoutId, u.activeType.NEWMESSAGE);
                    var o = u.getDataForMarkingSeen(n.chatUserDict);
                    o.length > 0 && t.markAsSeen(o)
                }
            }, function() {}))
        },
        st = function(i, r, f, e) {
            var o, s;
            i.party = r, i.dialogType = !i.IsGroupChat && f ? u.dialogType.CHAT : u.dialogType.PENDINGPARTY, i.incomingPartyInvite = !0, i.pendingPartyMsg = u.party.partyInviteMsg, n.getUserInfoForConversation(i), o = i.layoutId, n.chatLibrary.dialogDict[o] && p(o), e === r.Id && (y(i), f || (at(i.layoutId, u.activeType.PARTYINVITE), s = u.getDataForMarkingSeen(n.chatUserDict), s.length > 0 && t.markAsSeen(s))), n.chatLibrary.pendingPartiesDict[r.Id] = {
                conversationId: i.Id,
                layoutId: i.layoutId
            }
        },
        b = function(r, f) {
            i.getInvitedParties(n.partyApiParams.pageNumberOfPartyInvites, n.partyApiParams.pageSizeOfPartyInvites).then(function(i) {
                var s = n.chatUserDict,
                    e = i,
                    o = !1;
                e.length > 0 ? (e.forEach(function(t) {
                    t && (angular.equals({}, s) || angular.forEach(s, function(n) {
                        n.isConversation && t.ConversationId === n.Id && (st(n, t, f, r), o = !0)
                    }), o || (n.convIdsForInvitedParties.push(t.ConversationId), n.invitedParties[t.ConversationId] = t))
                }), e.length === n.partyApiParams.pageSizeOfPartyInvites && (n.partyApiParams.pageNumberOfPartyInvites++, n.partyApiParams.loadMoreInvitedParties = !0, b(r, f)), o || (t.getConversations(n.convIdsForInvitedParties).then(function(t) {
                    var i = [];
                    t.forEach(function(t) {
                        var e = n.invitedParties[t.Id],
                            s = n.chatLibrary.userId === e.LeaderUser.Id ? u.dialogType.PARTY : u.dialogType.PENDINGPARTY,
                            o = n.getLayoutId(t.Id, u.dialogType.PENDINGPARTY);
                        n.chatUserDict[o] ? (st(n.chatUserDict[o], e, f, r), n.updateChatViewModel(n.chatUserDict[o], !0)) : (t.party = e, t.dialogType = s, i.push(t))
                    }), i.length > 0 && n.buildChatUserListByConversations(i, !0), n.convIdsForInvitedParties = [], n.invitedParties = {}
                }), n.partyApiParams.loadMoreInvitedParties = !1)) : n.partyApiParams.loadMoreInvitedParties = !1
            })
        },
        vt = function(n) {
            n.party = null, n.placeThumbnail = null, n.dialogType = n.IsGroupChat ? u.dialogType.GROUPCHAT : u.dialogType.CHAT, p(n.layoutId)
        },
        ui = function(t) {
            var i = !1,
                r, f, e;
            u.deleteParty(n.chatLibrary, n.chatUserDict, t), n.chatLibrary.pendingPartiesDict[t] && (i = !0, r = n.chatLibrary.pendingPartiesDict[t].layoutId, f = n.chatUserDict[r], vt(f)), n.chatLibrary.cleanPartyFromConversationEnabled && !i && (e = n.chatUserDict, angular.forEach(e, function(n) {
                n.isConversation && n.party && n.party.Id === t && (i = !0, vt(n))
            }))
        },
        ii = function(n, t) {
            var i, r;
            if (angular.isDefined(n.party))
                for (n.newJoinedUsernames = "", i = 0; i < t.MemberUsers.length; i++)
                    if (r = t.MemberUsers[i], !n.membersDict[r.Id] || n.membersDict[r.Id].memberStatus === u.memberStatus.PENDING) {
                        n.newJoinedUsernames = r.Name;
                        break
                    } n.party = t
        },
        d = function(f) {
            i.getCurrentParty().then(function(e) {
                var s;
                if (e) {
                    u.cleanPartyList(n.chatLibrary, n.chatUserDict, e.Id);
                    var c = e.ConversationId,
                        h = n.getLayoutId(c, u.dialogType.PARTY),
                        o = n.chatUserDict[h];
                    n.chatLibrary.partiesDict[e.Id] || yt(e.Id, o), o.dialogType = u.dialogType.PARTY, ii(o, e), o.party.LeaderUser.Id === n.chatLibrary.userId && (n.chatLibrary.party.isPartyLeader = !0), o.party.GamePlaceId && o.party.LeaderUser.Id !== n.chatLibrary.userId && i.joinGame(o, n.chatLibrary.inApp), o.party.GamePlaceId && !o.placeThumbnail && i.getPlace(o.party.GamePlaceId).then(function(n) {
                        o.placeThumbnail = n
                    }), p(h), n.getUserInfoForConversation(o), n.updateChatViewModel(o, !0), angular.isDefined(f) && r.buildSystemMessage(f, o), s = u.getDataForMarkingSeen(n.chatUserDict), s.length > 0 && t.markAsSeen(s)
                } else u.cleanPartyList(n.chatLibrary, n.chatUserDict, null)
            }, function() {
                a.debug(" -------- getCurrentParty request failed ------ ")
            })
        },
        ti = function() {
            angular.isDefined(n.preSetChatLibrary) && angular.isDefined(n.preSetChatLibrary.dialogIdList) && (n.chatLibrary.dialogIdList = n.preSetChatLibrary.dialogIdList, angular.forEach(n.preSetChatLibrary.dialogDict, function(t, i) {
                t.isUpdated || (t.isUpdated = !0), i === u.newGroup.layoutId && (n.chatUserDict[u.newGroup.layoutId] = n.newGroup), n.chatLibrary.dialogDict[i] = t, n.preSetChatLibrary.dialogsLayout[i] && (n.chatLibrary.dialogsLayout[i] = n.preSetChatLibrary.dialogsLayout[i])
            }))
        },
        ft = function() {
            return c.innerWidth >= u.chatLayout.thresholdChatBarOpen && !n.chatLibrary.isTakeOverOn && !angular.element(document.querySelector("#GamesPageLeftColumn")).length
        },
        ni = function() {
            if (!n.chatLibrary.inApp) {
                var t = {
                    collapsed: n.chatLibrary.chatLayout.collapsed
                };
                f.updateStorage(f.storageDictionary.chatBarLayout, t, n.chatLibrary.cookieOption)
            }
        },
        ut = function() {
            n.chatUserDict = {}, n.dialogType = angular.copy(u.dialogType), n.deviceType = angular.copy(u.deviceType), n.memberStatus = angular.copy(u.memberStatus), n.userPresenceTypes = angular.copy(u.userPresenceTypes), n.newGroup = angular.copy(u.newGroup), n.newParty = angular.copy(u.newParty), n.party = angular.copy(u.party), n.selectedFriendIds = [], n.chatLibrary = {
                partyIds: [],
                partiesDict: {},
                pendingPartiesDict: {},
                conversationsDict: {},
                userConversationsDict: {},
                friendIds: [],
                friendLayoutIds: [],
                friendsDict: {},
                chatLayout: angular.copy(u.chatLayout),
                chatLayoutIds: [],
                layoutIdList: [],
                dialogIdList: [],
                dialogDict: {},
                dialogsLayout: {},
                party: u.party,
                minimizedDialogIdList: [],
                minimizedDialogData: {},
                isTakeOverOn: angular.element(document.querySelector("#wrap")).data("gutter-ads-enabled"),
                currentTabTitle: c.document.title,
                dialogScopeLib: {}
            }, n.convIdsForInvitedParties = [], n.invitedParties = {}
        },
        rt = function() {
            n.preSetChatLibrary = {}, n.chatLibrary.phoneInApp || (n.preSetChatLibrary = f.isStorageDefined(f.storageDictionary.dialogIdList) && f.isStorageDefined(f.storageDictionary.dialogDict) ? {
                dialogIdList: f.getFromStorage(f.storageDictionary.dialogIdList),
                dialogDict: f.getFromStorage(f.storageDictionary.dialogDict),
                dialogsLayout: f.isStorageDefined(f.storageDictionary.dialogsLayout) ? f.getFromStorage(f.storageDictionary.dialogsLayout) : {}
            } : {
                dialogIdList: [],
                dialogDict: {},
                dialogsLayout: {}
            }, f.isStorageDefined(f.storageDictionary.chatBarLayout) && (n.preSetChatLibrary.chatBarLayout = f.getFromStorage(f.storageDictionary.chatBarLayout))), n.chatApiParams = angular.copy(u.chatApiParams), n.partyApiParams = angular.copy(u.partyApiParams)
        },
        ri = function() {
            n.chatLibrary.inApp ? (n.chatLibrary.chatLayout.collapsed = !1, n.chatLibrary.chatLayout.chatBarInitialized = !0) : n.chatLibrary.inApp || n.chatLibrary.chatLayout.chatBarInitialized || (ft() && !n.preSetChatLibrary.chatBarLayout ? n.chatLibrary.chatLayout.collapsed = !1 : n.preSetChatLibrary.chatBarLayout ? n.chatLibrary.chatLayout.collapsed = n.preSetChatLibrary.chatBarLayout.collapsed : ft() || (n.chatLibrary.chatLayout.collapsed = !0), n.chatLibrary.chatLayout.chatBarInitialized = !0), s.logSinglePerformanceMark(u.performanceMarkLabels.chatPageDataLoaded)
        },
        kt = function(t) {
            if (n.chatLibrary.friendIds.indexOf(t.Id) < 0 && n.chatLibrary.friendIds.push(t.Id), n.chatLibrary.friendsDict[t.Id] || (n.chatLibrary.friendsDict[t.Id] = angular.copy(t)), n.chatViewModel.friendsHasConversation.indexOf(t.Id) < 0) {
                var i = n.getLayoutId(t.Id, u.dialogType.FRIEND);
                t.layoutId = i, t.isConversation = !1, t.dialogType = u.dialogType.FRIEND, n.chatLibrary.friendLayoutIds.indexOf(i) < 0 && n.chatLibrary.friendLayoutIds.push(i), n.updateChatViewModel(t, !1), n.chatLibrary.chatLayout.chatLandingEnabled && (n.chatLibrary.chatLayout.chatLandingEnabled = !1)
            }
        },
        v = function(t, i) {
            var r = n.chatLibrary.layoutIdList.indexOf(t);
            i && r > -1 ? n.chatLibrary.layoutIdList.splice(r, 1) : !i && r < 0 && n.chatLibrary.layoutIdList.push(t)
        },
        tt = function(t) {
            return n.chatLibrary.userConversationsDict[t] ? n.chatLibrary.userConversationsDict[t] : null
        },
        bt = function(t) {
            var i = tt(t),
                r, e, f, o;
            i || (i = n.getLayoutId(t, u.dialogType.FRIEND)), r = n.chatUserDict[i], r.isConversation ? (e = n.chatUserDict[i].Id, n.chatLibrary.conversationsDict[e].remove = !0) : r && (f = n.chatLibrary.chatLayoutIds.indexOf(i), f > -1 && (n.chatLibrary.chatLayoutIds.splice(f, 1), delete n.chatUserDict[i], v(i, !0))), n.chatViewModel.friendsHasConversation.indexOf(t) > -1 && (o = n.chatViewModel.friendsHasConversation.indexOf(t), n.chatViewModel.friendsHasConversation.splice(o, 1)), n.chatLibrary.chatLayoutIds.indexOf(i) > -1 && n.closeDialog(i), n.chatLibrary.chatLayoutIds.length === 0 && (n.chatLibrary.chatLayout.chatLandingEnabled = !0)
        },
        nt = function() {
            if (window && window.location) {
                a.debug("--- -initialzeUrlParser- ---");
                var t = window.location.search;
                t && t.indexOf("?") > -1 && (t = t.substr(1), t.split("&").forEach(function(t) {
                    var i = t.split("="),
                        u = i[0],
                        r = decodeURIComponent(i[1]);
                    switch (u) {
                        case o.urlParamNames.startConversationWithUserid:
                            n.startSpecificConversationFromUserId(r);
                            break;
                        case o.urlParamNames.conversationId:
                            n.chatLibrary.chatLayout.urlParseInitialized = !0, n.startSpecificConversationFromConvId(r)
                    }
                }))
            }
        },
        w = function(t) {
            n.buildChatUserListByFriends(n.chatApiParams.startIndexOfFriendList, n.chatApiParams.pageSizeOfFriendList, t).then(function(t) {
                n.chatApiParams.startIndexOfFriendList !== 0 || t && t.length !== 0 || (n.chatLibrary.chatLayout.chatLandingEnabled = !0), t && t.length > 0 && n.filterFriends(t), t && t.length === n.chatApiParams.pageSizeOfFriendList ? (n.chatApiParams.startIndexOfFriendList = +n.chatApiParams.startIndexOfFriendList + n.chatApiParams.pageSizeOfFriendList, w()) : (n.chatApiParams.startIndexOfFriendList = 0, n.chatApiParams.loadMoreFriends = !1), n.chatLibrary.isClientSideUrlParseEnabled && (n.chatLibrary.chatLayout.urlParseInitialized || nt())
            })
        },
        ot;
    n.getUserConversations = function() {
        t.getUserConversations(n.chatApiParams.pageNumberOfConversations, n.chatApiParams.pageSizeOfConversations).then(function(t) {
            s.logSinglePerformanceMark(u.performanceMarkLabels.chatConversationsLoaded), t && t.length > 0 && (n.refreshFriendsDict(), n.buildChatUserListByConversations(t, !1), n.chatApiParams.pageNumberOfConversations++, n.chatApiParams.pageNumberOfPartyInvites++, ti()), !t || t.length < n.chatApiParams.pageSizeOfConversations ? (n.chatApiParams.loadMoreConversations = !1, n.chatApiParams.pageNumberOfConversations = 1, w(), t.length === 0 && (n.chatLibrary.chatLayout.chatLandingEnabled = !0)) : n.chatApiParams.loadMoreConversations = !0, n.chatLibrary.chatLayout.pageDataLoading && (n.chatLibrary.chatLayout.pageDataLoading = !1), n.chatLibrary.isClientSideUrlParseEnabled ? n.chatLibrary.chatLayout.urlParseInitialized || nt() : pt()
        }, function() {
            a.debug("--getConversations-error---")
        })
    };
    var it = function() {
            n.chatUserDict && n.chatLibrary || ut(), s.logSinglePerformanceMark(u.performanceMarkLabels.chatConversationsLoading), g(), n.getUserConversations()
        },
        pt = function() {
            try {
                if (n.chatLibrary.inApp && n.chatLibrary.initialConversationToDisplay) {
                    var t = n.chatLibrary.initialConversationToDisplay;
                    a.debug("--attempting to open specific conversation on load: " + t + "--"), n.launchDialog("conv_" + t)
                }
            } catch (i) {
                a.debug("--attempt to redirect to specific conversation on load-error---" + i)
            }
        },
        gt = function() {
            if (angular.isDefined(Roblox.RealTime)) {
                s.logSinglePerformanceMark(u.performanceMarkLabels.chatSignalRInitializing);
                var i = Roblox.RealTime.Factory.GetClient();
                i.SubscribeToConnectionEvents(n.handleSignalRSuccess, n.handleSignalRSuccess, n.handleSignalRError), i.Subscribe("ChatNotifications", function(t) {
                    var r, i;
                    a.debug("--------- this is ChatNotifications subscription -----------" + t.Type);
                    try {
                        switch (t.Type) {
                            case u.notificationType.newMessage:
                                ct(t.ConversationId);
                                break;
                            case u.notificationType.newMessageBySelf:
                                ct(t.ConversationId, !0);
                                break;
                            case u.notificationType.newConversation:
                            case u.notificationType.addedToConversation:
                            case u.notificationType.participantAdded:
                            case u.notificationType.participantLeft:
                                et(t.ConversationId);
                                break;
                            case u.notificationType.removedFromConversation:
                                r = n.chatLibrary.conversationsDict[t.ConversationId].layoutId, n.chatLibrary.conversationsDict[t.ConversationId].remove = !0, n.closeDialog(r)
                        }
                    } catch (f) {
                        i = "ChatNotifications:" + t.Type + ": ", f && f.message && (i += f.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, i)
                    }
                }), n.chatLibrary.inApp || i.Subscribe("PartyNotifications", function(t) {
                    a.debug("--------- this is PartyNotifications subscription -----------" + t.Type);
                    try {
                        switch (t.Type) {
                            case u.notificationType.invitedToParty:
                                n.partyApiParams.loadMoreInvitedParties || b(t.PartyId);
                                break;
                            case u.notificationType.iLeftParty:
                                n.partyApiParams.loadMoreInvitedParties || b(t.PartyId, !0);
                                break;
                            case u.notificationType.partyUserLeft:
                            case u.notificationType.partyLeftGame:
                                n.partyApiParams.loadMoreCurrentParty || d();
                                break;
                            case u.notificationType.partyJoinedGame:
                                n.partyApiParams.loadMoreCurrentParty || d();
                                break;
                            case u.notificationType.partyDeleted:
                                ui(t.PartyId);
                                break;
                            case u.notificationType.partyUserJoined:
                                n.partyApiParams.loadMoreInvitedParties || b(t.PartyId);
                            case u.notificationType.iCreatedParty:
                            case u.notificationType.iJoinedParty:
                                n.partyApiParams.loadMoreCurrentParty || d(t.Type)
                        }
                    } catch (r) {
                        var i = "PartyNotifications:" + t.Type + ": ";
                        r && r.message && (i += r.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, i)
                    }
                }), i.Subscribe("FriendshipNotifications", function(t) {
                    var i, e, r;
                    a.debug("--------- this is FriendshipNotifications subscription -----------" + t.Type);
                    try {
                        i = +new Date;
                        switch (t.Type) {
                            case u.notificationType.friendshipDestroyed:
                                e = t.EventArgs, angular.forEach(e, function(t) {
                                    t !== n.chatLibrary.userId && n.$digest(bt(t))
                                }), f.updateChatFriendsListReloadTime(i), l.triggerHandler("Roblox.Friends.CountChanged");
                                break;
                            case u.notificationType.friendshipCreated:
                                w(i), f.updateChatFriendsListReloadTime(i), l.triggerHandler("Roblox.Friends.CountChanged")
                        }
                    } catch (o) {
                        r = "FriendshipNotifications:" + t.Type + ": ", o && o.message && (r += o.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, r)
                    }
                }), i.Subscribe("PresenceNotifications", function(i) {
                    var r, f;
                    a.debug("--------- this is PresenceNotifications subscription -----------" + i.Type);
                    try {
                        switch (i.Type) {
                            case u.notificationType.presenceOnline:
                            case u.notificationType.presenceOffline:
                                n.chatLibrary.friendsDict[i.UserId] && (r = n.chatLibrary.friendsDict[i.UserId], t.getUserPresence(r).then(function(t) {
                                    n.chatLibrary.friendsDict[r.Id].UserPresenceType = t.UserPresenceType
                                }, function() {
                                    a.debug(" ----- getUserPresence failed -----")
                                }))
                        }
                    } catch (e) {
                        f = "PresenceNotifications:" + i.Type + ": ", e && e.message && (f += e.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, f)
                    }
                })
            }
        };
    n.handleSignalRSuccess = function() {
        if (a.debug(" -------- Signal R is connected ------ "), n.chatLibrary.chatLayout.errorMaskEnable = !1, n.chatLibrary.chatLayout.pageInitializing) {
            s.logSinglePerformanceMark(u.performanceMarkLabels.chatSignalRSucceeded), n.chatLibrary.chatLayout.pageInitializing = !1;
            return
        }
        try {
            rt(), it()
        } catch (i) {
            var t = "handleSignalRSuccess: ";
            i && i.message && (t += i.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, t)
        }
    }, n.handleSignalRError = function() {
        a.debug(" -------- Signal R is disconnected ------ "), n.chatLibrary.chatLayout.errorMaskEnable = !0
    }, n.isPartyLeader = function() {
        return n.chatLibrary.party.isPartyLeader
    }, n.onResize = function() {
        var t;
        if (n.chatLibrary.chatLayout.numberOfDialogs > n.chatLibrary.chatLayout.availableNumberOfDialogs)
            while (n.chatLibrary.dialogIdList.length > n.chatLibrary.chatLayout.availableNumberOfDialogs) {
                if (a.debug(" -------------overflow ------ $scope.chatLibrary.dialogIdList.length ------------- " + n.chatLibrary.dialogIdList.length), t = n.chatLibrary.dialogIdList.pop(), angular.isUndefined(t)) break;
                t && n.chatLibrary.dialogDict[t] && (n.chatLibrary.dialogDict[t].isUpdated = !0, n.chatLibrary.dialogDict[t].updateStatus = u.dialogStatus.MINIMIZE)
            } else if (n.chatLibrary.chatLayout.numberOfDialogs < n.chatLibrary.chatLayout.availableNumberOfDialogs)
                while (n.chatLibrary.dialogIdList.length < n.chatLibrary.chatLayout.availableNumberOfDialogs) {
                    if (a.debug(" -------------fit ------ $scope.chatLibrary.dialogIdList.length ------------- " + n.chatLibrary.dialogIdList.length), t = n.chatLibrary.minimizedDialogIdList.pop(), angular.isUndefined(t)) break;
                    t && n.chatLibrary.minimizedDialogData[t] && (delete n.chatLibrary.minimizedDialogData[t], n.chatLibrary.dialogIdList.push(t), n.chatLibrary.dialogDict[t] = angular.copy(u.dialogInitValue))
                }
        n.chatLibrary.chatLayout.resizing = !1
    }, n.toggleChatContainer = function() {
        n.chatLibrary.togglechatbarenabled && (n.chatLibrary.chatLayout.collapsed = !n.chatLibrary.chatLayout.collapsed, g(), n.chatLibrary.chatLayout.chatBarInitialized = !0, ni())
    }, n.getLayoutId = function(n, t) {
        switch (t) {
            case u.dialogType.FRIEND:
                return "friend_" + n;
            case u.dialogType.CHAT:
            case u.dialogType.GROUPCHAT:
            case u.dialogType.PENDINGPARTY:
            case u.dialogType.ADDFRIENDS:
            case u.dialogType.PARTY:
                return "conv_" + n;
            case u.dialogType.NEWPARTY:
                return u.newParty.dialogType;
            case u.dialogType.NEWGROUPCHAT:
                return u.newGroup.dialogType
        }
    }, n.getUserInfoForConversation = function(i) {
        if (i.ParticipantUsers) {
            if (i.userIds = [], i.dialogType === n.dialogType.PARTY || i.dialogType === n.dialogType.PENDINGPARTY) {
                var r = i.party;
                i.membersDict = {}, angular.forEach(r.MemberUsers, function(n) {
                    i.membersDict[n.Id] || (i.membersDict[n.Id] = n.Id !== r.LeaderUser.Id ? {
                        memberStatus: u.memberStatus.MEMBER,
                        statusTooltip: u.party.partyMemberTooltip
                    } : {
                        memberStatus: u.memberStatus.LEADER,
                        statusTooltip: u.party.partyLeaderTooltip
                    })
                })
            }
            i.groupName = "", i.ParticipantUsers.forEach(function(r) {
                switch (i.dialogType) {
                    case n.dialogType.PENDINGPARTY:
                    case n.dialogType.PARTY:
                        i.membersDict[r.Id] ? i.membersDict[r.Id].memberStatus === u.memberStatus.LEADER || i.userIds.length === 0 ? i.userIds.unshift(r.Id) : i.membersDict[r.Id].memberStatus === u.memberStatus.MEMBER ? i.userIds.splice(1, 0, r.Id) : i.userIds.push(r.Id) : (i.userIds.push(r.Id), i.membersDict[r.Id] = {
                            memberStatus: u.memberStatus.PENDING,
                            statusTooltip: n.chatLibrary.party.pendingMemberTooltip
                        }), r.Id !== n.chatLibrary.userId && (i.groupName = i.groupName ? i.groupName + ", " + r.Username : r.Username), i.IsGroupChat || r.Id === n.chatLibrary.userId ? i.IsGroupChat && (i.partyName = u.newParty.partyName + i.groupName) : i.partyName = u.newParty.partyName + r.Username;
                        break;
                    case n.dialogType.GROUPCHAT:
                        i.userIds.push(r.Id), r.Id !== n.chatLibrary.userId && (i.groupName = i.groupName ? i.groupName + ", " + r.Username : r.Username);
                        break;
                    case n.dialogType.CHAT:
                        r.Id !== n.chatLibrary.userId && (i.userIds.push(r.Id), i.displayUserId = r.Id, i.Username = r.Username);
                        break;
                    default:
                        i.userIds.push(r.Id)
                }
                n.chatLibrary.friendsDict[r.Id] || t.getUserInfo(r).then(function(t) {
                    t && r.Id === t.Id && (n.chatLibrary.friendsDict[r.Id] = t)
                }, function() {
                    a.debug(" ----- getUserInfo failed -----")
                }), !i.IsGroupChat && n.chatViewModel.friendsHasConversation.indexOf(r.Id) < 0 && n.chatViewModel.friendsHasConversation.push(r.Id)
            })
        }
    }, n.updateChatViewModel = function(t, i) {
        var r, f, e;
        t.IsGroupChat || t.dialogType !== u.dialogType.CHAT || t.ParticipantUsers.forEach(function(i) {
            if (i.Id !== n.chatViewModel.userId) {
                var r = n.getLayoutId(i.Id, u.dialogType.FRIEND),
                    f = n.chatLibrary.chatLayoutIds.indexOf(r);
                f > -1 && (n.chatLibrary.chatLayoutIds.splice(f, 1), delete n.chatUserDict[r]), v(r, !0), n.chatLibrary.userConversationsDict[i.Id] = t.layoutId
            }
        });
        switch (t.dialogType) {
            case n.dialogType.PENDINGPARTY:
                t.pendingPartyMsg = u.party.partyInviteMsg, t.incomingPartyInvite = !1, t.name = t.groupName;
                break;
            case n.dialogType.PARTY:
                yt(t.party.Id, t), t.incomingPartyInvite = !1, t.name = t.partyName;
                break;
            case n.dialogType.GROUPCHAT:
                t.name = t.groupName;
                break;
            case n.dialogType.CHAT:
                t.name = t.Username;
                break;
            default:
                angular.isDefined(t.Username) && (t.name = t.Username)
        }
        n.chatUserDict[t.layoutId] = t, r = n.chatLibrary.chatLayoutIds.indexOf(t.layoutId), r > -1 && n.chatLibrary.chatLayoutIds.splice(r, 1), t.isConversation && (i ? n.chatLibrary.chatLayoutIds.length > 0 && t.dialogType !== u.dialogType.PARTY ? (f = n.chatLibrary.chatLayoutIds[0], e = n.chatUserDict[f], e.dialogType === u.dialogType.PARTY ? n.chatLibrary.chatLayoutIds.splice(1, 0, t.layoutId) : n.chatLibrary.chatLayoutIds.unshift(t.layoutId)) : n.chatLibrary.chatLayoutIds.unshift(t.layoutId) : t.dialogType && t.dialogType === u.dialogType.PARTY ? n.chatLibrary.chatLayoutIds.unshift(t.layoutId) : n.chatLibrary.chatLayoutIds.push(t.layoutId)), v(t.layoutId), t.isConversation && !n.chatLibrary.conversationsDict[t.Id] && (n.chatLibrary.conversationsDict[t.Id] = angular.copy(u.conversationInitStatus), n.chatLibrary.conversationsDict[t.Id].layoutId = t.layoutId)
    }, n.refreshFriendsDict = function() {
        var i = t.getFriendsDict();
        angular.forEach(i, function(t) {
            n.chatLibrary.friendsDict[t.Id] = t
        })
    }, n.filterFriends = function(t) {
        var i = [],
            r;
        t = u.sortFriendList(n.chatLibrary, t), n.chatLibrary.friendIds = [], n.chatLibrary.friendLayoutIds = [], t.forEach(function(n) {
            kt(n)
        }), n.chatLibrary.chatLayoutIds.forEach(function(t) {
            n.chatUserDict[t].isConversation && i.push(t)
        }), r = i.concat(n.chatLibrary.friendLayoutIds), n.chatLibrary.chatLayoutIds = r
    }, n.buildChatUserListByFriends = function(i, r, u) {
        return n.chatApiParams.loadMoreConversations = !1, n.chatApiParams.loadMoreFriends = !0, t.getFriends(n.chatLibrary.userId, i, r, u)
    }, n.buildChatUserListByUnreadConversations = function(t) {
        t.forEach(function(t) {
            var e = n.getLayoutId(t.Id, u.dialogType.CHAT),
                f;
            n.chatUserDict[e] ? (f = n.chatUserDict[e], t.HasUnreadMessages && t.ChatMessages && t.ChatMessages.length > 0 && (f.HasUnreadMessages = !0, n.chatLibrary.dialogDict[e] && n.chatLibrary.dialogIdList.indexOf(e) > -1 && r.manipulateMessages(f, t.ChatMessages, n.chatLibrary.friendsDict), u.sanitizeMessage(t.ChatMessages[0]), f.DisplayMessage = t.ChatMessages[0], n.updateChatViewModel(f, !0)), f.ParticipantUsers = t.ParticipantUsers, f.dialogType === u.dialogType.PARTY ? i.getCurrentParty().then(function(t) {
                t && (f.party = t, n.getUserInfoForConversation(f))
            }) : n.getUserInfoForConversation(f), y(f)) : (t.layoutId = e, t.isConversation = !0, t.dialogType = t.IsGroupChat ? u.dialogType.GROUPCHAT : u.dialogType.CHAT, n.getUserInfoForConversation(t), n.updateChatViewModel(t, !0), y(t))
        })
    }, n.buildChatUserListByConversations = function(t, i) {
        var r = [];
        t.forEach(function(t) {
            var f = n.getLayoutId(t.Id, t.dialogType);
            r.push(t.Id), t.layoutId = f, t.isConversation = !0, n.getUserInfoForConversation(t), n.updateChatViewModel(t, i), t.dialogType === u.dialogType.PARTY && t.party.LeaderUser.Id === n.chatLibrary.userId && (n.chatLibrary.party.isPartyLeader = !0)
        }), dt(r)
    }, n.cancelSearch = function() {
        n.chatViewModel.searchTerm = "", n.chatLibrary.chatLayout.searchFocus = !1
    }, n.launchDialog = function(i, r) {
        if (n.chatLibrary.tabletInApp && n.chatLibrary.dialogIdList.length > 0)
            for (var f = 0; f < n.chatLibrary.dialogIdList.length; f++) n.closeDialog(n.chatLibrary.dialogIdList[f]);
        n.chatLibrary.dialogIdList.indexOf(i) < 0 && i === u.newGroup.layoutId ? (k(i, r), n.chatUserDict[u.newGroup.layoutId] = n.newGroup) : n.chatLibrary.dialogIdList.indexOf(i) < 0 && n.chatUserDict[i] && (n.chatLibrary.inApp && !n.chatLibrary.tabletInApp && o.openDialog(), n.chatUserDict[i].isConversation ? k(i, r) : t.startOneToOneConversation(n.chatUserDict[i].Id).then(function(t) {
            var o = n.chatLibrary.chatLayoutIds.indexOf(i),
                f, e;
            n.chatLibrary.chatLayoutIds.splice(o, 1), delete n.chatUserDict[i], v(i, !0), f = t.Conversation, e = n.getLayoutId(f.Id, u.dialogType.CHAT), f.layoutId = e, f.isConversation = !0, f.dialogType = u.dialogType.CHAT, f.ChatMessages = [], n.getUserInfoForConversation(f), n.updateChatViewModel(f, !0), k(e, r)
        }, function() {
            a.debug(" ---- startOneToOneConversation ---- failed!")
        }))
    }, n.destroyDialogLayout = function(n) {
        angular.element(document.querySelector("#" + n)).empty()
    }, n.closeDialog = function(t) {
        var l = n.chatLibrary.dialogIdList.indexOf(t),
            i = n.chatUserDict[t],
            a, s, y, h, c, e;
        i && (a = u.getScrollBarSelector(i), s = angular.element(document.querySelector(a))), y = angular.element(document.querySelector("#chat-main")), l > -1 && (n.chatLibrary.dialogIdList.splice(l, 1), delete n.chatLibrary.dialogDict[t]), i && i.dialogType === u.dialogType.NEWPARTY && (n.chatLibrary.party.isPartyExisted = !1), i && i.dialogType === u.dialogType.NEWGROUPCHAT && (i.selectedUserIds = [], i.selectedUsersDict = {}, i.numberOfSelected = 0), s && s.length > 0 && s.mCustomScrollbar("destroy"), n.$broadcast("Roblox.Chat.MarkDialogInactive", {
            layoutId: t
        }), i && (h = i.Id, n.chatLibrary.conversationsDict[h] && n.chatLibrary.conversationsDict[h].remove ? (c = n.chatLibrary.chatLayoutIds.indexOf(t), c > -1 && i && (n.chatLibrary.chatLayoutIds.splice(c, 1), delete n.chatUserDict[t], angular.equals(n.chatUserDict, {}) && (n.chatLibrary.chatLayout.chatLandingEnabled = !0)), v(t, !0), n.chatLibrary.party.isPartyExisted = !1) : r.manipulateMessages(i, null)), n.chatLibrary.deviceType === u.deviceType.PHONE && y.removeClass("hidden"), n.destroyDialogLayout(t), n.chatLibrary.minimizedDialogIdList.length > 0 && (e = n.chatLibrary.minimizedDialogIdList.shift(), delete n.chatLibrary.minimizedDialogData[e], n.chatLibrary.dialogIdList.push(e), n.chatLibrary.dialogDict[e].isUpdated = !0, n.chatLibrary.dialogDict[e].updateStatus = u.dialogStatus.REPLACE), f.updateStorage(f.storageDictionary.dialogIdList, n.chatLibrary.dialogIdList, n.chatLibrary.cookieOption), f.updateStorage(f.storageDictionary.dialogDict, n.chatLibrary.dialogDict, n.chatLibrary.cookieOption), n.chatLibrary.dialogsLayout && n.chatLibrary.dialogsLayout[t] && (n.chatLibrary.dialogsLayout[t].collapsed = !1), n.chatLibrary.phoneInApp || (delete n.chatLibrary.dialogsLayout[t], f.updateStorage(f.storageDictionary.dialogsLayout, n.chatLibrary.dialogsLayout, n.chatLibrary.cookieOption)), n.chatLibrary.phoneInApp && o.closeDialog()
    }, n.validLayoutId = function(t, i) {
        if (!n.chatUserDict[t]) {
            switch (i) {
                case u.dialogType.FRIEND:
                    n.chatApiParams.loadMoreFriends ? w() : n.chatLibrary.chatLayout.urlParseInitialized = !0;
                    break;
                case u.dialogType.CHAT:
                default:
                    n.chatApiParams.loadMoreConversations ? n.getUserConversations() : n.chatLibrary.chatLayout.urlParseInitialized = !0
            }
            return !1
        }
        return !0
    }, n.startSpecificConversationFromUserId = function(t) {
        var i = tt(t),
            r = u.dialogType.CHAT;
        i || (i = n.getLayoutId(t, u.dialogType.FRIEND), r = u.dialogType.FRIEND), n.validLayoutId(i, r) && (n.chatLibrary.chatLayout.urlParseInitialized = !0, n.launchDialog(i, !0))
    }, n.startSpecificConversationFromConvId = function(t) {
        var i = n.getLayoutId(t, u.dialogType.CHAT);
        a.debug("--attempting to open specific conversation on load: " + t + "--"), n.validLayoutId(i, u.dialogType.CHAT) && (n.chatLibrary.chatLayout.urlParseInitialized = !0, n.launchDialog(i))
    }, ot = function() {
        angular.element(c).bind("resize", function() {
            !n.chatLibrary.chatLayout.resizing && n.chatLibrary.dialogIdList.length > 0 && (n.chatLibrary.chatLayout.resizing = !0, ht(), lt() || wt() ? (a.debug(" ------- need to resize -------------- "), n.onResize()) : n.chatLibrary.chatLayout.resizing = !1)
        }), n.$on("Roblox.Chat.destroyChatCookie", function() {
            f.removeFromStorage(f.storageDictionary.dialogIdList, n.chatLibrary.cookieOption), f.removeFromStorage(f.storageDictionary.dialogDict, n.chatLibrary.cookieOption), f.removeFromStorage(f.storageDictionary.dialogsLayout, n.chatLibrary.cookieOption), f.removeFromStorage(f.storageDictionary.chatBarLayout, n.chatLibrary.cookieOption), f.removeFromStorage(f.storageDictionary.chatFriendsListReloadTime), e.removeLocalStorage(n.chatLibrary.dialogLocalStorageName)
        }), n.$on("Roblox.Chat.LoadUnreadConversationCount", function() {
            g()
        }), l.bind("Roblox.Chat.StartChat", function(t, i) {
            n.startSpecificConversationFromUserId(i.userId)
        })
    }, ut(), ot(), n.$watch(function() {
        return n.chatViewModel
    }, function(t, i) {
        if (!angular.isUndefined(t) && !angular.equals(t, i)) {
            n.chatLibrary.chatLayout.pageInitializing = !0, n.chatLibrary.chatLayout.pageDataLoading = !0, rt();
            try {
                ri(), it(), gt()
            } catch (u) {
                var r = "pageInitializing: ";
                u && u.message && (r += u.message), h.fireEvent(n.chatLibrary.googleAnalyticsEvent.category, n.chatLibrary.googleAnalyticsEvent.action, r)
            }
        }
    })
}]);; // ~/viewapp/pages/chat/controllers/dialogsController.js
"use strict";
chat.controller("dialogsController", ["$scope", "chatService", "chatUtility", "partyService", "messageService", "chatHybridService", "$window", "$log", function(n, t, i, r, u, f, e, o) {
    var s = function(t, r, u) {
            var e = u,
                o = n.getLayoutId(t.Id, r),
                s;
            t.dialogType = r, e !== o ? (n.chatLibrary.inApp && !n.chatLibrary.tabletInApp && f.openDialog(), n.getUserInfoForConversation(t), t.layoutId = o, t.isConversation = !0, n.updateChatViewModel(t, !0), n.chatUserDict[e].selectedUserIds = [], n.chatUserDict[e].selectedUsersDict = {}, delete n.chatUserDict[e], s = n.chatLibrary.dialogIdList.indexOf(e), s > -1 ? (n.destroyDialogLayout(u), delete n.chatLibrary.dialogDict[e], n.chatLibrary.dialogIdList[s] = o) : n.chatLibrary.dialogIdList.push(o), n.chatLibrary.dialogDict[o] = angular.copy(i.dialogInitValue)) : (n.getUserInfoForConversation(t), n.updateChatViewModel(t, !0), n.chatLibrary.dialogDict[e].isUpdated = !0, n.chatLibrary.dialogDict[e].updateStatus = i.dialogStatus.REFRESH)
        },
        h = function(t) {
            var r = i.newParty.layoutId;
            n.chatUserDict[r] = i.newParty, n.chatUserDict[r].selectedUserIds = [], n.chatUserDict[r].selectedUserIds.push(t), n.chatLibrary.party.isPartyExisted = !0, n.sendInvite(r)
        };
    n.createParty = function(t, u) {
        i.cleanPartyList(n.chatLibrary, n.chatUserDict, null);
        var f = n.chatUserDict[u].selectedUserIds,
            e = t.Id;
        n.chatUserDict[u].selectedUserIds = [], r.partyCreate(e, f).then(function(r) {
            n.chatLibrary.party.isPartyLeader = !0, t.party = r, s(t, i.dialogType.PARTY, u)
        })
    }, n.sendInvite = function(u) {
        if (o.debug("------------- sendInvite ------------"), n.chatUserDict[u].dialogType !== i.dialogType.CHAT && n.chatUserDict[u].dialogType !== i.dialogType.GROUPCHAT || n.chatUserDict[u].addMoreFriends) n.chatUserDict[u].addMoreFriends ? t.addToConversation(n.chatUserDict[u].selectedUserIds, n.chatUserDict[u].Id).then(function(t) {
            var f, e;
            t.ConversationId && (n.chatUserDict[u].addMoreFriends = !1, f = n.chatUserDict[u], (n.chatUserDict[u].dialogType === i.dialogType.PARTY || n.chatUserDict[u].party) && (e = f.selectedUserIds, e.forEach(function(n) {
                r.partyInvite(f.party.Id, n)
            })), f.userIds = f.userIds.concat(f.selectedUserIds), f.selectedUserIds = [], f.selectedUsersDict = {})
        }, function() {
            o.debug(" ---- addToConversation ---- failed --- from sendInvite request------")
        }) : n.chatUserDict[u].dialogType === i.dialogType.NEWGROUPCHAT && t.startGroupConversation(n.chatUserDict[u].selectedUserIds).then(function(n) {
            if (n.Success) {
                var t = n.Conversation;
                s(t, i.dialogType.GROUPCHAT, u)
            }
        }, function() {
            o.debug(" ---- startGroupConversation ---- failed --- on sending startGroupConveration request------")
        });
        else {
            var f = n.chatUserDict[u],
                e = angular.copy(f.userIds),
                h = e.indexOf(n.chatLibrary.userId);
            h > -1 && e.splice(h, 1), f.selectedUserIds = e, n.createParty(f, u)
        }
    }
}]);; // ~/viewapp/pages/chat/directives/chatBarDirective.js
"use strict";
chat.directive("chatBar", ["$log", function() {
    return {
        restrict: "A",
        scope: !0,
        replace: !0,
        templateUrl: Roblox.ChatTemplates.ChatBarTemplate,
        link: function() {
            Roblox.BootstrapWidgets.SetupTooltip()
        }
    }
}]);; // ~/viewapp/pages/chat/directives/lazyLoadDirective.js
"use strict";
chat.directive("lazyLoad", ["chatService", "chatUtility", "$log", function(n, t, i) {
    return {
        restrict: "A",
        scope: !0,
        link: function(r, u) {
            var s = angular.element(document.querySelector(".chat-friend-list")),
                e = function() {
                    r.buildChatUserListByFriends(r.chatApiParams.startIndexOfFriendList, r.chatApiParams.pageSizeOfFriendList).then(function(n) {
                        r.chatLibrary.chatLayout.isChatLoading = !1, r.filterFriends(n), n.length > 0 ? (r.chatApiParams.startIndexOfFriendList = +r.chatApiParams.startIndexOfFriendList + r.chatApiParams.pageSizeOfFriendList, t.updateScrollbar(t.chatLayout.scrollbarClassName), n.length < r.chatApiParams.pageSizeOfFriendList && (r.chatApiParams.loadMoreFriends = !1, r.chatApiParams.startIndexOfFriendList = 0)) : (r.chatApiParams.loadMoreFriends = !1, r.chatApiParams.startIndexOfFriendList = 0)
                    }, function() {
                        r.chatLibrary.chatLayout.isChatLoading = !1, i.debug("---error from get Friends in lazyLoadDirective.js---")
                    })
                },
                o = function() {
                    if (!r.chatApiParams || r.chatLibrary.chatLayout.errorMaskEnable || !r.chatApiParams.loadMoreConversations && !r.chatApiParams.loadMoreFriends) return !1;
                    r.chatLibrary.chatLayout.isChatLoading = !0, r.chatApiParams.loadMoreConversations && n.getUserConversations(r.chatApiParams.pageNumberOfConversations, r.chatApiParams.pageSizeOfConversations).then(function(n) {
                        r.chatLibrary.chatLayout.isChatLoading = !1, n && n.length > 0 ? (r.refreshFriendsDict(), r.buildChatUserListByConversations(n), r.chatApiParams.pageNumberOfConversations++, t.updateScrollbar(t.chatLayout.scrollbarClassName), n.length < r.chatApiParams.pageSizeOfConversations && (r.chatApiParams.loadMoreConversations = !1, r.chatApiParams.loadMoreFriends = !0, r.chatApiParams.pageNumberOfConversations = 1, r.chatApiParams.pageNumberOfPartyInvites = 1, e())) : (r.chatApiParams.loadMoreConversations = !1, r.chatApiParams.loadMoreFriends = !0, r.chatApiParams.pageNumberOfConversations = 1, e())
                    }, function() {
                        r.chatLibrary.chatLayout.isChatLoading = !1, i.debug("---error from get Conversations in lazyLoadDirective.js---")
                    }), r.chatApiParams.loadMoreFriends && e()
                };
            r.chatLibrary.inApp ? Roblox.Scrollbar.listenToScroll(u, o) : u.mCustomScrollbar({
                autoExpandScrollbar: !1,
                scrollInertia: 5,
                contentTouchScroll: 1,
                mouseWheel: {
                    preventDefault: !0
                },
                callbacks: {
                    onTotalScrollOffset: 100,
                    onTotalScroll: o,
                    onOverflowYNone: o
                }
            })
        }
    }
}]);; // ~/viewapp/pages/chat/directives/dialogDirective.js
"use strict";
chat.directive("dialog", ["$window", "$compile", "$templateCache", "$interval", "$timeout", "chatService", "chatUtility", "chatClientStorageUtilityService", "partyService", "ngAudio", "localStorageService", "messageService", "$log", function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    return {
        restrict: "A",
        scope: {
            dialogData: "=",
            chatLibrary: "=",
            closeDialog: "&",
            sendInvite: "&"
        },
        link: function(r, f) {
            var y = angular.copy(e.dialogLayout.limitMemberDisplay),
                b = null,
                p = 0,
                at = function() {
                    var n;
                    e.updateDialogStyle(r.dialogData, r.dialogLayout, r.chatLibrary), r.chatLibrary.inApp ? (n = r.dialogLayout.inAppStyle, n && n.inputStyle && e.setResizeInputLayout(r.chatLibrary, n.inputStyle.height, r.dialogData, r.dialogLayout)) : (n = r.dialogLayout.defaultStyle, n && n.inputStyle && e.setResizeInputLayout(r.chatLibrary, n.inputStyle.height, r.dialogData, r.dialogLayout))
                },
                w = function() {
                    r.dialogData.party ? (r.dialogData.isPartyExisted = !0, r.dialogData.partyInGame = r.dialogData.party.GamePlaceId ? !0 : !1) : (r.dialogData.isPartyExisted = !1, r.dialogData.partyInGame = !1)
                },
                d = function() {
                    r.isOverLoaded(), r.dialogData.currentUserId = r.currentUserId;
                    switch (r.dialogData.dialogType) {
                        case e.dialogType.CHAT:
                            var n;
                            angular.forEach(r.dialogData.userIds, function(t) {
                                t !== r.chatLibrary.userId && (n = t)
                            }), r.dialogLayout.title = r.chatLibrary.friendsDict[n] ? r.chatLibrary.friendsDict[n].Username : r.dialogData.Username, r.dialogLayout.templateUrl = Roblox.ChatTemplates.DialogTemplate, r.dialogLayout.scrollbarElm = e.getScrollBarSelector(r.dialogData, e.scrollBarType.MESSAGE), r.dialogData.name = r.chatLibrary.friendsDict[n] ? r.chatLibrary.friendsDict[n].Username : r.dialogData.Username, r.dialogData.nameLink = r.chatLibrary.friendsDict[n].UserProfileLink, w();
                            break;
                        case e.dialogType.PENDINGPARTY:
                            r.dialogLayout.templateUrl = r.dialogData.IsGroupChat ? Roblox.ChatTemplates.GroupDialogTemplate : Roblox.ChatTemplates.DialogTemplate, r.dialogLayout.limitMemberDisplay = y / 2, r.dialogLayout.scrollbarElm = e.getScrollBarSelector(r.dialogData, e.scrollBarType.MESSAGE), r.dialogData.name = r.dialogData.groupName, w();
                            break;
                        case e.dialogType.GROUPCHAT:
                            r.dialogLayout.templateUrl = Roblox.ChatTemplates.GroupDialogTemplate, r.dialogLayout.limitMemberDisplay = r.dialogData.party ? y / 2 : y, r.dialogLayout.scrollbarElm = e.getScrollBarSelector(r.dialogData, e.scrollBarType.MESSAGE), r.dialogData.name = r.dialogData.groupName, w();
                            break;
                        case e.dialogType.PARTY:
                            r.dialogData.partyName = r.dialogData.partyName ? r.dialogData.partyName : e.party.partyName, r.dialogLayout.templateUrl = r.dialogData.IsGroupChat ? Roblox.ChatTemplates.GroupDialogTemplate : Roblox.ChatTemplates.DialogTemplate, r.dialogLayout.limitMemberDisplay = r.dialogData.party.LeaderUser.Id === r.chatLibrary.userId ? y / 2 : y, r.dialogLayout.scrollbarElm = e.getScrollBarSelector(r.dialogData, e.scrollBarType.MESSAGE), r.dialogData.party.GamePlaceId && !r.dialogData.placeThumbnail && s.getPlace(r.dialogData.party.GamePlaceId).then(function(n) {
                                r.dialogData.placeThumbnail = n
                            }), r.dialogData.name = r.dialogData.partyName, w();
                            break;
                        case e.dialogType.NEWGROUPCHAT:
                            r.dialogLayout.title = r.dialogData.title, r.dialogLayout.templateUrl = Roblox.ChatTemplates.NewGroupTemplate, r.dialogData.name = r.dialogData.title;
                            break;
                        case e.dialogType.NEWPARTY:
                            r.dialogLayout.title = r.dialogData.title, r.dialogLayout.templateUrl = Roblox.ChatTemplates.NewGroupTemplate
                    }
                    at()
                },
                lt = function() {
                    var n;
                    r.chatLibrary && r.chatLibrary.dialogScopeLib[r.dialogData.Id] && (n = r.chatLibrary.dialogScopeLib[r.dialogData.Id]), r.$$childHead && r.$$childHead != null && r.$$childHead.timeStamp === n && r.$$childHead.$destroy()
                },
                ct = function() {
                    var n, u, e, o;
                    (r.dialogLayout.IsdialogContainerVisible || f.find(".dialog-container")) && (r.dialogLayout.IsdialogContainerVisible = !1, f.empty()), n = angular.element(i.get(r.dialogLayout.templateUrl)), lt(), u = r.$new(), e = Date.now(), r.chatLibrary && (r.chatLibrary.dialogScopeLib[r.dialogData.Id] = e), u.timeStamp = e, o = t(n), f.append(n), o(u)
                },
                ht = function() {
                    var n = "";
                    return angular.isDefined(window.getSelection) ? n = window.getSelection().toString() : angular.isDefined(document.selection) && document.selection.type === "Text" && (n = document.selection.createRange().text), n.length > 0
                },
                et = function(t) {
                    var e = r.dialogData.layoutId,
                        l = "#" + e,
                        i = r.chatLibrary.chatLayout,
                        u = angular.element(document.querySelector(l)).find(".dialog-container"),
                        a = i.widthOfChat,
                        o = i.widthOfDialog + i.spaceOfDialog,
                        v = t.indexOf(e),
                        f, s, h, c;
                    r.chatLibrary.inApp ? u.addClass("dialog-visible") : (f = +a + v * o + i.spaceOfDialog, s = n.innerWidth, s < f + o ? (h = +i.defaultChatZIndex + 1, u.css("z-index", h)) : u.css("right", f), u.addClass("dialog-visible")), c = function() {
                        r.$digest(r.toggleDialogFocusStatus(!0))
                    };
                    u.on("mouseup", c)
                },
                ot = function() {
                    r.chatLibrary.phoneInApp || (o.updateStorage(o.storageDictionary.dialogIdList, r.chatLibrary.dialogIdList, r.chatLibrary.cookieOption), o.updateStorage(o.storageDictionary.dialogDict, r.chatLibrary.dialogDict, r.chatLibrary.cookieOption))
                },
                vt = function() {
                    r.chatLibrary.phoneInApp || (r.chatLibrary.dialogsLayout[r.dialogData.layoutId] = r.dialogLayout, o.updateStorage(o.storageDictionary.dialogsLayout, r.chatLibrary.dialogsLayout, r.chatLibrary.cookieOption))
                },
                g = function(n) {
                    var t = angular.isDefined(r.dialogData.userIds) ? r.dialogData.userIds.indexOf(n) : -1,
                        i = angular.isDefined(r.dialogData.selectedUserIds) ? r.dialogData.selectedUserIds.indexOf(n) : -1;
                    return t < 0 && i < 0
                },
                v = function() {
                    r.dialogLibrary = c.getLocalStorage(r.chatLibrary.dialogLocalStorageName) ? c.getLocalStorage(r.chatLibrary.dialogLocalStorageName) : {}
                },
                ft = function() {
                    return r.dialogLibrary && r.dialogLibrary[r.dialogData.layoutId] && r.dialogLibrary[r.dialogData.layoutId].active
                },
                ut = function() {
                    return r.dialogLibrary && r.dialogLibrary[r.dialogData.layoutId] && !r.dialogLibrary[r.dialogData.layoutId].active
                },
                nt = function() {
                    return r.dialogLibrary && r.dialogLibrary[r.dialogData.layoutId] && r.dialogLibrary[r.dialogData.layoutId].played
                },
                rt = Math.floor(Math.random() * 100 + 1),
                it = 1500 + rt,
                k, tt = function() {
                    k = u(function() {
                        v(), r.dialogLibrary && !r.dialogLibrary[r.dialogData.layoutId].played ? (r.chatLibrary.audio.play(), r.dialogLibrary[r.dialogData.layoutId].played = !0, c.setLocalStorage(r.chatLibrary.dialogLocalStorageName, r.dialogLibrary)) : u.cancel(k)
                    }, it)
                },
                st = function() {
                    r.chatLibrary.inApp && (r.dialogLayout.focusMeEnabled = !1)
                },
                yt = function() {
                    r.dialogData.friendIds = angular.copy(r.chatLibrary.friendIds), r.dialogMessages = [], r.dialogType = angular.copy(e.dialogType), r.deviceType = angular.copy(e.deviceType), r.memberStatus = angular.copy(e.memberStatus), r.dialogLayout = angular.isDefined(r.chatLibrary.dialogsLayout[r.dialogData.layoutId]) ? r.chatLibrary.dialogsLayout[r.dialogData.layoutId] : angular.copy(e.dialogLayout), r.chatLibrary.inApp ? r.dialogLayout.inAppStyle = {} : r.dialogLayout.defaultStyle = {}
                };
            r.updateFriends = function(n) {
                var t = [],
                    i, u;
                n ? (u = e.sortFriendList(r.chatLibrary, n), u.forEach(function(n) {
                    g(n.Id) && t.push(n.Id), r.chatLibrary.friendsDict[n.Id] || (r.chatLibrary.friendsDict[n.Id] = n)
                }), r.dialogData.friendIds = t) : (i = angular.copy(r.chatLibrary.friendIds), angular.forEach(i, function(n) {
                    g(n) && t.push(n)
                }), r.dialogData.friendIds = t)
            }, r.isOverLoaded = function() {
                angular.isUndefined(r.dialogData.selectedUserIds) && (r.dialogData.selectedUserIds = [], r.dialogData.selectedUsersDict = {}), r.dialogData.dialogType !== e.dialogType.FRIEND && (r.dialogData.numberOfSelected = r.dialogData.dialogType === e.dialogType.NEWGROUPCHAT ? r.dialogData.selectedUserIds.length : r.dialogData.userIds.length + r.dialogData.selectedUserIds.length - 1, r.dialogLayout.isMembersOverloaded = r.dialogData.numberOfSelected >= r.chatLibrary.quotaOfPartyMembers ? !0 : !1)
            }, r.dialogData.selectedUserIds = [], r.dialogData.selectedUsersDict = {}, r.selectFriends = function(n) {
                var t = r.dialogData.selectedUserIds.indexOf(n);
                t < 0 && !r.dialogLayout.isMembersOverloaded ? (r.dialogData.selectedUserIds.push(n), r.dialogData.selectedUsersDict[n] = r.chatLibrary.friendsDict[n]) : t > -1 && (r.dialogData.selectedUserIds.splice(t, 1), delete r.dialogData.selectedUsersDict[n]), r.dialogData.searchTerm = "", r.isOverLoaded()
            }, r.toggleDialogContainer = function() {
                r.chatLibrary.inApp || (r.dialogLayout.collapsed = !r.dialogLayout.collapsed), r.chatLibrary.phoneInApp || vt()
            }, r.toggleDialogFocusStatus = function(n) {
                r.chatLibrary.inApp || (r.dialogLayout.hasFocus = n, n && r.dialogLayout.active && r.markInactive()), n && l.markMessagesAsRead(r.dialogData);
                var t = n && !ht() && !r.chatLibrary.inApp;
                r.dialogLayout.focusMeEnabled = t
            }, r.getTitle = function(n) {
                var u, t, i, f;
                r.dialogData.dialogType === e.dialogType.PENDINGPARTY && n === e.activeType.PARTYINVITE ? (t = r.dialogData.party ? r.dialogData.party.CreatorUser.Name : r.dialogData.InitiatorUser.Username, u = e.chatLayout.defaultTitleForPartyInvite + t) : (i = r.dialogData.ChatMessages, i && i.length > 0 ? (f = i[0].SenderUserId, t = r.chatLibrary.friendsDict[f].Username) : t = r.dialogData.InitiatorUser.Username, u = t + e.chatLayout.defaultTitleForMessage), r.title = u
            }, r.changeTitle = function() {
                n.document.title = p % 2 == 0 ? r.title : r.chatLibrary.currentTabTitle, p++
            }, r.markInactive = function() {
                r.dialogLayout.active && (r.dialogLayout.active = !1, clearInterval(b), p = 0, n.document.title = r.chatLibrary.currentTabTitle, v(), ft() && (a.debug(" --------------- markInactive -------------- set into local storage"), angular.isUndefined(r.dialogLibrary[r.dialogData.layoutId]) && (r.dialogLibrary[r.dialogData.layoutId] = {}), r.dialogLibrary[r.dialogData.layoutId].active = !1, r.dialogLibrary[r.dialogData.layoutId].played = !1, c.setLocalStorage(r.chatLibrary.dialogLocalStorageName, r.dialogLibrary)))
            }, r.markActive = function(n) {
                v(), angular.isUndefined(r.dialogLibrary[r.dialogData.layoutId]) && (r.dialogLibrary[r.dialogData.layoutId] = {}), r.dialogLibrary[r.dialogData.layoutId].active = !0, r.dialogLibrary[r.dialogData.layoutId].played = !1, c.setLocalStorage(r.chatLibrary.dialogLocalStorageName, r.dialogLibrary), r.dialogLayout.hasFocus ? l.markMessagesAsRead(r.dialogData) : (clearInterval(b), p = 0, v(), nt() || r.chatLibrary.inApp || tt(), r.getTitle(n), b = setInterval(r.changeTitle, r.chatLibrary.intervalOfChangeTitleForPartyChrome)), r.chatLibrary.inApp || (r.dialogLayout.active = !0), r.dialogLayout.focusMeEnabled && (r.dialogLayout.focusMeEnabled = !1)
            }, r.handleLocalStorage = function(n) {
                n.key === r.chatLibrary.dialogLocalStorageName && (v(), r.dialogLayout.active && ut() && r.markInactive(), nt() && u.cancel(k))
            }, yt(), st(), r.isOverLoaded(), r.$watch(function() {
                return r.chatLibrary.dialogDict
            }, function(n, t) {
                if (angular.isDefined(n) && angular.isDefined(n[r.dialogData.layoutId])) {
                    var u = r.dialogData.layoutId,
                        o = r.chatLibrary,
                        s = o.dialogIdList.indexOf(u),
                        i = n[u],
                        h = t[u];
                    if (!h || i.isUpdated) {
                        angular.isDefined(r.chatLibrary.dialogsLayout[r.dialogData.layoutId]) ? r.dialogLayout = r.chatLibrary.dialogsLayout[r.dialogData.layoutId] : angular.isUndefined(r.dialogLayout) && (r.dialogLayout = angular.copy(e.dialogLayout)), i.isUpdated = !1;
                        switch (i.updateStatus) {
                            case e.dialogStatus.INIT:
                            case e.dialogStatus.REPLACE:
                                s > -1 && (r.dialogLayout.focusMeEnabled === i.autoOpen && (r.chatLibrary.inApp || (r.dialogLayout.focusMeEnabled = !i.autoOpen), i.autoOpen || l.markMessagesAsRead(r.dialogData)), d(), ct(), Roblox.BootstrapWidgets.SetupTooltip(), Roblox.BootstrapWidgets.SetupPopover());
                                break;
                            case e.dialogStatus.MINIMIZE:
                                d(), r.chatLibrary.minimizedDialogIdList.indexOf(u) < 0 && (r.chatLibrary.minimizedDialogIdList.push(u), r.chatLibrary.minimizedDialogData[u] = r.dialogData), f.empty();
                                break;
                            case e.dialogStatus.REFRESH:
                                d(), i.updateStatus = e.dialogStatus.INIT
                        }
                    }
                    r.chatLibrary.phoneInApp || ot(), s > -1 && (et(o.dialogIdList), i.markAsActive && (r.markActive(i.activeType), i.markAsActive = !1))
                }
            }, !0), r.$on("Roblox.Chat.MarkDialogInactive", function(n, t) {
                t.layoutId === r.dialogData.layoutId && r.markInactive()
            }), c.listenLocalStorage(r.handleLocalStorage)
        }
    }
}]);; // ~/viewapp/pages/chat/directives/groupSelectDirective.js
"use strict";
chat.directive("groupSelect", ["$log", function() {
    return {
        restrict: "A",
        link: function(n, t) {
            var r = n.chatLibrary.inApp ? n.chatLibrary.inAppLayout.topBarHeight : n.chatLibrary.layout.topBarHeight;
            n.$watch(function() {
                return t.innerHeight()
            }, function(t, i) {
                if (t && t !== i) {
                    var s = "#" + n.dialogData.layoutId + " .dialog-container",
                        h = "#" + n.dialogData.layoutId + " " + n.friendsScrollbarElm,
                        c = angular.element(s),
                        e = angular.element(h),
                        o, f, u;
                    n.chatLibrary.inApp ? (u = t, f = "calc(100% - " + u + "px)") : (u = r + t, o = c.height(), f = o - u), e.css("height", f), e.mCustomScrollbar("update")
                }
            }, !0)
        }
    }
}]);; // ~/viewapp/pages/chat/directives/abuseReportDirective.js
"use strict";
chat.directive("abuseReport", function() {
    return {
        restrict: "A",
        templateUrl: Roblox.ChatTemplates.AbuseReportTemplate,
        link: function() {}
    }
});; // ~/viewapp/pages/chat/directives/friendsSelectionDirective.js
"use strict";
chat.directive("friendsSelection", ["chatUtility", function(n) {
    return {
        restrict: "A",
        templateUrl: Roblox.ChatTemplates.FriendsSelectionTemplate,
        link: function(t) {
            var u = function() {
                if (angular.isUndefined(t.dialogData) || angular.isUndefined(t.dialogData.selectedUserIds)) return !1;
                t.dialogLayout.inviteBtnDisabled = t.dialogData.dialogType === n.dialogType.NEWGROUPCHAT ? t.dialogData.selectedUserIds.length < 2 : t.dialogData.selectedUserIds.length === 0
            };
            u(), t.$watch(function() {
                return t.dialogData.selectedUserIds
            }, function() {
                u()
            }, !0)
        }
    }
}]);; // ~/viewapp/pages/chat/controllers/dialogController.js
"use strict";
chat.controller("dialogController", ["$scope", "chatService", "chatUtility", "partyService", "messageService", "$window", "chatHybridService", "$log", function(n, t, i, r, u, f, e, o) {
    var h = angular.element(document.querySelector("#chat-data-model")),
        c = function(i, r) {
            t.removeFromConversation(n.chatLibrary.userId, i).then(function() {
                n.closeDialog(r)
            }, function() {
                o.debug("---------- removeFromConversation request failed------- ")
            })
        },
        l = function() {
            n.chatLibrary.party.isPartyExisted = !1, r.partyLeave(n.dialogData.party.Id).then(function() {
                i.removeParty(n.chatLibrary, n.dialogData)
            }, function() {
                o.debug("---------- partyLeave request failed------- ")
            })
        },
        a = function(i) {
            t.sendMessage(n.dialogData.Id, i.RawContent).then(function(t) {
                var r = new Date;
                i.sendingMessage = !1, t.ResultType !== 0 ? (i.sendMessageHasError = !0, i.error = t.StatusMessage) : (angular.isUndefined(n.dialogData.messagesDict) && (n.dialogData.messagesDict = {}), i.Id = t.MessageId, i.Sent = t.Sent, u.buildTimeStamp(i, n.dialogData), i.resetClusterMessage = !0, u.setClusterMaster(n.dialogData, i), n.dialogData.messagesDict[t.MessageId] = i)
            }, function() {
                o.debug(" ------ sendMessage error -------"), i.sendingMessage = !1, i.sendMessageHasError = !0
            })
        },
        s = function() {
            t.getFriends(n.chatLibrary.userId, n.dialogParams.startIndexOfFriendList, n.dialogParams.pageSizeOfFriendList).then(function(t) {
                t && t.length <= n.dialogParams.pageSizeOfFriendList ? (n.updateFriends(t), n.dialogData.scrollBarType = i.scrollBarType.FRIENDSELECTION, t.length === n.dialogParams.pageSizeOfFriendList && (n.dialogParams.loadMoreFriends = !0, n.dialogParams.startIndexOfFriendList = +n.dialogParams.startIndexOfFriendList + n.dialogParams.pageSizeOfFriendList, s())) : n.dialogParams.loadMoreFriends = !1
            })
        };
    n.dialogParams = angular.copy(i.dialogParams), n.dialogLayout.numberOfPartyMembers = h.data("numberofmembersforpartychrome"), n.userPresenceTypes = i.userPresenceTypes, n.dialogData.messageForSend = "", n.dialogLayout.scrollbarElm = i.getScrollBarSelector(n.dialogData, i.scrollBarType.MESSAGE), n.dialogLayout.listenToScrollInitialized = !1, n.friendsScrollbarElm = i.getScrollBarSelector(n.dialogData, i.scrollBarType.FRIENDSELECTION), n.focusDialog = function() {
        n.dialogLayout.active = !1
    }, n.updateDialog = function() {
        if (o.debug("---- updateDialog callback ---- Scrollbars updated"), !n.dialogLayout.IsdialogContainerVisible) {
            var t = angular.element(document.querySelector(n.dialogLayout.scrollbarElm));
            t.find(".mCustomScrollBox").addClass("dialog-visible"), n.dialogLayout.IsdialogContainerVisible = !0
        }
        return !1
    }, n.sendMessage = function() {
        if (n.dialogData.messageForSend.length > 0) {
            var t = {
                Read: !0,
                Content: n.dialogData.messageForSend,
                RawContent: n.dialogData.messageForSend,
                SenderUserId: n.chatLibrary.userId,
                sendingMessage: !0,
                sendMessageHasError: !1
            };
            i.sanitizeMessage(t), n.dialogData.messageForSend = "", angular.isUndefined(n.dialogData.ChatMessages) && (n.dialogData.ChatMessages = []), u.setClusterMaster(n.dialogData, t), n.dialogData.DisplayMessage = t, a(t)
        }
    }, n.keyPressEnter = function() {
        n.sendMessage()
    }, n.abuseReport = function(t, i) {
        if (n.dialogLayout.isConfirmationOn = !0, t && (n.dialogData.userIdForAbuseReport = t), i && n.dialogData.userIdForAbuseReport) {
            e.closeDialog();
            var r = Roblox && Roblox.Endpoints ? Roblox.Endpoints.getAbsoluteUrl("/abusereport/chat?id=" + n.dialogData.userIdForAbuseReport + "&redirectUrl=" + escape(window.location) + "&conversationId=" + n.dialogData.Id) : "/abusereport/chat?id=" + n.dialogData.userIdForAbuseReport + "&redirectUrl=" + escape(window.location) + "&conversationId=" + n.dialogData.Id;
            window.location.href = r, n.dialogData.userIdForAbuseReport = null, n.dialogLayout.isConfirmationOn = !1
        }
    }, n.leaveGroup = function() {
        if (n.dialogData.dialogType === i.dialogType.PARTY) l();
        else if (n.dialogData.dialogType === i.dialogType.PENDINGPARTY) {
            var t = n.dialogData.party.Id;
            r.removeFromParty(t, n.chatLibrary.userId)
        }(n.dialogData.dialogType === i.dialogType.GROUPCHAT || n.dialogData.dialogType === i.dialogType.PENDINGPARTY) && (n.chatLibrary.conversationsDict[n.dialogData.Id].remove = !0, c(n.dialogData.Id, n.dialogData.layoutId))
    }, n.addFriends = function() {
        n.dialogData.addMoreFriends = !0, n.chatLibrary.friendIds.length > 0 && n.updateFriends(), s()
    }, n.viewParticipants = function() {
        n.dialogLayout.lookUpMembers = !n.dialogLayout.lookUpMembers
    }, n.removeMember = function(u) {
        if (n.dialogData.dialogType === i.dialogType.PARTY) {
            var f = n.dialogData.party.Id;
            r.removeFromParty(f, u)
        }
        t.removeFromConversation(u, n.dialogData.Id).then(function() {
            n.isOverLoaded()
        }, function() {
            o.debug("---------- removeMember request failed------- ")
        })
    }, n.joinParty = function() {
        r.partyJoin(n.dialogData.party.Id).then(function(t) {
            t.Success && (n.chatLibrary.partyIds.push(n.dialogData.party.Id), n.chatLibrary.partiesDict[n.dialogData.party.Id] = {
                conversationId: n.dialogData.Id,
                layoutId: n.dialogData.layoutId
            }, n.dialogData.dialogType = i.dialogType.PARTY)
        }, function() {
            o.debug("-------------partyAcceptInvite request failed -------------")
        })
    }, n.joinGame = function() {
        r.joinGame(n.dialogData, n.chatLibrary.inApp)
    }, n.linkToProfile = function(n) {
        return n.stopPropagation(), n.target.classList.contains("disabled") ? (n.preventDefault(), !1) : void 0
    }, n.goToProfile = function() {
        n.chatLibrary.inApp && e.closeDialog()
    }, t.getMessages(n.dialogData.Id, null, n.dialogParams.pageSizeOfGetMessages).then(function(t) {
        t.length > 0 ? (n.dialogData.ChatMessages = [], n.dialogData.messagesDict = {}, u.manipulateMessages(n.dialogData, t, n.chatLibrary.friendsDict), n.dialogData.scrollBarType = i.scrollBarType.MESSAGE) : (n.dialogData.scrollBarType = i.scrollBarType.MESSAGE, n.updateDialog())
    }, function() {
        o.debug("---------- getMessages request failed------- ")
    }), n.$on("elastic:resize", function(t, r, u, f) {
        o.debug("---- oldHeight -----" + u + "---- newHeight -----" + f), u !== f && (i.setResizeInputLayout(n.chatLibrary, f, n.dialogData, n.dialogLayout), i.updateScrollbar(n.dialogLayout.scrollbarElm))
    })
}]);; // ~/viewapp/pages/chat/directives/dialogLazyLoadDirective.js
"use strict";
chat.directive("dialogLazyLoad", ["chatService", "chatUtility", "messageService", "$timeout", "$log", function(n, t, i, r, u) {
    return {
        restrict: "A",
        scope: !0,
        link: function(r, f) {
            var s = function() {
                    r.updateDialog()
                },
                o = function() {
                    if (!r.dialogParams.loadMoreMessages || !r.dialogLayout.IsdialogContainerVisible) return !1;
                    r.dialogLayout.isChatLoading = !0;
                    var f = r.dialogData.ChatMessages.length;
                    n.getMessages(r.dialogData.Id, r.dialogData.ChatMessages[f - 1].Id, r.dialogParams.pageSizeOfGetMessages).then(function(n) {
                        if (r.dialogLayout.isChatLoading = !1, n) {
                            if (n.length > 0) {
                                r.dialogLayout.scrollToBottom = !1;
                                for (var u = 0; u < n.length; u++) t.sanitizeMessage(n[u]), i.buildFallbackTimeStamp(n[u], r.dialogData), i.setFallbackClusterMaster(r.dialogData, n[u])
                            }
                            n.length < r.dialogParams.pageSizeOfGetMessages && (r.dialogParams.loadMoreMessages = !1)
                        } else r.dialogParams.loadMoreMessages = !1, i.manipulateMessages(r.dialogData, n, r.chatLibrary.friendsDict)
                    }, function() {
                        r.dialogLayout.isChatLoading = !1, u.debug("---error from get getMessages in dialogLazyLoadDirective.js---")
                    })
                },
                h = function() {
                    u.debug("---- onInit callback ---- Scrollbars updated"), r.dialogLayout.scrollToBottom = !0
                };
            r.chatLibrary.inApp ? (r.dialogLayout.IsdialogContainerVisible = !0, Roblox.Scrollbar.scrollToBottom(f), r.$watch(function() {
                return f.height()
            }, function(n) {
                n && Roblox.Scrollbar.scrollToBottom(f)
            }, !0), r.$watch(function() {
                return r.dialogData.ChatMessages
            }, function(n, t) {
                (!t || t.length === 0 || n && n.length > 0 && t.length > 0 && n[0].parsedTimestamp !== t[0].parsedTimestamp) && Roblox.Scrollbar.scrollToBottom(f)
            }, !0), r.$on("ngRepeatFinished", function() {
                if (u.debug("ngRepeatFinishedEvent"), r.dialogData.ChatMessages) {
                    var n = r.chatLibrary.dialogScopeLib[r.dialogData.Id];
                    r.timeStamp !== n || r.dialogLayout.listenToScrollInitialized || (r.dialogLayout.listenToScrollInitialized = !0, Roblox.Scrollbar.listenToScroll(f, o))
                }
            })) : f.mCustomScrollbar({
                autoExpandScrollbar: !1,
                scrollInertia: 5,
                contentTouchScroll: 1,
                mouseWheel: {
                    preventDefault: !0
                },
                callbacks: {
                    onInit: h,
                    onUpdate: function() {
                        u.debug("---- onUpdate callback ---- Scrollbars updated"), r.dialogLayout.scrollToBottom ? (f.mCustomScrollbar("update"), f.mCustomScrollbar("scrollTo", "bottom", {
                            scrollInertia: 0
                        })) : r.dialogLayout.scrollToBottom = !0, f.hasClass("mCS_no_scrollbar") && r.updateDialog()
                    },
                    onTotalScroll: s,
                    onTotalScrollOffset: 60,
                    onTotalScrollBack: o
                }
            })
        }
    }
}]);; // ~/viewapp/pages/chat/directives/dialogMinimizeDirective.js
"use strict";
chat.directive("dialogMinimize", ["$window", "$compile", "$templateCache", "chatService", "chatUtility", "$log", function(n, t, i, r, u, f) {
    return {
        restrict: "A",
        scope: {
            chatLibrary: "="
        },
        templateUrl: Roblox.ChatTemplates.DialogMinimizeTemplate,
        link: function(n, t) {
            var r = function() {
                var i = n.chatLibrary.chatLayout,
                    r = n.chatLibrary.dialogIdList.length,
                    u = i.widthOfChat,
                    f = i.widthOfDialog + i.spaceOfDialog,
                    e = +u + r * f + i.spaceOfDialog;
                t.css("right", e)
            };
            n.dialogType = u.dialogType, n.hasMinimizedDialogs = !1, n.layoutIdHasClicked = !1, n.openDialog = function(t) {
                var i, r;
                f.debug(" -------------------openDialog------------------ " + t), i = n.chatLibrary.dialogIdList.pop(), n.chatLibrary.dialogDict[i].isUpdated = !0, n.chatLibrary.dialogDict[i].updateStatus = u.dialogStatus.MINIMIZE, n.chatLibrary.dialogIdList.push(t), n.chatLibrary.dialogDict[t].isUpdated = !0, n.chatLibrary.dialogDict[t].updateStatus = u.dialogStatus.REPLACE, r = n.chatLibrary.minimizedDialogIdList.indexOf(t), r > -1 && (n.chatLibrary.minimizedDialogIdList.splice(r, 1), delete n.chatLibrary.minimizedDialogData[t])
            }, n.remove = function(t) {
                var i = n.chatLibrary.minimizedDialogIdList.indexOf(t);
                i > -1 && (n.chatLibrary.minimizedDialogIdList.splice(i, 1), delete n.chatLibrary.minimizedDialogData[t], delete n.chatLibrary.dialogDict[t])
            }, Roblox.BootstrapWidgets.SetupPopover("top", {
                selector: "#dialogs-minimize"
            }), n.$watch(function() {
                return n.chatLibrary.minimizedDialogIdList
            }, function(t, i) {
                angular.isUndefined(t) || t == i || (f.debug("------ watch minimizedDialogIdList ----- "), t.length > 0 ? (n.hasMinimizedDialogs || (n.hasMinimizedDialogs = !0), r()) : t.length === 0 && (n.hasMinimizedDialogs = !1))
            }, !0)
        }
    }
}]);; // ~/viewapp/pages/chat/directives/minimizeItemDirective.js
"use strict";
chat.directive("minimizeItem", ["$log", function() {
    return {
        restrict: "A",
        scope: !0,
        link: function(n) {
            var u = function() {
                    n.$apply(n.openDialog(n.dialogLayoutId))
                },
                r;
            angular.element("#dialogs-minimize").on("click touchstart", ".popover-content #" + n.dialogLayoutId + " .minimize-title", u);
            r = function() {
                n.$apply(n.remove(n.dialogLayoutId))
            };
            angular.element("#dialogs-minimize").on("click touchstart", ".popover-content #" + n.dialogLayoutId + " .minimize-close", r)
        }
    }
}]);; // ~/viewapp/pages/chat/directives/chatSettingDirective.js
"use strict";
chat.directive("chatSetting", ["chatService", "partyService", "$log", function() {
    return {
        restrict: "A",
        scope: !0,
        link: function(n, t) {
            var o = function(t) {
                    n.chatLibrary.inApp && t.preventDefault(), n.$digest(n.addFriends())
                },
                r, u, f, e;
            t.on("click touchstart", "#add-friends", o);
            r = function(t) {
                n.chatLibrary.inApp && t.preventDefault(), n.$digest(n.viewParticipants())
            };
            t.on("click touchstart", "#view-participants", r);
            u = function(t) {
                n.chatLibrary.inApp && t.preventDefault(), n.$digest(n.leaveGroup())
            };
            t.on("click touchstart", "#leave-group", u);
            if (f = function(t) {
                    var i = t.data;
                    n.$digest(n.abuseReport(i.userId, i.isConfirmed))
                }, n.dialogData && !n.dialogData.IsGroupChat) {
                angular.forEach(n.dialogData.userIds, function(t) {
                    t !== n.chatLibrary.userId && (e = t)
                });
                t.on("click touchstart", "#abuse-report", {
                    userId: e,
                    isConfirmed: !1
                }, f)
            }
        }
    }
}]);; // ~/viewapp/pages/chat/controllers/friendsController.js
"use strict";
chat.controller("friendsController", ["$scope", "chatService", "chatUtility", "$log", function(n, t, i) {
    n.dialogLayout.scrollToBottom = !1, n.dialogLayout.IsdialogContainerVisible = !1, n.dialogParams = angular.copy(i.dialogParams), n.dialogType = angular.copy(i.dialogType), n.userPresenceTypes = angular.copy(i.userPresenceTypes), n.friendsScrollbarElm = i.getScrollBarSelector(n.dialogData, i.scrollBarType.FRIENDSELECTION), n.dialogData.scrollBarType = i.scrollBarType.FRIENDSELECTION, n.dialogData.isCreated = !0;
    var u = function() {
        t.getFriends(n.chatLibrary.userId, n.dialogParams.startIndexOfFriendList, n.dialogParams.pageSizeOfFriendList).then(function(t) {
            t ? (n.updateFriends(t), t.length === n.dialogParams.pageSizeOfFriendList && (n.dialogParams.loadMoreFriends = !0, n.dialogParams.startIndexOfFriendList = +n.dialogParams.startIndexOfFriendList + n.dialogParams.pageSizeOfFriendList, u())) : (n.dialogParams.loadMoreFriends = !1, n.dialogParams.startIndexOfFriendList = 0)
        })
    };
    n.chatLibrary.friendIds.length > 0 && n.updateFriends(), u(), n.isOverLoaded()
}]);; // ~/viewapp/pages/chat/directives/friendsLazyLoadDirective.js
"use strict";
chat.directive("friendsLazyLoad", ["chatService", "$log", function(n) {
    return {
        restrict: "A",
        scope: !0,
        link: function(t, i) {
            var u = function() {
                if (!t.dialogParams.loadMoreFriends) return !1;
                t.dialogLayout.isChatLoading = !0, n.getFriends(t.chatLibrary.userId, t.dialogParams.startIndexOfFriendList, t.dialogParams.pageSizeOfFriendList).then(function(n) {
                    t.dialogLayout.isChatLoading = !1, t.updateFriends(n), n.length < t.dialogParams.pageSizeOfFriendList ? t.dialogParams.loadMoreFriends = !1 : t.dialogParams.startIndexOfFriendList = +t.dialogParams.startIndexOfFriendList + t.dialogParams.pageSizeOfFriendList, i.mCustomScrollbar("update")
                }, function() {
                    t.dialogLayout.isChatLoading = !1
                })
            };
            t.chatLibrary.inApp ? Roblox.Scrollbar.listenToScroll(i, u) : i.mCustomScrollbar({
                autoExpandScrollbar: !1,
                scrollInertia: 5,
                contentTouchScroll: 1,
                mouseWheel: {
                    preventDefault: !0
                },
                callbacks: {
                    onTotalScroll: u,
                    onOverflowYNone: u
                }
            })
        }
    }
}]);; // ~/viewapp/pages/chat/directives/backBtnDirective.js
"use strict";
chat.directive("backBtn", ["$log", function() {
    return {
        restrict: "A",
        scope: !0,
        link: function(n, t) {
            t.bind("click touchstart", function(t) {
                t.preventDefault(), n.closeDialog(n.dialogData.layoutId)
            })
        }
    }
}]);; // ~/viewapp/pages/chat/directives/removeFocusDirective.js
"use strict";
chat.directive("removeFocus", ["$log", function() {
    return {
        restrict: "A",
        scope: !0,
        link: function(n, t) {
            t.bind("click touchstart", function(t) {
                t.preventDefault(), n.sendMessage()
            })
        }
    }
}]);; // ~/viewapp/pages/chat/directives/chatPlaceholderDirective.js
"use strict";
chat.directive("chatPlaceholder", ["$log", function() {
    return {
        restrict: "A",
        scope: !0,
        templateUrl: Roblox.ChatTemplates.ChatPlaceholderTemplate,
        link: function() {}
    }
}]);