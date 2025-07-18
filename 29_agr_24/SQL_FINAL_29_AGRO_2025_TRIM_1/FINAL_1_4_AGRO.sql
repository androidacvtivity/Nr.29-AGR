SELECT *
  FROM USER_BANCU.VW_KAT_33_1065
  
--  WHERE 
--  
----  CUIIO = 2937395
-- 
--CUIIO LIKE :pCUIIO||'%'
  ;  --------------------------------------------------------------------
--------------------------------------------
CREATE OR REPLACE FORCE VIEW USER_BANCU.VW_KAT_33_1065 --------------------------------------------------16.06.2025
(
             CUIIO,
             CUIIO_VERS,
             DENUMIRE,
             CUATM,
             CFP,
             CFOJ,
             COCM,
             CAEM2,
             CAEM,
             IDNO
 
 )
AS 
SELECT     R.CUIIO,
           R.CUIIO_VERS,
           R.DENUMIRE,
           R.CUATM,
           R.CFP,
           R.CFOJ,
           R.COCM,
           R.CAEM2,
           R.CAEM,
           R.IDNO
           
           
 
       FROM (
       
       SELECT FC.CUIIO,
                   FC.CUIIO_VERS,
                   FC.FORM,
                   FC.FORM_VERS,
                   FC.STATUT
              FROM CIS2.FORM_CUIIO  FC
                   INNER JOIN (  SELECT CUIIO, MAX (CUIIO_VERS) CUIIO_VERS
                                   FROM CIS2.FORM_CUIIO
                                  WHERE FORM IN (33) AND CUIIO_VERS <= 1065
                               GROUP BY CUIIO) BB
                       ON (    BB.CUIIO = FC.CUIIO
                           AND BB.CUIIO_VERS = FC.CUIIO_VERS)
             WHERE FC.FORM IN (33) AND FC.STATUT <> '3') FC
           INNER JOIN CIS2.RENIM R
               ON (R.CUIIO = FC.CUIIO AND R.CUIIO_VERS = FC.CUIIO_VERS);
               
               
               
