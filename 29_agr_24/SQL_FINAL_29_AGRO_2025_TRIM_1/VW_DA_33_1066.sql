
CREATE OR REPLACE FORCE VIEW USER_BANCU.VW_DA_33_1066
(
    CUIIO,
    DATA_REG,
    USER_NAME,
    CAP_SR,
    CAP_SR_ER,
    CAP_1_1_R_1_C1,
    CAP_1_1_R_1_C2,
    CAP_1_1_R_1_C3,
    CAP_1_1_R_1_C4,
    CAP_1_1_R_1_C5,
    CAP_1_1_R_1_C6,
    CAP_1_1_R_1_C7,
    CAP_1_1_R_1_C8,
    CAP_1_1_R_2_C1,
    CAP_1_1_R_2_C2,
    CAP_1_1_R_2_C3,
    CAP_1_1_R_2_C4,
    CAP_1_1_R_2_C5,
    CAP_1_1_R_2_C6,
    CAP_1_1_R_2_C7,
    CAP_1_1_R_2_C8,
    CAP_1_1_R_3_C1,
    CAP_1_1_R_3_C2,
    CAP_1_1_R_3_C3,
    CAP_1_1_R_3_C4,
    CAP_1_1_R_3_C5,
    CAP_1_1_R_3_C6,
    CAP_1_1_R_3_C7,
    CAP_1_1_R_3_C8,
    CAP_1_1_R_4_C1,
    CAP_1_1_R_4_C2,
    CAP_1_1_R_4_C3,
    CAP_1_1_R_4_C4,
    CAP_1_1_R_4_C5,
    CAP_1_1_R_4_C6,
    CAP_1_1_R_4_C7,
    CAP_1_1_R_4_C8,
    
    CAP_1_1_R_5_C1,
    CAP_1_1_R_5_C2,
    CAP_1_1_R_5_C3,
    CAP_1_1_R_5_C4,
    CAP_1_1_R_5_C5,
    CAP_1_1_R_5_C6,
    CAP_1_1_R_5_C7,
    CAP_1_1_R_5_C8,
    
    CAP_1_1_R_6_C1,
    CAP_1_1_R_6_C2,
    CAP_1_1_R_6_C3,
    CAP_1_1_R_6_C4,
    CAP_1_1_R_6_C5,
    CAP_1_1_R_6_C6,
    CAP_1_1_R_6_C7,
    CAP_1_1_R_6_C8,
    
    CAP_1_1_1_R_7,
    CAP_1_1_1_R_8,
    CAP_1_1_1_R_9,
    CAP_1_1_1_R_10,
    CAP_1_1_1_R_11,
    CAP_1_1_1_R_12,
    CAP_1_1_1_R_13,
    CAP_1_1_1_R_14,
    CAP_1_1_1_R_15,
    CAP_1_1_1_R_16,
    CAP_1_1_1_R_17,
    CAP_1_1_1_R_18,
    CAP_1_1_1_R_19,
    CAP_1_1_1_R_20,
    CAP_1_1_1_R_21,
    CAP_1_2_R_1,
    CAP_1_2_R_2,
    CAP_1_2_R_3,
    CAP_1_2_R_4,
    CAP_1_2_R_5,
    CAP_1_2_R_6,
    CAP_1_2_R_7,
    CAP_1_2_R_8,
    CAP_1_2_R_9,
    CAP_1_2_R_10,
    CAP_1_2_R_11
)
AS
      SELECT D.CUIIO,
             MAX (D.DATA_REG)
                 DATA_REG,
             MAX (D.USER_NAME)
                 USER_NAME,
             NULLIF (
                 MAX (
                     CASE
                         WHEN     D.CAPITOL = 1201
                              AND D.RIND NOT IN ('ER')
                              AND NVAL (D.COL1) = 1
                         THEN
                             D.RIND
                         ELSE
                             NULL
                     END),
                 '0')
                 AS CAP_SR,
             NULLIF (
                 MAX (
                     CASE
                         WHEN D.CAPITOL = 1201 AND D.RIND IN ('ER')
                         THEN
                             NVAL (D.COL1)
                         ELSE
                             NULL
                     END),
                 0)
                 AS CAP_SR_ER,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('1') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_1_C8,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('2') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_2_C8,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('3') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_3_C8,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('4') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_4_C8,
            

 NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('5') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_5_C8,
                 
                 
                 
                 ------------------------------------------------------------------------
                 
                 
                 
                  NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL2
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL3
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL4
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL5
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL6
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL7
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 379 AND D.RIND IN ('6') THEN D.COL8
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_R_6_C8,
                 
                 
                 -----------------------------------------------------------------------------
                 
                 
                 
                 
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('7') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('8') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_8,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('9') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_9,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('10') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_10,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('11') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_11,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('12') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_12,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('13') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_13,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('14') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_14,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('15') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_15,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('16') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_16,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('17') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_17,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('18') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_18,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('19') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_19,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('20') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_20,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 380 AND D.RIND IN ('21') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_1_1_R_21,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('1') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_1,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('2') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_2,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('3') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_3,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('4') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_4,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('5') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_5,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('6') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_6,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('7') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_7,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('8') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_8,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('9') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_9,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('10') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_10,
             NULLIF (
                 SUM (
                     CASE
                         WHEN D.CAPITOL = 381 AND D.RIND IN ('11') THEN D.COL1
                         ELSE NULL
                     END),
                 0)
                 AS CAP_1_2_R_11
        FROM CIS2.VW_DATA_ALL D
       WHERE D.PERIOADA IN (1066) AND D.FORM IN (33)
    -- AND D.CUIIO = 40565505
    GROUP BY D.CUIIO
    ORDER BY D.CUIIO;
