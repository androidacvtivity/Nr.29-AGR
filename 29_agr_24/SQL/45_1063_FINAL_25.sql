DECLARE -- ====================================================================

  CURSOR C IS
      
  SELECT 
D.CUIIO,	
L.IDNO 	
FROM KATALOG_45_1063_24 D  LEFT JOIN (
SELECT 
TRIM(R.CUIIO) AS CUIIO,
TRIM(R.IDNO)  AS IDNO
FROM USER_BANCU.KATALOG_45_1063_24_FINAL L 
RIGHT JOIN  (
SELECT 
CUIIO,
IDNO
FROM USER_BANCU.IDNO               
WHERE
CUIIO IS NOT NULL) R ON L.PARENT_CUIIO = R.CUIIO
) L ON D.PARENT_CUIIO = L.CUIIO




GROUP BY
D.CUIIO,	
D.PARENT_CUIIO,	
D.CUIIO_VERS,	
D.DENUMIRE,	
D.CUATM,	
D.PARENT_CUATM,	
D.CFP,	
D.CFOJ,	
D.CAEM2,	
D.IDNO,
L.IDNO, 	
D.ORDINE

HAVING
D.IDNO IS NULL

AND L.IDNO IS NOT NULL



ORDER BY 
D.ORDINE   
      ;

BEGIN -- ======================================================================
  FOR CR IN C
  LOOP
    UPDATE CIS2.RENIM SET 
      
--    --    CAEM2 = CR.CAEM2,
--         DENUMIRE = CR.DENUMIRE,
--        CUATM = CR.CUATM,
--         CFP = CR.CFP,
--        CFOJ = CR.CFOJ
       IDNO = CR.IDNO
 --     
  --  ETAPA_PROD = CR.ETAPA_PROD
    
    
    WHERE 
      CUIIO  = CR.CUIIO 
--      AND
--      CUIIO_VERS = CR.CUIIO_VERS 
--      
      
      
    ;
  END LOOP;
END; -- =======================================================================


