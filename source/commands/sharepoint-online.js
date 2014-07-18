/*! 
 *  commands/sharepoint-online.js
 */
var CP = CP || {};

(function (constants, util) {
    var siteType = constants.SiteTypes,
        strings = constants.strings,
        versionType = constants.VersionTypes;

    CP.CommandList = CP.CommandList || [];

    CP.CommandList = CP.CommandList.concat([
        {
            command: 'SPO Admin Center: Site Collections',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/online/SiteCollections.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Infopath',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/TenantForms.FormServer.asp');
            }
        },
        {
            command: 'SPO Admin Center: User Profiles',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx');
            }
        },
        {
            command: 'SPO Admin Center: BCS',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/bdc/TA_BCSHome.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Term Store',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/termstoremanager.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Records Management',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/TA_OfficialFileAdmin.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Search',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/TA_SearchAdmin.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Search Schema',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/ta_listmanagedproperties.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Search Dictionaries',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin//_layouts/15/termstoremanager.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Authoritative Pages',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/editrelevancesettings.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Query Suggestion Settings',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/querysuggestionsettings.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Result Sources',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/ManageResultSources.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Query Rules',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/listqueryrules.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Manage Query Client Types',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/ManageQueryClientTypes.aspx?level=SPSiteSubscription');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Remove Search Results',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/searchresultremoval.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: View Usage Reports',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin//_layouts/15/reporting.aspx?Category=AnalyticsSearch');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Search Center Settings',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/searchcentersettings.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Export Search Configuration',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/exportsearchconfiguration.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Import Search Configuration',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/importsearchconfiguration.aspx?level=tenant');
            }
        },
        {
            command: 'SPO Admin Center: Search Admin: Crawl Log Permissions',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/searchadmin/crawllogreadpermission.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Secure Store',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/sssvc/TA_ManageSSSvcApplication.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Apps',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/online/tenantadminapps.aspx');
            }
        },
        {
            command: 'SPO Admin Center: Settings',
            exclude: [versionType.premise],
            fn: function () {
                util.goToSPOAdmin('/_layouts/15/online/TenantSettings.aspx');
            }
        }
    ]);

})(CP.Constants, CP.Util);