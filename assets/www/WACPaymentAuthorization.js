/*
 * JS for WACPaymentAuthorization generated by Exadel Tiggzi
 *
 * Created on: Thursday, October 11, 2012, 07:57:15 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "apk";
Tiggr.getProjectGUID = function() {
    return '72bec4fc-27f6-4fca-9f3d-8ce445f38f34';
}
Tiggr.getTargetPlatform = function() {
    return 'A';
}

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
var WACPaymentOAuth2Context = new WACPaymentO2SecurityContext({
    'api_key': ''
});
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
var WACPaymentSettings = {
    "application_id": "wac-2e77619a-ccd3-44f7-b9c4-2baaea7d948e",
    "client_id": "wac-a24874833b25ba2df799c0fe3bf49369a3f77d25",
    "shared_secret": "9ac9beb46a9df8c96567eaf48f44e97ccd8aedbd",
    "redirect_uri": "https://gateway.wacapps.net/redirect/2b3b38c5-6877-48c0-9802-21f4279e17a1",
    "developer_name": "Omar Daniels",
    "authorize_uri": "https://api.wacapps.net//2/oauth/authorize",
    "product_uri": "https://api.wacapps.net/products",
    "spoof_ip": ""
}
/*************************
 *      SERVICES          *
 *************************/
