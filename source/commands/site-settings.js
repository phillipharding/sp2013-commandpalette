/*!
 *  commands/site-settings.js
 */
var CP = CP || {};

(function (util) {
    var strings = {
            siteSettings: 'Site Settings',
            lookAndFeel: 'Look and Feel',
            siteCollectionAdmin: 'Site Collection Admin',
            siteAdmin: 'Site Administration',
            usersAndPermissions: 'Users and Permissions',
            webDesignerGalleries: 'Web Designer Galleries',
            layouts: '/_layouts/15/'
        };

    CP.CommandList = CP.CommandList || [];

    CP.CommandList = CP.CommandList.concat([
        {
            command: strings.siteSettings + ': ' + strings.usersAndPermissions + ': People and groups',
            fn: function () {
                util.goToPage(strings.layouts + 'people.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.usersAndPermissions + ': Site permissions',
            fn: function () {
                util.goToPage(strings.layouts + 'user.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.usersAndPermissions + ': Site collection administrators',
            fn: function () {
                util.goToPage(strings.layouts + 'mngsiteadmin.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.usersAndPermissions + ': Site app permissions',
            fn: function () {
                util.goToPage(strings.layouts + 'appprincipals.aspx?Scope=Web');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Site columns',
            fn: function () {
                util.goToPage(strings.layouts + 'mngfield.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Site content types',
            fn: function () {
                util.goToPage(strings.layouts + 'mngctype.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Web parts',
            fn: function () {
                util.goToPage('/_catalogs/wp/Forms/AllItems');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': List templates',
            fn: function () {
                util.goToPage('/_catalogs/lt/Forms/AllItems');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Master pages',
            fn: function () {
                util.goToPage('/_catalogs/masterpage/Forms/AllItems');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Themes',
            fn: function () {
                util.goToPage('/_catalogs/theme/Forms/AllItems');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Solutions',
            fn: function () {
                util.goToPage('/_catalogs/solutions/Forms/AllItems');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.webDesignerGalleries + ': Composed looks',
            fn: function () {
                util.goToPage('/_catalogs/design/AllItems.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Regional settings',
            fn: function () {
                util.goToPage(strings.layouts + 'regionalsetng.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Language settings',
            fn: function () {
                util.goToPage(strings.layouts + 'muisetng.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Site libraries and lists',
            fn: function () {
                util.goToPage(strings.layouts + 'mcontent.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': User alerts',
            fn: function () {
                util.goToPage(strings.layouts + 'sitesubs.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': RSS',
            fn: function () {
                util.goToPage(strings.layouts + 'siterss.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Sites and workspaces',
            fn: function () {
                util.goToPage(strings.layouts + 'mngsubwebs.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Workflow settings',
            fn: function () {
                util.goToPage(strings.layouts + 'wrksetng.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Site Closure and Deletion',
            fn: function () {
                util.goToPage(strings.layouts + 'ProjectPolicyAndLifecycle.asp');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Popularity Trends',
            fn: function () {
                util.goToPage(strings.layouts + 'Reporting.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteAdmin + ': Term store management',
            fn: function () {
                util.goToPage(strings.layouts + 'termstoremanager.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Result Sources',
            fn: function () {
                util.goToPage(strings.layouts + 'manageresultsources.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Result Types',
            fn: function () {
                util.goToPage(strings.layouts + 'manageresulttypes.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Query Rules',
            fn: function () {
                util.goToPage(strings.layouts + 'listqueryrules.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Schema',
            fn: function () {
                util.goToPage(strings.layouts + 'listmanagedproperties.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Search Settings',
            fn: function () {
                util.goToPage('/_layouts/enhancedSea/ch/aspx?level');
            }
        },
        {
            command: strings.siteSettings + ': Search: Searchable columns',
            fn: function () {
                util.goToPage(strings.layouts + 'NoCrawlSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Search and offline availability',
            fn: function () {
                util.goToPage(strings.layouts + 'srchvis.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Configuration Import',
            fn: function () {
                util.goToPage(strings.layouts + 'importsearchconfiguration.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Configuration Import',
            fn: function () {
                util.goToPage(strings.layouts + 'importsearchconfiguration.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Search: Configuration Export',
            fn: function () {
                util.goToPage(strings.layouts + 'exportsearchconfiguration.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Design Manager',
            fn: function () {
                util.goToPage(strings.layouts + 'RedirectPage.aspx?Target={SiteCollectionUrl}{LayoutsFolder}DesignSite.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Master page',
            fn: function () {
                util.goToPage(strings.layouts + 'ChangeSiteMasterPage.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Title, description, and logo',
            fn: function () {
                util.goToPage(strings.layouts + 'prjsetng.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Page layouts and site templates',
            fn: function () {
                util.goToPage(strings.layouts + 'AreaTemplateSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Welcome Page',
            fn: function () {
                util.goToPage(strings.layouts + 'AreaWelcomePage.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Device Channels',
            fn: function () {
                util.goToPage(strings.layouts + 'RedirectPage.aspx?Target={SiteCollectionUrl}DeviceChannels');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Tree view',
            fn: function () {
                util.goToPage(strings.layouts + 'navoptions.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Change the look',
            fn: function () {
                util.goToPage(strings.layouts + 'designgallery.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Import Design Package',
            fn: function () {
                util.goToPage(strings.layouts + 'DesignPackageInstall.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Navigation',
            fn: function () {
                util.goToPage(strings.layouts + 'AreaNavigationSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.lookAndFeel + ': Image Renditions',
            fn: function () {
                util.goToPage(strings.layouts + 'ImageRenditionSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Site Actions: Manage site features',
            fn: function () {
                util.goToPage(strings.layouts + 'ManageFeatures.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Site Actions: Reset to site definition',
            fn: function () {
                util.goToPage(strings.layouts + 'reghost.aspx');
            }
        },
        {
            command: strings.siteSettings + ': Site Actions: Delete this site',
            fn: function () {
                util.goToPage(strings.layouts + 'deleteweb.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Recycle bin',
            fn: function () {
                util.goToPage(strings.layouts + 'AdminRecycleBin.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Result Sources',
            fn: function () {
                util.goToPage(strings.layouts + 'manageresultsources.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Result Types',
            fn: function () {
                util.goToPage(strings.layouts + 'manageresulttypes.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Query Rules',
            fn: function () {
                util.goToPage(strings.layouts + 'listqueryrules.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Schema',
            fn: function () {
                util.goToPage(strings.layouts + 'listmanagedproperties.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Settings',
            fn: function () {
                util.goToPage('/_layouts/enhancedSearch.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Configuration Import',
            fn: function () {
                util.goToPage(strings.layouts + 'importsearchconfiguration.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search Configuration Export',
            fn: function () {
                util.goToPage(strings.layouts + 'exportsearchconfiguration.aspx?level=sitecol');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection features',
            fn: function () {
                util.goToPage(strings.layouts + 'ManageFeatures.aspx?Scope=Site');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site hierarchy',
            fn: function () {
                util.goToPage(strings.layouts + 'vsubwebs.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Search engine optimization settings',
            fn: function () {
                util.goToPage(strings.layouts + 'SEOSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection navigation',
            fn: function () {
                util.goToPage(strings.layouts + 'SiteNavigationSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection audit settings',
            fn: function () {
                util.goToPage(strings.layouts + 'AuditSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Audit log reports',
            fn: function () {
                util.goToPage(strings.layouts + 'Reporting.aspx?Category=Auditing');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Portal site connection',
            fn: function () {
                util.goToPage(strings.layouts + 'portal.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Content Type Policy Templates',
            fn: function () {
                util.goToPage(strings.layouts + 'Policylist.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Storage Metrics',
            fn: function () {
                util.goToPage(strings.layouts + 'storman.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection app permissions',
            fn: function () {
                util.goToPage(strings.layouts + 'appprincipals.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Content type publishing',
            fn: function () {
                util.goToPage(strings.layouts + 'contenttypesyndicationhubs.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection output cache',
            fn: function () {
                util.goToPage(strings.layouts + 'sitecachesettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Popularity and Search Reports',
            fn: function () {
                util.goToPage(strings.layouts + 'Reporting.aspx?Category=AnalyticsSiteCollection');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Variations Settings',
            fn: function () {
                util.goToPage(strings.layouts + 'VariationSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Variation labels',
            fn: function () {
                util.goToPage(strings.layouts + 'VariationLabels.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Translatable columns',
            fn: function () {
                util.goToPage(strings.layouts + 'SiteTranslatableColumns.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Variation logs',
            fn: function () {
                util.goToPage(strings.layouts + 'VariationLogs.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Suggested Content Browser Locations',
            fn: function () {
                util.goToPage('/PublishedLinks/');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': HTML Field Security',
            fn: function () {
                util.goToPage(strings.layouts + 'HtmlFieldSecurity.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': SharePoint Designer Settings',
            fn: function () {
                util.goToPage(strings.layouts + 'SharePointDesignerSettings.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection health checks',
            fn: function () {
                util.goToPage(strings.layouts + 'sitehealthcheck.aspx');
            }
        },
        {
            command: strings.siteSettings + ': ' + strings.siteCollectionAdmin + ': Site collection upgrade',
            fn: function () {
                util.goToPage(strings.layouts + 'siteupgrade.aspx');
            }
        }
    ]);

})(CP.Util);