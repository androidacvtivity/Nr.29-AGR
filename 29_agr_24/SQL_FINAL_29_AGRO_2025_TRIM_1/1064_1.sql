--CREATE OR REPLACE VIEW USER_BANCU.VW_45_1064  AS
        SELECT
                D.CUIIO,
                R.DENUMIRE,
                R.CUATM,
                R.CFOJ,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1110') THEN D.COL1 ELSE NULL END ) AS R_1110,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1150')THEN D.COL1 ELSE NULL END ) AS R_1150,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1190')THEN D.COL1 ELSE NULL END ) AS R_1190,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1130')THEN D.COL1 ELSE NULL END ) AS R_1130,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1160')THEN D.COL1 ELSE NULL END ) AS R_1160,
                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1231 ')THEN D.COL1 ELSE NULL END ) AS R_1231
           --coduri (rânduri): 1110, 1150, 1190, 1130,1160, 1231 col. 1     
                FROM CIS2.VW_DATA_ALL D
                
                        INNER JOIN CIS2.RENIM R ON R.CUIIO = D.CUIIO AND R.CUIIO_VERS = D.CUIIO_VERS
                        INNER JOIN CIS2.MD_CAPITOL MR ON MR.CAPITOL = D.CAPITOL AND MR.CAPITOL_VERS = D.CAPITOL_VERS  
            
                    WHERE 
                    D.PERIOADA IN (1064)
                    AND D.FORM IN (45)
                   
                    AND D.RIND IN ('1110','1150','1190','1130','1231','1160')
                    
           --coduri (rânduri): 1110, 1150, 1190, 1130,1160, 1231 col. 1              
                   
                GROUP BY
                
                D.CUIIO,
                R.DENUMIRE,
                R.CUATM,
                R.CFOJ
              
                ORDER BY
                R.CUATM