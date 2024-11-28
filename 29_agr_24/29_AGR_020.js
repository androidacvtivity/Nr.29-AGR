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
    validate45_004(values);
    validate45_005(values);
    validate45_006(values);

    validate45_001_F(values);
    validate45_002_F(values);
    validate45_003_F(values);
    validate45_004_F(values);
    validate45_005_F(values);
    validate45_006_F(values);
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


// Validation function for CAP1: row 1240 columns 1-5 ≥ row 1241 columns 1-5
function validate45_006(values) {
    var colNames = ["C1", "C2", "C3", "C4", "C5"];
    for (var col of colNames) {
        var col_1240 = !isNaN(Number(values["CAP1_R1240_" + col])) ? Number(values["CAP1_R1240_" + col]) : 0;
        var col_1241 = !isNaN(Number(values["CAP1_R1241_" + col])) ? Number(values["CAP1_R1241_" + col]) : 0;

        if (col_1240 < col_1241) {
            webform.errors.push({
                'fieldName': 'CAP1_R1240_' + col,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-006. Rând.1240 col. ' + col + ' ≥ Rând.1241 col. ' + col + '. Valoarea rândului 1240: ' + col_1240 + ', valoarea rândului 1241: ' + col_1241)
            });
        }
    }
}

// Validation function for CAP1 FILIAL: row 1240 columns 1-5 ≥ row 1241 columns 1-5
function validate45_006_F(values) {
    var colNames = ["C1", "C2", "C3", "C4", "C5"];
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var col of colNames) {
            var col_1240_F = values["CAP1_R1240_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1240_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1240_" + col + "_FILIAL"][j])
                : 0;
            var col_1241_F = values["CAP1_R1241_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1241_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1241_" + col + "_FILIAL"][j])
                : 0;

            if (col_1240_F < col_1241_F) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1240_' + col + '_FILIAL',
                    'index': j,
                    'weight': 6,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-006-F. Rând.1240 col. ' + col + ' ≥ Rând.1241 col. ' + col + '. Valoarea rândului 1240: ' + col_1240_F + ', valoarea rândului 1241: ' + col_1241_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            }
        }
    }
}


//------------------------------------------------------

// Validation function for CAP1: row 1230 columns 1-5 equals the sum of rows 1231 to 1236 columns 1-5
function validate45_005(values) {
    var colNames = ["C1", "C2", "C3", "C4", "C5"];
    for (var col of colNames) {
        var col_1230 = !isNaN(Number(values["CAP1_R1230_" + col])) ? Number(values["CAP1_R1230_" + col]) : 0;
        var col_sum = 0;

        // Sum rows 1231 to 1236 for the current column
        for (var row = 1231; row <= 1236; row++) {
            col_sum += !isNaN(Number(values["CAP1_R" + row + "_" + col])) ? Number(values["CAP1_R" + row + "_" + col]) : 0;
        }

        if (col_1230 !== col_sum) {
            webform.errors.push({
                'fieldName': 'CAP1_R1230_' + col,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-005. Rând.1230 col. ' + col + ' trebuie să fie egală cu suma rândurilor 1231-1236 col. ' + col + '. Valoarea rândului 1230: ' + col_1230 + ', suma calculată: ' + col_sum)
            });
        }
    }
}

// Validation function for CAP1 FILIAL: row 1230 columns 1-5 equals the sum of rows 1231 to 1236 columns 1-5
function validate45_005_F(values) {
    var colNames = ["C1", "C2", "C3", "C4", "C5"];
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var col of colNames) {
            var col_1230_F = values["CAP1_R1230_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1230_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1230_" + col + "_FILIAL"][j])
                : 0;
            var col_sum_F = 0;

            // Sum rows 1231 to 1236 for the current column
            for (var row = 1231; row <= 1236; row++) {
                if (values["CAP1_R" + row + "_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R" + row + "_" + col + "_FILIAL"][j]))) {
                    col_sum_F += Number(values["CAP1_R" + row + "_" + col + "_FILIAL"][j]);
                }
            }

            if (col_1230_F !== col_sum_F) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1230_' + col + '_FILIAL',
                    'index': j,
                    'weight': 6,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-005-F. Rând.1230 col. ' + col + ' trebuie să fie egală cu suma rândurilor 1231-1236 col. ' + col + '. Valoarea rândului 1230: ' + col_1230_F + ', suma calculată: ' + col_sum_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            }
        }
    }
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

