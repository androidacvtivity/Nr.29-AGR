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
