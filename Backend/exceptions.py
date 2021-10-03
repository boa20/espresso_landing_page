import operations as ops


try:
    # possible failure
    add = ops.addition([1, 2, 3, 4, 5]) 
    print(add)
except TypeError:
    # presentable message
    print("Please ensure that all values are numbers")