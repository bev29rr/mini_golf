import { format } from 'node:path'
import readline from 'node:readline'
import { promises as fs } from 'fs';
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
var l=false
var n=14
var o=2

class A{ 
constructor(){
this.c=[1,0]
this.d=Array(o+2).fill("=".repeat(n)).fill("="+" ".repeat(n-2)+"=",1,o+1)
this.m=[n-4,1]
this.b(this.m,"O",true)}
a(){
if(!l){
let j=this.b(this.c, "0")
j.forEach(line=>console.log(line))
}else{
console.log('YOU WON '.repeat(2))
}}
b(f, h, k=false){
let j=k ? this.d : this.d.map(row=>row)
j[f[1]+1]=j[f[1]+1].substr(0,f[0]+1)+h+j[f[1]+1].substr(f[0]+2)
return j}
h(){
let f=this.c
f[0]= Math.floor(Math.random()*(n-4+1))
f[1]= Math.floor(Math.random()*(o))
this.c=f
if(f[0]==this.m[0]&&f[1]==this.m[1]){l=true}}}

let e=new A
let g=setInterval(()=>{
console.clear()
e.a()},250)
process.stdin.on('keypress',(str, key)=>{if (key.name==='space') {
e.h()}else if(key.ctrl&&key.name=="c"){
process.exit()}})