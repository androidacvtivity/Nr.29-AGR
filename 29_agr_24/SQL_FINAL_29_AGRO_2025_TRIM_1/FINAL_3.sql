SELECT *
  FROM USER_BANCU.KATALOG_45_1059; 



DELETE
  FROM USER_BANCU.KATALOG_45_1059; 
              
 INSERT INTO USER_BANCU.KATALOG_45_1059 
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
 FROM USER_BANCU.VW_KAT_45_1059;