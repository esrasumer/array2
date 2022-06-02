// Arrays

let names = ['çınar', 'sena', 'ada', 'yiğit'];

let years = [2017, 1999, 2012, 2010];

let mix = ['sadık', 'turan', 1983, null, undefined, ['sinema', 'kitap']];


console.log(names.length);
console.log(names);
console.log(typeof names);
// console.log(mix);
//console.log(years);

/** 
  // get array item  *** yani index numarasına göre elemanı almak
console.log(names[0]);
console.log(names[3]);
console.log(years[2]);
console.log(mix[4]);
console.log(mix[5]);
console.log(years[0]);


// set array item *** yani değiştirme
names[0] = 'yılmaz';
names[1] = 'deniz';
years[3] = 2009;
mix[4] = '2005';

// add item 
// years.push(1986); 
// years.unshift(1995);

// remove item *** yani silme
// years.pop(); // son elemanı siler
// years.shift(); // ilk elemanı siler

// indexof  *** yani index numarasını bulmak
let index = names.indexOf('ada');
console.log(index);

// reverse  *** yani tersine çevirme

names.reverse();

// sort *** yani sıralama

years.sort();

// concat *** yani birleştirme

let val = years.concat(names);
console.log(val);*/

// splice  *** yani eleman ekleme veya silme

//names.splice(2, 1, 'seda'); // 2. elemandan sonraki ilk elemanı siler ve ikinci elemandan sonra seda yı ekler;

// filter  *** yani filtreleme

function over18(year) {
    let age = 2022 - year;
    return age >= 18;
}

//find

let val = years.find(over18);
console.log(val);

console.log(over18(2010));