Sub InserareFilialaSiColorare()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    Dim primele2C As String
    Dim ultimele2A As String
    Dim primele4C As String
    Dim ultimele4A As String
    
    ' Selectam foaia activa
    Set ws = ActiveSheet
    
    ' Gasim ultimul rand din coloana A si ultima coloana cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 7 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value)) ' Convertim valoarea numerica din coloana A in sir de caractere si eliminam spatiile
        
        ' Ignoram celulele goale din coloana A
        If Len(cuiio) > 0 Then
            ultimele2A = Right(cuiio, 2) ' Ultimele 2 caractere din A
            ultimele4A = Right(cuiio, 4) ' Ultimele 4 caractere din A
            primele2C = Left(Trim(CStr(ws.Cells(i, 3).Value)), 2) ' Primele 2 caractere din C
            primele4C = Left(Trim(CStr(ws.Cells(i, 3).Value)), 4) ' Primele 4 caractere din C
            
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
                        
                        ' Inseram textul "FILIALA" si coloram celula din coloana H in galben
                        If ws.Cells(j, 1).Interior.Color = RGB(255, 255, 0) Then
                            ws.Cells(j, 8).Value = "FILIALA"
                            ws.Cells(j, 8).Interior.Color = RGB(255, 255, 0) ' Galben
                        End If
                        
                        ' Coloram primele 2 caractere din coloana C in rosu doar daca sunt egale cu ultimele 2 din A
                        If primele2C = ultimele2A Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                        
                        ' Coloram ultimele 2 caractere din coloana A in rosu doar daca sunt egale cu primele 2 din C
                        If ultimele2A = primele2C Then
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiio) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                        
                        ' Coloram primele 4 caractere din coloana C in rosu doar daca sunt egale cu ultimele 4 din A
                        If primele4C = ultimele4A Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=4).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                        
                        ' Coloram ultimele 4 caractere din coloana A in rosu doar daca sunt egale cu primele 4 din C
                        If ultimele4A = primele4C Then
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiio) - 3, Length:=4).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
            
            ' --- Noua logica ---
            ' Verificam daca lungimea este de 9 caractere sau 10 caractere sau daca ultimele 2/4 caractere din A sunt egale cu primele 2/4 din C
            If (Len(cuiio) = 9 Or Len(cuiio) = 10 Or ultimele2A = primele2C Or ultimele4A = primele4C) Then
                ' Adaugam in coloana H textul "FILIALA - cod cuiio - CUATM (valoarea din coloana C cu primele 2 caractere colorate in rosu)"
                ws.Cells(i, 8).Value = "FILIALA - " & cuiio & " - CUATM (" & ws.Cells(i, 3).Value & ")"
                
                ' Coloram celula din coloana H in galben
                ws.Cells(i, 8).Interior.Color = RGB(255, 255, 0)
                
                ' Coloram ultimele 2 caractere din coloana A in rosu doar daca sunt egale cu primele 2 din C
                If ultimele2A = primele2C Then
                    With ws.Cells(i, 8).Characters(Start:=Len("FILIALA - " & cuiio) - 1, Length:=2).Font
                        .Color = RGB(255, 0, 0) ' Rosu
                        .Bold = True
                    End With
                End If
                
                ' Coloram primele 2 caractere din coloana C in rosu doar daca sunt egale cu ultimele 2 din A
                If primele2C = ultimele2A Then
                    With ws.Cells(i, 8).Characters(Start:=Len("FILIALA - " & cuiio & " - CUATM (") + 1, Length:=2).Font
                        .Color = RGB(255, 0, 0) ' Rosu
                        .Bold = True
                    End With
                End If
            End If
        End If
    Next i
    
    MsgBox "Inserarea si colorarea textului cu noua logica a fost finalizata!", vbInformation
End Sub
