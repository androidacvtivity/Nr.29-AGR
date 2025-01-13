DECLARE -- ====================================================================

  CURSOR C IS
  SELECT
    :pCOD_CUATM AS pCOD_CUATM
  FROM
    DUAL;

BEGIN -- ======================================================================
  FOR CR IN C
  LOOP
   IF CR.pCOD_CUATM = '0000000' THEN
    INSERT INTO TABLE_OUT 
(
  PERIOADA,
  FORM,
  FORM_VERS,
  ID_MDTABLE,
  COD_CUATM,
  NR_SECTIE,
  NUME_SECTIE,
  NR_SECTIE1,
  NUME_SECTIE1,
  NR_SECTIE2,
  NUME_SECTIE2,
  NR_ROW,
  ORDINE,
  DECIMAL_POS,
  NUME_ROW,  
 COL1,COL2,COL3,COL4,COL5,COL6,COL7,COL8
)
--------------------------------------------------------------------------------
  SELECT
  :pPERIOADA AS PERIOADA,
  :pFORM AS FORM,
  :pFORM_VERS AS FORM_VERS,
  :pID_MDTABLE AS ID_MDTABLE,
  :pCOD_CUATM AS COD_CUATM,
         
  ORDINE_CFOJ AS NR_SECTIE,
  CFOJ_DENUMIRE AS NUME_SECTIE,
  '0' AS NR_SECTIE1,
  '0' AS NUME_SECTIE1,
  '0' AS NR_SECTIE2,
  '0' AS NUME_SECTIE2,
  ROUND(NVAL(COL1)-NVAL(COL1_1),0)||'~'||ORDINE AS NR_ROW,
  ORDINE,
  '00011000' AS DECIMAL_POS,
  NUME_ROW,
  ROUND(NVAL(COL2)-NVAL(COL2_1),0) AS COL1,
  ROUND(NVAL(COL3)-NVAL(COL3_1),0) AS COL2,
  ROUND(NVAL(COL4)-NVAL(COL4_1),0) AS COL3,
  ROUND(ROUND(NVAL(COL3)-NVAL(COL3_1),1)/NOZERO(ROUND(NVAL(COL2)-NVAL(COL2_1),1)),1) AS COL4,
  ROUND((NVAL(COL4)-NVAL(COL4_1))/NOZERO(NVAL(COL2)-NVAL(COL2_1)),1) AS COL5,
  ROUND(NVAL(COL5)-NVAL(COL5_1),0) AS COL6,
  (NVAL(COL3)-NVAL(COL3_1)) +  (NVAL(COL5)-NVAL(COL5_1)) AS COL7,
  (NVAL(COL4)-NVAL(COL4_1)) +  (NVAL(COL5)-NVAL(COL5_1))  AS COL8
FROM
(
SELECT
  TR.CFOJ_DENUMIRE||' ('||TR.CFOJ||')' AS CFOJ_DENUMIRE,
  TR.ORDINE AS ORDINE_CFOJ,
  R.NUME_ROW,
  TO_NUMBER(R.NR_ROW) AS ORDINE,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1190') THEN D.COL1 END)) AS COL1,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1191') THEN D.COL1 END)) AS COL1_1,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1190') THEN D.COL2 END)) AS COL2,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1191') THEN D.COL2 END)) AS COL2_1,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1190') THEN D.COL3 END)) AS COL3,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1191') THEN D.COL3 END)) AS COL3_1,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1190') THEN D.COL4 END)) AS COL4,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1191') THEN D.COL4 END)) AS COL4_1,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1190') THEN D.COL5 END)) AS COL5,
  NVAL(SUM(CASE WHEN TR.CFOJ LIKE '%'|| D.CFOJ ||'%' AND CC.FULL_CODE LIKE '%'||R.CS_CUATM||'%' AND D.RIND IN ('1191') THEN D.COL5 END)) AS COL5_1
  
 
