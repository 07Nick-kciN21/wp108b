var dic = { name: 'Nick', age: 19 }

dic['email'] = 'maybuby0721@gmail.com'
dic.tel = '09-76564427'
dic.birthday = '7月21日';
//dict = {name, age, email,tel}
for (var key in dic) {
  console.log('key=', key, ' value=', dic[key])
}

console.log('age=', dic.age)
console.log('birthday=', dic['birthday'])