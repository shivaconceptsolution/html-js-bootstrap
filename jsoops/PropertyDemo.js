class PropertyDemo
{
    constructor()
    {
        var name;
        var branch;
    }
    getName()
    {
        return this.name
    }
    setName(name)
    {
        this.name=name
    }
    getBranch()
    {
        return this.branch;
    }
    setBranch(branch)
    {
        this.branch=branch;
    }
}
var obj = new PropertyDemo()
obj.setName("Jay Kumar")
obj.setBranch("CS")
console.log(obj.getName())
console.log(obj.getBranch())