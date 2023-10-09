import {
    service
} from "@/utils/request";

export function Login(data) {
    return service.request({
        method: "post",
        url: `/user/login`,
        data
    })
}
export function Register(data) {
    return service.request({
        method: "post",
        url: `/user/email/register`,
        data
    })
}
export function GetCode(data) {
    return service.request({
        method: "get",
        url: `/user/email/verificationCode?email=${data.email}`
    })
}
export function Logout() {
    return service.request({
        method: "post",
        url: `/user/logout`,
    })
}
export function CourseList(data) {
    return service.request({
        method: "get",
        url: `/courseDetails/coursedetailList?semester=${data.semester}`,
    })
}

export function CourseSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/courseAttendanceList?courseName=${data.courseName}&` +
            `semester=${data.semester}&week=${data.week}&weekday=${data.weekday}&` +
            `beginSection=${data.beginSection}&endSection=${data.endSection}&pageSize=${data.pageSize}&pageNo=${data.pageNo}`,
    })
}
export function ExportCourseSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/export/courseAttendanceList?courseName=${data.courseName}&` +
            `semester=${data.semester}&week=${data.week}&weekday=${data.weekday}&` +
            `beginSection=${data.beginSection}&endSection=${data.endSection}`,
        responseType: 'blob'
    })
}
export function StudentSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/studentAttendanceList?courseName=${data.courseName}&` +
            `semester=${data.semester}&studentNo=${data.studentNo}&pageSize=${data.pageSize}&pageNo=${data.pageNo}`,
    })
}
export function ExportStudentSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/export/studentAttendanceList?courseName=${data.courseName}&` +
            `semester=${data.semester}&studentNo=${data.studentNo}`,
        responseType: 'blob'
    })
}
export function AttendanceAppeal(data) {
    return service.request({
        method: "get",
        url: `/attendanceAppeals/teaAttendanceAppealSummary?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
    })
}
export function AttendanceDetail(data) {
    return service.request({
        method: "get",
        url: `/attendanceAppeals/${data.id}/attendanceAppealDetail`,
    })
}
export function AttendanceCheck(data) {
    return service.request({
        method: "put",
        url: `/attendanceAppeals/${data.id}?status=${data.status}`,
    })
}
export function LeaveAppeal(data) {
    return service.request({
        method: "get",
        url: `/leaves/teaLeaveSummary?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
    })
}
export function LeaveDetail(data) {
    return service.request({
        method: "get",
        url: `/leaves/${data.id}/leaveDetail`,
    })
}
export function LeaveCheck(data) {
    return service.request({
        method: "put",
        url: `/leaves/${data.id}?status=${data.status}`,
    })
}
export function EmpowerList(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/student?semester=${data.semester}&courseName=${data.courseName}`,
    })
}
export function Assign(data) {  
    return service.request({
        method: "post",
        url: `/supervisiontasks`,
        data
    })
}
export function Dismiss(data) {
    return service.request({
        method: "delete",
        url: `/supervisiontasks`,
        data
    })
}