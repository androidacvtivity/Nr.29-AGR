(function ($) {
    Drupal.behaviors.agr29_24 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }
})(jQuery)

webform.validators.agr29_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
   
    //-----------------------------------------------------

    validatePhoneNumber(values.PHONE);
    validate45_001(values);
    validate45_002(values);
    validate45_003(values);
    validate45_001_F(values);
    validate45_002_F(values);
    validate45_003_F(values);
    //-----------------------------------------------------

    
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.validatorsStatus['agr29_24'] = 1;
    validateWebform();
}


//------------------------------------------------------

//1
function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}

//2
function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}

//3
function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
}

function row_45_CAP1(row) {
    var i;
    i = row;
    if (
        i == 1110 || i == 1120 || i == 1130 || i == 1140 || i == 1150 || i == 1160 || i == 1170 || i == 1180
        || i == 1190 || i == 1191 || i == 1210 || i == 1220 || i == 1230 || i == 1231 || i == 1232 || i == 1232
        || i == 1233 || i == 1234 || i == 1134 || i == 1235 || i == 1236 || i == 1240 || i == 1241
        || i == 1300 || i == 1400 || i == 1410 || i == 1420 || i == 1430 || i == 1431 || i == 1440 || i == 1450
        || i == 1460 || i == 1470 || i == 1480 || i == 1481 || i == 1482 || i == 1483 || i == 1484 || i == 1485 
        || i == 1486 || i == 1490 || i == 1500 || i == 1900 || i == 1910 || i == 1920 || i == 1930 || i == 1940
        || i == 1950 || i == 1960

     )
        return true;
}


function row_45_CAP1_1610_1690(row) {
    var i;
    i = row;
    if (
        i == 1610 || i == 1620 || i == 1621 || i == 1622 || i == 1623 || i == 1624 || i == 1625 || i == 1626
        || i == 1627 || i == 1628 || i == 1629 || i == 1630 || i == 1631 || i == 1632 || i == 1633 || i == 1634
        || i == 1635 || i == 1636 || i == 1640 || i == 1650 || i == 1660 || i == 1670 || i == 1680
        || i == 1681 || i == 1682 || i == 1690 
        
    )
        return true;
}


function row_45_CAP1_71_752(row) {
    var i;
    i = row;
    if (
        i == 7100 || i == 7110 || i == 7120 || i == 7130 || i == 7140 || i == 7200 || i == 7210 || i == 7220
        || i == 7230 || i == 7240 || i == 7250 || i == 7260 || i == 7300 || i == 7310 || i == 7320 || i == 7330
        || i == 7400 || i == 7410 || i == 7420 || i == 7430 || i == 7440 || i == 7450 || i == 7460
        || i == 7470 || i == 7480 || i == 7490 || i == 7500 || i == 7510 || i == 7520

    )
        return true;
}

// Modify this function to be with - FILIAL. You have already modified it.
function validate45_003(values) {
    for (var i = 7100; i <= 7520; i++) {
        {
            if (row_45_CAP1_71_752(i)) {


                var col1 = !isNaN(parseFloat(values["CAP2_R" + (i) + "_C1"])) ? parseFloat(values["CAP2_R" + (i) + "_C1"]) : 0;
                var col2 = !isNaN(parseFloat(values["CAP2_R" + (i) + "_C2"])) ? parseFloat(values["CAP2_R" + (i) + "_C2"]) : 0;

                col1 = roundToDecimal(col1, 1);
                col2 = roundToDecimal(col2, 1);
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C1',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-003. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
}

function validate45_003_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 7100; i <= 7520; i++) {
            if (row_45_CAP1_71_752(i)) {
                var col1_F = 0, col2_F = 0;

                // Check if properties exist and are valid numbers
                if (values["CAP2_R" + i + "_C1_FILIAL"] && !isNaN(Number(values["CAP2_R" + i + "_C1_FILIAL"][j]))) {
                    col1_F = Number(values["CAP2_R" + i + "_C1_FILIAL"][j]);
                }

                if (values["CAP2_R" + i + "_C2_FILIAL"] && !isNaN(Number(values["CAP2_R" + i + "_C2_FILIAL"][j]))) {
                    col2_F = Number(values["CAP2_R" + i + "_C2_FILIAL"][j]);
                }

                // Round to one decimal place
                col1_F = roundToDecimal(col1_F, 1);
                col2_F = roundToDecimal(col2_F, 1);

                // Validation: col1_F should be greater than or equal to col2_F
                if (col1_F < col2_F) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C1_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-003-F. [@row_FILIAL] - col.1(@col1_F) ≥ col.2(@col2_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col1_F': col1_F,
                            '@col2_F': col2_F
                        })
                    });
                }
            }
        }
    }
}


