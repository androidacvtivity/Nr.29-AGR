
SELECT

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


FROM USER_BANCU.VW_KAT_45_1063 
--------------------
WHERE

--CUIIO LIKE  1210633||'%'


CUIIO IN (
4084581374,
41558278,
41620074,
41266974

)
ORDER BY 
IDNO