SELECT *
  FROM USER_BANCU.KATALOG_27_2012; 



DELETE
  FROM USER_BANCU.KATALOG_27_2012; 
              
 INSERT INTO USER_BANCU.KATALOG_27_2012 
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
 FROM USER_BANCU.VW_KAT_27_2012;