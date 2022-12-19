var obj = {
  data() {
    return {
      name: '',
      date: '',
      daysWorked: 0,
      salary: 0,
      employees: []
    }
  },
  computed: {
    totalWithoutTax() {
      return this.employees.reduce((acc, employee) => acc + employee.salary, 0)
    },
    totalWithTax() {
      return this.employees.reduce((acc, employee) => acc + employee.salary * 0.85, 0)
    }
  },
          methods: {
               addEmployee() {

      if (this.name && this.date && this.daysWorked && this.salary) {
        this.employees.push({
          name: this.name,
          date: this.date,
          daysWorked: this.daysWorked,
          salary: this.salary
        })
        this.name = ''
                    this.date = ''
                       this.daysWorked = 0
                            this.salary = 0
          } else {
        alert('Please fill in all fields')
      }
    },
    removeEmployee(index) {
      this.employees.splice(index, 1)
    }
  }
}





Vue.createApp(obj).mount('#app')