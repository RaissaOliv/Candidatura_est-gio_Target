def Reverse(word: str) -> str:
    reversed = ""
    i = len(word)
    j = 0
    while i > j:
        reversed += word[i - 1]
        i -= 1
    return print(reversed);
        
Reverse("teste")