FROM 
  VW_DATA_ALL D
  INNER JOIN VW_CL_CUATM CC ON(D.CUATM = CC.CODUL)
  CROSS JOIN 
  (
    SELECT
      DECODE(CS.CODUL, 
      '0000000','01','0100000','02','1111111','03','0300000','04',
      '1400000','05','3400000','06','3600000','07','4100000','08','4300000','09',
      '4500000','10','4800000','11','6200000','12','7100000','13','7400000','14',
      '7800000','15','2222222','16','1000000','17','2500000','18','3100000','19',
      '3800000','20','5300000','21','5500000','22','6000000','23','6400000','24',
      '6700000','25','8000000','26','8300000','27','8900000','28','9200000','29',
      '3333333','30','1200000','31','1700000','32','2100000','33','2700000','34',
      '2900000','35','5700000','36','8500000','37','8700000','38','9600000','39')
      AS NR_ROW,
      CS.DENUMIRE AS NUME_ROW,
      CS.CODUL AS CS_CUATM
    FROM
      VW_CL_CUATM CS
    WHERE
      CS.CODUL 
      IN(
         '0000000','0100000','1111111','0300000','1400000','3400000','3600000','4100000','4300000','4500000',
         '4800000','6200000','7100000','7400000','7800000','2222222','1000000','2500000','3100000','3800000',
         '5300000','5500000','6000000','6400000','6700000','8000000','8300000','8900000','9200000','3333333',
         '1200000','1700000','2100000','2700000','2900000','5700000','8500000','8700000','9600000'
        )
  ) R 
  CROSS JOIN 
  (
SELECT '500+530+540+541+590+620+690+880+890+684+685' AS CFOJ, 'Intreprinderi agricole si GT (de fermier) cu terenuri agricole de 10 ha si peste' AS CFOJ_DENUMIRE, 1 AS ORDINE FROM DUAL UNION
SELECT '500+530+540+541+590+620+690+880+890' AS CFOJ, 'Intreprindei agricole ' AS CFOJ_DENUMIRE, 2 AS ORDINE FROM DUAL UNION
SELECT '684+685' AS CFOJ, 'Gospodariile taranesti (de fermier) cu terenuri agricole de 10 ha si peste' AS CFOJ_DENUMIRE, 3 AS ORDINE FROM DUAL 

  ) TR
WHERE
  D.PERIOADA IN (:pPERIOADA) AND 
  D.FORM_VERS = :pFORM_VERS     AND    
  (:pID_MDTABLE=:pID_MDTABLE) AND
  D.CUATM_FULL LIKE '%'||:pCOD_CUATM||';%' AND

  D.FORM IN (45)AND   
  D.CAPITOL IN (399) AND
  D.RIND IN ('1190','1191')
GROUP BY
  TR.CFOJ,
  TR.CFOJ_DENUMIRE,
  TR.ORDINE,
  R.NUME_ROW,
  R.NR_ROW
ORDER BY
  TR.ORDINE,
  R.NR_ROW
);
   ELSE
     INSERT INTO TABLE_OUT 
