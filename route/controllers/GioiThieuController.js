window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là giới thiệu";
    console.log($routeParams);
    let id = $routeParams.id;
    console.log(id);

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Đặng Vũ Lưu",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "luudv3",
            namsinh: 2005,
            chuyennganh: "CNTT"
        }
    ];

    $scope.createStudent = function () {
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.couse
        }
        
        console.log(newStudent);
        $scope.students.push(newStudent);
    }
}