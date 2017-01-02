/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application start details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    'siteBrand': 'wbc',
    'siteName': 'oneclick',
    'siteSection': 'cao',
    'siteSubSection': '',
    'siteEnv': 'prod',
    'siteDomain': 'www.westpac.com.au',
    'siteExperience': 'mob',
    'formName': 'Cons CC"',
    'formType': 'checkurl',
    'formIsSTP': 'true',
    'formVariant': 'na',
    'newFormName': 'cc',
    'journeyType': 'pub',
    'accountType': 'na',
    'trackOnce': 'true',
    'pageName': 'welcome',
    //'eventKey' : 'mob:wbc_oregon_app_cc_thank-you',
    'pageStep': 'start',
    'pageType': 'application',
    'productID': [{
        'prod': 'WBC03PL005',
        'qty': '1',
        'primaryProd': 'true'
    }
    ]
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application intermediate steps details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    'siteBrand': 'wbc',
    'siteName': 'oneclick',
    'siteSection': 'cao',
    'siteSubSection': '',
    'siteEnv': 'prod',
    'siteDomain': 'www.westpac.com.au',
    'siteExperience': 'mob',
    'formName': 'Cons CC"',
    'formType': 'checkurl',
    'formIsSTP': 'true',
    'formVariant': 'na',
    'newFormName': 'cc',
    'journeyType': 'pub',
    'accountType': 'na',
    'trackOnce': 'true',
    'pageName': 'your-details',
    'eventKey': 'mob:wbc_oneclick_app_cc_your-details',
    'pageType': 'application',
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application complete details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    'siteBrand': 'wbc',
    'siteName': 'oneclick',
    'siteSection': 'cao',
    'siteSubSection': '',
    'siteEnv': 'prod',
    'siteDomain': 'www.westpac.com.au',
    'siteExperience': 'mob',
    'formName': 'Cons CC"',
    'formType': 'checkurl',
    'formIsSTP': 'true',
    'formVariant': 'na',
    'newFormName': 'cc',
    'journeyType': 'pub',
    'accountType': 'na',
    'trackOnce': 'true',
    'pageName': 'thank-you',
    'eventKey': 'mob:wbc_oneclick_app_cc_thank-you',
    'pageStep': 'complete',
    'pageType': 'application',
    'productID': [{
        'prod': 'WBC03PL005',
        'qty': '2',
        'events': 'deposit=0',
        'merch': 'options=estatement',
        'primaryProd': 'true'
    },
    {
        'prod': 'WBC03PL007',
        'qty': '1',
        'events': 'deposit=0',
        'merch': 'options=estatement',
        'secondaryProd': 'true'
    }, {
        'prod': 'WBC03PL005',
        'crossSell': 'true',
        'qty': '1'
    }
    ],
    'applicationStatus': [{
        'accountStatus': 'opened',
        'profileStatus': 'created',
        'verificationStatus': 'idv',
        'exceptionCode': '12112',
    }, {
        'accountStatus': 'opened',
        'profileStatus': 'created',
        'verificationStatus': 'idv',
        'exceptionCode': '14442'
    }
    ],
    'appReference': [{
        'prod': 'WBC03PL005',
        'Id': '1',
    },
    {
        'prod': 'WBC03PL005',
        'Id': '1',
    }
    ]
}