(
  PERIOADA,
  FORM,
  FORM_VERS,
  ID_MDTABLE,
  COD_CUATM,
  NR_SECTIE,
  NUME_SECTIE,
  NR_SECTIE1,
  NUME_SECTIE1,
  NR_SECTIE2,
  NUME_SECTIE2,
  NR_ROW,
  ORDINE,
  DECIMAL_POS,
  NUME_ROW,  
 COL1,COL2,COL3,COL4,COL5,COL6,COL7,COL8
)
--------------------------------------------------------------------------------
  SELECT
  :pPERIOADA AS PERIOADA,
  :pFORM AS FORM,
  :pFORM_VERS AS FORM_VERS,
  :pID_MDTABLE AS ID_MDTABLE,
  :pCOD_CUATM AS COD_CUATM,
         
  '0' AS NR_SECTIE,
  '0'AS NUME_SECTIE,
  '0' AS NR_SECTIE1,
  '0' AS NUME_SECTIE1,
  '0' AS NR_SECTIE2,
  '0' AS NUME_SECTIE2,
  ROUND(NVAL(COL1)-NVAL(COL1_1),0)||'~'||ORDINE AS NR_ROW,
  ORDINE,
  '0000000000' AS DECIMAL_POS,
  DENUMIRE||'('||ORDINE||')' AS NUME_ROW,
  ROUND(NVAL(COL2)-NVAL(COL2_1),0) AS COL1,
  ROUND(NVAL(COL3)-NVAL(COL3_1),0) AS COL2,
  ROUND(NVAL(COL4)-NVAL(COL4_1),0) AS COL3,
  ROUND(ROUND(NVAL(COL3)-NVAL(COL3_1),1)/NOZERO(ROUND(NVAL(COL2)-NVAL(COL2_1),1)),1) AS COL4,
  ROUND((NVAL(COL4)-NVAL(COL4_1))/NOZERO(NVAL(COL2)-NVAL(COL2_1)),1) AS COL5,
  ROUND(NVAL(COL7)-NVAL(COL7_1),0) AS COL6,
  ROUND(NVAL(COL8)-NVAL(COL8_1),0) AS COL7,
  ROUND(NVAL(COL9)-NVAL(COL9_1),0) AS COL8
FROM
(
SELECT
  R.DENUMIRE,
  TO_NUMBER(R.CUIIO) AS ORDINE,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL1 END)) AS COL1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL1 END)) AS COL1_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL2,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL2_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END)) AS COL3,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END)) AS COL3_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END)) AS COL4,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END)) AS COL4_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL5,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL5_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL6,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL6_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END)) AS COL7,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END)) AS COL7_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))+
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END)) AS COL8,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))+
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END)) AS COL8_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))+
  (NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))*
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END))) AS COL9,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))+
  (NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))*
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END))) AS COL9_1
FROM 
  VW_DATA_ALL D
  INNER JOIN RENIM R ON (D.CUIIO=R.CUIIO AND D.CUIIO_VERS=R.CUIIO_VERS)
WHERE
  D.PERIOADA IN (:pPERIOADA) AND 
  D.FORM_VERS = :pFORM_VERS     AND    
  (:pID_MDTABLE=:pID_MDTABLE) AND
  D.CUATM_FULL LIKE '%'||:pCOD_CUATM||';%' AND

  D.FORM IN (45)AND   
  D.CAPITOL IN (399) AND
  D.RIND IN ('1190','1191')
GROUP BY
  R.DENUMIRE,
  R.CUIIO
UNION
SELECT
  'TOTAL' AS DENUMIRE,
  0 AS ORDINE,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL1 END)) AS COL1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL1 END)) AS COL1_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL2,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL2_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END)) AS COL3,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END)) AS COL3_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END)) AS COL4,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END)) AS COL4_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL5,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL5_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL2 END)) AS COL6,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL2 END)) AS COL6_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END)) AS COL7,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END)) AS COL7_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))+
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END)) AS COL8,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))+
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END)) AS COL8_1,
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))+
  (NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL3 END))*
  NVAL(SUM(CASE WHEN D.RIND IN ('1190') THEN D.COL5 END))) AS COL9,
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))+
  (NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL4 END))/
  NOZERO(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL3 END))*
  NVAL(SUM(CASE WHEN D.RIND IN ('1191') THEN D.COL5 END))) AS COL9_1
FROM 
  VW_DATA_ALL D
  INNER JOIN RENIM R ON (D.CUIIO=R.CUIIO AND D.CUIIO_VERS=R.CUIIO_VERS)
WHERE
  D.PERIOADA IN (:pPERIOADA) AND 
  D.FORM_VERS = :pFORM_VERS     AND    
  (:pID_MDTABLE=:pID_MDTABLE) AND
  D.CUATM_FULL LIKE '%'||:pCOD_CUATM||';%' AND

  D.FORM IN (45)AND   
  D.CAPITOL IN (399) AND
  D.RIND IN ('1190','1191')
);
   END IF;
  END LOOP;
END; -- =======================================================================