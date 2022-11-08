import {newsPaperNameList} from "./newspaper.js";

newsPaperNameList.map((list,i)=>{
    let NewsNameDetails=`My News Paper Name Is ${list.newsPaperName}`
    console.log(NewsNameDetails);
})