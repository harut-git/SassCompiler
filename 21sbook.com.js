/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,
            timeOptions: [15, 30, 60]
        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});/*
 *   All config values specified here will be merged with main config and will override its values
 *
 */
/* global VBET5 */
VBET5.constant('SkinConfig', {
    additionalModules: ['comboView'],
    'main': {
        site_name: "21sbook.com",
        siteTitle: {
            "eng": "21sbook.com",
            "rus": "21sbook.com"
        },
        site_id: "163",
        skin: '21sbook.com',
        integrationMode: true,
        disableSavingPreMatchMenuState: true,
        disableSavingLiveMenuState: true,
        expandFavoriteCompetitions: true,
        expandFavoriteCompetitionsFirst: true,
        expandFirstSportByDefault: false,
        GmsPlatform: true,
        loadLibsLocally: true,
        enableSportsbookLayoutSwitcher: true,
        enableLayoutSwitcherInSportsbook: false,
        header: {
            version: 2
        },
        footer: {
            disable: true,
            copyrightSince: 2014,
            about_company_text: {
                'eng' : "(c) 21sbook.com",
                'rus' : "(c) 21sbook.com"
            }
        },
        enableClassicScrollToggle: true,
        liveMultiViewEnabled: true,
        enableSystemCalculator: true,
        statisticsInsportsbookTab: false,
        enableSubHeader: true,

        dashboard: {
            enabled: true,
            leftMenuPrematch: true
        },
        homePageLastMinuteBets: {
            enable: true,

        },
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabled: true
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: "modern"
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "freebet",
                displayName: "Free Bet",
                enabled: true
            }
        ],
        liveOverviewEnabled: true,
        freeBetEnabled: true,
        enableH2HStat: false,
        enableBannersInsideSportsbookGames:false,
        showVirtualsInSportList: false,
        enableMenuSearch: true,
        showPromotedGamesOnWidget: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            gameLimit: 100
        },
        showNewsInClassicView: false,
        showResultsTabInSportsbook: true,
        availableSportsbookViews: {modern: true, classic: false, asian: true, external: false, combo:true, euro2016:true},
        sportsLayout: "euro2016",
        showFavoriteCompetitions: true, // show "popular competitions" in classic view
        redirectOnTablets: false,
        liveCalendarEnabled: true,
        videoEnabled: true,
        availableVideoProviderIds: [15, 19, 21, 22, 23],
        showFavoriteGamesInSportList: true,
        useLadderForFractionalFormat: true,
        availableLanguages: {
            '@replace': true, // this means that object won't be merged with 'parent object', but will replace it
            'eng': {'short': 'EN', 'full': "English", order: 1},
            'rus' : { 'short': 'RU', 'full': "Русский"},
            'tur': {'short': 'TR', 'full': "Türkçe"},
            'jpn' : { 'short': 'JP', 'full': "日本語"},
            'swe': {'short': 'SE', 'full': "Swedish", order: 11},
            'ger' : { 'short': 'DE', 'full': "Deutsch", order: 12},
            'nor': {'short': 'NO', 'full': "Norwegian", order: 13},
            'geo' : { 'short': 'KA', 'full': "ქართული"},
            'chi': {'short': 'CH', 'full': "繁体中文"},
            'zhh': {'short': 'ZH', 'full': "简体中文"}
        },
        timeZonePerLanguage: {
            'rus' : '+04:00',
            'tur' : '+03:00'
        },
        registration: {
            defaultCurrency: 'EUR'
        },
        loadPopularGamesForSportsBook: {
            enabled: true,
            level: 'competition',  // game or competition
            type: 'promoted' // promoted or favorite
            //testSiteId: 23 // for debug purpose set to false by default
        },
        liveChat: null,
        availableCurrencies: ['EUR','USD','TRY','GBP'],
        balanceFractionSize: 0, //number of decimal places to round the balance value to(when displaying)
        enableNews: false, // enable news on sport page
        enableBannerUnderBetslip: false, // enable banner under the betslip,
        selectRegionsByDefault: false, // will filter by region
        disableHeader: true,
        disableHeaderNavigation: true,
    },
    partner: {
        allowNoUserId: true, // make user id optional
        documentDomain: true,  // both parent and iframe have to set  window.document.domain = documentDomain for cross-subdomain JS to work
        profileNotAvailable: true,
        inactivityCallbackTime: 300000,
        balanceRefreshPeriod: 30000, //milliseconds, if 0 or null will be disabled
        notifyOnResize: true //if enabled, will call partner's provided callback function on every resize, passing it the frame size
    },
    'env': {
        showFifaCountdown: false,
        lang:'eng',
        oddFormat: 'decimal'
    },
    'betting': {
        enableExpressBonus: false,
        expressBonusVisibilityQty: 4,
        allowManualSuperBet: false,
        enableSuperBet: false,
        expressBonusType: 4, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %;
        sections: {
            enableMyBetsIcon: true,
            enableMyGamesIcon: true
        }
    },
    'swarm': {
        url: [{url: "https://swarm-spring.betcoswarm.com/"}],
        websocket: [{url: "wss://swarm-spring.betcoswarm.com/"}]
    },
    'payments': [
    ]
});
VBET5.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {redirectTo: '/sport/'});
}]);
CMS.constant('SkinWPConfig', {
    // wpUrl: 'http://sportsbook.monte-casino.com/json', // WordpResss instance serving pages, banners
    //  wpBaseHost: 'http://sportsbook.monte-casino.com'  // this parameter will be passed to JSON api and all links in response(e.g. images) will have this host,
//    wpNewsUrl: 'http://www.sportsbook.finnplay.com/newsjson',  // WordpResss instance serving news
//    wpNewsBaseHost: 'www.vbet.com'  // this parameter will be passed to JSON api and all links in NEWS response(e.g. images) will have this host
});
