let rock=1;
let paper=2;
let scissors=3;
let r=Math.ceil(3*Math.random());
console.log(r);
let ans=prompt("enter your choice(1=rock,2=paper,3=scissors):");
console.log(ans);
 if(ans==1 && r==2)
    console.log("you lost");
else if(ans==2 && r==3)
    console.log("you lost");
else if(ans==3 && r==1)
    console.log("you lost");
else if(ans==r)
    console.log("tie");
else
console.log("Congratulations you won!!!");

    

