 SELECT 
    B.CUIIO AS STRING_CUIIO, 
    A.IDNO  AS SUBSTRING_IDNO,
    B.IDNO  AS  STRING_IDNO,
    A.DENUMIRE AS SUBSTRING_DENUMIRE,
    B.DENUMIRE AS STRING_DENUMIRE 
FROM 
    CIS2.RENIM A
JOIN 
    CIS2.RENIM B
ON 
  --  A.CUIIO <> B.CUIIO
    1210633 <> B.CUIIO
   -- AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
     AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(1210633) || '%'  