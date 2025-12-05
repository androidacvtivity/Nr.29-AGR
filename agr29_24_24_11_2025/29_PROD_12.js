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
            watchAutoSum_CAP7_R8500_C1();
        }
    }
})(jQuery)


//--------------------------------------------------------------------------------



// Autosuma CAP VII: R8510 + R8520 + R8530 + R8540 = R8500 (col.1-8)
function watchAutoSum_CAP7_R8500_C1() {
    const rows = ['8510', '8520', '8530', '8540'];
    const cols = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'];

    function getFloatValue(row, col) {
        const selector = '#CAP7_R' + row + '_' + col;
        const raw = jQuery(selector).val();
        if (raw === undefined || raw === null || raw === '') {
            return 0;
        }

        // Acceptă și „,” și „.”
        const normalized = String(raw).replace(',', '.');
        const val = parseFloat(normalized);
        return isNaN(val) ? 0 : val;
    }

    function updateSumForCol(col) {
        let total = 0;

        for (let i = 0; i < rows.length; i++) {
            total += getFloatValue(rows[i], col);
        }

        const targetID = '#CAP7_R8500_' + col;
        if (total > 0) {
            jQuery(targetID).val(total);
        } else {
            jQuery(targetID).val('');
        }
    }

    // Setăm câmpurile de total (R8500, C1–C8) ca doar citire + stil doar pe număr
    cols.forEach(function (col) {
        const targetID = '#CAP7_R8500_' + col;

        jQuery(targetID).prop('readonly', true);

        jQuery(targetID).css({
            'background-color': '#ebe9e6', // doar input-ul, nu toată celula
            'color': '#0000cc',
            'border': 'none',
            'text-align': 'right'
        });

        // calcul inițial (dacă sunt valori din DB)
        updateSumForCol(col);
    });

    const events = 'input change keyup blur';

    // Legăm evenimente pe toate celulele sursă (8510, 8520, 8530, 8540) pentru toate coloanele
    rows.forEach(function (row) {
        cols.forEach(function (col) {
            const selector = '#CAP7_R' + row + '_' + col;
            jQuery(selector).on(events, function () {
                updateSumForCol(col);
            });
        });
    });
}

//----------------------------------------------------------
// Validare CAP7: R8500 C1–C8 = R8510+R8520+R8530+R8540 (pe fiecare coloană)
function validate_CAP7_R8500_C1(values) {
    var rows = [8510, 8520, 8530, 8540];

    for (var c = 1; c <= 8; c++) {
        var col = "C" + c;

        var r8500Key = "CAP7_R8500_" + col;
        var r8500 = !isNaN(Number(values[r8500Key]))
            ? Number(values[r8500Key])
            : 0;

        var sum = 0;

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var key = "CAP7_R" + row + "_" + col;
            if (!isNaN(Number(values[key]))) {
                sum += Number(values[key]);
            }
        }

        if (r8500 !== sum) {
            webform.errors.push({
                fieldName: r8500Key,
                weight: 10,
                msg: Drupal.t(
                    'Cod eroare: CAP7-001. Rând.8500 col.@col trebuie să fie egală cu suma rândurilor 8510, 8520, 8530, 8540 col.@col. Valoarea rândului 8500: @v8500, suma calculată: @sum',
                    {
                        '@col': c,
                        '@v8500': r8500,
                        '@sum': sum
                    }
                )
            });
        }
    }
}

webform.validators.agr29_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
   
    //-----------------------------------------------------
 

    validate_CAP7_R8500_C1(values)
    // 29_PROD_04
    validatePhoneNumber(values.PHONE);
    
    validate45_001(values);
    validate45_002(values);
    validate45_003(values);
    validate45_004(values);
    validate45_005(values);
    validate45_006(values);
    validate45_007(values);
    validate45_008(values);
    validate45_009(values);
    validate45_010(values);
    validate45_011(values);
    validate45_012(values);
    validate45_013(values);
    validate_1800_C3(values);


    validate_1800_C3_F(values) 
    validate45_001_F(values);
    validate45_002_F(values);
    validate45_003_F(values);
    validate45_004_F(values);
    validate45_005_F(values);
    validate45_006_F(values);
    validate45_007_F(values);
    validate45_008_F(values);
    validate45_009_F(values);
    validate45_010_F(values);
    validate45_011_F(values);
    validate45_012_F(values);
    validate45_013_F(values);

    validate_CUATM_FILIAL(values);

    validate_CAP1_R5000_C1(values);
    validate_CAP1_R5000_C1_F(values);

    validate_CAP1_R5100_C1(values);
    validate_CAP1_R5100_C1_F(values);
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