function validate45_003(values) {
    for (var i = 7100; i <= 7520; i++) {
        if (row_45_CAP1_71_752(i)) {

            // Validation for column 1 and column 2
            var col1 = !isNaN(parseFloat(values["CAP2_R" + i + "_C1"])) ? parseFloat(values["CAP2_R" + i + "_C1"]) : 0;
            var col2 = !isNaN(parseFloat(values["CAP2_R" + i + "_C2"])) ? parseFloat(values["CAP2_R" + i + "_C2"]) : 0;

            col1 = roundToDecimal(col1, 1);
            col2 = roundToDecimal(col2, 1);

            if (col1 < col2) {
                webform.errors.push({
                    'fieldName': 'CAP2_R' + i + '_C1',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-003. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                });
            }

            // Validation for column 3 and column 4
            var col3 = !isNaN(parseFloat(values["CAP2_R" + i + "_C3"])) ? parseFloat(values["CAP2_R" + i + "_C3"]) : 0;
            var col4 = !isNaN(parseFloat(values["CAP2_R" + i + "_C4"])) ? parseFloat(values["CAP2_R" + i + "_C4"]) : 0;

            col3 = roundToDecimal(col3, 1);
            col4 = roundToDecimal(col4, 1);

            if (col3 < col4) {
                webform.errors.push({
                    'fieldName': 'CAP2_R' + i + '_C3',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-003. [@col3] - col.3  ≥  col.4 - [@col4]', { "@col3": col3, "@col4": col4 })
                });
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
                var col3_F = 0, col4_F = 0;

                // Check if properties exist and are valid numbers for columns 1 and 2
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

                // Check if properties exist and are valid numbers for columns 3 and 4
                if (values["CAP2_R" + i + "_C3_FILIAL"] && !isNaN(Number(values["CAP2_R" + i + "_C3_FILIAL"][j]))) {
                    col3_F = Number(values["CAP2_R" + i + "_C3_FILIAL"][j]);
                }

                if (values["CAP2_R" + i + "_C4_FILIAL"] && !isNaN(Number(values["CAP2_R" + i + "_C4_FILIAL"][j]))) {
                    col4_F = Number(values["CAP2_R" + i + "_C4_FILIAL"][j]);
                }

                // Round to one decimal place
                col3_F = roundToDecimal(col3_F, 1);
                col4_F = roundToDecimal(col4_F, 1);

                // Validation: col3_F should be greater than or equal to col4_F
                if (col3_F < col4_F) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C3_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-003-F. [@row_FILIAL] - col.3(@col3_F) ≥ col.4(@col4_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col3_F': col3_F,
                            '@col4_F': col4_F
                        })
                    });
                }
            }
        }
    }
}




function validate45_001(values) {
    for (var i = 1110; i <= 1500; i++) {
        if (row_45_CAP1(i)) {

            // Validation for column 1 and column 2
            var col1 = !isNaN(Number(values["CAP1_R" + i + "_C1"])) ? Number(values["CAP1_R" + i + "_C1"]) : 0;
            var col2 = !isNaN(Number(values["CAP1_R" + i + "_C2"])) ? Number(values["CAP1_R" + i + "_C2"]) : 0;

            if (col1 < col2) {
                webform.errors.push({
                    'fieldName': 'CAP1_R' + i + '_C1',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-001. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                });
            }

            // Validation for column 3 and column 4
            var col3 = !isNaN(Number(values["CAP1_R" + i + "_C3"])) ? Number(values["CAP1_R" + i + "_C3"]) : 0;
            var col4 = !isNaN(Number(values["CAP1_R" + i + "_C4"])) ? Number(values["CAP1_R" + i + "_C4"]) : 0;

            if (col3 < col4) {
                webform.errors.push({
                    'fieldName': 'CAP1_R' + i + '_C3',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-001. [@col3] - col.3  ≥  col.4 - [@col4]', { "@col3": col3, "@col4": col4 })
                });
            }
        }
    }
}


function validate45_002(values) {
    for (var i = 1610; i <= 1690; i++) {
        if (row_45_CAP1_1610_1690(i)) {

            // Validation for column 1 and column 2
            var col1 = !isNaN(parseFloat(values["CAP1_R" + i + "_C1"])) ? parseFloat(values["CAP1_R" + i + "_C1"]) : 0;
            var col2 = !isNaN(parseFloat(values["CAP1_R" + i + "_C2"])) ? parseFloat(values["CAP1_R" + i + "_C2"]) : 0;

            col1 = roundToDecimal(col1, 1);
            col2 = roundToDecimal(col2, 1);

            if (col1 < col2) {
                webform.errors.push({
                    'fieldName': 'CAP1_R' + i + '_C1',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-002. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                });
            }

            // Validation for column 3 and column 4
            var col3 = !isNaN(parseFloat(values["CAP1_R" + i + "_C3"])) ? parseFloat(values["CAP1_R" + i + "_C3"]) : 0;
            var col4 = !isNaN(parseFloat(values["CAP1_R" + i + "_C4"])) ? parseFloat(values["CAP1_R" + i + "_C4"]) : 0;

            col3 = roundToDecimal(col3, 1);
            col4 = roundToDecimal(col4, 1);

            if (col3 < col4) {
                webform.errors.push({
                    'fieldName': 'CAP1_R' + i + '_C3',
                    'weight': 6,
                    'msg': Drupal.t('Cod eroare: 45-002. [@col3] - col.3  ≥  col.4 - [@col4]', { "@col3": col3, "@col4": col4 })
                });
            }
        }
    }
}


