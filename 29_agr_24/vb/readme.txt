1. Toate unitatile statistice care au date in randul 2000 si care nu au - tot catalogul. Unitatile parinte si filialele sau daca nu sunt filialele nu mai unitatile parinte sau invers.

2. Toate unitatile statistice care au date in randul 2000 Unitatile parinte si filialele sau daca nu sunt filialele nu mai unitatile parinte sau invers.

3. Toate unitatile si unitatile comasate care au date in randul 2000 si care nu au date.

4. Toate unitatile si unitatile comasate care au date in randul 2000.

5. Nu toate unitatile statistice au IDNO.

6. Filialele daca nu este indicat CFOJ, CFP, CAEM2 - implicit se indica de la unitatea parinte sau trebuie specificat explicit si poate sa difere.
  



Dupa exemplu din fisier. 
Creaza un macrou separat care compara utltimile 4 caractere din coloana A cu primele 4 caractere din coloana C si daca sunt egale insereaza in 
coloana I mesajul - "Codul CUIIO la FILIALA nu este corect" si sa insereze A - C si sa fie colorate aecste patru caractere  - si coloreaza in albastru coloana I 


Buna. Iti prezint catalogul actual din 4 Agro.

1. In prima parte din catalog cu culoare verde este  cuiio mama si galne  cuiio filiala.
2. Filiala se creaza - se adauga la codul cuiio mama primele 2 caretere din cuatm (nu patru dar primele 2 caractere din cuatm).

3. In a doua parte a catalogului care este separat printr-un rand gol  cu culoarea galbena sunt filialele - dar nu sunt cuiio mama - si daca v-a trimite prin ereporting 
nu va ajunge.
Pentru toate filialele trebuie de adaugat in catalog cuiio mama. 
 



 CREATE TABLE USER_BANCU.KATALOG_45_1063
(
  CUIIO       NUMBER,
  CUIIO_VERS  NUMBER,
  DENUMIRE    VARCHAR2(1024 BYTE),
  CUATM       VARCHAR2(1024 BYTE),
  CFP         VARCHAR2(1024 BYTE),
  CFOJ        VARCHAR2(1024 BYTE),
  COCM        VARCHAR2(1024 BYTE),
  CAEM2       VARCHAR2(1024 BYTE),
  CAEM        VARCHAR2(1024 BYTE),
  IDNO        VARCHAR2(1024 BYTE)
)
TABLESPACE TBS_DTI_USERS
PCTUSED    0
PCTFREE    10
INITRANS   1
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       UNLIMITED
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
LOGGING 
NOCOMPRESS 
NOCACHE
MONITORING;


Trebuie sa execut asa interogarea 
ce sa creiezi pentru coloane 
SELECT *
FROM (
    -- Partea 1: Rândurile care satisfac relatia substring-string
    SELECT 
        A.*, 
        1 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
    WHERE CUIIO IN (
        SELECT DISTINCT A.CUIIO
        FROM USER_BANCU.KATALOG_45_1063 A
        JOIN USER_BANCU.KATALOG_45_1063 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
        UNION
        SELECT DISTINCT B.CUIIO
        FROM USER_BANCU.KATALOG_45_1063 A
        JOIN USER_BANCU.KATALOG_45_1063 B
        ON A.CUIIO <> B.CUIIO
        AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
    )
    
    UNION ALL
    
    -- Rând gol pentru separare între Partea 1 si Partea 2
    SELECT 
        NULL AS CUIIO, NULL AS CUIIO_VERS, NULL AS DENUMIRE, NULL AS CUATM,
        NULL AS CFP, NULL AS CFOJ, NULL AS COCM, NULL AS CAEM2, NULL AS CAEM, 
        NULL AS IDNO, 2 AS SORT_ORDER
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.1: Rândurile din Partea 2 cu lungimea CUIIO egala cu 9 sau 10
    SELECT 
        A.*, 
        3 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1063 A
          JOIN USER_BANCU.KATALOG_45_1063 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1063 A
          JOIN USER_BANCU.KATALOG_45_1063 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
      
    UNION ALL
    
    -- Rând gol pentru separare între Partea 2.1 si Partea 2.2
    SELECT 
        NULL AS CUIIO, 
        NULL AS CUIIO_VERS, 
        NULL AS DENUMIRE, 
        NULL AS CUATM,
        NULL AS CFP, 
        NULL AS CFOJ, 
        NULL AS COCM, 
        NULL AS CAEM2, 
        NULL AS CAEM, 
        NULL AS IDNO, 
        4 AS SORT_ORDER
        
        
        
    FROM DUAL
    
    UNION ALL
    
    -- Partea 2.2: Celelalte rânduri din Partea 2 (restul, sortate descrescator)
    SELECT 
        A.*, 
        5 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) NOT IN (9, 10)
      AND CUIIO NOT IN (
          SELECT DISTINCT A.CUIIO
          FROM USER_BANCU.KATALOG_45_1063 A
          JOIN USER_BANCU.KATALOG_45_1063 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
          UNION
          SELECT DISTINCT B.CUIIO
          FROM USER_BANCU.KATALOG_45_1063 A
          JOIN USER_BANCU.KATALOG_45_1063 B
          ON A.CUIIO <> B.CUIIO
          AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
      )
)
ORDER BY SORT_ORDER, 
         CASE WHEN SORT_ORDER = 1 THEN SUBSTR(CUIIO, 1, 10) END,
         CASE WHEN SORT_ORDER = 1 THEN LENGTH(CUIIO) END,
         CASE WHEN SORT_ORDER IN (3, 5) THEN CUIIO END DESC;


sunt 7500 de randuri 