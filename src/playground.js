/* eslint-disable */




// export default function() {
//   // console.log('Hello World!!!!!!')

//   // 2 VARIABLES
//   // var firstName = "Filip" // string
//   // var age = 28 // number
//   // var isMale = true // boolean
//   // var dontKnow = null // unknow value
//   // var a

//   // var person = {
//   //   name: 'Filip',
//   //   lastName: 'Jerga'
//   // }

//   // Create all types of variables of your choice
//   // Check their types with "typeof"
//   // 2 VARIABLES

//   // var person = {
//   //   name: 'Filip',
//   //   lastName: 'Jerga'
//   // }

//   // var person1 = {
//   //   name: 'John',
//   //   lastName: 'Snow'
//   // }

//   // function printUserInfo(user) {
//   //   debugger
//   //   console.log('Consoling log out person informations!')
//   //   console.log('Hello ' + user.name + ' ' + user.lastName)
//   // }

//   // printUserInfo(person)
//   // printUserInfo(person1)

//   // var hours = 23
//   // var seconds = hours * 60 * 60
//   // console.log(seconds)


//   function transformHoursToSeconds(hours) {
//     return hours * 60 * 60
//   }

//   // var result = transformHoursToSeconds(19)
//   // console.log(result)

//   function printSomething(something) {
//     console.log(something)
//   }

//   // 36000
//   printSomething(transformHoursToSeconds(10))
//   // Annonymous functon

//   // Hello world
//   // Hello Filip, Good job with coding!
//   printSomething((function() {
//     console.log('Hello world')
//     return 'Hello Filip, Good job with coding!'
//   }()))

//   // {a: 1, b: 2}
//   printSomething({a: 1, b: 2})


//   function countPersonBirthYear(personAge) {
//      var currentYear = 2019
//      var birthYear = currentYear - personAge
//      return birthYear
//   }

//   var resolvedYear = countPersonBirthYear(33)
//   console.log(resolvedYear)

// }


// TODO: Create function called "countPersonBirthYear"
// specify 1 param: personAge
// in function body resolve person year of birth from passed age
// return year of birth from function
// call function "countPersonBirthYear" and assign returned value to
// variable called "resolvedYear"
// console.log out resolvedYear



// export default function() {


//   var result = 7 + 1
//   var result2 = 7 / 1
//   var result3 = 7 % 2
//   var result4 = 7 - 1
//   var result5 = 7 / 0
//   var result6 = 7 * 0

//   var b = 9
//   var result7 = ++b
//   var a = 7
//   var result8 = --a
//   var result9 = "Filip" + "Jerga"
//   var result10 = "1" + 2
//   var result11 = 2 + "1"
//   var result12 = 3 + 3 + "1"
//   var result13 = 7 - "2"
//   var result14 = "8" / "4"
//   var result15 = 2 ** 3

//   debugger
//   result13 -= 2
//   result15 += 7
// }


// export default function() {
//   const a = "Filip"
//   // a = "Peter"

//   let b = 28

//   b = 14
//   function functionA() {
//     // "const" is like "var"
//     // it's like saying var greeting = "Hello from ..."
//     // There are some differences I will be talking about later in lecture
//     const greeting = "Hello from FunctionA"
//     console.log("Hello from FunctionA")

//     functionB('Ola')
//     console.log('Execution is almost finished')
//     const lastMessage = 'Bye Bye'
//     functionE()
//     console.log(lastMessage)
//   }

//   function functionB(greeting) {
//     const name = 'Filip'
//     console.log(greeting + " Filip")
//     functionC();
//     console.log('Done done done')
//   }

//   function functionC() {
//     console.log('Not Much to do :(')
//     const hmm = functionD(7 + 7)
//     throw Error()
//     console.log(hmm)
//   }

//   function functionD(sum) {
//     const times2 = sum * 2
//     console.log(times2)
//     return times2
//   }

//   function functionE() {
//     console.log('Annoying Here')
//   }

//   debugger
//   functionA()
// }



export default function() {

  const person = {
    firstName: 'Filip',
    lastName: 'Jerga',
    age: 28,
    printUserInfo() {
      console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`)
    },
    printSomething(callback) {
      callback()
    },
    helpers: {
      helperVar: "testin variable",
      helperFunc: function() {
        console.log(this.helperVar)
      }
    }
  }

  class Person {
    firstName = ''
    lastName = ''
    age

    helpers = {
      helperVar: "testin variable",
      helperFunc: function() {
        console.log(this.helperVar)
      }
    }

    // constructor(firstName, lastName, age = 0) {
    //   debugger
    //   this.firstName = firstName
    //   this.lastName = lastName
    //   this.age = age
    // }

    constructor(personData) {
      const { firstName, lastName, age = 100 } = personData

      debugger
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }

    printUserInfo() {
      console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`)
    }

    printSomething(callback) {
      callback()
    }

    persist(database) {
      database.save(() =>
        ({
          userName: `${this.firstName} ${this.lastName}`,
          age: this.age
        })
      )
    }
  }

  class Doctor extends Person {

    hospital = ''
    school = ''

    constructor({school, hospital, ...rest}) {
      debugger
      super(rest)
      this.hospital = hospital
      this.school = school
    }

    printUserInfo() {
      console.log('I AM CALLING printUserInfo FROM DOCTOR')
    }
  }

  class Database {
    items = []

    save(getDataCallback) {
      const data = getDataCallback()
      this.items.push(data)
    }
  }

  // Normal vs Arrow
  // function displayGreeting(greeting) {
  //   return `${greeting} Filip`
  // }

  // const displayGreeting2 = greeting => `${greeting} Filip`

  // console.log(displayGreeting('Hello'))
  // console.log(displayGreeting2('Hola'))

  const db = new Database()

  const doctor = new Doctor({
    firstName: 'Filip',
    lastName: 'Jerga',
    age: 50,
    hospital: 'Testing Hospital',
    school: 'Testing school'
  })

  doctor.printUserInfo()
  doctor.persist(db)

  // const person1 = new Person({firstName: 'Filip', lastName: 'Jerga'})
  // person1.printUserInfo()
  // const person2 = new Person({age: 34, firstName: 'Peter', lastName: 'Green'})
  // person2.printUserInfo()

  // person1.persist(db)
  // person2.persist(db)

  console.log(db.items)

}
