(function ($) {
    Drupal.behaviors.agr29 = {
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

webform.validators.agr29 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Start 45-020, 45-019, 45-039, 45-042, 45-043, 45-044, 45-040, 45-016
    if (!isNaN(Number(values.CAP1_R1242_C3))) {
        var R1242_C3 = Number(values.CAP1_R1242_C3);
    }
    if (!isNaN(Number(values.CAP1_R1242_C4))) {
        var R1242_C4 = Number(values.CAP1_R1242_C4);
    }
    if (!isNaN(Number(values.CAP1_R1243_C1))) {
        var R1243_C1 = Number(values.CAP1_R1243_C1);
    }
    if (!isNaN(Number(values.CAP1_R1243_C2))) {
        var R1243_C2 = Number(values.CAP1_R1243_C2);
    }
    if (!isNaN(Number(values.CAP1_R1243_C3))) {
        var R1243_C3 = Number(values.CAP1_R1243_C3);
    }
    if (!isNaN(Number(values.CAP1_R1243_C4))) {
        var R1243_C4 = Number(values.CAP1_R1243_C4);
    }
    if (!isNaN(Number(values.CAP1_R1329_C3))) {
        var R1329_C3 = Number(values.CAP1_R1329_C3);
    }
    if (!isNaN(Number(values.CAP1A_R1701_C2))) {
        var R1701_C2 = Number(values.CAP1A_R1701_C2);
    }
    /*if (!isNaN(Number(values.CAP1_R1330_C5))) {
        var R1330_C5 = Number(values.CAP1_R1330_C5);
    }
    if (!isNaN(Number(values.CAP1_R1117_C3))) {
        var R1117_C3 = Number(values.CAP1_R1117_C3);
    }
    if (!isNaN(Number(values.CAP1_R1117_C4))) {
        var R1117_C4 = Number(values.CAP1_R1117_C4);
    }
    if (!isNaN(Number(values.CAP1_R1119_C4))) {
        var R1119_C4 = Number(values.CAP1_R1119_C4);
    }*/
    if (!isNaN(Number(values.CAP1_R1440_C1))) {
        var R1440_C1 = Number(values.CAP1_R1440_C1);
    }
    if (!isNaN(Number(values.CAP1_R1442_C1))) {
        var R1442_C1 = Number(values.CAP1_R1442_C1);
    }
    if (!isNaN(Number(values.CAP1_R1411_C1))) {
        var R1411_C1 = Number(values.CAP1_R1411_C1);
    }
    if (!isNaN(Number(values.CAP1_R1412_C2))) {
        var R1412_C2 = Number(values.CAP1_R1412_C2);
    }
    if (!isNaN(Number(values.CAP1_R1413_C2))) {
        var R1413_C2 = Number(values.CAP1_R1413_C2);
    }
    if (!isNaN(Number(values.CAP1_R1414_C2))) {
        var R1414_C2 = Number(values.CAP1_R1414_C2);
    }
    if (!isNaN(Number(values.CAP1_R1415_C2))) {
        var R1415_C2 = Number(values.CAP1_R1415_C2);
    }
    if (!isNaN(Number(values.CAP1_R1630_C1))) {
        var R1630_C1 = Number(values.CAP1_R1630_C1);
    }
    if (!isNaN(Number(values.CAP1_R1631_C1))) {
        var R1631_C1 = Number(values.CAP1_R1631_C1);
    }
    if (!isNaN(Number(values.CAP1_R1501_C2))) {
        var R1501_C2 = Number(values.CAP1_R1501_C2);
    }
    if (!isNaN(Number(values.CAP1_R1502_C2))) {
        var R1502_C2 = Number(values.CAP1_R1502_C2);
    }
    if (!isNaN(Number(values.CAP2_R2100_C1))) {
        var R2100_C1 = Number(values.CAP2_R2100_C1);
    }
    if (!isNaN(Number(values.CAP2_R2110_C1))) {
        var R2110_C1 = Number(values.CAP2_R2110_C1);
    }
    if (!isNaN(Number(values.CAP2_R2120_C1))) {
        var R2120_C1 = Number(values.CAP2_R2120_C1);
    }
    if (!isNaN(Number(values.CAP2_R2200_C1))) {
        var R2200_C1 = Number(values.CAP2_R2200_C1);
    }
    if (!isNaN(Number(values.CAP2_R2300_C1))) {
        var R2300_C1 = Number(values.CAP2_R2300_C1);
    }
    if (!isNaN(Number(values.CAP1_R1418_C1))) {
        var R1418_C1 = Number(values.CAP1_R1418_C1);
    }
    if (!isNaN(Number(values.CAP1_R1419_C2))) {
        var R1419_C2 = Number(values.CAP1_R1419_C2);
    }
    if (!isNaN(Number(values.CAP1_R1420_C2))) {
        var R1420_C2 = Number(values.CAP1_R1420_C2);
    }
    if (!isNaN(Number(values.CAP1_R1421_C2))) {
        var R1421_C2 = Number(values.CAP1_R1421_C2);
    }
    if (!isNaN(Number(values.CAP1_R1422_C1))) {
        var R1422_C1 = Number(values.CAP1_R1422_C1);
    }
    var SUM_45_020 = R1419_C2 + R1420_C2 + R1421_C2 + R1422_C1
    if (R1418_C1 < (SUM_45_020)) {
        webform.errors.push({
            'fieldName': 'CAP1_R1418_C1',
            'weight': 23,
            'msg': Drupal.t('Cod eroare: 45-020. [@R1418_C1] - Rînd.(1418) col.1>=Rînd.(1419+1420+1421) col.2+Rînd.(1422) pe col.1 - [@SUM_45_020]', { "@R1418_C1": R1418_C1, "@SUM_45_020": SUM_45_020 })
        });
    }
    var SUM_45_019 = R1412_C2 + R1413_C2 + R1414_C2 + R1415_C2
    if (R1411_C1 < SUM_45_019) {
        webform.errors.push({
            'fieldName': 'CAP1_R1411_C1',
            'weight': 22,
            'msg': Drupal.t('Cod eroare: 45-019. [@R1411_C1] - Rînd.(1411) col.1>=Rînd.(1412+1413+1414+1415) pe col.2 - [@SUM_45_019]', { "@R1411_C1": R1411_C1, "@SUM_45_019": SUM_45_019 })
        });
    }
    var SUM_45_039 = R1440_C1 - R1442_C1
    if (R1631_C1 < (SUM_45_039)) {
        webform.errors.push({
            'fieldName': 'CAP1_R1631_C1',
            'weight': 39,
            'msg': Drupal.t('Cod eroare: 45-039. [@R1631_C1] - Rînd.(1631) col.1>=Rînd.(1440)-Rînd.(1442) pe col.1 - [@SUM_45_039]', { "@R1631_C1": R1631_C1, "@SUM_45_039": SUM_45_039 })
        });
    }
    if (R1242_C3 < R1242_C4) {
        webform.errors.push({
            'fieldName': 'CAP1_R1242_C3',
            'weight': 42,
            'msg': Drupal.t('Cod eroare: 45-042. [@R1242_C3] - Rînd.(1242) col.3>=Rînd.(1242) pe col.4 - [@R1242_C4]', { "@R1242_C3": R1242_C3, "@R1242_C4": R1242_C4 })
        });
    }
    if (R1243_C1 < R1243_C2) {
        webform.errors.push({
            'fieldName': 'CAP1_R1243_C1',
            'weight': 43,
            'msg': Drupal.t('Cod eroare: 45-043. [@R1243_C1] - Rînd.(1243) col.1>=Rînd.(1243) pe col.2 - [@R1243_C2]', { "@R1243_C1": R1243_C1, "@R1243_C2": R1243_C2 })
        });
    }
    if (R1243_C3 < R1243_C4) {
        webform.errors.push({
            'fieldName': 'CAP1_R1243_C3',
            'weight': 44,
            'msg': Drupal.t('Cod eroare: 45-044. [@R1243_C3] - Rînd.(1243) col.3>=Rînd.(1243) pe col.4 - [@R1243_C4]', { "@R1243_C3": R1243_C3, "@R1243_C4": R1243_C4 })
        });
    }
    var SUM_45_040 = R1631_C1 + R1501_C2 + R1502_C2 + R2100_C1 + R2110_C1 + R2120_C1 + R2200_C1 + R2300_C1
    if (R1630_C1 < (SUM_45_040)) {
        webform.errors.push({
            'fieldName': 'CAP1_R1630_C1',
            'weight': 40,
            'msg': Drupal.t('Cod eroare: 45-040. [@R1630_C1] - Rînd.(1630) col.1>=Rînd.(1631) col.1+Rînd.(1501+1502) col.2+Rînd.(2100+2110+2120+2200+2300) pe col.1 - [@SUM_45_040]', { "@R1630_C1": R1630_C1, "@SUM_45_040": SUM_45_040 })
        });
    }
    if (R1329_C3 != R1701_C2) {
        webform.errors.push({
            'fieldName': 'CAP1_R1329_C3',
            'weight': 21,
            'msg': Drupal.t('Cod eroare: 45-016. [@R1329_C3] - Rînd.(1329) col.3=Rînd.(1701) pe col.2 - [@R1701_C2]', { "@R1701_C2": R1701_C2, "@R1329_C3": R1329_C3 })
        });
    }
    // End 45-020, 45-019, 45-039, 45-042, 45-043, 45-044, 45-040, 45-016

    // Start 45-004
    // Start function 
    function row_45_004_CAP1(row) {
        var i;
        i = row;
        if (
            i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
            || i == 1115 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124 || i == 1125
            || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213
            || i == 1216 || i == 1218 || i == 1219 || i == 1224 || i == 1225
        )
            return true;
    }
    // End function
    // Start function 
    function row_45_004_CAP2(row) {
        var i;
        i = row;
        if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
    }
    // End function
    for (var i = 1103; i <= 1240; i++) {
        {
            if (row_45_004_CAP1(i)) {
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-004. [@col1] - Rînd.(1103-1225) col.3>=Rînd.(1103-1225) pe col.4 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    for (var i = 2101; i <= 2302; i++) {
        {
            if ((row_45_004_CAP2(i))) {
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C4"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C3',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 45-004. [@col1] - Rînd.(2101-2301) col.3>=Rînd.(2101-2301) pe col.4 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            } // End if 
        }
    }
    // End 45-004

    // Start 45-003
    // Start function 
    function row_45_003_CAP1(row) {
        var i;
        i = row;
        if (
            i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
            || i == 1115 || i == 1116 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124
            || i == 1125 || i == 1126
            || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213 || i == 1214
            || i == 1215 || i == 1216 || i == 1218 || i == 1219 || i == 1221 || i == 1224 || i == 1225
            || i == 1230 || i == 1232 || i == 1234 || i == 1235 || i == 1236 || i == 1237 || i == 1238 || i == 1232
            || i == 1240 || i == 1320 || i == 1321 || i == 1322 || i == 1323 || i == 1324 || i == 1325
            || i == 1325 || i == 1326 || i == 1327
            || i == 1401 || i == 1402 || i == 1403 || i == 1404 || i == 1405 || i == 1406 || i == 1409
        )
            return true;
    }
    // End function
    // Start function 
    function row_45_003_CAP2(row) {
        var i;
        i = row;
        if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
    }
    // End function
    for (var i = 1103; i <= 1409; i++) {
        {
            if (row_45_003_CAP1(i)) {
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C1"]);
                }
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C2"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 3,
                        'msg': Drupal.t('Cod eroare: 45-003. [@col1] - Rînd.(1103-1409) col.1>=Rînd.(1103-1409) pe col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // Start function 
    function row_45_003_CAP1_float(row) {
        var i;
        i = row;
        if (
            i == 1302 || i == 1303 || i == 1305 || i == 1306 || i == 1307 || i == 1308 || i == 1309
            || i == 1310 || i == 1311 || i == 1312 || i == 1313 || i == 1314 || i == 1315 || i == 1316 || i == 1317
            || i == 1318 || i == 1319
        )
            return true;
    }
    // End function
    // Float
    for (var i = 1302; i <= 1319; i++) {
        {
            if (row_45_003_CAP1_float(i)) {
                if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = toFloat(values["CAP1_R" + (i) + "_C1"]);
                }
                if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C2"]))) {
                    var col2 = toFloat(values["CAP1_R" + (i) + "_C2"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 4,
                        'msg': Drupal.t('Cod eroare: 45-003. [@col1] - Rînd.(1302-1319) col.1>=Rînd.(1302-1319) pe col.2 - [@col2]', { "@col1": col1.toFixed(1), "@col2": col2.toFixed(1) })
                    });
                }
            }
        }
    }
    // Start function 
    function row_45_003_CAP2(row) {
        var i;
        i = row;
        if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
    }
    // End function
    for (var i = 2101; i <= 2302; i++) {
        {
            if ((row_45_003_CAP2(i))) {
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C1"]);
                }
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C2"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C1',
                        'weight': 5,
                        'msg': Drupal.t('Cod eroare: 45-003. [@col1] - Rînd.(2101-2302) col.3>=Rînd.(1103-1225) pe col.4 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            } // End if 
        }
    }
    // End 45-003

    // Start 45-005
    // Start function 
    function row_45_005_CAP1(row) {
        var i;
        i = row;
        if (i == 1117 || i == 1119) return true;
    }
    // End function
    for (var i = 1117; i <= 1119; i++) {
        {
            if (row_45_005_CAP1(i)) {
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }
                if (col1 != col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 8,
                        'msg': Drupal.t('Cod eroare: 45-005. [@col1] - Rînd.(1117,1119) col.3 = Rînd.(1117,1119) pe col.4 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // End 45-005

    // Start 45-006
    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1134_C" + i]))) {
            var R1134_C = Number(values["CAP1_R1134_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1123_C" + i] || 0)
            .plus(values["CAP1_R1124_C" + i] || 0)
            .plus(values["CAP1_R1125_C" + i] || 0)
            .plus(values["CAP1_R1126_C" + i] || 0)
            .plus(values["CAP1_R1127_C" + i] || 0)
            .plus(values["CAP1_R1133_C" + i] || 0))) {
            var SUM_22_33 = Decimal(values["CAP1_R1123_C" + i] || 0)
                .plus(values["CAP1_R1124_C" + i] || 0)
                .plus(values["CAP1_R1125_C" + i] || 0)
                .plus(values["CAP1_R1126_C" + i] || 0)
                .plus(values["CAP1_R1127_C" + i] || 0)
                .plus(values["CAP1_R1133_C" + i] || 0);
        }
        if (R1134_C != SUM_22_33) {
            webform.errors.push({
                'fieldName': 'CAP1_R1134_C' + i,
                'weight': 9,
                'msg': Drupal.t('Cod eroare: 45-006. [@R1134_C] - Rînd.(1134)=Rînd.(1123+1124+1125+1126+1127+1133) pe col.@col - [@SUM_22_33]', { "@col": i, "@R1134_C": R1134_C, "@SUM_22_33": SUM_22_33 })
            });
        }
    }
    // End 45-006

    // Start 45-023
    for (var i = 1; i <= 1; i++) {
        if (!isNaN(Number(values["CAP1_R1434_C" + i]))) {
            var R1434 = Number(values["CAP1_R1434_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1401_C" + i] || 0)
            .plus(values["CAP1_R1402_C" + i] || 0)
            .plus(values["CAP1_R1403_C" + i] || 0)
            .plus(values["CAP1_R1404_C" + i] || 0)
            .plus(values["CAP1_R1405_C" + i] || 0)
            .plus(values["CAP1_R1406_C" + i] || 0)
            .plus(values["CAP1_R1409_C" + i] || 0)
            .plus(values["CAP1_R1411_C" + i] || 0)
            .plus(values["CAP1_R1418_C" + i] || 0))) {
            var SUM_45_023 = Decimal(values["CAP1_R1401_C" + i] || 0)
                .plus(values["CAP1_R1402_C" + i] || 0)
                .plus(values["CAP1_R1403_C" + i] || 0)
                .plus(values["CAP1_R1404_C" + i] || 0)
                .plus(values["CAP1_R1405_C" + i] || 0)
                .plus(values["CAP1_R1406_C" + i] || 0)
                .plus(values["CAP1_R1409_C" + i] || 0)
                .plus(values["CAP1_R1411_C" + i] || 0)
                .plus(values["CAP1_R1418_C" + i] || 0);
        }
        if (R1434 != SUM_45_023) {
            webform.errors.push({
                'fieldName': 'CAP1_R1434_C' + i,
                'weight': 23,
                'msg': Drupal.t('Cod eroare: 45-023. [@R1434] - Rînd.(1434) col.1=Rînd.(1401+1402+1403+1404+1405+1406+1409+1411+1418) pe col.@col - [@SUM_45_023]', { "@col": i, "@R1434": R1434, "@SUM_45_023": SUM_45_023 })
            });
        }
    }
    // End 45-023

    // Start 45-024
    for (var i = 1; i <= 1; i++) {
        if (!isNaN(Number(values["CAP1_R1440_C" + i]))) {
            var R1440 = Number(values["CAP1_R1440_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1140_C" + i] || 0)
            .plus(values["CAP1_R1244_C" + i] || 0)
            .plus(values["CAP1_R1328_C" + i] || 0)
            .plus(values["CAP1_R1434_C" + i] || 0))) {
            var SUM_45_024 = Decimal(values["CAP1_R1140_C" + i] || 0)
                .plus(values["CAP1_R1244_C" + i] || 0)
                .plus(values["CAP1_R1328_C" + i] || 0)
                .plus(values["CAP1_R1434_C" + i] || 0);
        }
        if (R1440 != SUM_45_024) {
            webform.errors.push({
                'fieldName': 'CAP1_R1440_C' + i,
                'weight': 24,
                'msg': Drupal.t('Cod eroare: 45-024. [@R1440] - Rînd.(1440) col.1=Rînd.(1140+1244+1328+1434) pe col.@col - [@SUM_45_024]', { "@col": i, "@R1440": R1440, "@SUM_45_024": SUM_45_024 })
            });
        }
    }
    // End 45-024

    // Start 45-025
    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP1A_R1701_C" + i]))) {
            var R1701 = Number(values["CAP1A_R1701_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1A_R1702_C" + i] || 0)
            .plus(values["CAP1A_R1703_C" + i] || 0)
            .plus(values["CAP1A_R1704_C" + i] || 0))) {
            var SUM_45_025 = Decimal(values["CAP1A_R1702_C" + i] || 0)
                .plus(values["CAP1A_R1703_C" + i] || 0)
                .plus(values["CAP1A_R1704_C" + i] || 0);
        }
        if (R1701 < SUM_45_025) {
            webform.errors.push({
                'fieldName': 'CAP1A_R1701_C' + i,
                'weight': 25,
                'msg': Drupal.t('Cod eroare: 45-025. [@R1701] - Rînd.(1701)>=Rînd.(1702+1703+1704) pe col.@col - [@SUM_45_025]', { "@col": i, "@R1701": R1701, "@SUM_45_025": SUM_45_025 })
            });
        }
    }
    // End 45-025

    // Start 45-026
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2100_C" + i]))) {
            var R2100 = Number(values["CAP2_R2100_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R2101_C" + i] || 0)
            .plus(values["CAP2_R2102_C" + i] || 0)
            .plus(values["CAP2_R2103_C" + i] || 0)
            .plus(values["CAP2_R2104_C" + i] || 0))) {
            var SUM_45_026 = Decimal(values["CAP2_R2101_C" + i] || 0)
                .plus(values["CAP2_R2102_C" + i] || 0)
                .plus(values["CAP2_R2103_C" + i] || 0)
                .plus(values["CAP2_R2104_C" + i] || 0);
        }
        if (R2100 != SUM_45_026) {
            webform.errors.push({
                'fieldName': 'CAP2_R2100_C' + i,
                'weight': 26,
                'msg': Drupal.t('Cod eroare: 45-026. [@R2100] - Rînd.(2100)=Rînd.(2101+2102+2103+2104) pe col.@col - [@SUM_45_026]', { "@col": i, "@R2100": R2100, "@SUM_45_026": SUM_45_026 })
            });
        }
    }
    // End 45-026

    // Start 45-027
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2110_C" + i]))) {
            var R2110 = Number(values["CAP2_R2110_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R2111_C" + i] || 0)
            .plus(values["CAP2_R2112_C" + i] || 0)
            .plus(values["CAP2_R2113_C" + i] || 0)
            .plus(values["CAP2_R2114_C" + i] || 0)
            .plus(values["CAP2_R2115_C" + i] || 0)
            .plus(values["CAP2_R2116_C" + i] || 0))) {
            var SUM_45_027 = Decimal(values["CAP2_R2111_C" + i] || 0)
                .plus(values["CAP2_R2112_C" + i] || 0)
                .plus(values["CAP2_R2113_C" + i] || 0)
                .plus(values["CAP2_R2114_C" + i] || 0)
                .plus(values["CAP2_R2115_C" + i] || 0)
                .plus(values["CAP2_R2116_C" + i] || 0);
        }
        if (R2110 != SUM_45_027) {
            webform.errors.push({
                'fieldName': 'CAP2_R2110_C' + i,
                'weight': 27,
                'msg': Drupal.t('Cod eroare: 45-027. [@R2110] - Rînd.(2110)=Rînd.(2111+2112+2113+2114+2115+2116) pe col.@col - [@SUM_45_027]', { "@col": i, "@R2110": R2110, "@SUM_45_027": SUM_45_027 })
            });
        }
    }
    // End 45-027

    // Start 45-028
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2120_C" + i]))) {
            var R2120 = Number(values["CAP2_R2120_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R2121_C" + i] || 0))) {
            var SUM_45_028 = Decimal(values["CAP2_R2121_C" + i] || 0);
        }
        if (R2120 < SUM_45_028) {
            webform.errors.push({
                'fieldName': 'CAP2_R2120_C' + i,
                'weight': 28,
                'msg': Drupal.t('Cod eroare: 45-028. [@R2120] - Rînd.(2120)>=Rînd.(2121) pe col.@col - [@SUM_45_028]', { "@col": i, "@R2120": R2120, "@SUM_45_028": SUM_45_028 })
            });
        }
    }
    // End 45-028

    // Start 45-029
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2200_C" + i]))) {
            var R2200 = Number(values["CAP2_R2200_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R2201_C" + i] || 0)
            .plus(values["CAP2_R2202_C" + i] || 0)
            .plus(values["CAP2_R2203_C" + i] || 0)
            .plus(values["CAP2_R2204_C" + i] || 0)
            .plus(values["CAP2_R2205_C" + i] || 0)
            .plus(values["CAP2_R2206_C" + i] || 0)
            .plus(values["CAP2_R2207_C" + i] || 0)
            .plus(values["CAP2_R2208_C" + i] || 0)
            .plus(values["CAP2_R2209_C" + i] || 0))) {
            var SUM_45_029 = Decimal(values["CAP2_R2201_C" + i] || 0)
                .plus(values["CAP2_R2202_C" + i] || 0)
                .plus(values["CAP2_R2203_C" + i] || 0)
                .plus(values["CAP2_R2204_C" + i] || 0)
                .plus(values["CAP2_R2205_C" + i] || 0)
                .plus(values["CAP2_R2206_C" + i] || 0)
                .plus(values["CAP2_R2207_C" + i] || 0)
                .plus(values["CAP2_R2208_C" + i] || 0)
                .plus(values["CAP2_R2209_C" + i] || 0);
        }
        if (R2200 != SUM_45_029) {
            webform.errors.push({
                'fieldName': 'CAP2_R2200_C' + i,
                'weight': 29,
                'msg': Drupal.t('Cod eroare: 45-029. [@R2200] - Rînd.(2200)=Rînd.(2201+2202+2203+2204+2205+2206+2207+2208+2209) pe col.@col - [@SUM_45_029]', { "@col": i, "@R2200": R2200, "@SUM_45_029": SUM_45_029 })
            });
        }
    }
    // End 45-029

    // Start 45-030
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2300_C" + i]))) {
            var R2300 = Number(values["CAP2_R2300_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R2301_C" + i] || 0)
            .plus(values["CAP2_R2302_C" + i] || 0))) {
            var SUM_45_030 = Decimal(values["CAP2_R2301_C" + i] || 0)
                .plus(values["CAP2_R2302_C" + i] || 0);
        }
        if (R2300 < SUM_45_030) {
            webform.errors.push({
                'fieldName': 'CAP2_R2300_C' + i,
                'weight': 30,
                'msg': Drupal.t('Cod eroare: 45-030. [@R2300] - Rînd.(2300)=Rînd.(2301+2302) pe col.@col - [@SUM_45_030]', { "@col": i, "@R2300": R2300, "@SUM_45_030": SUM_45_030 })
            });
        }
    }
    // End 45-030

    // Start 45-031
    // Start function
    function row_45_031_CAP2(row) {
        var i;
        i = row;
        if (
            i == 2100 || i == 2101 || i == 2102 || i == 2103 || i == 2104 || i == 2110
            || i == 2111 || i == 2112 || i == 2113 || i == 2114 || i == 2115 || i == 2116 || i == 2120
            || i == 2121 || i == 2200 || i == 2201 || i == 2202 || i == 2203 || i == 2204 || i == 2205 || i == 2206
            || i == 2207 || i == 2208 || i == 2209 || i == 2300 || i == 2301 || i == 2302
        )
            return true;
    }
    // End function
    for (var i = 2100; i <= 2302; i++) {
        {
            if (row_45_031_CAP2(i)) {
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C1"]);
                }
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C2"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C1',
                        'weight': 31,
                        'msg': Drupal.t('Cod eroare: 45-031. [@col1] - Rînd.(2100+… pînă la 2302) col.1>=Rînd.(2100+… pînă la 2302) pe col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // End 45-031

    // Start 45-032
    for (var i = 2100; i <= 2302; i++) {
        {
            if (row_45_031_CAP2(i)) {
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP2_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C4"]);
                }
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C3',
                        'weight': 32,
                        'msg': Drupal.t('Cod eroare: 45-032. [@col1] - Rînd.(2100+… pînă la 2302) col.3>=Rînd.(2100+… pînă la 2302) pe col.4 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // End 45-032

    // Start 45-035
    for (var i = 2100; i <= 2302; i++) {
        {
            if (row_45_031_CAP2(i)) {
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }
                if (col1 == 0 && col2 != 0) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 35,
                        'msg': Drupal.t('Cod eroare: 45-035. [@col1] - Dacă col.3>0 atunci col.4>0 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // End 45-035

    // Start 45-045
    // Start function
    function row_45_045_CAP1(row) {
        var i;
        i = row;
        if (
            i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107
            || i == 1110 || i == 1112 || i == 1113 || i == 1115 || i == 1117 || i == 1119
            || i == 1120 || i == 1121 || i == 1122 || i == 1123 || i == 1124 || i == 1125 || i == 1126 || i == 1127
            || i == 1133 || i == 1134 || i == 1135 || i == 1136
            || i == 1140
            || i == 1213 || i == 1216 || i == 1218 || i == 1219
            || i == 1224 || i == 1225 || i == 1242 || i == 1243
        )
            return true;
    }
    // End function
    for (var i = 1103; i <= 1243; i++) {
        {
            if (row_45_045_CAP1(i)) {
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }
                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }
                if (col1 > 0 && col2 == 0) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 45,
                        'msg': Drupal.t('Cod eroare: 45-045. [@col1] - Dacă col.3>0 atunci col.4>0 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
    // End 45-045

    // Start 45-007
    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1135_C" + i]))) {
            var R1135_C = Number(values["CAP1_R1135_C" + i]);
        }
        if (!isNaN(Number(values["CAP1_R1136_C" + i]))) {
            var R1136_C = Number(values["CAP1_R1136_C" + i]);
        }
        if (R1135_C < R1136_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1135_C' + i,
                'weight': 10,
                'msg': Drupal.t('Cod eroare: 45-007. [@R1135_C] - Rînd.(1135)>=Rînd.(1136) pe col.@col - [@R1136_C]', { '@col': i, '@R1135_C': R1135_C, '@R1136_C': R1136_C })
            });
        }
    }
    // End 45-007

    // Start 45-036
    for (var i = 1; i <= 1; i++) {
        if (!isNaN(Number(values["CAP1_R1630_C" + i]))) {
            var R1630_C = Number(values["CAP1_R1630_C" + i]);
        }
        if (!isNaN(Number(values["CAP1_R1631_C" + i]))) {
            var R1631_C = Number(values["CAP1_R1631_C" + i]);
        }
        if (R1630_C < R1631_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1630_C' + i,
                'weight': 36,
                'msg': Drupal.t('Cod eroare: 45-036. [@R1630_C] - Rînd.(1630)>=Rînd.(1631) pe col.@col - [@R1631_C]', { '@col': i, '@R1630_C': R1630_C, '@R1631_C': R1631_C })
            });
        }
    }
    // End 45-036

    // Start 45-037
    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP1_R1116_C" + i]))) {
            var R1116_C = Number(values["CAP1_R1116_C" + i]);
        }
        if (!isNaN(Number(values["CAP1_R1117_C" + i]))) {
            var R1117_C = Number(values["CAP1_R1117_C" + i]);
        }
        if (R1116_C != R1117_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1116_C' + i,
                'weight': 37,
                'msg': Drupal.t('Cod eroare: 45-037. [@R1116_C] - Rînd.(1116)=Rînd.(1117) pe col.@col - [@R1117_C]', { "@col": i, "@R1116_C": R1116_C, "@R1117_C": R1117_C })
            });
        }
    }
    // End 45-037

    // Start 45-008
    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1140_C" + i]))) {
            var R1140_C = Number(values["CAP1_R1140_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1104_C" + i] || 0)
            .plus(values["CAP1_R1105_C" + i] || 0)
            .plus(values["CAP1_R1106_C" + i] || 0)
            .plus(values["CAP1_R1107_C" + i] || 0)
            .plus(values["CAP1_R1110_C" + i] || 0)
            .plus(values["CAP1_R1112_C" + i] || 0)
            .plus(values["CAP1_R1113_C" + i] || 0)
            .plus(values["CAP1_R1115_C" + i] || 0)
            .plus(values["CAP1_R1117_C" + i] || 0)
            .plus(values["CAP1_R1120_C" + i] || 0)
            .plus(values["CAP1_R1121_C" + i] || 0)
            .plus(values["CAP1_R1123_C" + i] || 0)
            .plus(values["CAP1_R1124_C" + i] || 0)
            .plus(values["CAP1_R1125_C" + i] || 0)
            .plus(values["CAP1_R1126_C" + i] || 0)
            .plus(values["CAP1_R1127_C" + i] || 0)
            .plus(values["CAP1_R1133_C" + i] || 0)
            .plus(values["CAP1_R1135_C" + i] || 0))) {
            var SUM_45_008 = Decimal(values["CAP1_R1104_C" + i] || 0)
                .plus(values["CAP1_R1105_C" + i] || 0)
                .plus(values["CAP1_R1106_C" + i] || 0)
                .plus(values["CAP1_R1107_C" + i] || 0)
                .plus(values["CAP1_R1110_C" + i] || 0)
                .plus(values["CAP1_R1112_C" + i] || 0)
                .plus(values["CAP1_R1113_C" + i] || 0)
                .plus(values["CAP1_R1115_C" + i] || 0)
                .plus(values["CAP1_R1117_C" + i] || 0)
                .plus(values["CAP1_R1120_C" + i] || 0)
                .plus(values["CAP1_R1121_C" + i] || 0)
                .plus(values["CAP1_R1123_C" + i] || 0)
                .plus(values["CAP1_R1124_C" + i] || 0)
                .plus(values["CAP1_R1125_C" + i] || 0)
                .plus(values["CAP1_R1126_C" + i] || 0)
                .plus(values["CAP1_R1127_C" + i] || 0)
                .plus(values["CAP1_R1133_C" + i] || 0)
                .plus(values["CAP1_R1135_C" + i] || 0);
        }
        if (R1140_C != SUM_45_008) {
            webform.errors.push({
                'fieldName': 'CAP1_R1140_C' + i,
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 45-008. [@R1140_C] - Rînd.(1140)=Rînd.(1104 pînă la 1107+1110+1112+1113+1115+1117+1120+1121+1123 pînă la 1133+1135) pe col.@col - [@SUM_45_008]', { "@col": i, "@R1140_C": R1140_C, "@SUM_45_008": SUM_45_008 })
            });
        }
    }
    // End 45-008

    // Start 45-009
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP1_R1218_C" + i]))) {
            var R1218_C = Number(values["CAP1_R1218_C" + i]);
        }
        if (!isNaN(Number(values["CAP1_R1219_C" + i]))) {
            var R1219_C = Number(values["CAP1_R1219_C" + i]);
        }
        if (R1218_C < R1219_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1218_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 45-009. [@R1218_C] - Rînd.(1218)>=Rînd.(1219) pe col.@col - [@R1219_C]', { "@col": i, "@R1218_C": R1218_C, "@R1219_C": R1219_C })
            });
        }
    }
    // End 45-009

    // Start 45-010
    for (var i = 1; i <= 3; i++) {
        if (!isNaN(Number(values["CAP1_R1232_C" + i]))) {
            var R1232_C = Number(values["CAP1_R1232_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1234_C" + i] || 0)
            .plus(values["CAP1_R1235_C" + i] || 0)
            .plus(values["CAP1_R1236_C" + i] || 0)
            .plus(values["CAP1_R1237_C" + i] || 0)
            .plus(values["CAP1_R1238_C" + i] || 0)
            .plus(values["CAP1_R1239_C" + i] || 0))) {
            var SUM_45_010 = Decimal(values["CAP1_R1234_C" + i] || 0)
                .plus(values["CAP1_R1235_C" + i] || 0)
                .plus(values["CAP1_R1236_C" + i] || 0)
                .plus(values["CAP1_R1237_C" + i] || 0)
                .plus(values["CAP1_R1238_C" + i] || 0)
                .plus(values["CAP1_R1239_C" + i] || 0);
        }
        if (R1232_C != SUM_45_010) {
            webform.errors.push({
                'fieldName': 'CAP1_R1232_C' + i,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 45-010. [@R1232_C] - Rînd.(1232)=Rînd.(1234+1235+1236+1237+1238+1239) pe col.@col - [@SUM_45_010]', { "@col": i, "@R1232_C": R1232_C, "@SUM_45_010": SUM_45_010 })
            });
        }
    }
    // End 45-010

    // Start 45-011
    for (var i = 2; i <= 2; i++) {
        if (!isNaN(Number(values["CAP1_R1240_C" + i]))) {
            var R1240_C = Number(values["CAP1_R1240_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1241_C" + i] || 0)
            .plus(values["CAP1_R1242_C" + i] || 0))) {
            var SUM_45_011 = Decimal(values["CAP1_R1241_C" + i] || 0)
                .plus(values["CAP1_R1242_C" + i] || 0);
        }
        if (R1240_C != SUM_45_011) {
            webform.errors.push({
                'fieldName': 'CAP1_R1240_C' + i,
                'weight': 15,
                'msg': Drupal.t('Cod eroare: 45-011. [@R1240_C] - Rînd.(1240)=Rînd.(1241+1242) col.2 pe col.@col - [@SUM_45_011]', { "@col": i, "@R1240_C": R1240_C, "@SUM_45_011": SUM_45_011 })
            });
        }
    }
    // End 45-011

    // Start 45-012
    // Start function
    function fun_col_12(col) {
        var i;
        i = col;
        if (i == 1 || i == 2) return true;
    }
    // End function
    // Start function
    function fun_col_35(col) {
        var i;
        i = col;
        if (i == 3 || i == 5) return true;
    }
    // End function
    for (var i = 1; i <= 5; i++) {
        if (fun_col_12(i)) {
            if (!isNaN(toFloat(values["CAP1_R1302_C" + i]))) {
                var R1302_C = toFloat(values["CAP1_R1302_C" + i]);
            }
            if (!isNaN(Decimal(values["CAP1_R1303_C" + i] || 0)
                .plus(values["CAP1_R1305_C" + i] || 0)
                .plus(values["CAP1_R1306_C" + i] || 0)
                .plus(values["CAP1_R1307_C" + i] || 0)
                .plus(values["CAP1_R1308_C" + i] || 0)
                .plus(values["CAP1_R1309_C" + i] || 0)
                .plus(values["CAP1_R1310_C" + i] || 0)
                .plus(values["CAP1_R1311_C" + i] || 0)
                .plus(values["CAP1_R1312_C" + i] || 0)
                .plus(values["CAP1_R1313_C" + i] || 0)
                .plus(values["CAP1_R1314_C" + i] || 0)
                .plus(values["CAP1_R1315_C" + i] || 0)
                .plus(values["CAP1_R1316_C" + i] || 0)
                .plus(values["CAP1_R1317_C" + i] || 0)
                .plus(values["CAP1_R1318_C" + i] || 0)
                .plus(values["CAP1_R1319_C" + i] || 0))) {
                var SUM_45_012 = Decimal(values["CAP1_R1303_C" + i] || 0)
                    .plus(values["CAP1_R1305_C" + i] || 0)
                    .plus(values["CAP1_R1306_C" + i] || 0)
                    .plus(values["CAP1_R1307_C" + i] || 0)
                    .plus(values["CAP1_R1308_C" + i] || 0)
                    .plus(values["CAP1_R1309_C" + i] || 0)
                    .plus(values["CAP1_R1310_C" + i] || 0)
                    .plus(values["CAP1_R1311_C" + i] || 0)
                    .plus(values["CAP1_R1312_C" + i] || 0)
                    .plus(values["CAP1_R1313_C" + i] || 0)
                    .plus(values["CAP1_R1314_C" + i] || 0)
                    .plus(values["CAP1_R1315_C" + i] || 0)
                    .plus(values["CAP1_R1316_C" + i] || 0)
                    .plus(values["CAP1_R1317_C" + i] || 0)
                    .plus(values["CAP1_R1318_C" + i] || 0)
                    .plus(values["CAP1_R1319_C" + i] || 0);
            }
            if (R1302_C != SUM_45_012) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1302_C' + i,
                    'weight': 16,
                    'msg': Drupal.t('Cod eroare: 45-012. [@R1302_C] - Rînd.(1302)=Rînd.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe col.@col - [@SUM_45_012]', { "@col": i, "@R1302_C": R1302_C.toFixed(1), "@SUM_45_012": SUM_45_012.toFixed(1) })
                });
            }
        }
    }
    for (var i = 1; i <= 5; i++) {
        if (fun_col_35(i)) {
            if (!isNaN(Number(values["CAP1_R1302_C" + i]))) {
                var R1302_C = Number(values["CAP1_R1302_C" + i]);
            }
            if (!isNaN(Decimal(values["CAP1_R1303_C" + i] || 0)
                .plus(values["CAP1_R1305_C" + i] || 0)
                .plus(values["CAP1_R1306_C" + i] || 0)
                .plus(values["CAP1_R1307_C" + i] || 0)
                .plus(values["CAP1_R1308_C" + i] || 0)
                .plus(values["CAP1_R1309_C" + i] || 0)
                .plus(values["CAP1_R1310_C" + i] || 0)
                .plus(values["CAP1_R1311_C" + i] || 0)
                .plus(values["CAP1_R1312_C" + i] || 0)
                .plus(values["CAP1_R1313_C" + i] || 0)
                .plus(values["CAP1_R1314_C" + i] || 0)
                .plus(values["CAP1_R1315_C" + i] || 0)
                .plus(values["CAP1_R1316_C" + i] || 0)
                .plus(values["CAP1_R1317_C" + i] || 0)
                .plus(values["CAP1_R1318_C" + i] || 0)
                .plus(values["CAP1_R1319_C" + i] || 0))) {
                var SUM_45_012 = Decimal(values["CAP1_R1303_C" + i] || 0)
                    .plus(values["CAP1_R1305_C" + i] || 0)
                    .plus(values["CAP1_R1306_C" + i] || 0)
                    .plus(values["CAP1_R1307_C" + i] || 0)
                    .plus(values["CAP1_R1308_C" + i] || 0)
                    .plus(values["CAP1_R1309_C" + i] || 0)
                    .plus(values["CAP1_R1310_C" + i] || 0)
                    .plus(values["CAP1_R1311_C" + i] || 0)
                    .plus(values["CAP1_R1312_C" + i] || 0)
                    .plus(values["CAP1_R1313_C" + i] || 0)
                    .plus(values["CAP1_R1314_C" + i] || 0)
                    .plus(values["CAP1_R1315_C" + i] || 0)
                    .plus(values["CAP1_R1316_C" + i] || 0)
                    .plus(values["CAP1_R1317_C" + i] || 0)
                    .plus(values["CAP1_R1318_C" + i] || 0)
                    .plus(values["CAP1_R1319_C" + i] || 0);
            }
            if (R1302_C != SUM_45_012) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1302_C' + i,
                    'weight': 17,
                    'msg': Drupal.t('Cod eroare: 45-012. [@R1302_C] - Rînd.(1302)=Rînd.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe col.@col - [@SUM_45_012]', { "@col": i, "@R1302_C": R1302_C, "@SUM_45_012": SUM_45_012 })
                });
            }
        }
    }
    // End 45-012

    // Start 45-013
    for (var i = 1; i <= 5; i++) {
        if (fun_col_12(i)) {
            if (!isNaN(Number(values["CAP1_R1244_C" + i]))) {
                var R1244_C = Number(values["CAP1_R1244_C" + i]);
            }
            if (!isNaN(Decimal(values["CAP1_R1240_C" + i] || 0)
                .plus(values["CAP1_R1213_C" + i] || 0)
                .plus(values["CAP1_R1214_C" + i] || 0)
                .plus(values["CAP1_R1215_C" + i] || 0)
                .plus(values["CAP1_R1216_C" + i] || 0)
                .plus(values["CAP1_R1218_C" + i] || 0)
                .plus(values["CAP1_R1221_C" + i] || 0)
                .plus(values["CAP1_R1224_C" + i] || 0)
                .plus(values["CAP1_R1225_C" + i] || 0)
                .plus(values["CAP1_R1230_C" + i] || 0)
                .plus(values["CAP1_R1232_C" + i] || 0)
                .plus(values["CAP1_R1243_C" + i] || 0))) {
                var SUM_45_013 = Decimal(values["CAP1_R1240_C" + i] || 0)
                    .plus(values["CAP1_R1213_C" + i] || 0)
                    .plus(values["CAP1_R1214_C" + i] || 0)
                    .plus(values["CAP1_R1215_C" + i] || 0)
                    .plus(values["CAP1_R1216_C" + i] || 0)
                    .plus(values["CAP1_R1218_C" + i] || 0)
                    .plus(values["CAP1_R1221_C" + i] || 0)
                    .plus(values["CAP1_R1224_C" + i] || 0)
                    .plus(values["CAP1_R1225_C" + i] || 0)
                    .plus(values["CAP1_R1230_C" + i] || 0)
                    .plus(values["CAP1_R1232_C" + i] || 0)
                    .plus(values["CAP1_R1243_C" + i] || 0);
            }
            if (R1244_C != SUM_45_013) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1244_C' + i,
                    'weight': 18,
                    'msg': Drupal.t('Cod eroare: 45-013. [@R1244_C] - Rînd.(1244)=Rînd.(1213+1214+1215+1216+1218+1221+1224+1225+1230+1232+1240+1243) pe col.@col - [@SUM_45_013]', { "@col": i, "@R1244_C": R1244_C, "@SUM_45_013": SUM_45_013 })
                });
            }
        }
    }
    // End 45-013

    // Start 45-014
    // Start function
    function fun_col_1235(col) {
        var i;
        i = col;
        if (i == 1 || i == 2 || i == 3 || i == 5) return true;
    }
    // End function
    for (var i = 1; i <= 5; i++) {
        if (fun_col_1235(i)) {
            if (!isNaN(Number(values["CAP1_R1324_C" + i]))) {
                var R1324_C = Number(values["CAP1_R1324_C" + i]);
            }
            if (!isNaN(Decimal(values["CAP1_R1325_C" + i] || 0)
                .plus(values["CAP1_R1326_C" + i] || 0))) {
                var SUM_45_014 = Decimal(values["CAP1_R1325_C" + i] || 0)
                    .plus(values["CAP1_R1326_C" + i] || 0);
            }
            if (R1324_C != SUM_45_014) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1324_C' + i,
                    'weight': 19,
                    'msg': Drupal.t('Cod eroare: 45-014. [@R1324_C] - Rînd.(1324)=Rînd.(1325+1326) pe col.@col - [@SUM_45_014]', { "@col": i, "@R1324_C": R1324_C, "@SUM_45_014": SUM_45_014 })
                });
            }
        }
    }
    // End 45-014

    // Start 45-017
    for (var i = 3; i <= 3; i++) {
        if (!isNaN(Number(values["CAP1_R1330_C" + i]))) {
            var R1330_C = Number(values["CAP1_R1330_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1302_C" + i] || 0)
            .plus(values["CAP1_R1329_C" + i] || 0))) {
            var SUM_45_017 = Decimal(values["CAP1_R1302_C" + i] || 0)
                .plus(values["CAP1_R1329_C" + i] || 0);
        }
        if (R1330_C != SUM_45_017) {
            webform.errors.push({
                'fieldName': 'CAP1_R1330_C' + i,
                'weight': 20,
                'msg': Drupal.t('Cod eroare: 45-017. [@R1330_C] - Rînd.(1330) col.3=Rînd.(1302+1329) pe col.@col - [@SUM_45_017]', { "@col": i, "@R1330_C": R1330_C, "@SUM_45_017": SUM_45_017 })
            });
        }
    }
    // End 45-017

    // Start 45-018
    for (var i = 5; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1330_C" + i]))) {
            var R1330_C = Number(values["CAP1_R1330_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1302_C" + i] || 0))) {
            var R1302_C = Decimal(values["CAP1_R1302_C" + i] || 0);
        }
        if (R1330_C != R1302_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1330_C' + i,
                'weight': 21,
                'msg': Drupal.t('Cod eroare: 45-018. [@R1330_C] - Rînd.(1330) col.5=Rînd.(1302) pe col.@col - [@R1302_C]', { "@col": i, "@R1330_C": R1330_C, "@R1302_C": R1302_C })
            });
        }
    }
    // End 45-018

    // Start 45-015 
    if (!isNaN(Number(values.CAP1_R1328_C1))) {
        var R1328_015 = Number(values.CAP1_R1328_C1);
    }
    if (!isNaN(toFloat(values.CAP1_R1301_C1))) {
        var R1301_015 = toFloat(values.CAP1_R1301_C1);
    }
    if (!isNaN(toFloat(values.CAP1_R1302_C1))) {
        var R1302_015 = toFloat(values.CAP1_R1302_C1);
    }
    if (!isNaN(Number(values.CAP1_R1320_C1))) {
        var R1320_015 = Number(values.CAP1_R1320_C1);
    }
    if (!isNaN(Number(values.CAP1_R1321_C1))) {
        var R1321_015 = Number(values.CAP1_R1321_C1);
    }
    if (!isNaN(Number(values.CAP1_R1322_C1))) {
        var R1322_015 = Number(values.CAP1_R1322_C1);
    }
    if (!isNaN(Number(values.CAP1_R1323_C1))) {
        var R1323_015 = Number(values.CAP1_R1323_C1);
    }
    if (!isNaN(Number(values.CAP1_R1324_C1))) {
        var R1324_015 = Number(values.CAP1_R1324_C1);
    }
    if (!isNaN(Number(values.CAP1_R1327_C1))) {
        var R1327_015 = Number(values.CAP1_R1327_C1);
    }
    var SUM_01_27_015 = Math.round((R1301_015 + R1302_015 + R1320_015 + R1321_015 + R1322_015 + R1323_015 + R1324_015 + R1327_015) * 10) / 10
    if (R1328_015 != SUM_01_27_015) {
        webform.warnings.push({
            'fieldName': 'CAP1_R1328_C1',
            'weight': 20,
            'msg': Drupal.t('Cod eroare: 45-015. [@R1328_015] - Rînd.(1328)=Rînd.(1301+1302+1320+1321+1322+1323+1324+1327) pe col.1 - [@SUM_01_27_015]', { "@R1328_015": R1328_015, "@SUM_01_27_015": SUM_01_27_015 })
        });
    }
    // End 45-015

    // Start 45-001
    if (!isNaN(Number(values.CAP1_R1101_C1))) {
        var R1101_001 = Number(values.CAP1_R1101_C1);
    }
    if (!isNaN(Number(values.CAP1_R1102_C1))) {
        var R1102_001 = Number(values.CAP1_R1102_C1);
    }
    if (!isNaN(Number(values.CAP1_R1103_C1))) {
        var R1103_001 = Number(values.CAP1_R1103_C1);
    }
    if (!isNaN(Number(values.CAP1_R1224_C1))) {
        var R1224_001 = Number(values.CAP1_R1224_C1);
    }
    var SUM_001 = Math.round(R1102_001 + R1103_001 + R1224_001)
    if (R1101_001 != SUM_001) {
        webform.errors.push({
            'fieldName': 'CAP1_R1101_C1',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 45-001. [@R1101_001] - Rînd.(1101)=Rînd.(1102+1103+1224) pe col.1 - [@SUM_001]', { "@R1101_001": R1101_001, "@SUM_001": SUM_001 })
        });
    }
    // End 45-001

    // Start 45-024
    /*if (!isNaN(Number(values.CAP1_R1440_C1))) {
        var R1440_024 = Number(values.CAP1_R1440_C1);
    }
    if (!isNaN(Number(values.CAP1_R1140_C1))) {
        var R1140_024 = Number(values.CAP1_R1140_C1);
    }
    if (!isNaN(Number(values.CAP1_R1244_C1))) {
        var R1244_024 = Number(values.CAP1_R1244_C1);
    }
    if (!isNaN(Number(values.CAP1_R1328_C1))) {
        var R1328_024 = Number(values.CAP1_R1328_C1);
    }
    if (!isNaN(Number(values.CAP1_R1434_C1))) {
        var R1434_024 = Number(values.CAP1_R1434_C1);
    }
    var SUM_024 = Math.round(R1140_024 + R1244_024 + R1328_024 + R1434_024)
    if (R1440_024 != SUM_024) {
        webform.errors.push({
            'fieldName': 'CAP1_R1440_C1',
            'weight': 76,
            'msg': Drupal.t('Cod eroare: 45-024. [@R1440_024] - Rînd.(1440)=Rînd.(1140+1244+1328+1434) pe col.1 - [@SUM_024]', {"@R1440_024": R1440_024, "@SUM_024": SUM_024})
        });
    }*/
    // End 45-024

    // Start 45-002
    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1103_C" + i]))) {
            var R1103_C = Number(values["CAP1_R1103_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP1_R1104_C" + i] || 0)
            .plus(values["CAP1_R1105_C" + i] || 0)
            .plus(values["CAP1_R1106_C" + i] || 0)
            .plus(values["CAP1_R1107_C" + i] || 0))) {
            var SUM_002 = Decimal(values["CAP1_R1104_C" + i] || 0)
                .plus(values["CAP1_R1105_C" + i] || 0)
                .plus(values["CAP1_R1106_C" + i] || 0)
                .plus(values["CAP1_R1107_C" + i] || 0);
        }
        if (R1103_C != SUM_002) {
            webform.errors.push({
                'fieldName': 'CAP1_R1103_C' + i,
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 45-002. [@R1103_C] - Rînd.(1103)=Rînd.(1104+1105+1106+1107) pe col.@col - [@SUM_002]', { "@col": i, "@R1103_C": R1103_C, "@SUM_002": SUM_002 })
            });
        }
    }
    // End 45-002

    // Start dynamic validations ----------------------------------------------------------------------------------------------
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
            var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        }

        // Start 45-020_FILIAL, 45-019_FILIAL, 45-039_FILIAL, 45-042_FILIAL, 45-043_FILIAL, 45-044_FILIAL, 45-040_FILIAL, 45-016_FILIAL
        if (!isNaN(Number(values.CAP1_R1242_C3_FILIAL[j]))) {
            var R1242_C3_FILIAL = Number(values.CAP1_R1242_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1242_C4_FILIAL[j]))) {
            var R1242_C4_FILIAL = Number(values.CAP1_R1242_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1243_C1_FILIAL[j]))) {
            var R1243_C1_FILIAL = Number(values.CAP1_R1243_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1243_C2_FILIAL[j]))) {
            var R1243_C2_FILIAL = Number(values.CAP1_R1243_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1243_C3_FILIAL[j]))) {
            var R1243_C3_FILIAL = Number(values.CAP1_R1243_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1243_C4_FILIAL[j]))) {
            var R1243_C4_FILIAL = Number(values.CAP1_R1243_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1329_C3_FILIAL[j]))) {
            var R1329_C3_FILIAL = Number(values.CAP1_R1329_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1A_R1701_C2_FILIAL[j]))) {
            var R1701_C2_FILIAL = Number(values.CAP1A_R1701_C2_FILIAL[j]);
        }
        /*if (!isNaN(Number(values.CAP1_R1330_C5_FILIAL[j]))) {
            var R1330_C5_FILIAL = Number(values.CAP1_R1330_C5_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1117_C3_FILIAL[j]))) {
            var R1117_C3_FILIAL = Number(values.CAP1_R1117_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1117_C4_FILIAL[j]))) {
            var R1117_C4_FILIAL = Number(values.CAP1_R1117_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1119_C4_FILIAL[j]))) {
            var R1119_C4_FILIAL = Number(values.CAP1_R1119_C4_FILIAL[j]);
        }*/
        if (!isNaN(Number(values.CAP1_R1440_C1_FILIAL[j]))) {
            var R1440_C1_FILIAL = Number(values.CAP1_R1440_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1442_C1_FILIAL[j]))) {
            var R1442_C1_FILIAL = Number(values.CAP1_R1442_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1411_C1_FILIAL[j]))) {
            var R1411_C1_FILIAL = Number(values.CAP1_R1411_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1412_C2_FILIAL[j]))) {
            var R1412_C2_FILIAL = Number(values.CAP1_R1412_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1413_C2_FILIAL[j]))) {
            var R1413_C2_FILIAL = Number(values.CAP1_R1413_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1414_C2_FILIAL[j]))) {
            var R1414_C2_FILIAL = Number(values.CAP1_R1414_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1415_C2_FILIAL[j]))) {
            var R1415_C2_FILIAL = Number(values.CAP1_R1415_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1630_C1_FILIAL[j]))) {
            var R1630_C1_FILIAL = Number(values.CAP1_R1630_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1631_C1_FILIAL[j]))) {
            var R1631_C1_FILIAL = Number(values.CAP1_R1631_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1501_C2_FILIAL[j]))) {
            var R1501_C2_FILIAL = Number(values.CAP1_R1501_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1502_C2_FILIAL[j]))) {
            var R1502_C2_FILIAL = Number(values.CAP1_R1502_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R2100_C1_FILIAL[j]))) {
            var R2100_C1_FILIAL = Number(values.CAP2_R2100_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R2110_C1_FILIAL[j]))) {
            var R2110_C1_FILIAL = Number(values.CAP2_R2110_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R2120_C1_FILIAL[j]))) {
            var R2120_C1_FILIAL = Number(values.CAP2_R2120_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R2200_C1_FILIAL[j]))) {
            var R2200_C1_FILIAL = Number(values.CAP2_R2200_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R2300_C1_FILIAL[j]))) {
            var R2300_C1_FILIAL = Number(values.CAP2_R2300_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1418_C1_FILIAL[j]))) {
            var R1418_C1_FILIAL = Number(values.CAP1_R1418_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1419_C2_FILIAL[j]))) {
            var R1419_C2_FILIAL = Number(values.CAP1_R1419_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1420_C2_FILIAL[j]))) {
            var R1420_C2_FILIAL = Number(values.CAP1_R1420_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1421_C2_FILIAL[j]))) {
            var R1421_C2_FILIAL = Number(values.CAP1_R1421_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1422_C1_FILIAL[j]))) {
            var R1422_C1_FILIAL = Number(values.CAP1_R1422_C1_FILIAL[j]);
        }
        var SUM_45_020_FILIAL = R1419_C2_FILIAL + R1420_C2_FILIAL + R1421_C2_FILIAL + R1422_C1_FILIAL
        if (R1418_C1_FILIAL < (SUM_45_020_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1418_C1_FILIAL',
                'index': j,
                'weight': 23,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-020. [@R1418_C1_FILIAL] - Rînd.(1418) col.1>=Rînd.(1419+1420+1421) col.2+Rînd.(1422) pe col.1 - [@SUM_45_020_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1418_C1_FILIAL": R1418_C1_FILIAL, "@SUM_45_020_FILIAL": SUM_45_020_FILIAL })
            });
        }
        var SUM_45_019_FILIAL = R1412_C2_FILIAL + R1413_C2_FILIAL + R1414_C2_FILIAL + R1415_C2_FILIAL
        if (R1411_C1_FILIAL < SUM_45_019_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1411_C1_FILIAL',
                'index': j,
                'weight': 22,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-019. [@R1411_C1_FILIAL] - Rînd.(1411) col.1>=Rînd.(1412+1413+1414+1415) pe col.2 - [@SUM_45_019_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1411_C1_FILIAL": R1411_C1_FILIAL, "@SUM_45_019_FILIAL": SUM_45_019_FILIAL })
            });
        }
        var SUM_45_039_FILIAL = R1440_C1_FILIAL - R1442_C1_FILIAL
        if (R1631_C1_FILIAL < (SUM_45_039_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1631_C1_FILIAL',
                'index': j,
                'weight': 39,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-039. [@R1631_C1_FILIAL] - Rînd.(1631) col.1>=Rînd.(1440)-Rînd.(1442) pe col.1 - [@SUM_45_039_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1631_C1_FILIAL": R1631_C1_FILIAL, "@SUM_45_039_FILIAL": SUM_45_039_FILIAL })
            });
        }
        if (R1242_C3_FILIAL < R1242_C4_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1242_C3_FILIAL',
                'index': j,
                'weight': 42,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-042. [@R1242_C3_FILIAL] - Rînd.(1242) col.3>=Rînd.(1242) pe col.4 - [@R1242_C4_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1242_C3_FILIAL": R1242_C3_FILIAL, "@R1242_C4_FILIAL": R1242_C4_FILIAL })
            });
        }
        if (R1243_C1_FILIAL < R1243_C2_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1243_C1_FILIAL',
                'index': j,
                'weight': 43,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-043. [@R1243_C1_FILIAL] - Rînd.(1243) col.1>=Rînd.(1243) pe col.2 - [@R1243_C2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1243_C1_FILIAL": R1243_C1_FILIAL, "@R1243_C2_FILIAL": R1243_C2_FILIAL })
            });
        }
        if (R1243_C3_FILIAL < R1243_C4_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1243_C3_FILIAL',
                'index': j,
                'weight': 44,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-044. [@R1243_C3_FILIAL] - Rînd.(1243) col.3>=Rînd.(1243) pe col.4 - [@R1243_C4_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1243_C3_FILIAL": R1243_C3_FILIAL, "@R1243_C4_FILIAL": R1243_C4_FILIAL })
            });
        }
        var SUM_45_040_FILIAL = R1631_C1_FILIAL + R1501_C2_FILIAL + R1502_C2_FILIAL + R2100_C1_FILIAL + R2110_C1_FILIAL + R2120_C1_FILIAL + R2200_C1_FILIAL + R2300_C1_FILIAL
        if (R1630_C1_FILIAL < (SUM_45_040_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1630_C1_FILIAL',
                'index': j,
                'weight': 40,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-040. [@R1630_C1_FILIAL] - Rînd.(1630) col.1>=Rînd.(1631) col.1+Rînd.(1501+1502) col.2+Rînd.(2100+2110+2120+2200+2300) pe col.1 - [@SUM_45_040_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1630_C1_FILIAL": R1630_C1_FILIAL, "@SUM_45_040_FILIAL": SUM_45_040_FILIAL })
            });
        }
        if (R1329_C3_FILIAL != R1701_C2_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1329_C3_FILIAL',
                'index': j,
                'weight': 21,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-016. [@R1329_C3_FILIAL] - Rînd.(1329) col.3=Rînd.(1701) pe col.2 - [@R1701_C2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1701_C2_FILIAL": R1701_C2_FILIAL, "@R1329_C3_FILIAL": R1329_C3_FILIAL })
            });
        }
        // End 45-020_FILIAL, 45-019_FILIAL, 45-039_FILIAL, 45-042_FILIAL, 45-043_FILIAL, 45-044_FILIAL, 45-040_FILIAL, 45-016_FILIAL

        // Start 45-004_FILIAL
        // Start function_FILIAL 
        function row_45_004_CAP1_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (
                i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
                || i == 1115 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124 || i == 1125
                || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213
                || i == 1216 || i == 1218 || i == 1219 || i == 1224 || i == 1225
            )
                return true;
        }
        // End function_FILIAL
        // Start function_FILIAL 
        function row_45_004_CAP2_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
        }
        // End function_FILIAL
        for (var i = 1103; i <= 1240; i++) {
            {
                if (row_45_004_CAP1_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C3_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP1_R" + (i) + "_C3_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C4_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP1_R" + (i) + "_C4_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 6,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-004. [@col1_FILIAL] - Rînd.(1103-1225) col.3>=Rînd.(1103-1225) pe col.4 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        for (var i = 2101; i <= 2302; i++) {
            {
                if ((row_45_004_CAP2_FILIAL(i))) {
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C3_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP2_R" + (i) + "_C3_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C4_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP2_R" + (i) + "_C4_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP2_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 7,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-004. [@col1_FILIAL] - Rînd.(2101-2301) col.3>=Rînd.(2101-2301) pe col.4 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                } // End if 
            }
        }
        // End 45-004_FILIAL

        // Start 45-003_FILIAL
        // Start function_FILIAL 
        function row_45_003_CAP1_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (
                i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
                || i == 1115 || i == 1116 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124
                || i == 1125 || i == 1126
                || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213 || i == 1214
                || i == 1215 || i == 1216 || i == 1218 || i == 1219 || i == 1221 || i == 1224 || i == 1225
                || i == 1230 || i == 1232 || i == 1234 || i == 1235 || i == 1236 || i == 1237 || i == 1238 || i == 1232
                || i == 1240 || i == 1320 || i == 1321 || i == 1322 || i == 1323 || i == 1324 || i == 1325
                || i == 1325 || i == 1326 || i == 1327
                || i == 1401 || i == 1402 || i == 1403 || i == 1404 || i == 1405 || i == 1406 || i == 1409
            )
                return true;
        }
        // End function_FILIAL
        // Start function_FILIAL 
        function row_45_003_CAP2_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
        }
        // End function_FILIAL
        for (var i = 1103; i <= 1409; i++) {
            {
                if (row_45_003_CAP1_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C1_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP1_R" + (i) + "_C1_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C2_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP1_R" + (i) + "_C2_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C1_FILIAL',
                            'index': j,
                            'weight': 3,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-003. [@col1_FILIAL] - Rînd.(1103-1409) col.1>=Rînd.(1103-1409) pe col.2 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // Start function_FILIAL 
        function row_45_003_CAP1_FILIAL_float(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (
                i == 1302 || i == 1303 || i == 1305 || i == 1306 || i == 1307 || i == 1308 || i == 1309
                || i == 1310 || i == 1311 || i == 1312 || i == 1313 || i == 1314 || i == 1315 || i == 1316 || i == 1317
                || i == 1318 || i == 1319
            )
                return true;
        }
        // End function_FILIAL
        // Float
        for (var i = 1302; i <= 1319; i++) {
            {
                if (row_45_003_CAP1_FILIAL_float(i)) {
                    if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C1_FILIAL"][j]))) {
                        var col1_FILIAL = toFloat(values["CAP1_R" + (i) + "_C1_FILIAL"][j]);
                    }
                    if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C2_FILIAL"][j]))) {
                        var col2_FILIAL = toFloat(values["CAP1_R" + (i) + "_C2_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C1_FILIAL',
                            'index': j,
                            'weight': 4,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-003. [@col1_FILIAL] - Rînd.(1302-1319) col.1>=Rînd.(1302-1319) pe col.2 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL.toFixed(1), "@col2_FILIAL": col2_FILIAL.toFixed(1) })
                        });
                    }
                }
            }
        }
        // Start function_FILIAL 
        function row_45_003_CAP2_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302) return true;
        }
        // End function_FILIAL 
        for (var i = 2101; i <= 2302; i++) {
            {
                if ((row_45_003_CAP2_FILIAL(i))) {
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C1_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP2_R" + (i) + "_C1_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C2_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP2_R" + (i) + "_C2_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP2_R' + (i) + '_C1_FILIAL',
                            'index': j,
                            'weight': 5,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-003. [@col1_FILIAL] - Rînd.(2101-2302) col.3>=Rînd.(1103-1225) pe col.4 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL ": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                } // End if 
            }
        }
        // End 45-003_FILIAL

        // Start 45-005_FILIAL
        // Start function_FILIAL 
        function row_45_005_CAP1_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (i == 1117 || i == 1119) return true;
        }
        // End function_FILIAL
        for (var i = 1117; i <= 1119; i++) {
            {
                if (row_45_005_CAP1_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C3_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP1_R" + (i) + "_C3_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C4_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP1_R" + (i) + "_C4_FILIAL"][j]);
                    }
                    if (col1_FILIAL != col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 8,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-005. [@col1_FILIAL] - Rînd.(1117,1119) col.3 = Rînd.(1117,1119) pe col.4 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // End 45-005_FILIAL

        // Start 45-006_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (!isNaN(Number(values["CAP1_R1134_C" + (i) + "_FILIAL"][j]))) {
                var R1134_C_FILIAL = Number(values["CAP1_R1134_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1123_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1124_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1125_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1126_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1127_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1133_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_22_33_FILIAL = Decimal(values["CAP1_R1123_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1124_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1125_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1126_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1127_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1133_C" + (i) + "_FILIAL"][j] || 0);
            } [j]
            if (R1134_C_FILIAL != SUM_22_33_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1134_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 9,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-006. [@R1134_C_FILIAL] - Rînd.(1134)=Rînd.(1123+1124+1125+1126+1127+1133) pe col.@col_FILIAL - [@SUM_22_33_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1134_C_FILIAL": R1134_C_FILIAL, "@SUM_22_33_FILIAL": SUM_22_33_FILIAL })
                });
            }
        }
        // End 45-006_FILIAL

        // Start 45-023_FILIAL
        for (var i = 1; i <= 1; i++) {
            if (!isNaN(Number(values["CAP1_R1434_C" + (i) + "_FILIAL"][j]))) {
                var R1434_FILIAL = Number(values["CAP1_R1434_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1401_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1402_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1403_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1404_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1405_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1406_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1409_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1411_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1418_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_023_FILIAL = Decimal(values["CAP1_R1401_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1402_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1403_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1404_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1405_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1406_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1409_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1411_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1418_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1434_FILIAL != SUM_45_023_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1434_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 23,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-023. [@R1434_FILIAL] - Rînd.(1434) col.1=Rînd.(1401+1402+1403+1404+1405+1406+1409+1411+1418) pe col.@col_FILIAL - [@SUM_45_023_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@dR1434_FILIAL": R1434_FILIAL, "@SUM_45_023_FILIAL": SUM_45_023_FILIAL })
                });
            }
        }
        // End 45-023_FILIAL

        // Start 45-024_FILIAL
        for (var i = 1; i <= 1; i++) {
            if (!isNaN(Number(values["CAP1_R1440_C" + (i) + "_FILIAL"][j]))) {
                var R1440_FILIAL = Number(values["CAP1_R1440_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1140_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1244_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1328_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1434_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_024_FILIAL = Decimal(values["CAP1_R1140_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1244_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1328_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1434_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1440_FILIAL != SUM_45_024_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1440_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 24,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-024. [@R1440_FILIAL] - Rînd.(1440) col.1=Rînd.(1140+1244+1328+1434) pe col.@col_FILIAL - [@SUM_45_024_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1440_FILIAL": R1440_FILIAL, "@SUM_45_024_FILIAL": SUM_45_024_FILIAL })
                });
            }
        }
        // End 45-024_FILIAL

        // Start 45-025_FILIAL
        for (var i = 1; i <= 2; i++) {
            if (!isNaN(Number(values["CAP1A_R1701_C" + (i) + "_FILIAL"][j]))) {
                var R1701_FILIAL = Number(values["CAP1A_R1701_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1A_R1702_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1A_R1703_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1A_R1704_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_025_FILIAL = Decimal(values["CAP1A_R1702_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1A_R1703_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1A_R1704_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1701_FILIAL < SUM_45_025_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1A_R1701_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 25,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-025. [@R1701_FILIAL] - Rînd.(1701)>=Rînd.(1702+1703+1704) pe col.@col_FILIAL - [@SUM_45_025_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1701_FILIAL": R1701_FILIAL, "@SUM_45_025_FILIAL": SUM_45_025_FILIAL })
                });
            }
        }
        // End 45-025_FILIAL

        // Start 45-026_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R2100_C" + (i) + "_FILIAL"][j]))) {
                var R2100_FILIAL = Number(values["CAP2_R2100_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R2101_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2102_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2103_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2104_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_026_FILIAL = Decimal(values["CAP2_R2101_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2102_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2103_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2104_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R2100_FILIAL != SUM_45_026_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2100_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 26,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-026. [@R2100_FILIAL] - Rînd.(2100)=Rînd.(2101+2102+2103+2104) pe col.@col_FILIAL - [@SUM_45_026_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R2100_FILIAL": R2100_FILIAL, "@SUM_45_026_FILIAL": SUM_45_026_FILIAL })
                });
            }
        }
        // End 45-026_FILIAL

        // Start 45-027_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R2110_C" + (i) + "_FILIAL"][j]))) {
                var R2110_FILIAL = Number(values["CAP2_R2110_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R2111_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2112_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2113_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2114_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2115_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2116_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_027_FILIAL = Decimal(values["CAP2_R2111_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2112_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2113_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2114_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2115_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2116_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R2110_FILIAL != SUM_45_027_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2110_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 27,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-027. [@R2110_FILIAL] - Rînd.(2110)=Rînd.(2111+2112+2113+2114+2115+2116) pe col.@col_FILIAL - [@SUM_45_027_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R2110_FILIAL": R2110_FILIAL, "@SUM_45_027_FILIAL": SUM_45_027_FILIAL })
                });
            }
        }
        // End 45-027_FILIAL

        // Start 45-028_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R2120_C" + (i) + "_FILIAL"][j]))) {
                var R2120_FILIAL = Number(values["CAP2_R2120_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R2121_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_028_FILIAL = Decimal(values["CAP2_R2121_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R2120_FILIAL < SUM_45_028_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2120_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 28,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-028. [@R2120_FILIAL] - Rînd.(2120)>=Rînd.(2121) pe col.@col_FILIAL - [@SUM_45_028_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R2120_FILIAL": R2120_FILIAL, "@SUM_45_028_FILIAL": SUM_45_028_FILIAL })
                });
            }
        }
        // End 45-028_FILIAL

        // Start 45-029_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R2200_C" + (i) + "_FILIAL"][j]))) {
                var R2200_FILIAL = Number(values["CAP2_R2200_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R2201_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2202_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2203_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2204_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2205_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2206_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2207_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2208_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2209_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_029_FILIAL = Decimal(values["CAP2_R2201_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2202_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2203_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2204_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2205_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2206_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2207_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2208_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2209_C" + (i) + "_FILIAL"][j] || 0);
            } [j]
            if (R2200_FILIAL != SUM_45_029_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2200_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 29,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-029. [@R2200_FILIAL] - Rînd.(2200)=Rînd.(2201+2202+2203+2204+2205+2206+2207+2208+2209) pe col.@col_FILIAL - [@SUM_45_029_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R2200_FILIAL": R2200_FILIAL, "@SUM_45_029_FILIAL": SUM_45_029_FILIAL })
                });
            }
        }
        // End 45-029_FILIAL

        // Start 45-030_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R2300_C" + (i) + "_FILIAL"][j]))) {
                var R2300_FILIAL = Number(values["CAP2_R2300_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R2301_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R2302_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_030_FILIAL = Decimal(values["CAP2_R2301_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R2302_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R2300_FILIAL < SUM_45_030_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2300_C' + (i) + "_FILIAL",
                    'index': j,
                    'weight': 30,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-030. [@R2300_FILIAL] - Rînd.(2300)=Rînd.(2301+2302) pe col.@col_FILIAL - [@SUM_45_030_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R2300_FILIAL": R2300_FILIAL, "@SUM_45_030_FILIAL": SUM_45_030_FILIAL })
                });
            }
        }
        // End 45-030_FILIAL

        // Start 45-031_FILIAL
        // Start function_FILIAL
        function row_45_031_CAP2_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (
                i == 2100 || i == 2101 || i == 2102 || i == 2103 || i == 2104 || i == 2110
                || i == 2111 || i == 2112 || i == 2113 || i == 2114 || i == 2115 || i == 2116 || i == 2120
                || i == 2121 || i == 2200 || i == 2201 || i == 2202 || i == 2203 || i == 2204 || i == 2205 || i == 2206
                || i == 2207 || i == 2208 || i == 2209 || i == 2300 || i == 2301 || i == 2302
            )
                return true;
        }
        // End function_FILIAL
        for (var i = 2100; i <= 2302; i++) {
            {
                if (row_45_031_CAP2_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C1_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP2_R" + (i) + "_C1_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C2_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP2_R" + (i) + "_C2_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP2_R' + (i) + '_C1_FILIAL',
                            'index': j,
                            'weight': 31,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-031. [@col1_FILIAL] - Rînd.(2100+… pînă la 2302) col.1>=Rînd.(2100+… pînă la 2302) pe col.2 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // End 45-031_FILIAL

        // Start 45-032_FILIAL
        for (var i = 2100; i <= 2302; i++) {
            {
                if (row_45_031_CAP2_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C3_FILIAL"][j]))) {
                        var col1_FILIAL = Number(values["CAP2_R" + (i) + "_C3_FILIAL"][j]);
                    }
                    if (!isNaN(Number(values["CAP2_R" + (i) + "_C4_FILIAL"][j]))) {
                        var col2_FILIAL = Number(values["CAP2_R" + (i) + "_C4_FILIAL"][j]);
                    }
                    if (col1_FILIAL < col2_FILIAL) {
                        webform.errors.push({
                            'fieldName': 'CAP2_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 32,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-032. [@col1_FILIAL] - Rînd.(2100+… pînă la 2302) col.3>=Rînd.(2100+… pînă la 2302) pe col.4 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // End 45-032_FILIAL

        // Start 45-035_FILIAL
        for (var i = 2100; i <= 2302; i++) {
            {
                if (row_45_031_CAP2_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C3_FILIAL"]))) {
                        var col1_FILIAL = Number(values["CAP1_R" + (i) + "_C3_FILIAL"]);
                    }
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C4_FILIAL"]))) {
                        var col2_FILIAL = Number(values["CAP1_R" + (i) + "_C4_FILIAL"]);
                    }
                    if (col1_FILIAL == 0 && col2_FILIAL != 0) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 35,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-035. [@col1_FILIAL] - Dacă col.3>0 atunci col.4>0 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // End 45-035_FILIAL

        // Start 45-045_FILIAL
        // Start function_FILIAL
        function row_45_045_CAP1_FILIAL(row_FILIAL) {
            var i;
            i = row_FILIAL;
            if (
                i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107
                || i == 1110 || i == 1112 || i == 1113 || i == 1115 || i == 1117 || i == 1119
                || i == 1120 || i == 1121 || i == 1122 || i == 1123 || i == 1124 || i == 1125 || i == 1126 || i == 1127
                || i == 1133 || i == 1134 || i == 1135 || i == 1136
                || i == 1140
                || i == 1213 || i == 1216 || i == 1218 || i == 1219
                || i == 1224 || i == 1225 || i == 1242 || i == 1243
            )
                return true;
        }
        // End function_FILIAL
        for (var i = 1103; i <= 1243; i++) {
            {
                if (row_45_045_CAP1_FILIAL(i)) {
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C3_FILIAL"]))) {
                        var col1_FILIAL = Number(values["CAP1_R" + (i) + "_C3_FILIAL"]);
                    }
                    if (!isNaN(Number(values["CAP1_R" + (i) + "_C4_FILIAL"]))) {
                        var col2_FILIAL = Number(values["CAP1_R" + (i) + "_C4_FILIAL"]);
                    }
                    if (col1_FILIAL > 0 && col2_FILIAL == 0) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R' + (i) + '_C3_FILIAL',
                            'index': j,
                            'weight': 45,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-045. [@col1_FILIAL] - Dacă col.3>0 atunci col.4>0 - [@col2_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col1_FILIAL": col1_FILIAL, "@col2_FILIAL": col2_FILIAL })
                        });
                    }
                }
            }
        }
        // End 45-045_FILIAL

        // Start 45-007_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (!isNaN(Number(values["CAP1_R1135_C" + (i) + "_FILIAL"][j]))) {
                var R1135_C_FILIAL = Number(values["CAP1_R1135_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP1_R1136_C" + (i) + "_FILIAL"][j]))) {
                var R1136_C_FILIAL = Number(values["CAP1_R1136_C" + (i) + "_FILIAL"][j]);
            }
            if (R1135_C_FILIAL < R1136_C_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1135_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 10,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-007. [@R1135_C_FILIAL] - Rînd.(1135)>=Rînd.(1136) pe col.@col_FILIAL - [@R1136_C_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1135_C_FILIAL": R1135_C_FILIAL, "@R1136_C_FILIAL": R1136_C_FILIAL })
                });
            }
        }
        // End 45-007_FILIAL

        // Start 45-036_FILIAL
        for (var i = 1; i <= 1; i++) {
            if (!isNaN(Number(values["CAP1_R1630_C" + (i) + "_FILIAL"][j]))) {
                var R1630_C_FILIAL = Number(values["CAP1_R1630_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP1_R1631_C" + (i) + "_FILIAL"][j]))) {
                var R1631_C_FILIAL = Number(values["CAP1_R1631_C" + (i) + "_FILIAL"][j]);
            }
            if (R1630_C_FILIAL < R1631_C_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1630_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 36,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-036. [@R1630_C_FILIAL] - Rînd.(1630)>=Rînd.(1631) pe col.@col_FILIAL - [@R1631_C_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1630_C_FILIAL": R1630_C_FILIAL, "@R1631_C_FILIAL": R1631_C_FILIAL })
                });
            }
        }
        // End 45-036_FILIAL

        // Start 45-037_FILIAL
        for (var i = 1; i <= 2; i++) {
            if (!isNaN(Number(values["CAP1_R1116_C" + (i) + "_FILIAL"][j]))) {
                var R1116_C_FILIAL = Number(values["CAP1_R1116_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP1_R1117_C" + (i) + "_FILIAL"][j]))) {
                var R1117_C_FILIAL = Number(values["CAP1_R1117_C" + (i) + "_FILIAL"][j]);
            }
            if (R1116_C_FILIAL != R1117_C_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1116_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 37,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-037. [@R1116_C_FILIAL] - Rînd.(1116)=Rînd.(1117) pe col.@col_FILIAL - [@R1117_C_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1116_C_FILIAL": R1116_C_FILIAL, "@R1117_C_FILIAL": R1117_C_FILIAL })
                });
            }
        }
        // End 45-037_FILIAL

        // Start 45-008_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (!isNaN(Number(values["CAP1_R1140_C" + (i) + "_FILIAL"][j]))) {
                var R1140_C_FILIAL = Number(values["CAP1_R1140_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1104_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1105_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1106_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1107_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1110_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1112_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1113_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1115_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1117_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1120_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1121_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1123_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1124_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1125_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1126_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1127_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1133_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1135_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_008_FILIAL = Decimal(values["CAP1_R1104_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1105_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1106_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1107_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1110_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1112_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1113_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1115_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1117_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1120_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1121_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1123_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1124_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1125_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1126_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1127_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1133_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1135_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1140_C_FILIAL != SUM_45_008_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1140_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 11,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-008. [@R1140_C_FILIAL] - Rînd.(1140)=Rînd.(1104 pînă la 1107+1110+1112+1113+1115+1117+1120+1121+1123 pînă la 1133+1135) pe col.@col_FILIAL - [@SUM_45_008_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1140_C_FILIAL": R1140_C_FILIAL, "@SUM_45_008_FILIAL": SUM_45_008_FILIAL })
                });
            }
        }
        // End 45-008_FILIAL

        // Start 45-009_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP1_R1218_C" + (i) + "_FILIAL"][j]))) {
                var R1218_C_FILIAL = Number(values["CAP1_R1218_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP1_R1219_C" + (i) + "_FILIAL"][j]))) {
                var R1219_C_FILIAL = Number(values["CAP1_R1219_C" + (i) + "_FILIAL"][j]);
            }
            if (R1218_C_FILIAL < R1219_C_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1218_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 12,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-009. [@R1218_C_FILIAL] - Rînd.(1218)>=Rînd.(1219) pe col.@col_FILIAL - [@R1219_C_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1218_C_FILIAL": R1218_C_FILIAL, "@R1219_C_FILIAL": R1219_C_FILIAL })
                });
            }
        }
        // End 45-009_FILIAL

        // Start 45-010_FILIAL
        for (var i = 1; i <= 3; i++) {
            if (!isNaN(Number(values["CAP1_R1232_C" + (i) + "_FILIAL"][j]))) {
                var R1232_C_FILIAL = Number(values["CAP1_R1232_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1234_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1235_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1236_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1237_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1238_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1239_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_010_FILIAL = Decimal(values["CAP1_R1234_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1235_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1236_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1237_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1238_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1239_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1232_C_FILIAL != SUM_45_010_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1232_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 14,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-010. [@R1232_C_FILIAL] - Rînd.(1232)=Rînd.(1234+1235+1236+1237+1238+1239) pe col.@col_FILIAL - [@SUM_45_010_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1232_C_FILIAL": R1232_C_FILIAL, "@SUM_45_010_FILIAL": SUM_45_010_FILIAL })
                });
            }
        }
        // End 45-010_FILIAL

        // Start 45-011_FILIAL
        for (var i = 2; i <= 2; i++) {
            if (!isNaN(Number(values["CAP1_R1240_C" + (i) + "_FILIAL"][j]))) {
                var R1240_C_FILIAL = Number(values["CAP1_R1240_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1241_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1242_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_011_FILIAL = Decimal(values["CAP1_R1241_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1242_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1240_C_FILIAL != SUM_45_011_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1240_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 15,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-011. [@R1240_C_FILIAL] - Rînd.(1240)=Rînd.(1241+1242) col.2 pe col.@col_FILIAL - [@SUM_45_011_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1240_C_FILIAL": R1240_C_FILIAL, "@SUM_45_011_FILIAL": SUM_45_011_FILIAL })
                });
            }
        }
        // End 45-011_FILIAL

        // Start 45-012_FILIAL
        // Start function_FILIAL
        function fun_col_12_FILIAL(col_FILIAL) {
            var i;
            i = col_FILIAL;
            if (i == 1 || i == 2) return true;
        }
        // End function_FILIAL
        // Start function_FILIAL
        function fun_col_35_FILIAL(col_FILIAL) {
            var i;
            i = col_FILIAL;
            if (i == 3 || i == 5) return true;
        }
        // End function_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (fun_col_12_FILIAL(i)) {
                if (!isNaN(toFloat(values["CAP1_R1302_C" + (i) + "_FILIAL"][j]))) {
                    var R1302_C_FILIAL = toFloat(values["CAP1_R1302_C" + (i) + "_FILIAL"][j]);
                }
                if (!isNaN(Decimal(values["CAP1_R1303_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1305_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1306_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1307_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1308_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1309_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1310_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1311_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1312_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1313_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1314_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1315_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1316_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1317_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1318_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1319_C" + (i) + "_FILIAL"][j] || 0))) {
                    var SUM_45_012_FILIAL = Decimal(values["CAP1_R1303_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1305_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1306_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1307_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1308_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1309_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1310_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1311_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1312_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1313_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1314_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1315_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1316_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1317_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1318_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1319_C" + (i) + "_FILIAL"][j] || 0);
                }
                if (R1302_C_FILIAL != SUM_45_012_FILIAL) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R1302_C' + (i) + '_FILIAL',
                        'index': j,
                        'weight': 16,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-012. [@R1302_C_FILIAL] - Rînd.(1302)=Rînd.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe col.@col_FILIAL - [@SUM_45_012_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1302_C_FILIAL": R1302_C_FILIAL.toFixed(1), "@SUM_45_012_FILIAL": SUM_45_012_FILIAL.toFixed(1) })
                    });
                }
            }
        }
        for (var i = 1; i <= 5; i++) {
            if (fun_col_35_FILIAL(i)) {
                if (!isNaN(Number(values["CAP1_R1302_C" + (i) + "_FILIAL"][j]))) {
                    var R1302_C_FILIAL = Number(values["CAP1_R1302_C" + (i) + "_FILIAL"][j]);
                }
                if (!isNaN(Decimal(values["CAP1_R1303_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1305_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1306_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1307_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1308_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1309_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1310_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1311_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1312_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1313_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1314_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1315_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1316_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1317_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1318_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1319_C" + (i) + "_FILIAL"][j] || 0))) {
                    var SUM_45_012_FILIAL = Decimal(values["CAP1_R1303_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1305_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1306_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1307_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1308_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1309_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1310_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1311_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1312_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1313_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1314_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1315_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1316_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1317_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1318_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1319_C" + (i) + "_FILIAL"][j] || 0);
                }
                if (R1302_C_FILIAL != SUM_45_012_FILIAL) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R1302_C' + (i) + '_FILIAL',
                        'index': j,
                        'weight': 17,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-012. [@R1302_C_FILIAL] - Rînd.(1302)=Rînd.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe col.@col_FILIAL - [@SUM_45_012_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1302_C_FILIAL": R1302_C_FILIAL, "@SUM_45_012_FILIAL": SUM_45_012_FILIAL })
                    });
                }
            }
        }
        // End 45-012_FILIAL

        // Start 45-013_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (fun_col_12_FILIAL(i)) {
                if (!isNaN(Number(values["CAP1_R1244_C" + (i) + "_FILIAL"][j]))) {
                    var R1244_C_FILIAL = Number(values["CAP1_R1244_C" + (i) + "_FILIAL"][j]);
                }
                if (!isNaN(Decimal(values["CAP1_R1240_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1213_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1214_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1215_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1216_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1218_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1221_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1224_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1225_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1230_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1232_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1243_C" + (i) + "_FILIAL"][j] || 0))) {
                    var SUM_45_013_FILIAL = Decimal(values["CAP1_R1240_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1213_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1214_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1215_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1216_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1218_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1221_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1224_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1225_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1230_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1232_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1243_C" + (i) + "_FILIAL"][j] || 0);
                }
                if (R1244_C_FILIAL != SUM_45_013_FILIAL) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R1244_C' + (i) + '_FILIAL',
                        'index': j,
                        'weight': 18,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-013. [@R1244_C_FILIAL] - Rînd.(1244)=Rînd.(1213+1214+1215+1216+1218+1221+1224+1225+1230+1232+1240+1243) pe col.@col_FILIAL - [@SUM_45_013_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1244_C_FILIAL": R1244_C_FILIAL, "@SUM_45_013_FILIAL": SUM_45_013_FILIAL })
                    });
                }
            }
        }
        // End 45-013_FILIAL

        // Start 45-014_FILIAL
        // Start function_FILIAL
        function fun_col_1235_FILIAL(col_FILIAL) {
            var i;
            i = col_FILIAL;
            if (i == 1 || i == 2 || i == 3 || i == 5) return true;
        }
        // End function_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (fun_col_1235_FILIAL(i)) {
                if (!isNaN(Number(values["CAP1_R1324_C" + (i) + "_FILIAL"][j]))) {
                    var R1324_C_FILIAL = Number(values["CAP1_R1324_C" + (i) + "_FILIAL"][j]);
                }
                if (!isNaN(Decimal(values["CAP1_R1325_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1326_C" + (i) + "_FILIAL"][j] || 0))) {
                    var SUM_45_014_FILIAL = Decimal(values["CAP1_R1325_C" + (i) + "_FILIAL"][j] || 0)
                        .plus(values["CAP1_R1326_C" + (i) + "_FILIAL"][j] || 0);
                }
                if (R1324_C_FILIAL != SUM_45_014_FILIAL) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R1324_C' + (i) + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-014. [@R1324_C_FILIAL] - Rînd.(1324)=Rînd.(1325+1326) pe col.@col_FILIAL - [@SUM_45_014_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1324_C_FILIAL": R1324_C_FILIAL, "@SUM_45_014_FILIAL": SUM_45_014_FILIAL })
                    });
                }
            }
        }
        // End 45-014_FILIAL

        // Start 45-017_FILIAL
        for (var i = 3; i <= 3; i++) {
            if (!isNaN(Number(values["CAP1_R1330_C" + (i) + "_FILIAL"][j]))) {
                var R1330_C_FILIAL = Number(values["CAP1_R1330_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1302_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1329_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_45_017_FILIAL = Decimal(values["CAP1_R1302_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1329_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1330_C_FILIAL != SUM_45_017_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1330_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 20,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-017. [@R1330_C_FILIAL] - Rînd.(1330) col.3=Rînd.(1302+1329) pe col.@col_FILIAL - [@SUM_45_017_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1330_C_FILIAL": R1330_C_FILIAL, "@SUM_45_017_FILIAL": SUM_45_017_FILIAL })
                });
            }
        }
        // End 45-017_FILIAL

        // Start 45-018_FILIAL
        for (var i = 5; i <= 5; i++) {
            if (!isNaN(Number(values["CAP1_R1330_C" + (i) + "_FILIAL"][j]))) {
                var R1330_C_FILIAL = Number(values["CAP1_R1330_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1302_C" + (i) + "_FILIAL"][j] || 0))) {
                var R1302_C_FILIAL = Decimal(values["CAP1_R1302_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1330_C_FILIAL != R1302_C_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1330_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 21,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-018. [@R1330_C_FILIAL] - Rînd.(1330) col.5=Rînd.(1302) pe col.@col_FILIAL - [@R1302_C_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1330_C_FILIAL": R1330_C_FILIAL, "@R1302_C_FILIAL": R1302_C_FILIAL })
                });
            }
        }
        // End 45-018_FILIAL

        // Start 45-015_FILIAL 
        if (!isNaN(Number(values.CAP1_R1328_C1_FILIAL[j]))) {
            var R1328_015_FILIAL = Number(values.CAP1_R1328_C1_FILIAL[j]);
        }
        if (!isNaN(toFloat(values.CAP1_R1301_C1_FILIAL[j]))) {
            var R1301_015_FILIAL = toFloat(values.CAP1_R1301_C1_FILIAL[j]);
        }
        if (!isNaN(toFloat(values.CAP1_R1302_C1_FILIAL[j]))) {
            var R1302_015_FILIAL = toFloat(values.CAP1_R1302_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1320_C1_FILIAL[j]))) {
            var R1320_015_FILIAL = Number(values.CAP1_R1320_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1321_C1_FILIAL[j]))) {
            var R1321_015_FILIAL = Number(values.CAP1_R1321_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1322_C1_FILIAL[j]))) {
            var R1322_015_FILIAL = Number(values.CAP1_R1322_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1323_C1_FILIAL[j]))) {
            var R1323_015_FILIAL = Number(values.CAP1_R1323_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1324_C1_FILIAL[j]))) {
            var R1324_015_FILIAL = Number(values.CAP1_R1324_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1327_C1_FILIAL[j]))) {
            var R1327_015_FILIAL = Number(values.CAP1_R1327_C1_FILIAL[j]);
        }
        var SUM_01_27_015_FILIAL = Math.round((R1301_015_FILIAL + R1302_015_FILIAL + R1320_015_FILIAL + R1321_015_FILIAL + R1322_015_FILIAL + R1323_015_FILIAL + R1324_015_FILIAL + R1327_015_FILIAL) * 10) / 10
        if (R1328_015_FILIAL != SUM_01_27_015_FILIAL) {
            webform.warnings.push({
                'fieldName': 'CAP1_R1328_C1_FILIAL',
                'index': j,
                'weight': 20,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-015. [@R1328_015_FILIAL] - Rînd.(1328)=Rînd.(1301+1302+1320+1321+1322+1323+1324+1327) pe col.1 - [@SUM_01_27_015_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1328_015_FILIAL": R1328_015_FILIAL, "@SUM_01_27_015_FILIAL": SUM_01_27_015_FILIAL })
            });
        }
        // End 45-015_FILIAL

        // Start 45-001_FILIAL
        if (!isNaN(Number(values.CAP1_R1101_C1_FILIAL[j]))) {
            var R1101_001_FILIAL = Number(values.CAP1_R1101_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1102_C1_FILIAL[j]))) {
            var R1102_001_FILIAL = Number(values.CAP1_R1102_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1103_C1_FILIAL[j]))) {
            var R1103_001_FILIAL = Number(values.CAP1_R1103_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1224_C1_FILIAL[j]))) {
            var R1224_001_FILIAL = Number(values.CAP1_R1224_C1_FILIAL[j]);
        }
        var SUM_001_FILIAL = Math.round(R1102_001_FILIAL + R1103_001_FILIAL + R1224_001_FILIAL)
        if (R1101_001_FILIAL != SUM_001_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1101_C1_FILIAL',
                'index': j,
                'weight': 1,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-001. [@R1101_001_FILIAL] - Rînd.(1101)=Rînd.(1102+1103+1224) pe col.1 - [@SUM_001_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1101_001_FILIAL": R1101_001_FILIAL, "@SUM_001_FILIAL": SUM_001_FILIAL })
            });
        }
        // End 45-001_FILIAL

        // Start 45-024_FILIAL
        /*if (!isNaN(Number(values.CAP1_R1440_C1_FILIAL[j]))) {
            var R1440_024_FILIAL = Number(values.CAP1_R1440_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1140_C1_FILIAL[j]))) {
            var R1140_024_FILIAL = Number(values.CAP1_R1140_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1244_C1_FILIAL[j]))) {
            var R1244_024_FILIAL = Number(values.CAP1_R1244_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1328_C1_FILIAL[j]))) {
            var R1328_024_FILIAL = Number(values.CAP1_R1328_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R1434_C1_FILIAL[j]))) {
            var R1434_024_FILIAL = Number(values.CAP1_R1434_C1_FILIAL[j]);
        }
        var SUM_024_FILIAL = Math.round(R1140_024_FILIAL + R1244_024_FILIAL + R1328_024_FILIAL + R1434_024_FILIAL)
        if (R1440_024_FILIAL != SUM_024_FILIAL) {
            webform.errors.push({
                'fieldName': 'CAP1_R1440_C1_FILIAL',
                'index': j,
                'weight': 76,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-024. [@R1440_024_FILIAL] - Rînd.(1440)=Rînd.(1140+1244+1328+1434) pe col.1 - [@SUM_024_FILIAL]', {"@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@R1440_024_FILIAL": R1440_024_FILIAL, "@SUM_024_FILIAL": SUM_024_FILIAL})
            });
        }*/
        // End 45-024_FILIAL

        //Start 45-002_FILIAL
        for (var i = 1; i <= 5; i++) {
            if (!isNaN(Number(values["CAP1_R1103_C" + (i) + "_FILIAL"][j]))) {
                var R1103_C_FILIAL = Number(values["CAP1_R1103_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP1_R1104_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1105_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1106_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP1_R1107_C" + (i) + "_FILIAL"][j] || 0))) {
                var SUM_002_FILIAL = Decimal(values["CAP1_R1104_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1105_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1106_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP1_R1107_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (R1103_C_FILIAL != SUM_002_FILIAL) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1103_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 2,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-002. [@R1103_C_FILIAL] - Rînd.(1103)=Rînd.(1104+1105+1106+1107) pe col.@col_FILIAL - [@SUM_002_FILIAL]', { "@CAP_CUATM_FILIAL": CAP_CUATM_FILIAL, "@col_FILIAL": i, "@R1103_C_FILIAL": R1103_C_FILIAL, "@SUM_002_FILIAL": SUM_002_FILIAL })
                });
            }
        }
        //End 45-002_FILIAL
    }
    // End dynamic validations ----------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.validatorsStatus['agr29'] = 1;
    validateWebform();
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}
