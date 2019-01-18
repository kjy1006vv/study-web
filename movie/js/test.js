<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport = 다른 디바이스를 읽어와줌 -->
    <title>영화페이지</title>

</head>

<script>
    let people = {
        name : "cos",
        age:20,
        hobby:["축구","농구"]
    }
    console.log(people);

    let people_json = '{"name":"cos" , "age":20 , "hobby":["축구","농구"]}';
    console.log(people_json);


    //자바스크립트 오브젝트 - > JSON 문자열로 자동으로 바꿔줌
    let change_json = JSON.stringify(people);
    console.log(change_json);


    //JSON 문자열 -> 자바스크립트 오브젝트
    let change_object = JSON.parse(change_json);
    console.log(change_object);
    console.log(change_object.name);
</script>

</body>
</html>