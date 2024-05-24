#!/usr/bin/env node


let userNames: string[] = ['admin','zeeshan','qaiser','shayan','fazilat'];

if(userNames.length === 0){
    console.log ('we need to find some users!');
}else{
    userNames = [];
    console.log('All user Names have been removed. ' + userNames.length);
} 