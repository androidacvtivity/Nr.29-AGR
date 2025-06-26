Sub InserareFilialaSiColorare()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long, col As Long
    Dim cuiio As String
    Dim cuiioTrimmed As String
    Dim primele2C As String
    Dim ultimele2A As String

    ' Selectam foaia activa
    Set ws = ActiveSheet

    ' Se aplica logica doar pana la randul 1979
    lastRow = 1979
    lastCol = 13 ' Coloanele A-M

    ' Dicționare pentru analiza finală
    Dim cuiioMamaDict As Object, filialeCuMamaDict As Object, filialeComparatie2Caractere As Object
    Set cuiioMamaDict = CreateObject("Scripting.Dictionary")
    Set filialeCuMamaDict = CreateObject("Scripting.Dictionary")
    Set filialeComparatie2Caractere = CreateObject("Scripting.Dictionary")

    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value))

        If Len(cuiio) > 0 Then
            ultimele2A = Right(cuiio, 2)
            primele2C = Left(Trim(CStr(ws.Cells(i, 5).Value)), 2)

            ' Logica existenta: cuiio mamă și filiale directe
            For j = 1 To lastRow
                If i <> j Then
                    If InStr(1, Trim(CStr(ws.Cells(j, 1).Value)), cuiio, vbTextCompare) > 0 Then
                        For col = 1 To lastCol
                            ws.Cells(i, col).Interior.Color = RGB(0, 255, 0) ' Verde
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col

                        cuiioMamaDict(cuiio) = True
                        filialeCuMamaDict(ws.Cells(j, 1).Value) = True

                        cuiioTrimmed = Trim(CStr(ws.Cells(j, 1).Value))
                        ws.Cells(j, 14).Value = "FILIALA - " & cuiioTrimmed & " - " & Trim(CStr(ws.Cells(j, 5).Value))
                        ws.Cells(j, 14).Interior.Color = RGB(255, 255, 0)

                        If Left(Trim(CStr(ws.Cells(j, 5).Value)), 2) = Right(cuiioTrimmed, 2) Then
                            With ws.Cells(j, 5).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0)
                                .Bold = True
                            End With
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0)
                                .Bold = True
                            End With
                            With ws.Cells(j, 14).Characters(Start:=Len("FILIALA - " & cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0)
                                .Bold = True
                            End With
                            With ws.Cells(j, 14).Characters(Start:=Len("FILIALA - " & cuiioTrimmed & " - ") + 1, Length:=2).Font
                                .Color = RGB(255, 0, 0)
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j

            ' Noua logica (compară ultimele 2 A cu primele 2 C)
            If (Len(cuiio) >= 8 And Len(cuiio) <= 10) And ultimele2A = primele2C Then
                For col = 1 To lastCol
                    ws.Cells(i, col).Interior.Color = RGB(255, 255, 0)
                Next col

                filialeComparatie2Caractere(cuiio) = True

                ws.Cells(i, 14).Value = "FILIALA - " & cuiio & " - " & Trim(CStr(ws.Cells(i, 5).Value))

                With ws.Cells(i, 1).Characters(Start:=Len(cuiio) - 1, Length:=2).Font
                    .Color = RGB(255, 0, 0)
                    .Bold = True
                End With
                With ws.Cells(i, 5).Characters(Start:=1, Length:=2).Font
                    .Color = RGB(255, 0, 0)
                    .Bold = True
                End With
                With ws.Cells(i, 14).Characters(Start:=Len("FILIALA - " & cuiio) - 1, Length:=2).Font
                    .Color = RGB(255, 0, 0)
                    .Bold = True
                End With
                With ws.Cells(i, 14).Characters(Start:=Len("FILIALA - " & cuiio & " - ") + 1, Length:=2).Font
                    .Color = RGB(255, 0, 0)
                    .Bold = True
                End With
            End If
        End If
    Next i

    ' === ANALIZĂ FINALĂ ===
    Dim nCuiioMama As Long, mFilialeCuMama As Long, bFilialeFaraMama As Long
    Dim f As Variant
    bFilialeFaraMama = 0

    For Each f In filialeComparatie2Caractere.Keys
        If Not filialeCuMamaDict.exists(f) Then
            bFilialeFaraMama = bFilialeFaraMama + 1
        End If
    Next

    nCuiioMama = cuiioMamaDict.Count
    mFilialeCuMama = filialeCuMamaDict.Count

    ws.Rows(1).Insert
    ws.Cells(1, 1).Value = "REZUMAT: " & nCuiioMama & " CUIIO cu filiale (verzi), " & _
        mFilialeCuMama & " filiale cu mamă, " & bFilialeFaraMama & " filiale fără mamă"

    MsgBox "Executat cu succes. REZUMAT adăugat!", vbInformation
End Sub
