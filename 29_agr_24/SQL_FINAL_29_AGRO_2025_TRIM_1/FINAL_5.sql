

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
    R.R_1630,
    R.R_1631,
    R.R_1140,
    R.R_1104_1110,
    R.R_1105,
    R.R_1106_1112,
    R.R_1113,
    R.R_1116,
    R.R_1135,
    R.R_1120_1121,
    R.R_1123,
    R.R_1301,
    R.R_1213,
    R.R_1224_1225,
    R.R_1240,
    R.R_1221,
    R.R_1242,
    R.R_1241,
    R.R_1216,
    R.R_1302_1324_2202,
    R.R_2100,
    R.R_2110,
    R.R2200_2202,
    R.R_2300,
    R.R_2301,
    R.R_2302,
    R.R_1701


FROM 
(
SELECT *
FROM (
    -- Partea 1: Rândurile care satisfac rela?ia substring-string
    SELECT 
        A.CUIIO,
        -- Adaugam coloana PARENT_CUIIO
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1059 B
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
             FROM USER_BANCU.KATALOG_45_1059 B
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
    FROM USER_BANCU.KATALOG_45_1059 A
    WHERE CUIIO IN (
        SELECT DISTINCT A.CUIIO
        FROM USER_BANCU.KATALOG_45_1059 A
        JOIN USER_BANCU.KATALOG_45_1059 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
        UNION
        SELECT DISTINCT B.CUIIO
        FROM USER_BANCU.KATALOG_45_1059 A
        JOIN USER_BANCU.KATALOG_45_1059 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
    )
    
    UNION ALL
    
    -- Rând gol pentru separare între Partea 1 ?i Partea 2
    SELECT 
        NULL AS CUIIO, NULL AS PARENT_CUIIO, NULL AS CUIIO_VERS, NULL AS DENUMIRE, 
        NULL AS CUATM, NULL AS PARENT_CUATM, NULL AS CFP, NULL AS CFOJ, 
        NULL AS COCM, NULL AS CAEM2, NULL AS CAEM, NULL AS IDNO, 2 AS SORT_ORDER
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.1: Rândurile din Partea 2 cu lungimea CUIIO egala cu 9 sau 10
    SELECT 
        A.CUIIO,
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1059 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUIIO
        ) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        COALESCE(
            (SELECT MIN(B.CUATM)
             FROM USER_BANCU.KATALOG_45_1059 B
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
    FROM USER_BANCU.KATALOG_45_1059 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1059 A
          JOIN USER_BANCU.KATALOG_45_1059 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1059 A
          JOIN USER_BANCU.KATALOG_45_1059 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
      
    UNION ALL
    
    -- Rând gol pentru separare între Partea 2.1 ?i Partea 2.2
    SELECT 
        NULL AS CUIIO, NULL AS PARENT_CUIIO, NULL AS CUIIO_VERS, NULL AS DENUMIRE, 
        NULL AS CUATM, NULL AS PARENT_CUATM, NULL AS CFP, NULL AS CFOJ, 
        NULL AS COCM, NULL AS CAEM2, NULL AS CAEM, NULL AS IDNO, 4 AS SORT_ORDER
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.2: Celelalte rânduri din Partea 2 (restul, sortate descrescator)
    SELECT 
        A.CUIIO,
        COALESCE(
            (SELECT MIN(B.CUIIO)
             FROM USER_BANCU.KATALOG_45_1059 B
             WHERE A.CUIIO LIKE TO_CHAR(B.CUIIO) || '%'
               AND A.CUIIO <> B.CUIIO),
            A.CUIIO
        ) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        COALESCE(
            (SELECT MIN(B.CUATM)
             FROM USER_BANCU.KATALOG_45_1059 B
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
    FROM USER_BANCU.KATALOG_45_1059 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) NOT IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1059 A
          JOIN USER_BANCU.KATALOG_45_1059 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1059 A
          JOIN USER_BANCU.KATALOG_45_1059 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
)
ORDER BY SORT_ORDER, 
         CASE WHEN SORT_ORDER = 1 THEN SUBSTR(CUIIO, 1, 10) END,
         CASE WHEN SORT_ORDER = 1 THEN LENGTH(CUIIO) END,
         CASE WHEN SORT_ORDER IN (3, 5) THEN CUIIO END DESC
         
         ) L LEFT JOIN USER_BANCU.VW_45_1059 R ON L.CUIIO = R.CUIIO 
