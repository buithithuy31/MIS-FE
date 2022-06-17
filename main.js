//Khai báo Biến
/**
 * var fullName='Bui Thi Thuy';
var age=21;
alert(fullName);
alert(age);
*/


//Loại Comment
/**
 * Comment 1 dòng (//)
 * comment nhiều dòng
 */

//Một số hàm Built -in

 // 1.alert
 // 2.console
 
        //console.log('day la 1 dong')

        // var fullName='Bui Thi Thuy';
        // console.log(fullName) //in ra giá trị
        // console.warn(fullName) //In ra dòng cảnh báo
        // console.error(fullName) //in ra dòng đỏ lỗi 

//3. confirm
        //confirm('Xac nhan ban du tuoi'); //Tạo ra hộp thoại xác nhận

//4. Prompt
    //prompt('Xac nhan ban du tuoi') //ô input

//5. Set timeout  // để thực thi chạy 1 đoạn code trong thời gian nhất định
    // setTimeout(function() {
    //     alert('Thong bao')
    // }, 1000)

//6. Set interval //cũng như set timeout nhưng nó thực thi liên tục nó không ngừng như set timeout
    // setInterval(function() {
    //     // alert('Thong bao') //hoặc 
    //     console.log('Day la log' + Math.random()) //cộng thêm 1 chuỗi
    // }, 1000)



//Toán Tử
//1. Toán tử số học - Arithmetic
/**
 *  **-->lũy thừa
 * ++ -->Tăng 1 giá trị số
 * -- --> Giảm 1 giá trị số
 * %  --> Chia lấy dư
 */

/**
 * a=6
 * ++a: +1 cho a, a=a+1 =>a=7 trả vè a sau khi được tính toán
 * a++: copy biến a copy, a copy=6 --> cộng 1 của a, a=a+1=>a=7 --> trả về a copy là a=6
 * 
 */
    // var a=1;
    // var b=2;
    // var c=a+b;
    // console.log(c); //alert(c);


    // var a=1+2;
    // console.log(a)
//2. Toán tử gán - Assignment -- dấu bằng là 1 trong những toán tử gán
   // var fullName='Bui Thi Thuy';

   /**
    Toán tử         Ví dụ           Tương đương
    =               x=y             x=y
    +=              x+=y            x=x+y
    -=              x-=y            x=x-y
    *=              x*=y            x=x*y
    /=              x/=y            x=x/y
    **=             x**=y           x=x**y

    */
 
//3. Toán tử so sánh - Comparison -- toán tử so sánh sẽ là 2 dấu bằng ==
 /**   
        ==       -->Bằng
        !=       -->Không bằng
        >       -->Lớn hơn
        <       -->Nhỏ hơn
        >=      -->Lớn hơn hoặc bằng
        <=      -->nhỏ hơn hoặc bằng

*/



    //     var a=1;
    //     var b=2;
    // //if (a==b)
    //     if (a<b) {
    //         alert('Dung');
    //     }


        // var a=1;
        // var b=2;
        // if(a==1){ //a==b
        //     console.log('Dieu kien dung');
        // } else{
        //     console.log('Dieu kien sai')
        // }


        // var a=1;
        // var b=2;
        // var result =a<b;
        // console.log('result', result)
        // if(a<b){
        //     console.log('A<B');
        // } else{
        //     console.log('A>B');
        // }

//4. Toán tử logic - Logical --- 
    /**
     * && -and  tất cả điều kiện phải đúng
     * || -or  1 trong tất cả điều kiện đúng
     * ! -not  đúng thành sai, sai thành đúng
      */    

    // var a=1;
        // var b=2;

        // if (a>0 && b>0) // (!(a>0)){
        //     alert('a&b lon hon 0')
        // } 



//5. toán tử chuỗi - String operator
    // var firstName ='Thuy';
    // var lastName ='Bui';
    // console.log(firstName + ' '+ lastName);
//hoặc
    // var name='thuy';
    // name=name+' Bui';
    // console.log(name);


