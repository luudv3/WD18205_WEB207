// Khởi tạo module
// Set angular cho vùng myNYC
let myApp = angular.module("myNYC", []);
// 2 tham số (tên vùng ng-app, thành phần phụ thuộc)

// Khởi tạo controller
myApp.controller("demoController", myFunction); //2 tham số: tên controller, hàm
function myFunction($scope) {
    // tham số $scope luôn luôn phải có để render dữ liệu ra view

    // Khai báo biến
    $scope.xinchao = "Hello cưng";

    console.log($scope.xinchao);
}

// Khởi tạo controller
myApp.controller('infoController', function ($scope) {
    $scope.name = "Đặng Vũ Lưu";
    $scope.year = 2005;
    $scope.chuyennganh = "CNTT";

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Đặng Vũ Lưu",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Luudv3",
            namsinh: 2005,
            chuyennganh: "CNTT"
        }
    ];
});