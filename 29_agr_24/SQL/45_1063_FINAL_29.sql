DECLARE -- ====================================================================

  CURSOR C IS
      
  SELECT 
            
                DISTINCT cuiio,
                IDNO 
                
                from RENIM
  

WHERE

 

LENGTH(TRIM(IDNO)) = 13    ;

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