//Boolean    // trả về true hoặc false
        // var isSuccess=true;
        // console.log(isSuccess);

        // var a=1;
        // var b=2;
        // var isSuccess=a>b;
        // console.log(isSuccess); 


// câu lệnh IF-ELSE
    //  var isSuccess=1>2;
    // if(isSuccess) {
    //     console.log('Dieu kien dung');
    // } else{
    //     console.log('Dieu kien sai');
    // }

//trừ những cái này sẽ cho ra True
/**
 0
 false
 '' ""
 undefined
 NaN
 null
 0n
 -0
 */

 //các kiểu dữ liệu
    // //Number type
    // var a=1;
    // var b=2;
    // var c=1.5;

    // //string type
    // var fullName ='Thuy Bui';

    // // Boolean type
    // var isSuccess=true;
    
    // //Undefined type
    // var age;

    // //Null
    // var isNull =null; //nothing

    // //Symbol
    // var id =Symbol('id');//unique
    // var id2=Symbol('id');//unique
    // console.log(id===id2); trả về true vì id id2 có cùng kiểu string như nhau
    

    // //function
    // var myFunction =function() {
    //     alert('Hi');
    // }
    // myFunction();

 //Object type
    // var myObject={
    //     name: 'THUY BUI',
    //     age: 18,
    //     address: 'QN',
    //     myFunction: function(){}
    // };
    // console.log('myObject', myObject);


    // var myArry=[
    //     'JavaScript',
    //     'PHP',
    //     'Ruby',
    // ];
    // console.log(myArry);


//CHUỖI
// 1. Tạo chuỗi
//var fullName=new String('Thuy Bui'); // object
//var fullName='Thuy Bui'; //string
//Kiểm tra data type
//console.log(typeof fullName)

//2. Một số case sử dụng backslash(\)
    // var fullName="Thuy Bui la\"sieunhan\"";
    // console.log(fullName)

//3. xem độ dài chuỗi
    // var fullName='Thuy Bui ';
    // console.log(fullName.length)

//4. Template string ES6
        // var firstName='thuy';
        // var lastName='Bui';
        // console.log('Toi la: '+firstName+' '+lastName);
        // //Hoặc 
        // console.log(`Toi la: ${firstName} ${lastName}`)


//Làm việc với chuỗi--javaScript string methods

//var myString='   Hoc JS tai TMA   ';
    //1.lenght: đo độ dài 1 chuỗi
        // console.log(myString.length)
    //2. Find index (tìm kiếm) không có nó sẽ trả về -1
        //console.log(myString.search('JS')) //indexOf
    //3. Cut string
        //console.log(myString.slice(4,6)) //0 là cắt tất cả // cắt -3, -1
    //4. Replace
        //console.log(myString.replace(/JS/, 'JavaScript'))
    //5. Covert to upper case--> chuyển tất cả thành chữ hoa
        //console.log(myString.toUpperCase())
    //6. Convert to lower case--> chuyển tất cả thành chữ thường
        //console.log(myString.toLowerCase())
    //7. Trim (loại bỏ khoảng trắng thừa)
        //console.log(myString.trim().length)
    //8. Split (cắt 1 cái chuỗi thành array)
        // var languages ='JavaScript, PHP, Ruby';
        // console.log(languages.split(',')) // tách tất cả thì dùng ('')
    //9. Get a charater by index -- lấy ra 1 kí tự
        // const myString2='Thuy Bui';
        // console.log(myString2.charAt(5))


//MẢNG
//1. Tạo mảng
    //cách tạo
    // var languages=[
    //     'javaScript',
    //     'php',
    //     'Ruby',
    //     null,
    //     undefined,
    //     function(){

    //     },
    //     {},
    //     123
    // ];
    // console.log(languages)

    //hoặc
    // var languages=new Array(
    //     'javaScript',
    //     'php',
    //     'Ruby',
    //     null,
    //     undefined,
    //     function(){

    //     },
    //     {},
    //     123
    // );


   // console.log(languages)
   //Kiểm tra array
  //  console.log(Array.isArray(languages))// có thể thay languages={}
    //console.log(Array.isArray(new Array(1,2)))

