var variable;
var begLat;
var endLat;
var begLong;
var endLong;
var scenario;
var experiment;
var place = "bangor";
var macro = "CODE: \n";

// enter all the locations and their lat longs i nthe following arrays
var places = ["Bangor", "Springfield", "Burlington", "Syracuse", "Cleveland", "Madison", "StLouis", "Vail", "Bozeman", "LasVegas", "Bend"]; 
var bLat = ["44.803611", "42.101389", "44.475833", "43.046944", "41.482222", "43.066667", "38.627222", "39.635833", "45.677778", "36.175", "44.05"]; 
var bLong = ["-68.770278", "-72.590278", "-73.211944", "-76.144444", "-81.669722", "-89.4", "-90.197778", "-106.363056", "-111.047222", "-115.136389", "-121.3"]; 

// to select certain variables, add them to the following array as strings. precep, tmin, tmax are available.
var variables = ["tmax", "tmin", "precep"];

function addToMacro(cmd){
	macro += cmd + ' \n';
}

function statsmode(){
	addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:statsmode CONTENT=%MEDIAN');
}

function timeperiod(){
	addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:baseline CONTENT=%1981-2010');
}

function addLocation(){
	addToMacro('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:report_q ATTR=ID:lat1_out CONTENT='+String(begLat));
	addToMacro('TAG POS=1 TYPE=TD ATTR=TXT:Start<SP>Latitude');
	addToMacro('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:report_q ATTR=ID:lat2_out CONTENT='+String(endLat));
	addToMacro('TAG POS=1 TYPE=TD ATTR=TXT:End<SP>Latitude');
	addToMacro('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:report_q ATTR=ID:lng1_out CONTENT='+String(begLong));
	addToMacro('TAG POS=4 TYPE=TD ATTR=TXT:');
	addToMacro('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:report_q ATTR=ID:lng2_out CONTENT='+String(endLong));
}

function rcp26run1(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(33)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(37)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
}

function rcp26run1tmax(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(33)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(37)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
}

function rcp26run1tmin(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(33)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(37)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(42)" BUTTON=0');
}

function rcp45run1tmin() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(33)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(34)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(49)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(49)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(50)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(53)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(54)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(58)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(61)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(64)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(67)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(69)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(69)" BUTTON=0');
}

function rcp45run1tmax(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(33)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(34)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(49)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(49)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(50)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(53)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(54)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(58)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(61)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(64)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(67)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(69)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(69)" BUTTON=0');

}

function rcp45run1(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(32)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(37)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(43)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(52)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(52)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(53)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(56)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(57)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(60)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(60)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(60)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(60)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(61)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(64)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(67)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(70)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(72)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(72)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(72)" BUTTON=0');
}

function rcp6run1tmin() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(8)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(11)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(21)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(24)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
}

function rcp6run1tmax() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(8)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(11)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(21)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(24)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(27)" BUTTON=0');

}

function rcp6run1(){
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(8)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(11)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(20)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(21)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(23)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(24)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(27)" BUTTON=0');
}

function rcp85run1() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(31)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(32)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(35)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(38)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(42)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(43)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(46)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(48)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(48)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(48)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(3)>SELECT>OPTION:nth-of-type(48)" BUTTON=0');
}

function rcp85run1tmax() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(32)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(35)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(43)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
}

function rcp85run1tmin() {
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(2)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(7)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(12)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(13)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(15)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(16)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(25)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(26)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(28)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(29)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(32)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(35)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(36)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(39)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(40)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(43)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
	addToMacro('EVENT TYPE=CLICK SELECTOR="#selmodel>OPTION:nth-of-type(45)" BUTTON=0');
}

function selectScenario(){
	addToMacro('TAG POS=4 TYPE=TD ATTR=TXT:');
	addToMacro('TAG POS=1 TYPE=INPUT:RADIO FORM=ID:report_q ATTR=ID:gtype15');
	addToMacro('WAIT SECONDS=1');
}

