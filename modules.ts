/**
 * Created by woaitzy on 2015/5/18 0018.
 */
interface StringValidator {
    isAcceptable(s:string):boolean;
}
var letterRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;

class lettersOnlyValidator implements StringValidator{
    isAcceptable(s:string){
        return letterRegexp.test(s);
    }
}