//2. truy xuất mảng
//đo độ dài
    // var languages=[
    //     'javaScript',
    //     'php',
    //     'Ruby',
    //     'Dart',
    // ];
    // console.log(languages.length)
// lấy phẩn tử
    //console.log(languages[2])



//LÀM VIỆC VỚI MẢNG
    // var languages=[
    //     'JavaScript',
    //     'PHP',
    //     'Ruby'
    // ];
//1. to String
   // console.log(languages.toString())
//2. Join
    //console.log(languages.join(', '))
//3. Pop --> xóa phần tử cuối mảng và trả lại phần tử bị xóa
   // console.log(languages.pop())// xóa element cuối mảng và trả về phần mảng đã xóa
//4.Push--> thêm phần tử cuối mảng
    //console.log(languages.push('Dart'))
        //console.log(languages)
//5. Shift --> xóa đi 1 phần tử đầu mảng và trả về phần tử ở đâu mảng
    //console.log(languages.shift())
//6. Unshift
    //console.log(languages.unshift('Dart'))
//7. Splicing
    //languages.splice(1,2) // xóa từ php đến ruby hoặc (1,0) không xóa cái nào cả, hoặc chèn (1,0, 'Dart') nó sẽ chèn vào trước php

//8. Concat //nối
    // var languages2=[
    //     'Dart',
    //     'Ruby'
    // ]
    //console.log(languages.concat(languages2))
//9. Slicing copy mảng 
    //console.log(languages.slice(1))

//HÀM
//Định nghĩa
    // hàm là một khối mã
    // Chỉ làm 1 việc cụ thể
// Loại hàm
    // Built-in
    // Tự định nghĩa
// Tính chất
    // Không thực thi khi định nghĩa
    // Sẽ thực hiện khi được gọi
    // Có thể nhận tham số
    // Có thể trả về 1 giá trị
//1. Tạo hàm
//tên hàm có thể a-z A-Z 0-9 _ $ không đặt số là kí tự đầu tiên
//     function showDialog() {
//        alert('Hi, xin chao cac ban')
//    }
//    showDialog(); //toán tử call để gọi hàm
// Tham số trong hàm
    // định nghĩa: tham số là 1 giá trị mà có thể truyền vào khi gọi 1 function, ở đây tham số sẽ làm một việc gì đó để tính toán hay xử lí dữ liệu
    // Kiểu dữ liệu: không giới hạn
    // tính private: ví dụ như console.log(message chỉ dùng được như ví dụ ở dưới. đưa ra ngoài sẽ báo lỗi)
    // 1 tham số là gọi 1 tham số như  writeLog('Test'); 
    
    // function writeLog(message) {
    //     console.log(message)
    // }
    // writeLog('Test message');
    


    // còn nhiều tham số sẽ cách nhau 1 dấu phẩy
    // function writeLog(message, message2) {
    //     console.log(message)
    //     console.log(message2)
    // }
    // writeLog('Test', 'test_2');


    //Arguments?
    // function writeLog() {
    //     console.log(arguments)
    // }
    // writeLog('Log1', 'Log2', 'Log3');

    //giới thiệu vòng for of
        //function writeLog() {
        //    for(var param of arguments){// định nghĩa 1 cái biến trong này; var param được hiểu là tham số truyền vào. đầu tiên chạy nó sẽ lấy arguments gán cho biến param
        //       console.log(param)
        //        }
        //    }
        //writeLog('Log1', 'Log2', 'Log3');

    //tạo log 1 log 2 log 3 cách nhau  1 dấu gạch ngang
        // function writeLog() {
        //     var myString='';
        //     for (var param of arguments) {
        //         myString += `${param} - `
        //     }
        //         console.log(myString)
        // }
        // writeLog('Log 1', 'Log 2', 'Log 3', 'Log 4');
    
    //Return trong hàm: return nghĩa là trả về giá trị của phép toán hoặc biến
    // var isConfirm = confirm('Message?');
    // console.log(isConfirm);

    // function cong(a, b) {
    //     return a+b;
    // }
    // var result = cong(2, 8);
    // console.log(result)

   //Một số điều cần biêt về  function
   //1. Khi function đặt trùng tên: thì định nghĩa function sau sẽ đè function trước
        // function showMessage() {
        //     console.log("Message 1")
        // }

        // function showMessage() {
        //     console.log("Message 2")
        // }

        // function showMessage() {
        //     console.log("Message 3")
        // }
        // showMessage();
   //2. khai báo biến trong hàm: có thể khai báo biến trong hàm
        // function showMessage() {
        //     var fullName='Thuy Bui'
            
        //     console.log(fullName);// đưa biến này ra ngoài hàm sẽ báo lỗi
        // }
        // showMessage();
   //3. Định nghĩa hàm trong hàm
        //     function showMessage() {
        //         function showMessage2(){
        //         console.log("Message 2")
        //     }
        //     showMessage2();// đem lệnh gọi này ra ngoài sẽ báo lỗi
        // }
        // showMessage();

    //các loại function
        //1.Declaration function
        // function showMessage(){

        // }
        //2.Expression function: sẽ được gán cho 1 biến
        // function showMessage(){

        // }
        // var showMessage2=function() {

        // }
        //3.Arrow function


