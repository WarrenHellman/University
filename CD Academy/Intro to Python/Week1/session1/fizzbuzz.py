x=1
while x<501:
  if x%15==0:
    print "fizzbuzz"
  elif x%3==0:
    print "fizz"
  elif x%5==0:
    print "buzz"
  print x
  x=x+1