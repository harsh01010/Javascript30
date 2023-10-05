  // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const inventorsList = inventors.filter(function(inventor){
        return inventor.year >=1500 && inventor.year<1600;
    })
    console.table(inventorsList)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const names = inventors.map((inventor)=>{
        return `${inventor.first} ${inventor.last}`
    })
    console.table(names)
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const sorted = inventors.sort((a,b)=>{
        return a.year>b.year?1:-1
    })
    console.table(sorted)
    /*
    in sort function: 
    1(positive value) -> a>b
    -1(negative value) -> a<b
    0   -> euality
        */

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    let totalYearsLived = inventors.reduce((total,val)=>{
        return total + (val.passed-val.year)
    },0)
    console.log(totalYearsLived)
    /*
    reduce function in js expects the callback function to have two arguments in following order:
    1> total or accumulator: this is the value that accumulates as the reduce function iterates through the array, it starts with the  initial value passed the second argument in the reduce function;
    */

    // 5. Sort the inventors by years lived
    let sortedByLived = inventors.sort((a,b)=>{
        let lived1 = a.passed-a.year
        let lived2 = b.passed-b.year
        return lived1-lived2
    })
    console.table(sortedByLived)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Pari
    // let Category = document.querySelector('.mw-category')
    // let lst = Category.querySelectorAll(`a`)
    // let res = []
    // lst.forEach(x=>res.push(x.textContent))
    // res =  res.filter((x)=>x.includes('de'))

    


    // 7. sort Exercise
    let peopleNames = [
      'Mia',
      'Noah',
      'Olivia',
      'Peter',
      'Quinn',
      'Rachel',
      'Sam',
      'Tina',
      'Ulysses',
      'Vera',
      'William',
      'Xander',
      'Yvonne',
      'Zoe',
      'Michael',
      'Sophia',
      'Jacob',
      'Alice',
      'Bob',
      'Charlie',
      'David',
      'Eva',
      'Frank',
      'Grace',
      'Helen',
      'Ivy',
      'Jack',
      'Karen',
      'Liam',
    ];
    peopleNames = peopleNames.sort((a,b)=>{
      return a>b?1:-1
    })
    console.table(peopleNames)
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportation = data.reduce((accumulator,val)=>{
      if(!accumulator[val])
        accumulator[val] = 0;
      else
        accumulator[val]++;

      return accumulator;
    },{})
    console.table(transportation);