var WACPaymentQueryProducts = new Tiggr.RestService({
    'url': '{product_uri}/{application_id}/{item_id}',
    'dataType': 'json',
    'type': 'get',
});
var WACPaymentCharge = new Tiggr.RestService({
    'url': 'https://api.wacapps.net//2/payment/acr:Authorization/transactions/amount',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
    'securityContext': WACPaymentOAuth2Context
});
var WACPaymentItemsProperties = new Tiggr.RestService({
    'url': 'http://tiggzi.com',
    'dataType': 'json',
    'type': 'get',
    'echo': {
        "results": [{
            "id": "wac-a0552795-c384-4005-92ea-4ceacdee0e03",
            "image": "https://wacoperatorimages.s3.amazonaws.com/b2c6647a021118685634262b6eb78e08",
            "name": "Audio Cambridge"
        }, {
            "id": "wac-c422851b-0140-47da-8079-27d382898428",
            "image": "https://wacoperatorimages.s3.amazonaws.com/49fb4f030abb3f598866898cc56ade74",
            "name": "Catalan Dictionary"
        }, {
            "id": "wac-09838a8d-eba5-49d9-a999-38ac9612046e",
            "image": "https://wacoperatorimages.s3.amazonaws.com/89cfffeff2b4111fdec193aab7f938c0",
            "name": "Russian Dictionary"
        }, {
            "id": "wac-5b89df28-aaf1-4b47-9142-c4731ea2525e",
            "image": "https://wacoperatorimages.s3.amazonaws.com/0ed759e1d1c2d3c2eac8dd46198cdfb1",
            "name": "Merriam-Webster"
        }]
    }
});
createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
Tiggr.AppPages = [{
    "name": "FreeBeats",
    "location": "FreeBeats.html"
}, {
    "name": "WACPaymentSplash",
    "location": "WACPaymentSplash.html"
}, {
    "name": "WACPaymentAuthorization",
    "location": "WACPaymentAuthorization.html"
}, {
    "name": "WACPaymentDetail",
    "location": "WACPaymentDetail.html"
}, {
    "name": "WACPaymentMain",
    "location": "WACPaymentMain.html"
}, {
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "Beatsforsale",
    "location": "Beatsforsale.html"
}];
j_19_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'waitLabel': 'j_23',
        'failLabel': 'j_24',
        'successLabel': 'j_25',
        'resultGrid': 'j_26',
        'mobilegridcell18': 'j_27',
        'mobilegridcell19': 'j_28',
        'mobilegridcell23': 'j_29',
        'mobilelabel27': 'j_30',
        'mobilegridcell24': 'j_31',
        'amountLabel': 'j_32',
        'mobilegridcell25': 'j_33',
        'mobilelabel28': 'j_34',
        'mobilegridcell26': 'j_35',
        'currencyLabel': 'j_36',
        'mobilegridcell27': 'j_37',
        'mobilelabel29': 'j_38',
        'mobilegridcell28': 'j_39',
        'rCodeLabel': 'j_40',
        'mobilegridcell29': 'j_41',
        'mobilelabel18': 'j_42',
        'mobilegridcell30': 'j_43',
        'srCodeLabel': 'j_44',
        'mobilegridcell14': 'j_45',
        'mobilelabel30': 'j_46',
        'mobilegridcell15': 'j_47',
        'statusLabel': 'j_48',
        'btnBack': 'j_50'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_19';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    charge = new Tiggr.DataSource(WACPaymentCharge, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_19");
        },
        'onSuccess': function(data) {
            Tiggr('resultGrid').show();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['amountTransaction', 'paymentAmount', 'chargingInformation', 'currency'],
            'ID': 'currencyLabel',
            'ATTR': '@'
        }, {
            'PATH': ['amountTransaction', 'paymentAmount', 'totalAmountCharged'],
            'ID': 'amountLabel',
            'ATTR': '@'
        }, {
            'PATH': ['amountTransaction', 'referenceCode'],
            'ID': 'rCodeLabel',
            'ATTR': '@'
        }, {
            'PATH': ['amountTransaction', 'serverReferenceCode'],
            'ID': 'srCodeLabel',
            'ATTR': '@'
        }, {
            'PATH': ['amountTransaction', 'transactionOperationStatus'],
            'ID': 'statusLabel',
            'ATTR': '@'
        }],
        'requestMapping': [{
            'PATH': ['Accept'],
            'HEADER': true,
            'ATTR': 'application/json'
        }, {
            'PATH': ['endUserId'],
            'ATTR': 'acr:Authorization'
        }, {
            'PATH': ['referenceCode'],
            'TRANSFORMATION': function(value) {
                return randomUUID().substr(0, 32).toLowerCase();
            }
        }, {
            'PATH': ['transactionOperationStatus'],
            'ATTR': 'Charged'
        }, {
            'PATH': ['description'],
            'ID': '___local_storage___',
            'ATTR': 'WACPaymentitemDescription'
        }, {
            'PATH': ['code'],
            'ID': '___local_storage___',
            'ATTR': 'WACPaymentitemId'
        }, {
            'PATH': ['currency'],
            'ID': '___local_storage___',
            'ATTR': 'WACPaymentitemCurrency'
        }, {
            'PATH': ['amount'],
            'ID': '___local_storage___',
            'ATTR': 'WACPaymentitemPrice'
        }]
    });
    datasources.push(charge);
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_19_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_19';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_9BAA_onLoad = j_19_onLoad = function() {
        screen_9BAA_elementsExtraJS();
        j_19_deviceEvents();
        j_19_windowEvents();
        screen_9BAA_elementsEvents();
    }
    // screen window events
    screen_9BAA_windowEvents = j_19_windowEvents = function() {
        $('#j_19').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#j_19').bind({
            pageshow: function() {
                Tiggzi("resultGrid").hide();
                try {
                    charge.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            },
        });
    }
    // device events
    j_19_deviceEvents = function() {
        document.addEventListener("deviceready", function() {});
    }
    // screen elements extra js
    screen_9BAA_elementsExtraJS = j_19_elementsExtraJS = function() {
        // screen (screen-9BAA) extra code
    }
    // screen elements handler
    screen_9BAA_elementsEvents = j_19_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_49 [name="btnBack"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    $('[data-role=footer] div').css('margin', '0 auto').css('float', 'none');
                    window.location = 'WACPaymentMain.html';
                }
            },
        });
    }
    $("#j_19").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_19_beforeshow();
    });
    if (runBeforeShow) {
        j_19_beforeshow();
    } else {
        j_19_onLoad();
    }
}
$("#j_19").die("pageinit").live("pageinit", function(event, ui) {
    j_19_js();
});