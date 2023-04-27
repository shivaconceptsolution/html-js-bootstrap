class CheckMark
{
constructor()
{
  this.mark = 29
}
  checkMark()
  {
      if(this.mark>=28 && this.mark<33)
       {
         this.grace = 33-this.mark
         this.mark+=this.grace
         console.log('grace is ',this.grace) 
        }
     console.log("Total marks is ",this.mark)
  }
  }

var obj = new CheckMark()
obj.checkMark()
