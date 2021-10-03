
class Stone:
    shape = 'square'
    surface = 'rough'
    color = 'brown'

# Object of the class
my_obj = Stone()

my_obj.colour = 'red'

print(my_obj.colour)

#constrctor
class Person:
    colour = 'white'

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def display(self):
        print(self.first_name)

p1 = Person('Baning', 'Adjei')

p1.display()

# Inheritance
class Person:
    colour = 'white'

    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def fullname(self):
        return self.first_name + " " + self.last_name

class Student(Person):
    def __init__(self, first_name, last_name, age, school):
        super().__init__(first_name, last_name, age)

        self.school = school

    def display_school(self):
        print(self.school)

student1 = Student('Baning', 'Adjei', 22, 'KNUST')

student1.display_school()