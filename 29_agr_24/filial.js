function validate33_001(values) {
    // 33-001 validation logic
    for (var i = 0; i <= 8; i++) {
        if (i !== 2 && i !== 7) {
            var CAP1_R5_C = !isNaN(Number(values["CAP11_R5_C" + i])) ? Number(values["CAP11_R5_C" + i]) : 0;
            var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + i])) ? Number(values["CAP11_R1_C" + i]) : 0;
            var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + i])) ? Number(values["CAP11_R2_C" + i]) : 0;
            var CAP1_R4_C = !isNaN(Number(values["CAP11_R4_C" + i])) ? Number(values["CAP11_R4_C" + i]) : 0;

            var result_33_001 = CAP1_R1_C + CAP1_R2_C - CAP1_R4_C;

            if (CAP1_R5_C !== result_33_001) {
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-001. [@col] - Tab.1.1, rd.5 pe COL (@col), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4)) COL(1,3,4,5,6,8), @CAP1_R5_C <> @result_33_001', { '@col': i, '@CAP1_R5_C': CAP1_R5_C, '@result_33_001': result_33_001 })
                });
            }
        }
    }
}



function validate33_001_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) {
            var R5_C = 0, R1_C = 0, R2_C = 0, R4_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP11_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R5_C" + i + "_FILIAL"][j]))) {
                R5_C = Number(values["CAP11_R5_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R1_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_C" + i + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP11_R1_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_C" + i + "_FILIAL"][j]))) {
                R4_C = Number(values["CAP11_R4_C" + i + "_FILIAL"][j]);
            }

            var result_33_001_F = R1_C + R2_C - R4_C;

            if (R5_C !== result_33_001_F) {
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }
    }
}

// Dupa exemplu validate33_001 si validate33_001_F creaza validate45_001_F
// For example, validate 33_001 and validate 33_001_F create validate 45_001_F

function validate45_001(values) {
    for (var i = 1110; i <= 1500; i++) {
        {
            if (row_45_CAP1(i)) {

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C1"]);
                }

                var col1 = !isNaN(Number(values["CAP1_R" + (i) + "_C1"])) ? Number(values["CAP1_R" + (i) + "_C1"]) : 0;
                var col2 = !isNaN(Number(values["CAP1_R" + (i) + "_C2"])) ? Number(values["CAP1_R" + (i) + "_C2"]) : 0;

                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-004. [@col1] - col.1  ≥  col.2 - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }
        }
    }
}