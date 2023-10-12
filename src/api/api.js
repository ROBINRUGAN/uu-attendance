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
    const {
        courseName,
        semester,
        week,
        weekday,
        beginSection,
        endSection,
        pageSize,
        pageNo
    } = data;

    // 使用条件运算符来确保查询参数不是undefined
    const queryParams = [
        `courseName=${courseName}`,
        `semester=${semester}`,
        `week=${week}`,
        `weekday=${weekday}`,
        `beginSection=${beginSection}`,
        `endSection=${endSection}`,
        `pageSize=${pageSize}`,
        `pageNo=${pageNo}`,
    ].filter(param => param !== undefined).join('&');

    const url = `/courseAttendances/courseAttendanceList?${queryParams}`;

    return service.request({
        method: "get",
        url: url,
    });
}

export function ExportCourseSearch(data) {
    const {
        courseName,
        semester,
        week,
        weekday,
        beginSection,
        endSection
    } = data;

    // 使用条件运算符来确保查询参数不是undefined
    const queryParams = [
        `courseName=${courseName}`,
        `semester=${semester}`,
        `week=${week}`,
        `weekday=${weekday}`,
        `beginSection=${beginSection}`,
        `endSection=${endSection}`
    ].filter(param => param !== undefined).join('&');

    const url = `/courseAttendances/export/courseAttendanceList?${queryParams}`;

    return service.request({
        method: "get",
        url: url,
        responseType: 'blob'
    });
}

export function StudentSearch(data) {
    const {
        courseName,
        semester,
        studentNo,
        pageSize,
        pageNo
    } = data;

    // 使用条件运算符来确保查询参数不是 undefined
    const queryParams = [
        `courseName=${courseName}`,
        `semester=${semester}`,
        `studentNo=${studentNo}`,
        `pageSize=${pageSize}`,
        `pageNo=${pageNo}`
    ].filter(param => param !== undefined).join('&');

    const url = `/courseAttendances/studentAttendanceList?${queryParams}`;

    return service.request({
        method: "get",
        url: url,
    });
}

export function ExportStudentSearch(data) {
    const {
        courseName,
        semester,
        studentNo
    } = data;

    // 使用条件运算符来确保查询参数不是 undefined
    const queryParams = [
        `courseName=${courseName}`,
        `semester=${semester}`,
        `studentNo=${studentNo}`
    ].filter(param => param !== undefined).join('&');

    const url = `/courseAttendances/export/studentAttendanceList?${queryParams}`;

    return service.request({
        method: "get",
        url: url,
        responseType: 'blob'
    });
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