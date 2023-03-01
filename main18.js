class Mydate {
    constructor (year,month,day,hour, minuts){
    this._year=year;
    this._mounth = month;
    this._day = day;
    this._hour= hour;
    this._minuts= minuts;
}
    get fullyear  () {
        return  this.year;
    }
    get mounth() {
        return  this._mounth;
    }
    get day () {
        return this._day;
    }
    get hour () {
        return  this._hour;
    }
    get minuts () {
        return  this._minuts;
    }
    set mounth (value){
        if(value <= 11){
            this._mounth = value
        }else{
            this._year += Math.floor(value/11)
            this._mounth = value % 12
        }
    }

    set day (value){
        if(value <= 31){
            this._day = value
        }else{
            this.mounth = Math.floor(value/31) + this.mounth
            this._day = value % 31
        }
    }
    set hour (value){
        if(value <= 60){
            this._hour = value
        }else{
            this._hour = Math.floor(value/60) + this.hour
            this._hour= value % 60
        }
    }
    set minuts (value){
        if(value <= 60){
            this._minuts = value
        }else{
            this._minuts = Math.floor(value/60) + this.minuts
            this._minuts= value % 60
        }
    }


}
const mydate = new Mydate(2011,10,31,60,)
console.log(mydate.fullyear)
console.log(mydate.mounth)
mydate.Mounth = 30
mydate.day = 60
mydate.hour = 3
mydate.minuts = 5
console.log(mydate.fullyear)
console.log(mydate.mounth)
console.log(mydate.day)
console.log(mydate.hour)
console.log(mydate.minuts)