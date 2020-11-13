const back = require('./back-manager');
let viewString = '<table>';
let g = back.getSchedule();
module.exports = {
    printSchedules: function () {
        for (let i = 0; i < g.length; i++) {
            viewString += '<td id="lname">' + g[i]['name'] + '<td>';
            viewString += '<td id="lcourse">' + g[i]['course code'] + '<td>';
            viewString += '<td id="lsubject">' + g[i]['subject code'] + '<td>';
        };
    },
    putInTable: function (values) {
        let fs = '<table id="results_table" style="width:50%;"><tr id="table_row"><td id="table_data">Key</td><td id="table_data">Value</td></tr>';
        for (let key in values) {
            if (typeof (values[key]) != "object") {
                fs += '<tr id="table_row"><td id="table_data">' + key + '</td><td id="table_data"> ' + values[key] + '</td></tr>';
            } else {
                for (let innerKey in values[key][0]) {
                    fs += '<tr id="table_row"><td id="table_data">' + innerKey + '</td><td id="table_data"> ' + values[key][0][innerKey] + '</td></tr>';
                };
            };
        };
        fs += '</table>';
        return fs;
    },
    putInTableModData: function (values) {
        let fs = '<table id="results_table" style="margin-top:10px;"><tr id="table_row"><td id="table_data">Key</td><td id="table_data">Value</td></tr>';
        for (let key in values) {
            if (typeof (values[key]) != "object") {
                fs += '<tr id="table_row"><td id="table_data">' + key + '</td><td id="table_data"> ' + values[key] + '</td></tr>';
            } else {
                for (let innerKey in values[key][0]) {
                    fs += '<tr id="table_row"><td id="table_data">' + innerKey + '</td><td id="table_data"> ' + values[key][0][innerKey] + '</td></tr>';
                };
            };
        };
        fs += '</table>';
        return fs;
    },
    getWeeklyTable: function (weeklyTable) {
        if (weeklyTable) {
            let t1 = '<table class="results_table_spec">';
            t1 += '<tr><td>Monday</td><td>Tuesday</td><td>Wednesday</td><td>Thursday</td><td>Friday</td></tr>';
            let wednesday = weeklyTable["wednesday"];
            let thursday = weeklyTable["thursday"];
            let tuesday = weeklyTable["tuesday"];
            let monday = weeklyTable["monday"];
            let friday = weeklyTable["friday"];
            let wednesdayL = wednesday.length;
            let thursdayL = thursday.length;
            let tuesdayL = tuesday.length;
            let mondayL = monday.length;
            let fridayL = friday.length;
            let week = [monday, tuesday, wednesday, thursday, friday];

            let maxLength = Math.max(mondayL, tuesdayL, wednesdayL, thursdayL, fridayL);
            for (let i = 0; i < maxLength; i++) {
                t1 += "<tr>";
                for (let j = 0; j < 5; j++) {
                    try {
                        if (week[j][i]) {
                            t1 += '<td>' + week[j][i][0] + ': ' + week[j][i][1] + '</td>';
                        } else {
                            t1 += '<td></td>';
                        };
                    } catch (err) {
                        t1 += '<td></td>';
                    }
                    if (j == 5) {
                        t1 += '</tr';
                    };
                };
            };
            t1 += '</table>';
            return t1;
        }
        return '<p class="status_var">Cannot generate schedule for entry: error bad schedule input<p>';
    },
    putArrayInTable: function (arr) {
        let fs = '<table id="results_table_arr">';
        for (let value in arr) {
            fs += '<tr id="table_row_arr"><td id="table_data_arr">' + arr[value] + '</td></tr>';
        };
        fs += '</table>';
        return fs;
    },
    putArrayInTableBland: function (arr) {
        let fs = '<table id="results_table_arr">';
        let g = 0;
        for (let value in arr) {
            if (g == 0) {
                fs += '<tr id="genericbck"</tr>';
            }
            fs += '<tr class="table_row_arr"><td id="table_data_arr">' + arr[value] + '</td></tr>';

            g = 1;
        };
        fs += '</table>';
        return fs;
    },
    scdManage: function (data) {
        let fs = '<table id="results_table_spec">';
        fs += '<tr><td>Subject</td><td>Class Name</td></tr>';
        for (let i = 0; i < data.length; i++) {
            fs += '<tr id="table_row_spec"><td id="table_data_spec">' + data[i].subject + '</td><td id="table_data_spec"> ' + data[i].className + '</td></tr>';
        };
        fs += '</table>';
        return fs;
    },
    scheduleEnum: function (data) {
        if (data.length > 0) {
            let fs = '<table id="results_table_spec">';
            fs += '<tr><td>Schedule Name</td><td>Subject Codes</td><td>Course Codes</td><td>Number of courses</td></tr>';
            for (let i = 0; i < data.length; i++) {
                let sc = '';
                let cc = '';
                for (let j = 0; j < data[i]['subject codes'].length; j++) {
                    sc += data[i]['subject codes'][j] + '\n';
                    cc += data[i]['course codes'][j] + '\n';
                };
                let len = 0;
                if (data[i]['subject codes']) {
                    len = data[i]['subject codes'].length;
                };
                fs += '<tr id="table_row_spec"><td id="table_data_spec">' + data[i].name + '</td><td id="table_data_spec"> ' + sc + '</td><td id="table_data_spec"> ' + cc + '</td>' + '<td>' + len + '</td>' + '</tr>';
            };
            return fs;
        } else {
            return '<p id="status_var">No schedules exist<p>';
        };
    },
    scheduleEnumInd: function (data) {
        if (data) {
            let fs = '<table id="results_table_spec">';
            fs += '<tr><td>Schedule Name</td><td>Subject Codes</td><td>Course Codes</td></tr>';
            let sc = '';
            let cc = '';
            for (let j = 0; j < data['subject codes'].length; j++) {
                sc += data['subject codes'][j] + '\n';
                cc += data['course codes'][j] + '\n';
            };
            fs += '<tr id="table_row_spec"><td id="table_data_spec">' + data.name + '</td><td id="table_data_spec"> ' + sc + '</td><td id="table_data_spec"> ' + cc + '</td></tr>';
            return fs;
        } else {
            return '<p id="status_var">No schedules exist<p>';
        };
    },
    getScheduleSpec: function (data) {
        let fs = '<table id="results_table_spec">';
        fs += '<tr><td>Schedule Name</td><td>Subject Codes</td><td>Course Codes</td></tr>';
        fs += '<tr id="table_row_spec"><td id="table_data_spec">' + data.name + '</td><td id="table_data_spec"> ' + data['subject codes'] + '</td><td id="table_data_spec"> ' + data['course codes'] + '</td></tr>';
        return fs;
    },
    putInDom: function(htmlData){
        var parent = document.getElementById("tNode");
        var child = document.createTextNode(htmlData);
        parent.appendChild(child);
    },
    genericForm:function(data){
        let s = `<!DOCTYPE html>
        <html>
        
        <head>
            <link rel="stylesheet" type="text/css" href="/css/style.css" />
            <script src="/js/front_manager.js"></script>
            <title>Timetables</title>
        </head>
        
        <body>
        
            <ul id="topbar">
                <li id="topbar_entry">
                    <a id="topbar_entry_text" href="/home">Home</a>
                </li id="topbar_entry">
            
                <li id="topbar_entry">
                    <div class="dropdown">
                        <a id="topbar_entry_text" href="#">Enumerate Data</a>
                        <div class="dropdown-content">
                            <a href="/data">All data</a>
                            <a href="/scddata">Subject Codes & Desciptions</a>
                            <a href="/whatdoihavethisweek">Show Weekly Schedule</a>
                            <a href="/schedules">Schedules</a>
                        </div>
                    </div>
                </li>
            
                <li id="topbar_entry">
                    <div class="dropdown">
                        <a id="topbar_entry_text" href="#">Search</a>
                        <div class="dropdown-content">
                            <a href="/searchcoursecodes">Search Course Codes</a>
                            <a href="/searchforentry">Search for Entry</a>
                            <a href="/searchforschedule">Search for Schedule</a>
            
                        </div>
                    </div>
                </li>
            
                <li id="topbar_entry">
                    <div class="dropdown">
                        <a id="topbar_entry_text" href="#">Scheduling</a>
                        <div class="dropdown-content">
                            <a href="/createschedule">Create Schedule</a>
                            <a href="/addtoschedule">Add to Schedule</a>
                            <a href="/deleteschedule">Delete a Schedule</a>
                            <a href="/deleteschedules">Delete All Schedules</a>
                        </div>
                    </div>
                </li>
            </ul>
        ` + data + `</body>

        </html>`;
    return s;
    },
    timeTableGeneratorSearch:function(){
        return `<p id="search_box_header">Please Enter Schedule Name</p>
        <div id="search_line1">
            <form method="GET" action="/api/whatdoihavethisweek">
                <input id="search_box1" name="schedule" type="text" required>
                <button id="search_button1" formmethod="POST">Search</button>
            </form>
        </div>`;
    },
    searchCourseCodesSearch:function(){
        return `<p id="search_box_header">Please Enter Course Code</p>
        <div id="search_line1">
            <form method="GET" action="/api/searchcoursecodes">
                <input id="search_box1" name="sscInput" type="text">
                <button id="search_button1" formmethod="POST">Search</button>
            </form>
        </div>`;
    },
    searchForEntrySearch:function(){
        return `<p id="search_box_header">Please Enter Query</p>
        <div id="search_line1">
            <form method="GET">
                <div id='nowarpline'>
                    Subject code:
                    <input name="sc" id="search_box1" type="text" required>
                </div>
                <div id='nowarpline'>
                    Course code:
                    <input name="cc1" id="search_box1" type="text" required>
                </div>
                <div id='nowarpline'>
                    Course Component (Optional):
                    <input name="cc2" id="search_box1" type="text">
                </div>
                <button id="search_button1" formmethod="POST">Search</button>
            </form>
            
        </div>`
    },
    searchForSchedulesSearch:function(){
        return ` <p id="search_box_header">Please Enter Schedule Name</p>
        <div id="search_line1">
            <form method="GET" action="/api/searchforschedule">
                <input id="search_box1" name="schedule" type="text" required>
                <button id="search_button1" formmethod="POST">Search</button>
            </form>
        </div>`
    },
    createScheduleInput:function(){
        return `<p id="search_box_header">Please Enter Schedule Name</p>
        <div id="search_line1">
            <form method="GET" action="/api/createschedule">
                <input id="search_box1" name="cname" type="text" required>
                <button id="search_button1" formmethod="POST">Create</button>
            </form>
        </div>`
    },
    addtoscheduleInput:function(){
        return `<div id="search_line1">
        <form method="POST" action="/api/addtoschedule">
            <input id="search_box1" name="sname" type="text" required>
            <p> </p>
            Subject code:
            <input id="search_box1" name="subcode" type="text" required>
            <p> </p>
            Course code:
            <input id="search_box1" name="coursecode" type="text" required>
            <p></p>
            <button id="search_button1" formmethod="POST">Update</button>
        </form>
    </div>`
    },
    deleteScheduleInput:function(){
        return `<p id="search_box_header">Please Enter Schedule Name to delete</p>
        <div id="search_line1">
            <form method="GET" action="/api/deleteschedule">
                <input id="search_box1" name="sname" type="text" required>
                <p> </p>
                Are you sure you want to delete this entry?
                <input type="checkbox" id="confirmation" name="confirmation" required>
                <p> </p>
                <button id="search_button1" formmethod="POST">Delete</button>
            </form>
        </div>`
    },
    deleteSchedulesInput:function(){
        return `<div id="search_line1">
        <form method="GET" action="/api/deleteschedules">

            <h4>Are you sure you want to delete all schedules?</h4>
            Yes? <input type="checkbox" id="confirmation" name="confirmation" required>
            <p> </p>
            <button id="search_button1" formmethod="POST">Delete</button>
        </form>
    </div>`
    }
};