// Toan tu 3 ngoi
        //var a = 60;
        // if (a < 18) {
        //     console.log("Too young");
        // } else {
        //     console.log("Old enough");
        // }

        // var result = (a < 18) ? "Too young" : "Old enough";
        // console.log(result);


//JS HTML DOM
    //document
       // document.write('Hello ')
    
    //Element : ID, class, tag, CSS selector, HTML collection
        // var headingNode= document.getElementById('heading');

        // console.log({
        // Element: headingNode
        // });




//Local storage 
    //Khả năng lưu trữ vô thời gian: có nghĩa là chỉ bị xóa bằng JavaScript, hoặc xóa bộ nhớ trình duyệt, xóa bằng localStorage API
    // Không gửi thông tin lên Server như Cookie nên bảo mật tốt hơn

    //để kiểm tra xem trình duyệt có hỗ trợ localStorage hay không ta dùng typeof:
            //    if(typeof(Storage) !=='undefined') {
            //        // Nếu có hỗ trợ
            //        // Thực hiện thao tác với Storage
            //        alert('Trình duyệt của bạn hỗ trợ Storage');

            //    } else {
            //       //  Nếu không hỗ trợ
            //        alert('Trình duyệt của bạn không hỗ trợ Storage');
            //    }

        // Khởi tạo localStorage
            // localStorage.setItem('key', 'value'); //key là tên biến, value là giá trị của biến
            // //hoặc 
            // localStorage.key ='value';
            // //hoặc
            // localStorage['key'] = 'value';
        // Để lấy giá tị localStorage và sử dụng, ta dùng getItem
            // localStorage.getItem('key');
            // //hoặc
            // localStorage.key;
        //để lấy số lượng localStorage đã có trong trình duyệt, sử dụng length:
            //localStorage.length();
        //để xóa 1 biến trong localStorage: removeItem(tên_key)
            // localStorage.removeItem(key);
            // //hoặc sử dụng clear
            // localStorage.clear();

//Session Storage
    //lưu trên client: cũng giống như localStorage thì sessionStorage cũng dùng để lưu trữ dữ liệu trên trình duyệt của khách truy cập(client)
    //Mất dữ liệu khi đóng tab: dữ liệu của sessionStorage sẽ mất khi đóng trình duyệt
    //Dữ liệu không được gửi lên server
    //Thông tin lưu trữ nhiều hơn cookie(ít nhất 5MB)

        //sessionStorage cũng có cú pháp và cách sử dụng các thuộc tính, phương thức như localStorage:
            // if(typeof(Storage) !== 'undefined') {
            //     //Khởi tạo sessionStorage
            //     sessionStorage.setItem('name', 'Ted Mosby');
            //     //get sessionStorage
            //     sessionStorage.getItem('name');
            //     //lấy ra số lượng session đã lưu trữ
            //     sessionStorage.length;
            //     //xóa 1 item localStorage
            //     sessionStorage.removeItem('name');
            //     //xóa tất cả item trong sesstionStorage
            //     sessionStorage.clear();
            // } else{
            //     alert('Trình duyệt của bạn không hỗ trợ!');
            // }

