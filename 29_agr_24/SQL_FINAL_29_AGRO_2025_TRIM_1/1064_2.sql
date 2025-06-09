--SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1110')THEN D.COL1 ELSE NULL END ) AS R_1110,
--                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1150')THEN D.COL1 ELSE NULL END ) AS R_1150,
--                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1190')THEN D.COL1 ELSE NULL END ) AS R_1190,
--                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1130')THEN D.COL1 ELSE NULL END ) AS R_1130,
--                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1160')THEN D.COL1 ELSE NULL END ) AS R_1160,
--                SUM(CASE WHEN  D.capitol=399   AND  D.RIND IN ('1231 ')THEN D.COL1 ELSE NULL END ) AS R_1231
SELECT
L.CUIIO,
L.PARENT_CUIIO,
L.DENUMIRE,
L.CUATM,
L.PARENT_CUATM,
L.CAEM2,
L.IDNO,
 R.CUIIO R_CUIIO,
    R.DENUMIRE R_DENUMIRE,
    R.CUATM R_CUATM,
    R.CFOJ,
    R.R_1110,
    R.R_1150,
    R.R_1190,
    R.R_1130,
    R.R_1160,
    R.R_1231
    
    --coduri (r�nduri): 1110, 1150, 1190, 1130,1160, 1231 col. 1

FROM 
(
SELECT *
FROM (
    -- Partea 1: R�ndurile care satisfac rela?ia substring-string
    SELECT 
        A.CUIIO,
        -- Adaugam coloana PARENT_CUIIO
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUIIO
        ) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        -- Adaugam coloana PARENT_CUATM
        COALESCE(
            (SELECT MIN(B.CUATM)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUATM
        ) AS PARENT_CUATM,
        A.CFP,
        A.CFOJ,
        A.COCM,
        A.CAEM2,
        A.CAEM,
        A.IDNO,
        1 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1065 A
    WHERE CUIIO IN (
        SELECT DISTINCT A.CUIIO
        FROM USER_BANCU.KATALOG_45_1065 A
        JOIN USER_BANCU.KATALOG_45_1065 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
        UNION
        SELECT DISTINCT B.CUIIO
        FROM USER_BANCU.KATALOG_45_1065 A
        JOIN USER_BANCU.KATALOG_45_1065 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
    )
    
    UNION ALL
    
    -- R�nd gol pentru separare �ntre Partea 1 ?i Partea 2
    SELECT 
        NULL AS CUIIO, NULL AS PARENT_CUIIO, NULL AS CUIIO_VERS, NULL AS DENUMIRE, 
        NULL AS CUATM, NULL AS PARENT_CUATM, NULL AS CFP, NULL AS CFOJ, 
        NULL AS COCM, NULL AS CAEM2, NULL AS CAEM, NULL AS IDNO, 2 AS SORT_ORDER
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.1: R�ndurile din Partea 2 cu lungimea CUIIO egala cu 9 sau 10
    SELECT 
        A.CUIIO,
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUIIO
        ) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        COALESCE(
            (SELECT MIN(B.CUATM)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUATM
        ) AS PARENT_CUATM,
        A.CFP,
        A.CFOJ,
        A.COCM,
        A.CAEM2,
        A.CAEM,
        A.IDNO,
        3 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1065 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1065 A
          JOIN USER_BANCU.KATALOG_45_1065 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1065 A
          JOIN USER_BANCU.KATALOG_45_1065 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
      
    UNION ALL
    
    -- R�nd gol pentru separare �ntre Partea 2.1 ?i Partea 2.2
    SELECT 
        NULL AS CUIIO, NULL AS PARENT_CUIIO, NULL AS CUIIO_VERS, NULL AS DENUMIRE, 
        NULL AS CUATM, NULL AS PARENT_CUATM, NULL AS CFP, NULL AS CFOJ, 
        NULL AS COCM, NULL AS CAEM2, NULL AS CAEM, NULL AS IDNO, 4 AS SORT_ORDER
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.2: Celelalte r�nduri din Partea 2 (restul, sortate descrescator)
    SELECT 
        A.CUIIO,
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUIIO
        ) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        COALESCE(
            (SELECT MIN(B.CUATM)
             FROM USER_BANCU.KATALOG_45_1065 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUATM
        ) AS PARENT_CUATM,
        A.CFP,
        A.CFOJ,
        A.COCM,
        A.CAEM2,
        A.CAEM,
        A.IDNO,
        5 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1065 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) NOT IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1065 A
          JOIN USER_BANCU.KATALOG_45_1065 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1065 A
          JOIN USER_BANCU.KATALOG_45_1065 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
)
ORDER BY SORT_ORDER, 
         CASE WHEN SORT_ORDER = 1 THEN SUBSTR(CUIIO, 1, 10) END,
         CASE WHEN SORT_ORDER = 1 THEN LENGTH(CUIIO) END,
         CASE WHEN SORT_ORDER IN (3, 5) THEN CUIIO END DESC
         
         ) L LEFT JOIN USER_BANCU.VW_45_1064 R ON L.CUIIO = R.CUIIO 
