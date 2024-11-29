
//Modifica aceasta validare  Daca exista  CAP_NUM_FILIAL atucni trebuie sa existe si CAP_CUATM_FILIAL
function validate33_100_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {


        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        var CAP_NUM_FILIAL = Number(values.CAP_NUM_FILIAL[j]);
       

     
        if (CAP_CUATM_FILIAL !== "" && (nonZeroCount === 0)) {
         
              
                    webform.errors.push({
                        'fieldName': 'CAP_NUM_FILIAL' + j,
                        'index': j,
                        'weight': 20,
                        'msg': Drupal.t('Raion: @CAP_NUM_FILIAL - Cod eroare: 45-020. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                         
                         
                        })
                    });

                   
                
            
        }


    }
}


function validate_CUATM_FILIAL(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {

        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j] || "").trim(); // Safely handle undefined or null
        var CAP_NUM_FILIAL = Number(values.CAP_NUM_FILIAL[j]);

        // Check if CAP_NUM_FILIAL exists but CAP_CUATM_FILIAL is missing
        if (CAP_NUM_FILIAL && CAP_CUATM_FILIAL === "") {
            webform.errors.push({
                'fieldName': 'CAP_NUM_FILIAL' + j,
                'index': j,
                'weight': 20,
                'msg': Drupal.t('Raion: @CAP_NUM_FILIAL - Cod eroare: 45-020. [@CAP_CUATM_FILIAL] - Dacă există filială, atunci trebuie să existe și date pentru CAP_CUATM_FILIAL.', {
                    '@CAP_NUM_FILIAL': CAP_NUM_FILIAL,
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}