function validate45_001(values) {
    for (var i = 1110; i <= 1500; i++) {
        {
            if (row_45_CAP1(i)) {
                
           
                
                var col1 = !isNaN(Number(values["CAP1_R" + (i) + "_C1"])) ? Number(values["CAP1_R" + (i) + "_C1"]) : 0;
                var col2 = !isNaN(Number(values["CAP1_R" + (i) + "_C2"])) ? Number(values["CAP1_R" + (i) + "_C2"]) : 0;

                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-001. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
}


function validate45_002(values) {
    for (var i = 1610; i <= 1690; i++) {
        {
            if (row_45_CAP1_1610_1690(i)) {


                var col1 = !isNaN(parseFloat(values["CAP1_R" + (i) + "_C1"])) ? parseFloat(values["CAP1_R" + (i) + "_C1"]) : 0;
                var col2 = !isNaN(parseFloat(values["CAP1_R" + (i) + "_C2"])) ? parseFloat(values["CAP1_R" + (i) + "_C2"]) : 0;

                col1 = roundToDecimal(col1, 1);
                col2 = roundToDecimal(col2, 1);
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-002. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
}


//This is one sample
function validate45_001_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1110; i <= 1500; i++) {
            // Include the condition to filter rows using row_45_CAP1
            if (row_45_CAP1(i)) {
                var col1_F = 0, col2_F = 0;

                // Check if properties exist and are valid numbers
                if (values["CAP1_R" + i + "_C1_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C1_FILIAL"][j]))) {
                    col1_F = Number(values["CAP1_R" + i + "_C1_FILIAL"][j]);
                }

                if (values["CAP1_R" + i + "_C2_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C2_FILIAL"][j]))) {
                    col2_F = Number(values["CAP1_R" + i + "_C2_FILIAL"][j]);
                }

                // Validation: col1_F should be greater than or equal to col2_F
                if (col1_F < col2_F) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + i + '_C1_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-001-F. [@row_FILIAL] - COL1(@col1_F) < COL2(@col2_F)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@row_FILIAL': i, '@col1_F': col1_F, '@col2_F': col2_F })
                    });
                }
            }
        }
    }
}



function validate45_002_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1610; i <= 1690; i++) {
            if (row_45_CAP1_1610_1690(i)) {
                var col1_F = 0, col2_F = 0;

                // Check if properties exist and are valid numbers
                if (values["CAP1_R" + i + "_C1_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C1_FILIAL"][j]))) {
                    col1_F = Number(values["CAP1_R" + i + "_C1_FILIAL"][j]);
                }

                if (values["CAP1_R" + i + "_C2_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C2_FILIAL"][j]))) {
                    col2_F = Number(values["CAP1_R" + i + "_C2_FILIAL"][j]);
                }

                // Round to one decimal place
                col1_F = roundToDecimal(col1_F, 1);
                col2_F = roundToDecimal(col2_F, 1);

                // Validation: col1_F should be greater than or equal to col2_F
                if (col1_F < col2_F) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + i + '_C1_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-002-F. [@row_FILIAL] - col.1(@col1_F) ≥ col.2(@col2_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col1_F': col1_F,
                            '@col2_F': col2_F
                        })
                    });
                }
            }
        }
    }
}


//    
function roundToDecimal(value, decimals) {
    if (!isNaN(value)) {
        var factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    } else {
        console.warn("Value provided is not a number:", value);
        return 0; // Default fallback value
    }
}

// --------------------------------------------------
function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}
