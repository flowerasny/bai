names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        let result = new Array()

        for(let i = 0; i < this.names.length; i++){        
            if (this.names[i].charAt(0) == letter){
                result.push(this.names[i])
            }
        }

        return new Students(result)
    }

    sort() {
        return new Students(this.names.sort())
    }

    get() {
        return new Students(this.names)
    }

    getFirst(n) {
        let result = new Array()

        for(let i = 0; i < n; i++){        
            result.push(this.names[i])
        }

        return new Students(result)
    }
}
console.log("-----Task 9-----")
students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



