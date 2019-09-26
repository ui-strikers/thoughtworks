
fetch("https://student-management-api-1u3cd4j7s.now.sh/students").then(function (res) {
    return res.json();
}).than(function (res){
    studentData(res);
}).catch(function (res){
    console.warn(res);
});

function studentData(res) {
    document.querySelectorAll(section)[0].appendChild(createTextNode(res));
}