/*!
 *  command-util.js
 */
var CP = CP || {};
CP.Util = CP.Util || {};

(function(module) {
    // Open in a new window
    module.openInNewWindow = false;

    // Get the web server relative URL
    module.getWebServerRelativeUrl = function() {
        return (_spPageContextInfo.webServerRelativeUrl === '/') ? _spPageContextInfo.webServerRelativeUrl : _spPageContextInfo.webServerRelativeUrl + '/';
    };

    // Open a URL in a new tab or in the current tab
    module.goTo = function (url) {
        if (module.openInNewWindow) {
            window.open(url, '_blank');
        } else {
            window.location = url;
        }
    };

    // Go to a specific page, with the relative server URL
    module.goToPage = function(relativePath) {
        module.goTo(window.location.origin + _spPageContextInfo.webServerRelativeUrl + relativePath);
    };

    // Go to a central administration page
    module.goToCentralAdmin = function(path) {
        module.goTo(window.location.origin + ':11111' + path);
    };

    // Go to a SharePoint Online admin center page
    module.goToSPOAdmin = function(path) {
        module.goTo(window.location.origin.replace('.sharepoint.com', '-admin.sharepoint.com') + path);
    };

    // Go to a SharePoint Online admin center page
    module.goToSPOMySite = function(path) {
        module.goTo(window.location.origin.replace('.sharepoint.com', '-my.sharepoint.com') + path);
    };

    // Returns the site type based on a site template ID
    module.getSiteType = function() {
        var siteType = CP.Constants.SiteTypes;

        if (typeof g_wsaSiteTemplateId !== 'undefined' && g_wsaSiteTemplateId) {
            switch (g_wsaSiteTemplateId) {
                case 'STS#0':
                case 'SPSPERS#6':
                case 'SPSMSITEHOST#0':
                    return siteType.collab;
                case 'BLANKINTERNET#0':
                case 'SRCHCEN#0':
                    return siteType.pub;
            }

            if (g_wsaSiteTemplateId.indexOf('INTERNET') > -1) {
                return siteType.pub;
            }
        }

        return siteType.pub;
    };

    // Returns the SharePoint version type
    module.getVersionType = function() {
        var versionType = CP.Constants.VersionTypes;

        if (typeof _spPageContextInfo !== 'undefined' &&
            _spPageContextInfo.siteClientTag &&
            _spPageContextInfo.siteClientTag.indexOf('$$16') > -1) {
            return versionType.online;
        }

        return versionType.premise;
    };

})(CP.Util);
