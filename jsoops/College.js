class College
{
    static collegename='MANIT'
    studentname=undefined
    rno=undefined
    branch=undefined
     acceptStuInfo(studentname,rno,branch)
    {
          this.studentname=studentname
          this.rno=rno
          this.branch=branch
    }
    displayStudent()
    {
        console.log(`college name ${College.collegename}, name is ${this.studentname}, rno is ${this.rno}, branch is ${this.branch}`)
    }
}
const obj = new College()
obj.acceptStuInfo('Ravi',1001,'CS')
obj.displayStudent()

const obj1 = new College()
obj1.acceptStuInfo('Kavi',1002,'IT')
obj1.displayStudent()