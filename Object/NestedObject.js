const College = {
    Name: 'Cox Gov. College',
    Class: ['11','12'],
    events:['Science fair','bijoy fair','21 fed'],
    unique: {
        color:'blue',
        result:{
            gpa:5,
            marit: 'top'
        }
    }


}
console.log(College.unique.result.marit)
College.events[1] = '16 Dec';
console.log(College.events[1]);
delete College.Class;
console.log(College)