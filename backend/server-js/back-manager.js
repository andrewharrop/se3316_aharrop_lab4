const timetableData = require('../json/Lab3-timetable-data.json');
let schedules = [];
module.exports = {
    getTimetableData: function () {
        return timetableData;
    },
    scdData: function () {
        let indexArrSCDDATA = [];
        for (let i = 0; i < timetableData.length; i++) {
            let tmpObjSCDDATA = { 'subject': timetableData[i]['subject'], 'className': timetableData[i]['className'] };
            indexArrSCDDATA.push(tmpObjSCDDATA);
        };
        return indexArrSCDDATA;
    },
    courseCodes: function (subjectCode) {
        let indexArrCourseCode = [];
        for (let i = 0; i < timetableData.length; i++) {
            if (timetableData[i]['subject'] == subjectCode) {
                indexArrCourseCode.push(timetableData[i]['catalog_nbr']);
            };
        };
        if (indexArrCourseCode.length == 0) {
            return ['Error: No courses exist for given subject code'];
        };
        return indexArrCourseCode;
    },
    timetableEntry: function (subjectCode, courseCode, courseComponent) {
        subjectCode = encodeURI(subjectCode.toUpperCase());
        courseCode = encodeURI(courseCode.toString());
        let indexArrTimetableEntry = [];
        if (courseComponent.length == 0) {
            for (let i = 0; i < timetableData.length; i++) {
                if (timetableData[i]['subject'] == subjectCode && timetableData[i]['catalog_nbr'] == courseCode) {
                    indexArrTimetableEntry.push(timetableData[i]);
                };
            };
        } else {
            for (let i = 0; i < timetableData.length; i++) {
                if (timetableData[i]['subject'] == subjectCode && timetableData[i]['catalog_nbr'] == courseCode && timetableData[i]['className'] == decodeURIComponent(courseComponent)) {
                    indexArrTimetableEntry.push(timetableData[i]);
                };
            };
        };
        if (indexArrTimetableEntry.length == 0) return false;
        return (indexArrTimetableEntry);
    },
    createSchedule: function (scheduleName) {
        let exists2 = false;
        scn2 = scheduleName;
        if (scn2 != scheduleName) { return false };
        if (schedules.length > 0) {
            for (let i = 0; i < schedules.length; i++) {
                if (schedules[i]['name'] == scn2) {
                    exists2 = true;
                };
            };
        };
        if (!exists2 && scheduleName != '') {
            schedules.push({ "name": '', "subject codes": [], "course codes": [] })
            schedules[schedules.length - 1]['name'] = scheduleName;
        } else return false;
        return true;
    },
    deleteSchedule: function (scheduleName) {
        let initial = schedules.length;
        name = scheduleName;
        
        if (schedules.length > 0) {
            for (let i = 0; i < schedules.length; i++) {
                if (schedules[i]['name'] == scheduleName) {
                    schedules.splice(i, 1);
                };
            };
        };
        if (initial == schedules.length) return false;
        return true;
    },
    resetSchedules: function () {
        let didSomething = true;
        if (schedules.length == 0) { didSomething = false; }
        schedules = [];
        return didSomething;
    },
    getSchedule: function () {
        return schedules;
    },
    getScheduleNames: function () {
        let schnames = [];
        for (let i = 0; i < schedules.length; i++) {
            schnames.push(schedules[i]['name']);
        };
        return schnames;
    },
    saveSchedule: function (n, v1, v2) {   //check if course codes exist
        v1 = v1.toUpperCase();
        v2 = v2.toUpperCase();
        let worked = false;
        let valid = false;
        let alreadyIn = false;
        let index = -1;
        for (let i = 0; i < timetableData.length; i++) {
            if (timetableData[i].subject.length > 0) {
                if (timetableData[i].subject == v1 && timetableData[i].catalog_nbr == v2) {
                    valid = true;
                };
            };
        };
        if (valid) {
            for (let j = 0; j < schedules.length; j++) {
                if (n == schedules[j].name) {
                    index = j;
                };
            };
        } else {
            return false;
        };
        if (index == -1) {
            valid = false;
        };
        if (valid) {
            if (schedules[index]["subject codes"].length > 0 && schedules[index]["course codes"].length > 0) {
                for (let z = 0; z < schedules[index]['course codes'].length; z++) {
                    if (schedules[index]["subject codes"][z] == v1 && schedules[index]["course codes"][z] == v2) {
                        valid = false;
                    };
                };
            };
        } else {
            return false;
        };
        if (valid) {
            schedules[index]['subject codes'].push(v1);
            schedules[index]['course codes'].push(v2);
        };
        return valid;
    },
    getScheduleEntry: function (name) {
        for (let i = 0; i < schedules.length; i++) {
            if (schedules[i].name == name && schedules[i].name != undefined) {
                return schedules[i];
            };
        };
        return false
    },
    getLongSchedule: function (name) {
        let result;
        let matches = [];
        for (let i = 0; i < schedules.length; i++) {
            if (schedules[i].name == name && schedules[i].name != undefined) {
                result = schedules[i];
            };
        };
        if (result) {
            for (let i = 0; i < result["subject codes"].length; i++) {
                for (let j = 0; j < timetableData.length; j++) {
                    if (timetableData[j].subject == result["subject codes"][i] && timetableData[j].catalog_nbr == result["course codes"][i]) {
                        matches.push(timetableData[j]);
                    };
                };
            };
            return matches;
        };
        return false;
    },
    getLongSchedules: function (name) {
        let result;
        let matches = [];
        matches2 = [];
        matches3 = { "monday": [], "tuesday": [], "wednesday": [], "thursday": [], "friday": [] };
        for (let i = 0; i < schedules.length; i++) {
            if (schedules[i].name == name && schedules[i].name != undefined) {
                result = schedules[i];
            };
        };
        if (result) {
            for (let i = 0; i < result["subject codes"].length; i++) {
                for (let j = 0; j < timetableData.length; j++) {
                    if (timetableData[j].subject == result["subject codes"][i] && timetableData[j].catalog_nbr == result["course codes"][i]) {
                        matches.push(timetableData[j]);
                    };
                };
            };
        };
        for (let q = 0; q < matches.length; q++) {
            matches2.push([matches[q].catalog_nbr, matches[q].className, matches[q].course_info[0].days]);
        };
        if (matches2.length > 0) {
            for (let w = 0; w < matches2.length; w++) {
                if (matches2[w][2]) {
                    for (day in matches2[w][2]) {
                        let match2text = matches2[w][2][day];
                        if (match2text == "M") {
                            matches3.monday.push([matches2[w][0], matches2[w][1]]);
                        };
                        if (match2text == "Tu") {
                            matches3.tuesday.push([matches2[w][0], matches2[w][1]]);
                        };
                        if (match2text == "W") {
                            matches3.wednesday.push([matches2[w][0], matches2[w][1]]);
                        };
                        if (match2text == "Th") {
                            matches3.thursday.push([matches2[w][0], matches2[w][1]])
                        };
                        if (match2text == "F") {
                            matches3.friday.push([matches2[w][0], matches2[w][1]])
                        };
                    };
                };
            };
            return matches3;
        };
        return false;
    }
};

