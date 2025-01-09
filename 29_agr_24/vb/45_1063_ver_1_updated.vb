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
    lastCol = 7 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value)) ' Convertim valoarea numerica din coloana A in sir de caractere si eliminam spatiile
        
        ' Ignoram celulele goale din coloana A
        If Len(cuiio) > 0 Then
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
                        
                        ' Coloram primele 2 caractere din coloana C in rosu (daca lungimea este >= 2)
                        If Len(ws.Cells(j, 3).Value) >= 2 Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                        
                        ' Coloram ultimele 2 caractere din coloana A in rosu (daca lungimea este >= 2)
                        cuiioTrimmed = Trim(CStr(ws.Cells(j, 1).Value)) ' Eliminam spatiile si convertim la text
                        If Len(cuiioTrimmed) >= 2 Then
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Rosu
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
            
            ' --- Noua logica ---
            ' Verificam daca lungimea este de 9 caractere sau 10 caractere ultimele 2 caractere din A sunt egale cu primele 2 din C
            ' si nu fac parte din logica string - substring - adaugam in coloana H textul - FILIALA si codul din colona A cu ultimile 2 caractere colorate in rosu
            ' separam prin 'FILIALA - cod cuiio - CUATM (valoarea din coloana C cu primele 2 caractere colorate in rosu)' si tot randul sa fie colorat in galben
            If (Len(cuiio) = 9 Or Len(cuiio) = 10) Then
                ultimele2A = Right(cuiio, 2) ' Ultimele 2 caractere din A
                primele2C = Left(Trim(CStr(ws.Cells(i, 3).Value)), 2) ' Primele 2 caractere din C
                
                ' Verificam daca ultimele 2 caractere din A sunt egale cu primele 2 din C
                ' si daca aceasta combinatie nu face parte din logica string - substring
                If ultimele2A = primele2C Then
                    ' Adaugam in coloana H textul "FILIALA - cod cuiio - CUATM (valoarea din coloana C cu primele 2 caractere colorate in rosu)"
                    ws.Cells(i, 8).Value = "FILIALA - " & cuiio & " - CUATM (" & ws.Cells(i, 3).Value & ")"
                    
                    ' Coloram celula din coloana H in galben
                    ws.Cells(i, 8).Interior.Color = RGB(255, 255, 0)
                    
                    ' Coloram ultimele 2 caractere din coloana A in rosu (in textul inserat)
                    With ws.Cells(i, 8).Characters(Start:=Len("FILIALA - " & cuiio) - 1, Length:=2).Font
                        .Color = RGB(255, 0, 0) ' Rosu
                        .Bold = True
                    End With
                    
                    ' Coloram primele 2 caractere din coloana C in rosu (in textul inserat)
                    With ws.Cells(i, 8).Characters(Start:=Len("FILIALA - " & cuiio & " - CUATM (") + 1, Length:=2).Font
                        .Color = RGB(255, 0, 0) ' Rosu
                        .Bold = True
                    End With
                    
                    ' Coloram intregul rand in galben
                    For col = 1 To lastCol
                        ws.Cells(i, col).Interior.Color = RGB(255, 255, 0)
                    Next col
                End If
            End If
        End If
    Next i
    
    MsgBox "Inserarea si colorarea textului cu noua logica a fost finalizata!", vbInformation
End Sub
