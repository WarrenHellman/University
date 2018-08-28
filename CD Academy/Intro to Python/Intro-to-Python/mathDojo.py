def add(list):
    i=0
    sum=0
    while i<len(list):
        sum=sum+list[i]
        i=i+1
    print sum

add([2,3,4,5])

def subtract(a,b):
    i=0
    j=0
    sumA=0
    sumB=0
    if isinstance(a,list)==True:
        while i<len(a):
            sumA=sumA+a[i]
            i=i+1
    else: 
        sumA=a
    if isinstance(b,list)==True:
        while j<len(b):
            sumB=sumB+b[j]
            j=j+1
    else:
        sumB=b
    print sumA-sumB
    