//COOKIE
    // Thông tin đượ gửi lên client: cookie sẽ được truyền từ server tới browser và được lưu trữ lên máy tính của bạn khi truy cập vào ứng dụng,
    //mỗi khi dùng tải ứng dụng, trình duyệt sẽ gửi cookie để thông báo cho ứng dụng về hoạt động trước đó của bạn. Vì vậy đừng bao giờ lưu trữ những thông tin
    // quan trọng, yêu cầu tính bảo mật cao vào cookkie vì nó hoàn toàn có thể bị sử đổi và đắp cắp, thậm chí có thể lợi dùng điều này để tấn công webstie của bạn.

    //Cookie chủ yếu là để đọc phái máy chủ( cũng có thể được đọc phía máy khách), localStorage và sessionStorage chỉ có thể được đọc ở phía máy khách
    // Có thời gian sống:thường có khoảng thời gian timeout nhất định do lập trình viên xác định trước.
    //Lưu trữ: cho phép lưu trữ tối đa 4kb và vài chục cookie cho một domain


    // Tạo cookie: javaScript
    //document.cookie='username=Ted Mosby';

    //có thể thêm ngày hết hạn cho cookie
    //document.cookie ='username=Ted Mosby; expires =Thu, 18 Dec 2022 8:00:00 UTC';
    
    //Đặt hẹn giờ sau bao lâu cookie sẽ hết hạn với max-age (tính bằng giây)
    //document.cookie ='username=Ted Mosby; max-age=9000';

    //đọc cookie
    //var x=document.cookie;
    //document.cookie sẽ trả lại tất cả cookie trong một chuỗi tring kiểu như: cookie1 = giá trị; cookie2 = giá trị; cookie3 = giá trị;

    //Hoặc để lấy giá trị của 1 cookie, có thể viết một hàm như sau:
    // function getCookie(cname) {    //tham số truyền vào là cname -- tên cookie muốn lấy giá trị
    //     var name = cname + '=';    // tạo một biến name và thêm vào '=' để tìm kiếm trong chuỗi document.cookie
    //     var decodedCookie = decodeURIComponent(document.cookie); //chia document.cookie dựa trên dấu ; thành một mảng nhiều phần tử và gán mảng đấy cho biến ca
    //     var ca = decodedCookie.split(';');
    //     for(var i = 0; i <ca.length; i++) {   // vòng lặp (i=0; i<ca.length; i++) để đọc mỗi giá trị c=ca[i]
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {   // nếu cookie được tìm thấy (c.indexOf(name)==0), trả về giá trị c.substring(name.length, c.length). Nếu ko được tìm thấy, trả về  ''
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return '';
    // }


    // var lang = getCookie ('language');
    // console.log(lang);

    //Thay đổi giá trị cookie: Trong javascript, bạn có thể thay đổi một cookie giống như cách mà bạn tạo ra cookie, tức là ghi đè giá trị mới lên cookie đã có:
    // document.cookie = "username=Barney Stinson; expires=Wed, 26 Dec 2018 8:00:00 UTC";
    // //Kiểm tra cookie: Để kiểm tra coookie, có thể xây dựng hàm như sau:
    // function checkCookie() {
    //     var username = getCookie('username');
    //     if (username != '') {
    //         alert('Welcome again ' + username);
    //     } else {
    //         username = prompt('Please enter your name: ',  '');
    //         if (username != '' && username != null) {
    //             setCookie('username', username, 365);
    //         }
    //     }
    // }
    

    // for(var j = 0; j < 2; j++){
    //     // Do something
    //   }
      
    //   console.log(j) 

    // let x = (10, 20, 30, 15);  // x = 15
    // console.log(x)