//-------------------------------------------------------------------------------

// Validation function for FILIAL: CAP1_R5100_C1 >= CAP1_R2000_C1 - CAP1_R2100_C1


function validate_CAP1_R5100_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP1_R5100_F = values["CAP1_R5100_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R5100_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R5100_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP1_R2000_F = values["CAP1_R2000_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R2000_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R2000_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP1_R2100_F = values["CAP1_R2100_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R2100_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R2100_" + col1 + "_FILIAL"][j])
            : 0;

        var calculatedDifference_F = CAP1_R2000_F - CAP1_R2100_F;

        if (CAP1_R5100_F < calculatedDifference_F) {
            webform.errors.push({
                'fieldName': 'CAP1_R5100_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-078-F. Valoarea CAP1 Rând.5100 col.1 trebuie să fie ≥ CAP1 Rând.2000 col.1 - CAP1 Rând.2100 col.1. Valoarea găsită: ' + CAP1_R5100_F + ', valoarea minimă așteptată: ' + calculatedDifference_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


// Validation function: CAP1_R5100_C1 >= CAP1_R2000_C1 - CAP1_R2100_C1
function validate_CAP1_R5100_C1(values) {
    var col1 = "C1";

    var CAP1_R5100 = !isNaN(Number(values["CAP1_R5100_" + col1])) ? Number(values["CAP1_R5100_" + col1]) : 0;
    var CAP1_R2000 = !isNaN(Number(values["CAP1_R2000_" + col1])) ? Number(values["CAP1_R2000_" + col1]) : 0;
    var CAP1_R2100 = !isNaN(Number(values["CAP1_R2100_" + col1])) ? Number(values["CAP1_R2100_" + col1]) : 0;

    var calculatedDifference = CAP1_R2000 - CAP1_R2100;

    if (CAP1_R5100 < calculatedDifference) {
        webform.errors.push({
            'fieldName': 'CAP1_R5100_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 45-078. Valoarea CAP1 Rând.5100 col.1 trebuie să fie ≥ CAP1 Rând.2000 col.1 - CAP1 Rând.2100 col.1. Valoarea găsită: ' + CAP1_R5100 + ', valoarea minimă așteptată: ' + calculatedDifference)
        });
    }
}



//--------------------------------------------------------------------------

// Validation function: CAP1_R5000_C1 = CAP1_R5100_C1 + CAP2_R7100_C1 + CAP2_R7200_C1 + CAP2_R7300_C1 + CAP2_R7400_C1 + CAP2_R7500_C1
function validate_CAP1_R5000_C1(values) {
    var col1 = "C1";

    var CAP1_R5000 = !isNaN(Number(values["CAP1_R5000_" + col1])) ? Number(values["CAP1_R5000_" + col1]) : 0;
    var CAP1_R5100 = !isNaN(Number(values["CAP1_R5100_" + col1])) ? Number(values["CAP1_R5100_" + col1]) : 0;
    var CAP2_R7100 = !isNaN(Number(values["CAP2_R7100_" + col1])) ? Number(values["CAP2_R7100_" + col1]) : 0;
    var CAP2_R7200 = !isNaN(Number(values["CAP2_R7200_" + col1])) ? Number(values["CAP2_R7200_" + col1]) : 0;
    var CAP2_R7300 = !isNaN(Number(values["CAP2_R7300_" + col1])) ? Number(values["CAP2_R7300_" + col1]) : 0;
    var CAP2_R7400 = !isNaN(Number(values["CAP2_R7400_" + col1])) ? Number(values["CAP2_R7400_" + col1]) : 0;
    var CAP2_R7500 = !isNaN(Number(values["CAP2_R7500_" + col1])) ? Number(values["CAP2_R7500_" + col1]) : 0;

    var calculatedSum = CAP1_R5100 + CAP2_R7100 + CAP2_R7200 + CAP2_R7300 + CAP2_R7400 + CAP2_R7500;

    if (CAP1_R5000 !== calculatedSum) {
        webform.errors.push({
            'fieldName': 'CAP1_R5000_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 45-014. Valoarea CAP.1 Rând.5000 col.1 trebuie să fie egală cu suma valorilor: CAP1 Rând.5100 col.1, CAP2 Rând.7100 col.1, CAP2 Rând.7200 col.1, CAP2 Rând.7300 col.1, CAP2 Rând.7400 col.1 și CAP2 Rând.7500 col.1. Valoarea găsită: ' + CAP1_R5000 + ', suma calculată: ' + calculatedSum)
        });
    }
}


// Validation function for FILIAL: CAP1_R5000_C1 = CAP1_R5100_C1 + CAP2_R7100_C1 + CAP2_R7200_C1 + CAP2_R7300_C1 + CAP2_R7400_C1 + CAP2_R7500_C1
function validate_CAP1_R5000_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP1_R5000_F = values["CAP1_R5000_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R5000_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R5000_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP1_R5100_F = values["CAP1_R5100_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R5100_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R5100_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP2_R7100_F = values["CAP2_R7100_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP2_R7100_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP2_R7100_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP2_R7200_F = values["CAP2_R7200_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP2_R7200_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP2_R7200_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP2_R7300_F = values["CAP2_R7300_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP2_R7300_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP2_R7300_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP2_R7400_F = values["CAP2_R7400_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP2_R7400_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP2_R7400_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP2_R7500_F = values["CAP2_R7500_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP2_R7500_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP2_R7500_" + col1 + "_FILIAL"][j])
            : 0;

        var calculatedSum_F = CAP1_R5100_F + CAP2_R7100_F + CAP2_R7200_F + CAP2_R7300_F + CAP2_R7400_F + CAP2_R7500_F;

        if (CAP1_R5000_F !== calculatedSum_F) {
            webform.errors.push({
                'fieldName': 'CAP1_R5000_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-014-F. Valoarea CAP.1 Rând.5000 col.1 trebuie să fie egală cu suma valorilor: CAP1 Rând.5100 col.1, CAP2 Rând.7100 col.1, CAP2 Rând.7200 col.1, CAP2 Rând.7300 col.1, CAP2 Rând.7400 col.1 și CAP2 Rând.7500 col.1. Valoarea găsită: ' + CAP1_R5000_F + ', suma calculată: ' + calculatedSum_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//----------------------------------------------------------------------



function validate_1800_C3(values) {
    var col3 = "C3";
    var col2 = "C2";

    var col_1800 = !isNaN(Number(values["CAP1_R1800_" + col3])) ? Number(values["CAP1_R1800_" + col3]) : 0;
    var col_1620 = !isNaN(Number(values["CAP1_R1620_" + col3])) ? Number(values["CAP1_R1620_" + col3]) : 0;
    var col_6100 = !isNaN(Number(values["CAP1_R6100_" + col2])) ? Number(values["CAP1_R6100_" + col2]) : 0;

    if (col_1800 !== (col_1620 + col_6100)) {
        webform.errors.push({
            'fieldName': 'CAP1_R1800_' + col3,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: CAP1-001. Rând.1800 col.3 trebuie să fie egal cu suma Rând.1620 col.3 + Rând.6100 col.2. Valoarea rândului 1800: ' + col_1800 + ', suma calculată: ' + (col_1620 + col_6100))
        });
    }
}

function validate_1800_C3_F(values) {
    var col3 = "C3";
    var col2 = "C2";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var col_1800_F = values["CAP1_R1800_" + col3 + "_FILIAL"] && !isNaN(Number(values["CAP1_R1800_" + col3 + "_FILIAL"][j]))
            ? Number(values["CAP1_R1800_" + col3 + "_FILIAL"][j])
            : 0;
        var col_1620_F = values["CAP1_R1620_" + col3 + "_FILIAL"] && !isNaN(Number(values["CAP1_R1620_" + col3 + "_FILIAL"][j]))
            ? Number(values["CAP1_R1620_" + col3 + "_FILIAL"][j])
            : 0;
        var col_6100_F = values["CAP1_R6100_" + col2 + "_FILIAL"] && !isNaN(Number(values["CAP1_R6100_" + col2 + "_FILIAL"][j]))
            ? Number(values["CAP1_R6100_" + col2 + "_FILIAL"][j])
            : 0;

        if (col_1800_F !== (col_1620_F + col_6100_F)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1800_' + col3 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: CAP1-001-F. Rând.1800 col.3 trebuie să fie egal cu suma Rând.1620 col.3 + Rând.6100 col.2. Valoarea rândului 1800: ' + col_1800_F + ', suma calculată: ' + (col_1620_F + col_6100_F), {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//---------------------------------------------------------------

function validate_CUATM_FILIAL(values) {
    var seenCUATM = new Set(); // Set to track duplicates

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j] || "").trim(); // Safely handle undefined or null
        var CAP_NUM_FILIAL = Number(values.CAP_NUM_FILIAL[j]);

        // Check if CAP_NUM_FILIAL exists but CAP_CUATM_FILIAL is missing
        if (CAP_NUM_FILIAL && CAP_CUATM_FILIAL === "") {
            webform.errors.push({
                'fieldName': 'CAP_CUATM_FILIAL',
                'index': j,
                'weight': 20,
                'msg': Drupal.t('Raion: @CAP_NUM_FILIAL - Cod eroare: 45-020.  - Dacă există Nr. [@CAP_NUM_FILIAL], atunci trebuie să existe și cod CUATM.', {
                    '@CAP_NUM_FILIAL': CAP_NUM_FILIAL,
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }

        // Check for duplicate CAP_CUATM_FILIAL values
        if (CAP_CUATM_FILIAL) {
            if (seenCUATM.has(CAP_CUATM_FILIAL)) {
                webform.errors.push({
                    'fieldName': 'CAP_CUATM_FILIAL',
                    'index': j,
                    'weight': 10,
                    'msg': Drupal.t('Codul CUATM: @CAP_CUATM_FILIAL este duplicat. Fiecare cod CUATM trebuie să fie unic.', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            } else {
                seenCUATM.add(CAP_CUATM_FILIAL);
            }
        }
    }
}

//-----------------------------------------------------------

function validate45_013(values) {
    var col = "C1";
    var col_7740 = !isNaN(Number(values["CAP3_R7740_" + col])) ? Number(values["CAP3_R7740_" + col]) : 0;
    var col_7741 = !isNaN(Number(values["CAP3_R7741_" + col])) ? Number(values["CAP3_R7741_" + col]) : 0;

    if (col_7740 < col_7741) {
        webform.errors.push({
            'fieldName': 'CAP3_R7740_' + col,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 45-013. Rând.7740 col.1 trebuie să fie ≥ Rând.7741 col.1. Valoarea rândului 7740: ' + col_7740 + ', valoarea rândului 7741: ' + col_7741)
        });
    }
}

function validate45_013_F(values) {
    var col = "C1";
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);
        var col_7740_F = values["CAP3_R7740_" + col + "_FILIAL"] && !isNaN(Number(values["CAP3_R7740_" + col + "_FILIAL"][j]))
            ? Number(values["CAP3_R7740_" + col + "_FILIAL"][j])
            : 0;
        var col_7741_F = values["CAP3_R7741_" + col + "_FILIAL"] && !isNaN(Number(values["CAP3_R7741_" + col + "_FILIAL"][j]))
            ? Number(values["CAP3_R7741_" + col + "_FILIAL"][j])
            : 0;

        if (col_7740_F < col_7741_F) {
            webform.errors.push({
                'fieldName': 'CAP3_R7740_' + col + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-013-F. Rând.7740 col.1 trebuie să fie ≥ Rând.7741 col.1. Valoarea rândului 7740: ' + col_7740_F + ', valoarea rândului 7741: ' + col_7741_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//-----------------------------------------------------------
// Validation function for CAP3: row 7640 col.1 ≥ row 7641 col.1
function validate45_012(values) {
    var col = "C1";
    var col_7640 = !isNaN(Number(values["CAP3_R7640_" + col])) ? Number(values["CAP3_R7640_" + col]) : 0;
    var col_7641 = !isNaN(Number(values["CAP3_R7641_" + col])) ? Number(values["CAP3_R7641_" + col]) : 0;

    if (col_7640 < col_7641) {
        webform.errors.push({
            'fieldName': 'CAP3_R7640_' + col,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 45-012. Rând.7640 col.1 trebuie să fie ≥ Rând.7641 col.1. Valoarea rândului 7640: ' + col_7640 + ', valoarea rândului 7641: ' + col_7641)
        });
    }
}

// Validation function for CAP3 FILIAL: row 7640 col.1 ≥ row 7641 col.1
function validate45_012_F(values) {
    var col = "C1";
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);
        var col_7640_F = values["CAP3_R7640_" + col + "_FILIAL"] && !isNaN(Number(values["CAP3_R7640_" + col + "_FILIAL"][j]))
            ? Number(values["CAP3_R7640_" + col + "_FILIAL"][j])
            : 0;
        var col_7641_F = values["CAP3_R7641_" + col + "_FILIAL"] && !isNaN(Number(values["CAP3_R7641_" + col + "_FILIAL"][j]))
            ? Number(values["CAP3_R7641_" + col + "_FILIAL"][j])
            : 0;

        if (col_7640_F < col_7641_F) {
            webform.errors.push({
                'fieldName': 'CAP3_R7640_' + col + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-012-F. Rând.7640 col.1 trebuie să fie ≥ Rând.7641 col.1. Valoarea rândului 7640: ' + col_7640_F + ', valoarea rândului 7641: ' + col_7641_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//----------------------------------------------------------

// Validation function for CAP2: if col.2 = 0, then col.4 = 0; if col.2 ≠ 0, then col.4 ≠ 0 for all rows in CAP2
function validate45_011(values) {
    var rows = [7100, 7110, 7120, 7130, 7140, 7200, 7210, 7220, 7230, 7240, 7250, 7260,
        7300, 7310, 7320, 7330, 7400, 7410, 7420, 7430, 7440, 7450, 7460, 7470,
        7480, 7490, 7500, 7510, 7520]; // All rows from CAP2
    for (var row of rows) {
        var col2 = !isNaN(Number(values["CAP2_R" + row + "_C2"])) ? Number(values["CAP2_R" + row + "_C2"]) : 0;
        var col4 = !isNaN(Number(values["CAP2_R" + row + "_C4"])) ? Number(values["CAP2_R" + row + "_C4"]) : 0;

        if (col2 === 0 && col4 !== 0) {
            webform.errors.push({
                'fieldName': 'CAP2_R' + row + '_C2',
                'weight': 19,
                'msg': Drupal.t('Cod eroare: CAP2-001. Dacă col.2 = 0, atunci col.4 = 0. Rând: ' + row + ', col.2: ' + col2 + ', col.4: ' + col4)
            });
        } 
        // else 
        // if (col2 !== 0 && col4 === 0) {
        //     webform.errors.push({
        //         'fieldName': 'CAP2_R' + row + '_C4',
        //         'weight': 19,
        //         'msg': Drupal.t('Cod eroare: 45-011. Dacă col.2 ≠ 0, atunci col.4 ≠ 0. Rând: ' + row + ', col.2: ' + col2 + ', col.4: ' + col4)
        //     });
        // }
    }
}


// Validation function for CAP2 FILIAL: if col.2 = 0, then col.4 = 0; if col.2 ≠ 0, then col.4 ≠ 0 for all rows in CAP2
function validate45_011_F(values) {
    var rows = [7100, 7110, 7120, 7130, 7140, 7200, 7210, 7220, 7230, 7240, 7250, 7260,
        7300, 7310, 7320, 7330, 7400, 7410, 7420, 7430, 7440, 7450, 7460, 7470,
        7480, 7490, 7500, 7510, 7520]; // All rows from CAP2
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var row of rows) {
            var col2_F = values["CAP2_R" + row + "_C2_FILIAL"] && !isNaN(Number(values["CAP2_R" + row + "_C2_FILIAL"][j]))
                ? Number(values["CAP2_R" + row + "_C2_FILIAL"][j])
                : 0;
            var col4_F = values["CAP2_R" + row + "_C4_FILIAL"] && !isNaN(Number(values["CAP2_R" + row + "_C4_FILIAL"][j]))
                ? Number(values["CAP2_R" + row + "_C4_FILIAL"][j])
                : 0;

            if (col2_F === 0 && col4_F !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP2_R' + row + '_C2_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: CAP2-001-F. Dacă col.2 = 0, atunci col.4 = 0. Rând: ' + row + ', col.2: ' + col2_F + ', col.4: ' + col4_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            } 
            
            // else if (col2_F !== 0 && col4_F === 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP2_R' + row + '_C4_FILIAL',
            //         'index': j,
            //         'weight': 19,
            //         'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-011-F. Dacă col.2 ≠ 0, atunci col.4 ≠ 0. Rând: ' + row + ', col.2: ' + col2_F + ', col.4: ' + col4_F, {
            //             '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
            //         })
            //     });
            // }
        }
    }
}

//-----------------------------------------------------------

// Validation function for CAP1: row 5000 col.1 ≥ row 5100 col.1
function validate45_010(values) {
    var col = "C1";
    var col_5000 = !isNaN(Number(values["CAP1_R5000_" + col])) ? Number(values["CAP1_R5000_" + col]) : 0;
    var col_5100 = !isNaN(Number(values["CAP1_R5100_" + col])) ? Number(values["CAP1_R5100_" + col]) : 0;

    if (col_5000 < col_5100) {
        webform.errors.push({
            'fieldName': 'CAP1_R5000_' + col,
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 45-010. Rând.5000 col.1 trebuie să fie ≥ Rând.5100 col.1. Valoarea rândului 5000: ' + col_5000 + ', valoarea rândului 5100: ' + col_5100)
        });
    }
}

// Validation function for CAP1 FILIAL: row 5000 col.1 ≥ row 5100 col.1
function validate45_010_F(values) {
    var col = "C1";
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);
        var col_5000_F = values["CAP1_R5000_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R5000_" + col + "_FILIAL"][j]))
            ? Number(values["CAP1_R5000_" + col + "_FILIAL"][j])
            : 0;
        var col_5100_F = values["CAP1_R5100_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R5100_" + col + "_FILIAL"][j]))
            ? Number(values["CAP1_R5100_" + col + "_FILIAL"][j])
            : 0;

        if (col_5000_F < col_5100_F) {
            webform.errors.push({
                'fieldName': 'CAP1_R5000_' + col + '_FILIAL',
                'index': j,
                'weight': 6,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-010-F. Rând.5000 col.1 trebuie să fie ≥ Rând.5100 col.1. Valoarea rândului 5000: ' + col_5000_F + ', valoarea rândului 5100: ' + col_5100_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//-----------------------------------------------------------
// Validation function for CAP1: row 1950 col.1 ≥ sum of rows 1951, 1952, and 1953 col.2
function validate45_009(values) {
    var col1 = "C1";
    var col2 = "C2";
    var col_1950 = !isNaN(Number(values["CAP1_R1950_" + col1])) ? Number(values["CAP1_R1950_" + col1]) : 0;
    var col_sum = 0;

    // Sum rows 1951, 1952, and 1953 for col.2
    for (var row = 1951; row <= 1953; row++) {
        col_sum += !isNaN(Number(values["CAP1_R" + row + "_" + col2])) ? Number(values["CAP1_R" + row + "_" + col2]) : 0;
    }

    if (col_1950 < col_sum) {
        webform.errors.push({
            'fieldName': 'CAP1_R1950_' + col1,
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 45-009. Rând.1950 col.1 trebuie să fie ≥ suma rândurilor 1951+1952+1953 col.2. Valoarea rândului 1950 col.1: ' + col_1950 + ', suma calculată: ' + col_sum)
        });
    }
}

// Validation function for CAP1 FILIAL: row 1950 col.1 ≥ sum of rows 1951, 1952, and 1953 col.2
function validate45_009_F(values) {
    var col1 = "C1";
    var col2 = "C2";
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);
        var col_1950_F = values["CAP1_R1950_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP1_R1950_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP1_R1950_" + col1 + "_FILIAL"][j])
            : 0;
        var col_sum_F = 0;

        // Sum rows 1951, 1952, and 1953 for col.2
        for (var row = 1951; row <= 1953; row++) {
            if (values["CAP1_R" + row + "_" + col2 + "_FILIAL"] && !isNaN(Number(values["CAP1_R" + row + "_" + col2 + "_FILIAL"][j]))) {
                col_sum_F += Number(values["CAP1_R" + row + "_" + col2 + "_FILIAL"][j]);
            }
        }

        if (col_1950_F < col_sum_F) {
            webform.errors.push({
                'fieldName': 'CAP1_R1950_' + col1 + '_FILIAL',
                'index': j,
                'weight': 6,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-009-F. Rând.1950 col.1 trebuie să fie ≥ suma rândurilor 1951+1952+1953 col.2. Valoarea rândului 1950 col.1: ' + col_1950_F + ', suma calculată: ' + col_sum_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//------------------------------------------------------

// Validation function for CAP1: row 1490 col.2 ≥ sum of rows 1491 and 1492 col.2
function validate45_008(values) {
    var col = "C2";
    var col_1490 = !isNaN(Number(values["CAP1_R1490_" + col])) ? Number(values["CAP1_R1490_" + col]) : 0;
    var col_sum = 0;

    // Sum rows 1491 and 1492 for col.2
    for (var row = 1491; row <= 1492; row++) {
        col_sum += !isNaN(Number(values["CAP1_R" + row + "_" + col])) ? Number(values["CAP1_R" + row + "_" + col]) : 0;
    }

    if (col_1490 < col_sum) {
        webform.errors.push({
            'fieldName': 'CAP1_R1490_' + col,
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 45-008. Rând.1490 col.2 trebuie să fie ≥ suma rândurilor 1491+1492 col.2. Valoarea rândului 1490: ' + col_1490 + ', suma calculată: ' + col_sum)
        });
    }
}

// Validation function for CAP1 FILIAL: row 1490 col.2 ≥ sum of rows 1491 and 1492 col.2
function validate45_008_F(values) {
    var col = "C2";
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);
        var col_1490_F = values["CAP1_R1490_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1490_" + col + "_FILIAL"][j]))
            ? Number(values["CAP1_R1490_" + col + "_FILIAL"][j])
            : 0;
        var col_sum_F = 0;

        // Sum rows 1491 and 1492 for col.2
        for (var row = 1491; row <= 1492; row++) {
            if (values["CAP1_R" + row + "_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R" + row + "_" + col + "_FILIAL"][j]))) {
                col_sum_F += Number(values["CAP1_R" + row + "_" + col + "_FILIAL"][j]);
            }
        }

        if (col_1490_F < col_sum_F) {
            webform.errors.push({
                'fieldName': 'CAP1_R1490_' + col + '_FILIAL',
                'index': j,
                'weight': 6,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-008-F. Rând.1490 col.2 trebuie să fie ≥ suma rândurilor 1491+1492 col.2. Valoarea rândului 1490: ' + col_1490_F + ', suma calculată: ' + col_sum_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//------------------------------------------------------
// Validation function for CAP1: row 1430 columns 1-4 ≥ row 1431 columns 1-4
function validate45_007(values) {
    var colNames = ["C1", "C2", "C3", "C4"];
    for (var col of colNames) {
        var col_1430 = !isNaN(Number(values["CAP1_R1430_" + col])) ? Number(values["CAP1_R1430_" + col]) : 0;
        var col_1431 = !isNaN(Number(values["CAP1_R1431_" + col])) ? Number(values["CAP1_R1431_" + col]) : 0;

        if (col_1430 < col_1431) {
            webform.errors.push({
                'fieldName': 'CAP1_R1430_' + col,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-007. Rând.1430 col. ' + col + ' ≥ Rând.1431 col. ' + col + '. Valoarea rândului 1430: ' + col_1430 + ', valoarea rândului 1431: ' + col_1431)
            });
        }
    }
}

// Validation function for CAP1 FILIAL: row 1430 columns 1-4 ≥ row 1431 columns 1-4
function validate45_007_F(values) {
    var colNames = ["C1", "C2", "C3", "C4"];
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var col of colNames) {
            var col_1430_F = values["CAP1_R1430_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1430_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1430_" + col + "_FILIAL"][j])
                : 0;
            var col_1431_F = values["CAP1_R1431_" + col + "_FILIAL"] && !isNaN(Number(values["CAP1_R1431_" + col + "_FILIAL"][j]))
                ? Number(values["CAP1_R1431_" + col + "_FILIAL"][j])
                : 0;

            if (col_1430_F < col_1431_F) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1430_' + col + '_FILIAL',
                    'index': j,
                    'weight': 6,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 45-007-F. Rând.1430 col. ' + col + ' ≥ Rând.1431 col. ' + col + '. Valoarea rândului 1430: ' + col_1430_F + ', valoarea rândului 1431: ' + col_1431_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            }
        }
    }
}


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
;