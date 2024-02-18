def isFibonacci(n: int) -> bool:
    if(Fibonacci(n)):
        print(f"O numero {n} faz parte da sequência de Fibonacci!")
        return True
    else:
        print(f"O numero {n} não faz parte da sequência de Fibonacci!")


def Fibonacci(n: int, n1 = 0, n2 = 1) -> bool:
    if((n1 + n2) == n):
        return True
    elif((n1 + n2) > n):
        return False
    else:
        x = n1 + n2
        n1 = n2
        # retire o # abaixo se quiser ver a recursão sendo executada :)
        # print(f"{x}, {n1}")
        return Fibonacci(n, n1, x)

