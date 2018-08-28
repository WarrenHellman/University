#python functions and loops begin with a colon, end when the indentation lines back up

#odd or even. prints whether a number is odd or even

def oddEven(start,finish):
    while start<=finish:
        if start%2==0:
            print "Number is",start,". This is an even number."
        else:
            print "Number is", start,". This is an odd number."
        start = start +1

oddEven(1,200)

#Coding Academy Multiples challenge: multiplies list values by 5

a = [2,4,10,16]

def multiply(list):
    count = 0
    while count<len(list):
        list[count]= list[count]*5
        count=count+1
    print list

multiply(a)

#Code Academy Dictionary Printer- create a function that prints keys and values together
def printer(list):
    for keys in myDictionary:
        print '"'+keys+":"+str(myDictionary[keys])+'"'

printer(myDictionary)


#Code AcademyCoin Toss (optional). Can also make into a function with attempt parameters using a while statement

print "Starting the program..."
#keeps track of heads and tails
hCount=0
tCount=0
#number of attempts
for j in range (1,201): 
    import random
    #randomly generates a value, 0 or 1, that has been mapped to heads and tails below
    result = random.randint(0,1)
    if result ==0:
        outcome = "head"
        hCount= hCount+1
    else:
        outcome = "tail"
        tCount=tCount+1
    print "Attempt #"+str(j)+": Throwing a coin... It's a "+outcome+"! ... Got "+str(hCount)+"heads(s) so far and "+str(tCount)+" tail(s) so far"
print "Ending the program, thank you!"  

#Math Dojo, create a add function and a subtract function

# from mathDojo import add,subtract

# def add(list):
#     i=0
#     sum=0
#     while i<len(list):
#         sum=sum+list[i]
#         i=i+1
#     print sum

# add([2,3,4,5])

# def subtract(a,b):
#     i=0
#     j=0
#     sumA=0
#     sumB=0
#     if isinstance(a,list)==True:
#         while i<len(a):
#             sumA=sumA+a[i]
#             i=i+1
#     else: 
#         sumA=a
#     if isinstance(b,list)==True:
#         while j<len(b):
#             sumB=sumB+b[j]
#             j=j+1
#     else:
#         sumB=b
#     print sumA-sumB

# mathDojo.add(2,5)
# mathDojo.subtract([2,5],5)


#Turtle 

# import turtle


# #Beginner Square
# DIST = 100
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.done()


# #beginner pentagon
# DIST = 100
# turtle.forward(DIST)
# turtle.right(72)
# turtle.forward(DIST)
# turtle.right(72)
# turtle.forward(DIST)
# turtle.right(72)
# turtle.forward(DIST)
# turtle.right(72)
# turtle.forward(DIST)
# turtle.right(72)
# turtle.done()

# #intermediate star pattern
# DIST = 100
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.forward(DIST)
# turtle.right(144)
# turtle.done()


# #advanced shape

# turtle.left(108)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.right(35)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.left(72)
# turtle.forward(100)
# turtle.done()


#Multiples- Print all odd numbers from 1-1000

for i in range(1,1000,2):
    print i

#prints all multiples of 5 from 5-1,000,000

for i in range(5,1000001,5):
    print i

#or
i=5
while i<1000001:
    print i
    i=i+5 

#Coding academy letter by letter: print every single letter in a string using a for loop

string = "Coding is interesting"

#if you know the length of the string
for i in range (0,21):
    print string[i]
    

#if you don't the length of the string
j=0

while j<len(string):
  print string[j]
  j=j+1

#print every other character
j=0

while j<len(string):
  print string[j]
  j=j+2

#if you want to skip spaces

j=0

while j<len(string):
  if string[j]==" ":
      j=j+1
  else:
    print string[j]
    j=j+1

#Coding Academy Working with Lists- create a function that adds all values in a list without Sum

sumList= [2,3,6,8,22,18]

def summers(list):
    i=0
    summer=0
    while i<len(list):
        summer=summer+list[i]
        i=i+1
    print summer

summers(sumList)

#print averag of a list

def avgs(list):
    i=0
    avg=0
    while i<len(list):
        avg = avg+list[i]
        i=i+1
    print (avg/len(list))

avgs(sumList)

#nest loops: prints values of nested arrays

a = [ [1, 2, 3, 4, 5, 6, 7, 8, 9], [31, 12, 50, 42, 5], [47, 7, 4, 2, 31, 40, 49]]

def nestPrint(list):
    i=0
    while i<len(list):
        j=0
        while j<len(list[i]):
            print list[i][j]
            j=j+1
        i=i+1 

nestPrint(a)

#Coding Academy Working with Dictionaries Assignment: create a dictionary and print hashes as a statement

autoDictionary= {
    "name":"Warren",
    "age": 33,
    "country of birth":"USA",
    "favorite language":"Javascript"
}

for key in autoDictionary:
    print "My "+key+" is "+str(autoDictionary[key])

for key in autoDictionary:
    print autoDictionary[key]

#Coding Academy Groups and Names

#Part 1, concatenate first name and last name of students

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def dictConcat(list):
    for key in list:
        print key["first_name"], key["last_name"] 

dictConcat(students)
#for loop

myList = ["Warren", "John", "Joe", "Sandy", "Erin"]

for i in range(0,5): #in this format, it will automatically increment by 1 unless you pass in a third parameter which does the function. The loop stops before the final number (like <, not at<=)
    print myList[i]

#is the same as

for x in range (0, len(myList)):
    print myList[x]

#creating a dictionary

myDictionary = {
    "name": "Warren", 
    "location":"Seattle", 
    "hobbies":["climbing", "biking", "beer"]
    }

print [myDictionary]
