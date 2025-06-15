Sub InserareFilialaSiColorare()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    Dim cuiioTrimmed As String
    Dim primele2C As String
    Dim ultimele2A As String
    
    ' Selectam foaia activa
    Set ws = ActiveSheet
    
    ' Gasim ultimul rand din coloana A si ultima coloana cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 13 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value)) ' Convertim valoarea numerica din coloana A in sir de caractere si eliminam spatiile
        
        ' Ignoram celulele goale din coloana A
        If Len(cuiio) > 0 Then
            ' Ultimele 2 caractere din A si primele 2 caractere din C
            ultimele2A = Right(cuiio, 2)
            primele2C = Left(Trim(CStr(ws.Cells(i, 5).Value)), 2)
            
            ' --- Logica existenta ---
            For j = 1 To lastRow
                If i <> j Then
                    If InStr(1, ws.Cells(j, 1).Value, cuiio, vbTextCompare) > 0 Then
                        ' Coloram randul care contine substringul in verde
                        For col = 1 To lastCol
                            ws.Cells(i, col).Interior.Color = RGB(0, 255, 0) ' Verde
                        Next col
                        
                        ' Coloram randul care contine stringul in galben
                        For col = 1 To lastCol
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col
                        
                        ' Inseram textul "FILIALA - cod CUIIO - cod CUATM"
                        cuiioTrimmed = Trim(CStr(ws.Cells(j, 1).Value)) ' Codul CUIIO
                        ws.Cells(j, 14).Value = "FILIALA - " & cuiioTrimmed & " - " & ws.Cells(j, 5).Value
                        ws.Cells(j, 14).Interior.Color = RGB(255, 255, 0) ' Galben
                        
                        ' Daca primele 2 caractere din C sunt egale cu ultimele 2 caractere din A, coloram in rosu
                        If Left(Trim(CStr(ws.Cells(j, 5).Value)), 2) = Right(cuiioTrimmed, 2) Then
                            ' Coloram primele 2 caractere din coloana C in rosu
                            With ws.Cells(j, 5).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                            
                            ' Coloram ultimele 2 caractere din coloana A in rosu
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                            
                            ' Coloram caracterele relevante in coloana H
                            Dim hText As String
                            hText = "FILIALA - " & cuiioTrimmed & " - " & ws.Cells(j, 5).Value
                            ws.Cells(j, 14).Value = hText
                            ' Coloram ultimele 2 caractere din codul CUIIO in rosu
                            With ws.Cells(j, 14).Characters(Start:=Len("FILIALA - " & cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                            ' Coloram primele 2 caractere din codul CUATM in rosu
                            With ws.Cells(j, 14).Characters(Start:=Len("FILIALA - " & cuiioTrimmed & " - ") + 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
            
            ' --- Noua logica ---
            If (Len(cuiio) = 8 Or Len(cuiio) = 9 Or Len(cuiio) = 10) And ultimele2A = primele2C Then
                ' Inseram textul "FILIALA - cod CUIIO - cod CUATM" in coloana H
                ws.Cells(i, 14).Value = "FILIALA - " & cuiio & " - " & ws.Cells(i, 5).Value


                ws.Cells(i, 13).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 12).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 11).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 10).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 9).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 8).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 7).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 6).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 5).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 4).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 3).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 2).Interior.Color = RGB(255, 255, 0) ' Galben
                ws.Cells(i, 1).Interior.Color = RGB(255, 255, 0) ' Galben
                
                ' Coloram ultimele 2 caractere din coloana A in rosu
                With ws.Cells(i, 1).Characters(Start:=Len(cuiio) - 1, Length:=2).Font
                    .Color = RGB(255, 0, 0) ' Rosu
                    .Bold = True
                End With
                
                ' Coloram primele 2 caractere din coloana C in rosu
                With ws.Cells(i, 5).Characters(Start:=1, Length:=2).Font
                    .Color = RGB(255, 0, 0) ' Rosu
                    .Bold = True
                End With
                
                ' Coloram caracterele relevante in coloana H
                With ws.Cells(i, 14).Characters(Start:=Len("FILIALA - " & cuiio) - 1, Length:=2).Font
                    .Color = RGB(255, 0, 0) ' Rosu
                    .Bold = True
                End With
                With ws.Cells(i, 14).Characters(Start:=Len("FILIALA - " & cuiio & " - ") + 1, Length:=2).Font
                    .Color = RGB(255, 0, 0) ' Rosu
                    .Bold = True
                End With
            End If
        End If
    Next i
    
    MsgBox "Inserarea si colorarea textului cu noua logica a fost finalizata!", vbInformation
End Sub




