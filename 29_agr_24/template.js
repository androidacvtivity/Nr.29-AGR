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
