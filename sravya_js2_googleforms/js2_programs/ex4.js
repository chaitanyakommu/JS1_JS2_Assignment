// Use a for loop to ...
// 1. Log numbers from 1 to 100 that are divisible by 5

// 2. Use a nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.

for(i=1;i<=100;i++)
{
    if (i%5 === 0)
    {
        console.log(i);
    }
}
for(i=1;i<=3;i++)
{
    console.log('This is outer loop'+i);
    for(j=i;j<=3;j++) 
    {
       console.log('This is inner loop'+j);    
    }
}
