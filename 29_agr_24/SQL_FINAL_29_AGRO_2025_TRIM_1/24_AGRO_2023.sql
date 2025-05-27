--        
--
--
--
--
--        SELECT *
--        FROM    USER_BANCU.VW_27_2012;
--
--
--         CREATE OR REPLACE VIEW USER_BANCU.VW_27_2012  AS
       
        
        SELECT
                D.CUIIO,
                R.DENUMIRE,
                R.CUATM,
                R.CFOJ,
             
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('95')THEN D.COL1 ELSE NULL END ) AS cap3_r_95,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('96')THEN D.COL1 ELSE NULL END ) AS cap3_r_96,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('98')THEN D.COL1 ELSE NULL END ) AS cap3_r_98,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('109')THEN D.COL1 ELSE NULL END ) AS cap3_r_109,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('110')THEN D.COL1 ELSE NULL END ) AS cap3_r_110,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('113')THEN D.COL1 ELSE NULL END ) AS cap3_r_113,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('114')THEN D.COL1 ELSE NULL END ) AS cap3_r_114,
                SUM(CASE WHEN  D.capitol= 372   AND  D.RIND IN ('106')THEN D.COL1 ELSE NULL END ) AS cap3_r_106,
                SUM(CASE WHEN  D.capitol= 373   AND  D.RIND IN ('149')THEN D.COL1 ELSE NULL END ) AS cap4_r_149,
                SUM(CASE WHEN  D.capitol= 373   AND  D.RIND IN ('150')THEN D.COL1 ELSE NULL END ) AS cap4_r_150,
                SUM(CASE WHEN  D.capitol= 373   AND  D.RIND IN ('148')THEN D.COL1 ELSE NULL END ) AS cap4_r_148,
                SUM(CASE WHEN  D.capitol= 373   AND  D.RIND IN ('147')THEN D.COL1 ELSE NULL END ) AS cap4_r_147
                
           
              
                
                FROM CIS2.VW_DATA_ALL D
                
                        INNER JOIN CIS2.RENIM R ON R.CUIIO = D.CUIIO AND R.CUIIO_VERS = D.CUIIO_VERS
                        INNER JOIN CIS2.MD_CAPITOL MR ON MR.CAPITOL = D.CAPITOL AND MR.CAPITOL_VERS = D.CAPITOL_VERS  
            
                    WHERE 
                    D.PERIOADA IN (2012)
                    AND D.FORM IN (27)
                    
                    
                    
                   
                GROUP BY
                
                D.CUIIO,
                R.DENUMIRE,
                R.CUATM,
                R.CFOJ
              


                ORDER BY
                R.CUATM
             
                
               
                