function selectExperimenttmin(k){

	if (k == 0){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%24');
		addToMacro('WAIT SECONDS=1');
		rcp26run1tmin();
	} else if (k == 1){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%22');
		addToMacro('WAIT SECONDS=1');
		rcp45run1tmin();
	} else if (k == 2){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%25');
		addToMacro('WAIT SECONDS=1');
		rcp6run1tmin();
	} else {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%23');
		addToMacro('WAIT SECONDS=1');
		rcp85run1tmin();
	}

	experiment = k;

}

function selectExperimenttmax(k){

	if (k == 0){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%24');
		addToMacro('WAIT SECONDS=1');
		rcp26run1tmax();
	} else if (k == 1){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%22');
		addToMacro('WAIT SECONDS=1');
		rcp45run1tmax();
	} else if (k == 2){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%25');
		addToMacro('WAIT SECONDS=1');
		rcp6run1tmax();
	} else {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%23');
		addToMacro('WAIT SECONDS=1');
		rcp85run1tmax();
	}

	experiment = k;

}

function selectExperiment(k){

	if (k == 0){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%24');
		addToMacro('WAIT SECONDS=1');
		rcp26run1();
	} else if (k == 1){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%22');
		addToMacro('WAIT SECONDS=1');
		rcp45run1();
	} else if (k == 2){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%25');
		addToMacro('WAIT SECONDS=1');
		rcp6run1();
	} else {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selexperiment CONTENT=%23');
		addToMacro('WAIT SECONDS=1');
		rcp85run1();
	}

	experiment = k;

}

function submit(mo, anom){
	addToMacro('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:report_q ATTR=ID:bsubmit');
	addToMacro('TAB T=2');
	addToMacro('ONDOWNLOAD FOLDER=* FILE='+place+'-'+mo+'-'+anom+'-'+variable+'-'+experiment+'-'+'.csv WAIT=YES');
	addToMacro('TAG POS=1 TYPE=A ATTR=TXT:Download<SP>Data<SP>(CSV)');
	addToMacro('TAB CLOSE');
}

function doBasics() {
		addToMacro('URL GOTO=http://climate.upei.ca/?page=viz-regrid');
		addLocation();
		selectScenario();
		statsmode();
		timeperiod();
}

function anomaly(mo){

	var anom;

	for (var i = 0; i < 3; i++) {
		if (i == 0) {
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:anomaly CONTENT=%2011');
			anom = "2020";
		}
		else if (i==1){
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:anomaly CONTENT=%2041');
			anom = "2050";
		}
		else {
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:anomaly CONTENT=%2071');
			anom = "2080";
		}

		submit(mo, anom);
	}
}

function timeofyr(){
	for (var i = 1; i < 13; i++) {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:timeofyear CONTENT=%'+String(i));
		anomaly(i);
	}
}

function selectVariable(v){

	variable = v;

	
	if (v==0){
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%61');
		addToMacro('WAIT SECONDS=1');

		for (var k = 0; k < 4; k++){

			selectExperiment(k);

			timeofyr();
			experiment = k;

			doBasics();
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%61');
			addToMacro('WAIT SECONDS=1');

		}

	} else if (v == 1) {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%16');
		addToMacro('WAIT SECONDS=1');

		for (var k = 0; k < 4; k++){

			selectExperimenttmin(k);

			timeofyr();
			experiment = k;
			doBasics();
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%16');
			addToMacro('WAIT SECONDS=1');

		}

	} else if (v == 2) {
		addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%15');
		addToMacro('WAIT SECONDS=1');

		for (var k = 0; k < 4; k++){

			selectExperimenttmax(k);

			timeofyr();
			experiment = k;
			doBasics();
			addToMacro('TAG POS=1 TYPE=SELECT FORM=ID:report_q ATTR=ID:selvariable CONTENT=%15');
			addToMacro('WAIT SECONDS=1');

		}
	}

	
}

for (var h = 0; h < places.length; h++) {

	begLat = bLat[h];
	begLong = bLong[h];
	endLat = bLat[h];
	endLong = bLong[h];
	place = places[h];

	for (var j = 0; j < 3; j++){

		doBasics();
		selectVariable(j);
	}
}




console.log(macro);