function validate45_001_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1110; i <= 1500; i++) {
            // Include the condition to filter rows using row_45_CAP1
            if (row_45_CAP1(i)) {
                var col1_F = 0, col2_F = 0;
                var col3_F = 0, col4_F = 0;

                // Check if properties exist and are valid numbers for columns 1 and 2
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
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-001-F. [@row_FILIAL] - COL1(@col1_F) < COL2(@col2_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col1_F': col1_F,
                            '@col2_F': col2_F
                        })
                    });
                }

                // Check if properties exist and are valid numbers for columns 3 and 4
                if (values["CAP1_R" + i + "_C3_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C3_FILIAL"][j]))) {
                    col3_F = Number(values["CAP1_R" + i + "_C3_FILIAL"][j]);
                }

                if (values["CAP1_R" + i + "_C4_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C4_FILIAL"][j]))) {
                    col4_F = Number(values["CAP1_R" + i + "_C4_FILIAL"][j]);
                }

                // Validation: col3_F should be greater than or equal to col4_F
                if (col3_F < col4_F) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + i + '_C3_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-001-F. [@row_FILIAL] - COL3(@col3_F) < COL4(@col4_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col3_F': col3_F,
                            '@col4_F': col4_F
                        })
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
                var col3_F = 0, col4_F = 0;

                // Check if properties exist and are valid numbers for columns 1 and 2
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

                // Check if properties exist and are valid numbers for columns 3 and 4
                if (values["CAP1_R" + i + "_C3_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C3_FILIAL"][j]))) {
                    col3_F = Number(values["CAP1_R" + i + "_C3_FILIAL"][j]);
                }

                if (values["CAP1_R" + i + "_C4_FILIAL"] && !isNaN(Number(values["CAP1_R" + i + "_C4_FILIAL"][j]))) {
                    col4_F = Number(values["CAP1_R" + i + "_C4_FILIAL"][j]);
                }

                // Round to one decimal place
                col3_F = roundToDecimal(col3_F, 1);
                col4_F = roundToDecimal(col4_F, 1);

                // Validation: col3_F should be greater than or equal to col4_F
                if (col3_F < col4_F) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + i + '_C3_FILIAL',
                        'index': j,
                        'weight': 6,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-002-F. [@row_FILIAL] - col.3(@col3_F) ≥ col.4(@col4_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@row_FILIAL': i,
                            '@col3_F': col3_F,
                            '@col4_F': col4_F
                        })
                    });
                }
            }
        }
    }
}
//----------------------------------------------


// Validation function for CAP1: row 1190 columns 1,2,3,4 ≥ row 1191 columns 1,2,3,4
function validate45_004(values) {
    var colNames = ["C1", "C2", "C3", "C4"];
    for (var col of colNames) {
        var col_1190 = !isNaN(Number(values["CAP1_R1190_" + col])) ? Number(values["CAP1_R1190_" + col]) : 0;
        var col_1191 = !isNaN(Number(values["CAP1_R1191_" + col])) ? Number(values["CAP1_R1191_" + col]) : 0;

        if (col_1190 < col_1191) {
            webform.errors.push({
                'fieldName': 'CAP1_R1190_' + col,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-004. Rând.1190 col. ' + col + ' ≥ Rând.1191 col. ' + col + '. Valoarea rândului 1190: ' + col_1190 + ', valoarea rândului 1191: ' + col_1191)
            });
        }
    }
}

// Validation function for CAP1 FILIAL: row 1190 columns 1,2,3,4 ≥ row 1191 columns 1,2,3,4
function validate45_004_F(values) {
    var colNames = ["C1", "C2", "C3", "C4"];
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var col of colNames) {
            var col_1190_F = values["CAP1_R1190_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1190_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1190_" + col + "_FILIAL"][j])
                : 0;
            var col_1191_F = values["CAP1_R1191_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1191_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1191_" + col + "_FILIAL"][j])
                : 0;

            if (col_1190_F < col_1191_F) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1190_' + col + '_FILIAL',
                    'index': j,
                    'weight': 6,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-004-F. Rând.1190 col. ' + col + ' ≥ Rând.1191 col. ' + col + '. Valoarea rândului 1190: ' + col_1190_F + ', valoarea rândului 1191: ' + col_1191_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            }
        }
    }
}


//-----------------------------------------    
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
