var gameData;

function displayData() {
    
	// Delete previous entries
	$("tr").remove(".printRow");
	$("tr").remove(".matchupRow");
    $("span").remove(".weekSpace")
	
	// Get selected week from drop down
    var week = $("#gameWeek").val().toString();

    // Get the day of the week for each game
    function convToDate(date) {
        var dateToConvert = new Date(date);
        var day = dateToConvert.getUTCDay();

        switch(day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 4:
                return "Thursday";
            case 6:
                return "Saturday"
        }
    }

    // Get the day of the week for each game
    function formatScore(awayScore, homeScore) {
        var formattedScore;

        if (awayScore === "" || homeScore === "") {
            formattedScore = '';
        } else {
            formattedScore = awayScore >= homeScore ?
            awayScore + " - " + homeScore :
            homeScore + " - " + awayScore;
        }

        return formattedScore;
    }
    
    // Get team mascot for team
	function getTeamMascot(abbr) {

		teamMascot = "";
		teams.forEach(function(teamName) {
			if (abbr === teamName.abbr) {
				teamMascot = teamName.name;
			}
        });
        
		return teamMascot;
	}
	
	// Get imageURL for team
	function getTeamLogo(abbr) {
		
		teamLogo = "";
		teams.forEach(function(teamName) {
			if (abbr === teamName.abbr) {
				teamLogo = teamName.imageURL;
			}
        });
        
		return teamLogo;
    }
    
    function addAllClasses() {
        $(".awayBox").addClass("awayBox");
        $(".homeBox").addClass("homeBox");
        $(".logo").addClass("logo");
        $(".matchupRow").addClass("matchupRow");
        $(".printRow").addClass("printRow");
        $(".teamName").addClass("teamName");
    }
    
    gameData.Schedule.forEach(function(game) {

        if(game["gameWeek"] === week) {

            // Isolate useful variables
            var gameDate = game["gameDate"];
            var gameTime = game["gameTimeET"];
            var awayTeam = game["awayTeam"];
            var homeTeam = game["homeTeam"];
            var homeScore = parseInt(game["homeScore"]);
            var awayScore = parseInt(game["awayScore"]);
            var winner = game["winner"];


            // Append data to table
            $("#gameDataTable").append(
                "<tr class='matchupRow'>" + 
                    "<td>" + 
                        "<img class='logo' src='" + getTeamLogo(awayTeam) + "'/>" + "<input class='awayBox' type='checkbox'><span class='teamName'>" + getTeamMascot(awayTeam) + "</span>" +
                    "</td>" +
                    "<td>" +
                        "<img class='logo' src='" + getTeamLogo(homeTeam) + "'/>" + "<input class='homeBox' type='checkbox'><span class='teamName'>" + getTeamMascot(homeTeam) + "</span>" +
                    "</td>" +
                    "<td>" + 
                        convToDate(gameDate) + " " + gameTime + 
                    "</td>" +
                    "<td>" +
                        formatScore(awayScore, homeScore) +
                    "</td>" +
                    "<td>" +
                        "<img class='logo' src='" + getTeamLogo(winner) + "'/>" + "<span class='teamName'>" + getTeamMascot(winner) + "</span>" +
                    "</td>" + 
                "</tr>"
            )}
     });

    // Append the print row at the bottom
    $("#gameDataTable").append(
    "<tr class='printRow'>" +
        "<td colspan='5'>Total Points Scored On The Last Game Of the Sheet  " + 
        "<input type='text'>" +
            "<div class='printButton'><button class='btn btn-info' onClick='window.print()';><i class='fa fa-print'></i> Print Schedule</button>" + 
        "</div>" + 
        "</td>" + 
    "</tr>"
    )

    addAllClasses();

    // Add title based on which week is selected
    $("#weekNumber").append("<span class='weekSpace'>Week " + week + " Schedule</span");

    // Toggle highlighting boxes
    $(".homeBox").on("click", function() {
        $(this).parent().toggleClass("highlight");
    });
        
    $(".awayBox").on("click", function() {
        $(this).parent().toggleClass("highlight");
    });
}

var getGameData = function () {
    gameData =
    {
       "currentWeek": "1",
       "Schedule": [
         {
           "gameId": "1",
           "gameWeek": "1",
           "gameDate": "2020-09-10",
           "awayTeam": "HOU",
           "homeTeam": "KC",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "KC",
           "homeScore": "34",
           "awayScore": "20"
         },
         {
           "gameId": "2",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "SEA",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "SEA",
           "homeScore": "25",
           "awayScore": "38"
         },
         {
           "gameId": "3",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "NYJ",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BUF",
           "homeScore": "27",
           "awayScore": "17"
         },
         {
           "gameId": "4",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "CHI",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CHI",
           "homeScore": "23",
           "awayScore": "27"
         },
         {
           "gameId": "5",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "GB",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "GB",
           "homeScore": "34",
           "awayScore": "43"
         },
         {
           "gameId": "6",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "MIA",
           "homeTeam": "NE",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "NE",
           "homeScore": "21",
           "awayScore": "11"
         },
         {
           "gameId": "7",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "PHI",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "WAS",
           "homeScore": "27",
           "awayScore": "17"
         },
         {
           "gameId": "8",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "LV",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "",
           "winner": "LV",
           "homeScore": "30",
           "awayScore": "34"
         },
         {
           "gameId": "9",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "IND",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "JAC",
           "homeScore": "27",
           "awayScore": "20"
         },
         {
           "gameId": "10",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "CLE",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "38",
           "awayScore": "6"
         },
         {
           "gameId": "11",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "LAC",
           "homeTeam": "CIN",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "LAC",
           "homeScore": "13",
           "awayScore": "16"
         },
         {
           "gameId": "12",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "TB",
           "homeTeam": "NO",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "34",
           "awayScore": "23"
         },
         {
           "gameId": "13",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "ARI",
           "homeTeam": "SF",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "ARI",
           "homeScore": "20",
           "awayScore": "24"
         },
         {
           "gameId": "14",
           "gameWeek": "1",
           "gameDate": "2020-09-13",
           "awayTeam": "DAL",
           "homeTeam": "LAR",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "LAR",
           "homeScore": "20",
           "awayScore": "17"
         },
         {
           "gameId": "15",
           "gameWeek": "1",
           "gameDate": "2020-09-14",
           "awayTeam": "PIT",
           "homeTeam": "NYG",
           "gameTimeET": "7:15 PM",
           "tvStation": "ESPN",
           "winner": "PIT",
           "homeScore": "16",
           "awayScore": "26"
         },
         {
           "gameId": "16",
           "gameWeek": "1",
           "gameDate": "2020-09-14",
           "awayTeam": "TEN",
           "homeTeam": "DEN",
           "gameTimeET": "10:10 PM",
           "tvStation": "ESPN",
           "winner": "TEN",
           "homeScore": "14",
           "awayScore": "16"
         },
         {
           "gameId": "17",
           "gameWeek": "2",
           "gameDate": "2020-09-17",
           "awayTeam": "CIN",
           "homeTeam": "CLE",
           "gameTimeET": "8:20 PM",
           "tvStation": "NFL",
           "winner": "CLE",
           "homeScore": "35",
           "awayScore": "30"
         },
         {
           "gameId": "18",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "NYG",
           "homeTeam": "CHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "CHI",
           "homeScore": "17",
           "awayScore": "13"
         },
         {
           "gameId": "19",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "ATL",
           "homeTeam": "DAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "DAL",
           "homeScore": "40",
           "awayScore": "39"
         },
         {
           "gameId": "20",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "DET",
           "homeTeam": "GB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "GB",
           "homeScore": "42",
           "awayScore": "21"
         },
         {
           "gameId": "21",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "JAC",
           "homeTeam": "TEN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TEN",
           "homeScore": "33",
           "awayScore": "30"
         },
         {
           "gameId": "22",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "MIN",
           "homeTeam": "IND",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "IND",
           "homeScore": "28",
           "awayScore": "11"
         },
         {
           "gameId": "23",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "BUF",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BUF",
           "homeScore": "28",
           "awayScore": "31"
         },
         {
           "gameId": "24",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "SF",
           "homeTeam": "NYJ",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "SF",
           "homeScore": "13",
           "awayScore": "31"
         },
         {
           "gameId": "25",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "LAR",
           "homeTeam": "PHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "LAR",
           "homeScore": "19",
           "awayScore": "37"
         },
         {
           "gameId": "26",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "DEN",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "26",
           "awayScore": "21"
         },
         {
           "gameId": "27",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "CAR",
           "homeTeam": "TB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "TB",
           "homeScore": "31",
           "awayScore": "17"
         },
         {
           "gameId": "28",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "WAS",
           "homeTeam": "ARI",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "ARI",
           "homeScore": "30",
           "awayScore": "15"
         },
         {
           "gameId": "29",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "KC",
           "homeTeam": "LAC",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "KC",
           "homeScore": "20",
           "awayScore": "23"
         },
         {
           "gameId": "30",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "BAL",
           "homeTeam": "HOU",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "16",
           "awayScore": "33"
         },
         {
           "gameId": "31",
           "gameWeek": "2",
           "gameDate": "2020-09-20",
           "awayTeam": "NE",
           "homeTeam": "SEA",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "SEA",
           "homeScore": "35",
           "awayScore": "30"
         },
         {
           "gameId": "32",
           "gameWeek": "2",
           "gameDate": "2020-09-21",
           "awayTeam": "NO",
           "homeTeam": "LV",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "LV",
           "homeScore": "34",
           "awayScore": "24"
         },
         {
           "gameId": "33",
           "gameWeek": "3",
           "gameDate": "2020-09-24",
           "awayTeam": "MIA",
           "homeTeam": "JAC",
           "gameTimeET": "8:20 PM",
           "tvStation": "NFL",
           "winner": "MIA",
           "homeScore": "13",
           "awayScore": "31"
         },
         {
           "gameId": "34",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "CHI",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CHI",
           "homeScore": "26",
           "awayScore": "30"
         },
         {
           "gameId": "35",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "LAR",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "BUF",
           "homeScore": "35",
           "awayScore": "32"
         },
         {
           "gameId": "36",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "WAS",
           "homeTeam": "CLE",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CLE",
           "homeScore": "34",
           "awayScore": "20"
         },
         {
           "gameId": "37",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "TEN",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TEN",
           "homeScore": "30",
           "awayScore": "31"
         },
         {
           "gameId": "38",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "LV",
           "homeTeam": "NE",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "NE",
           "homeScore": "36",
           "awayScore": "20"
         },
         {
           "gameId": "39",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "SF",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "SF",
           "homeScore": "9",
           "awayScore": "36"
         },
         {
           "gameId": "40",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "CIN",
           "homeTeam": "PHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TIE",
           "homeScore": "23",
           "awayScore": "23"
         },
         {
           "gameId": "41",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "HOU",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "28",
           "awayScore": "21"
         },
         {
           "gameId": "42",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "NYJ",
           "homeTeam": "IND",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "IND",
           "homeScore": "36",
           "awayScore": "7"
         },
         {
           "gameId": "43",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "CAR",
           "homeTeam": "LAC",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "CAR",
           "homeScore": "16",
           "awayScore": "21"
         },
         {
           "gameId": "44",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "TB",
           "homeTeam": "DEN",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "TB",
           "homeScore": "10",
           "awayScore": "28"
         },
         {
           "gameId": "45",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "DET",
           "homeTeam": "ARI",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "DET",
           "homeScore": "23",
           "awayScore": "26"
         },
         {
           "gameId": "46",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "DAL",
           "homeTeam": "SEA",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "SEA",
           "homeScore": "38",
           "awayScore": "31"
         },
         {
           "gameId": "47",
           "gameWeek": "3",
           "gameDate": "2020-09-27",
           "awayTeam": "GB",
           "homeTeam": "NO",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "GB",
           "homeScore": "30",
           "awayScore": "37"
         },
         {
           "gameId": "48",
           "gameWeek": "3",
           "gameDate": "2020-09-28",
           "awayTeam": "KC",
           "homeTeam": "BAL",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "KC",
           "homeScore": "20",
           "awayScore": "34"
         },
         {
           "gameId": "49",
           "gameWeek": "4",
           "gameDate": "2020-10-01",
           "awayTeam": "DEN",
           "homeTeam": "NYJ",
           "gameTimeET": "8:20 PM",
           "tvStation": "NFL",
           "winner": "DEN",
           "homeScore": "28",
           "awayScore": "37"
         },
         {
           "gameId": "50",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "IND",
           "homeTeam": "CHI",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "IND",
           "homeScore": "11",
           "awayScore": "19"
         },
         {
           "gameId": "51",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "JAC",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "CIN",
           "homeScore": "33",
           "awayScore": "25"
         },
         {
           "gameId": "52",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "CLE",
           "homeTeam": "DAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CLE",
           "homeScore": "38",
           "awayScore": "49"
         },
         {
           "gameId": "53",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "NO",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "29",
           "awayScore": "35"
         },
         {
           "gameId": "55",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "SEA",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "SEA",
           "homeScore": "23",
           "awayScore": "31"
         },
         {
           "gameId": "56",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "LAC",
           "homeTeam": "TB",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TB",
           "homeScore": "38",
           "awayScore": "31"
         },
         {
           "gameId": "57",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "BAL",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "17",
           "awayScore": "31"
         },
         {
           "gameId": "58",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "ARI",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CAR",
           "homeScore": "31",
           "awayScore": "21"
         },
         {
           "gameId": "59",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "MIN",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "MIN",
           "homeScore": "23",
           "awayScore": "31"
         },
         {
           "gameId": "60",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "NYG",
           "homeTeam": "LAR",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "LAR",
           "homeScore": "17",
           "awayScore": "9"
         },
         {
           "gameId": "62",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "BUF",
           "homeTeam": "LV",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "BUF",
           "homeScore": "23",
           "awayScore": "30"
         },
         {
           "gameId": "63",
           "gameWeek": "4",
           "gameDate": "2020-10-04",
           "awayTeam": "PHI",
           "homeTeam": "SF",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "PHI",
           "homeScore": "20",
           "awayScore": "25"
         },
         {
           "gameId": "61",
           "gameWeek": "4",
           "gameDate": "2020-10-05",
           "awayTeam": "NE",
           "homeTeam": "KC",
           "gameTimeET": "7:05 PM",
           "tvStation": "CBS",
           "winner": "KC",
           "homeScore": "26",
           "awayScore": "10"
         },
         {
           "gameId": "64",
           "gameWeek": "4",
           "gameDate": "2020-10-05",
           "awayTeam": "ATL",
           "homeTeam": "GB",
           "gameTimeET": "9:00 PM",
           "tvStation": "ESPN",
           "winner": "GB",
           "homeScore": "30",
           "awayScore": "16"
         },
         {
           "gameId": "65",
           "gameWeek": "5",
           "gameDate": "2020-10-08",
           "awayTeam": "TB",
           "homeTeam": "CHI",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "CHI",
           "homeScore": "20",
           "awayScore": "19"
         },
         {
           "gameId": "66",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "CAR",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CAR",
           "homeScore": "16",
           "awayScore": "23"
         },
         {
           "gameId": "68",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "LV",
           "homeTeam": "KC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "LV",
           "homeScore": "32",
           "awayScore": "40"
         },
         {
           "gameId": "70",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "ARI",
           "homeTeam": "NYJ",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "ARI",
           "homeScore": "10",
           "awayScore": "30"
         },
         {
           "gameId": "71",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "PHI",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "PIT",
           "homeScore": "38",
           "awayScore": "29"
         },
         {
           "gameId": "72",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "LAR",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "LAR",
           "homeScore": "10",
           "awayScore": "30"
         },
         {
           "gameId": "73",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "CIN",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "27",
           "awayScore": "3"
         },
         {
           "gameId": "74",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "JAC",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "HOU",
           "homeScore": "30",
           "awayScore": "14"
         },
         {
           "gameId": "75",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "MIA",
           "homeTeam": "SF",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "MIA",
           "homeScore": "17",
           "awayScore": "43"
         },
         {
           "gameId": "76",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "IND",
           "homeTeam": "CLE",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "CLE",
           "homeScore": "32",
           "awayScore": "23"
         },
         {
           "gameId": "77",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "NYG",
           "homeTeam": "DAL",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "DAL",
           "homeScore": "37",
           "awayScore": "34"
         },
         {
           "gameId": "78",
           "gameWeek": "5",
           "gameDate": "2020-10-11",
           "awayTeam": "MIN",
           "homeTeam": "SEA",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "SEA",
           "homeScore": "27",
           "awayScore": "26"
         },
         {
           "gameId": "79",
           "gameWeek": "5",
           "gameDate": "2020-10-12",
           "awayTeam": "LAC",
           "homeTeam": "NO",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "NO",
           "homeScore": "30",
           "awayScore": "27"
         },
         {
           "gameId": "67",
           "gameWeek": "5",
           "gameDate": "2020-10-13",
           "awayTeam": "BUF",
           "homeTeam": "TEN",
           "gameTimeET": "7:00 PM",
           "tvStation": "CBS",
           "winner": "TEN",
           "homeScore": "42",
           "awayScore": "16"
         },
         {
           "gameId": "81",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "HOU",
           "homeTeam": "TEN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TEN",
           "homeScore": "42",
           "awayScore": "36"
         },
         {
           "gameId": "82",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "CIN",
           "homeTeam": "IND",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "IND",
           "homeScore": "31",
           "awayScore": "27"
         },
         {
           "gameId": "83",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "ATL",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "ATL",
           "homeScore": "23",
           "awayScore": "40"
         },
         {
           "gameId": "84",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "WAS",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NYG",
           "homeScore": "20",
           "awayScore": "19"
         },
         {
           "gameId": "85",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "BAL",
           "homeTeam": "PHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "28",
           "awayScore": "30"
         },
         {
           "gameId": "86",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "CLE",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "38",
           "awayScore": "7"
         },
         {
           "gameId": "87",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "CHI",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CHI",
           "homeScore": "16",
           "awayScore": "23"
         },
         {
           "gameId": "88",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "DET",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "DET",
           "homeScore": "16",
           "awayScore": "34"
         },
         {
           "gameId": "89",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "DEN",
           "homeTeam": "NE",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "DEN",
           "homeScore": "12",
           "awayScore": "18"
         },
         {
           "gameId": "90",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "NYJ",
           "homeTeam": "MIA",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "MIA",
           "homeScore": "24",
           "awayScore": "0"
         },
         {
           "gameId": "91",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "GB",
           "homeTeam": "TB",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "TB",
           "homeScore": "38",
           "awayScore": "10"
         },
         {
           "gameId": "92",
           "gameWeek": "6",
           "gameDate": "2020-10-18",
           "awayTeam": "LAR",
           "homeTeam": "SF",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "SF",
           "homeScore": "24",
           "awayScore": "16"
         },
         {
           "gameId": "80",
           "gameWeek": "6",
           "gameDate": "2020-10-19",
           "awayTeam": "KC",
           "homeTeam": "BUF",
           "gameTimeET": "5:00 PM",
           "tvStation": "FOX/NFL",
           "winner": "KC",
           "homeScore": "17",
           "awayScore": "26"
         },
         {
           "gameId": "93",
           "gameWeek": "6",
           "gameDate": "2020-10-19",
           "awayTeam": "ARI",
           "homeTeam": "DAL",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "ARI",
           "homeScore": "10",
           "awayScore": "38"
         },
         {
           "gameId": "94",
           "gameWeek": "7",
           "gameDate": "2020-10-22",
           "awayTeam": "NYG",
           "homeTeam": "PHI",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "PHI",
           "homeScore": "22",
           "awayScore": "21"
         },
         {
           "gameId": "95",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "DET",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "DET",
           "homeScore": "22",
           "awayScore": "23"
         },
         {
           "gameId": "96",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "CLE",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "CLE",
           "homeScore": "34",
           "awayScore": "37"
         },
         {
           "gameId": "97",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "JAC",
           "homeTeam": "LAC",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "LAC",
           "homeScore": "39",
           "awayScore": "29"
         },
         {
           "gameId": "98",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "CAR",
           "homeTeam": "NO",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "27",
           "awayScore": "24"
         },
         {
           "gameId": "99",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "BUF",
           "homeTeam": "NYJ",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BUF",
           "homeScore": "10",
           "awayScore": "18"
         },
         {
           "gameId": "100",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "DAL",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "WAS",
           "homeScore": "25",
           "awayScore": "3"
         },
         {
           "gameId": "101",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "PIT",
           "homeTeam": "TEN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "24",
           "awayScore": "27"
         },
         {
           "gameId": "102",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "GB",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "GB",
           "homeScore": "20",
           "awayScore": "35"
         },
         {
           "gameId": "103",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "SEA",
           "homeTeam": "ARI",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "ARI",
           "homeScore": "37",
           "awayScore": "34"
         },
         {
           "gameId": "104",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "KC",
           "homeTeam": "DEN",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "KC",
           "homeScore": "16",
           "awayScore": "43"
         },
         {
           "gameId": "105",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "SF",
           "homeTeam": "NE",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "SF",
           "homeScore": "6",
           "awayScore": "33"
         },
         {
           "gameId": "106",
           "gameWeek": "7",
           "gameDate": "2020-10-25",
           "awayTeam": "TB",
           "homeTeam": "LV",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "TB",
           "homeScore": "20",
           "awayScore": "45"
         },
         {
           "gameId": "107",
           "gameWeek": "7",
           "gameDate": "2020-10-26",
           "awayTeam": "CHI",
           "homeTeam": "LAR",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "LAR",
           "homeScore": "24",
           "awayScore": "10"
         },
         {
           "gameId": "108",
           "gameWeek": "8",
           "gameDate": "2020-10-29",
           "awayTeam": "ATL",
           "homeTeam": "CAR",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "ATL",
           "homeScore": "17",
           "awayScore": "25"
         },
         {
           "gameId": "109",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "NE",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BUF",
           "homeScore": "24",
           "awayScore": "21"
         },
         {
           "gameId": "110",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "TEN",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "CIN",
           "homeScore": "31",
           "awayScore": "20"
         },
         {
           "gameId": "111",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "LV",
           "homeTeam": "CLE",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "LV",
           "homeScore": "6",
           "awayScore": "16"
         },
         {
           "gameId": "112",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "IND",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "IND",
           "homeScore": "21",
           "awayScore": "41"
         },
         {
           "gameId": "113",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "MIN",
           "homeTeam": "GB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "MIN",
           "homeScore": "22",
           "awayScore": "28"
         },
         {
           "gameId": "114",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "NYJ",
           "homeTeam": "KC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "KC",
           "homeScore": "35",
           "awayScore": "9"
         },
         {
           "gameId": "115",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "LAR",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "MIA",
           "homeScore": "28",
           "awayScore": "17"
         },
         {
           "gameId": "116",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "LAC",
           "homeTeam": "DEN",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "DEN",
           "homeScore": "31",
           "awayScore": "30"
         },
         {
           "gameId": "117",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "NO",
           "homeTeam": "CHI",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "23",
           "awayScore": "26"
         },
         {
           "gameId": "118",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "SF",
           "homeTeam": "SEA",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "SEA",
           "homeScore": "37",
           "awayScore": "27"
         },
         {
           "gameId": "119",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "DAL",
           "homeTeam": "PHI",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "PHI",
           "homeScore": "23",
           "awayScore": "9"
         },
         {
           "gameId": "257",
           "gameWeek": "8",
           "gameDate": "2020-11-01",
           "awayTeam": "PIT",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "24",
           "awayScore": "28"
         },
         {
           "gameId": "120",
           "gameWeek": "8",
           "gameDate": "2020-11-02",
           "awayTeam": "TB",
           "homeTeam": "NYG",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "TB",
           "homeScore": "23",
           "awayScore": "25"
         },
         {
           "gameId": "121",
           "gameWeek": "9",
           "gameDate": "2020-11-05",
           "awayTeam": "GB",
           "homeTeam": "SF",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "GB",
           "homeScore": "17",
           "awayScore": "34"
         },
         {
           "gameId": "122",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "DEN",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "ATL",
           "homeScore": "34",
           "awayScore": "27"
         },
         {
           "gameId": "123",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "SEA",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "BUF",
           "homeScore": "44",
           "awayScore": "34"
         },
         {
           "gameId": "124",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "CHI",
           "homeTeam": "TEN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "TEN",
           "homeScore": "24",
           "awayScore": "17"
         },
         {
           "gameId": "125",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "BAL",
           "homeTeam": "IND",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "BAL",
           "homeScore": "10",
           "awayScore": "24"
         },
         {
           "gameId": "126",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "CAR",
           "homeTeam": "KC",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "KC",
           "homeScore": "33",
           "awayScore": "31"
         },
         {
           "gameId": "127",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "DET",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "MIN",
           "homeScore": "34",
           "awayScore": "20"
         },
         {
           "gameId": "128",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "NYG",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NYG",
           "homeScore": "20",
           "awayScore": "23"
         },
         {
           "gameId": "129",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "HOU",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "HOU",
           "homeScore": "25",
           "awayScore": "27"
         },
         {
           "gameId": "130",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "LV",
           "homeTeam": "LAC",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "LV",
           "homeScore": "26",
           "awayScore": "31"
         },
         {
           "gameId": "131",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "PIT",
           "homeTeam": "DAL",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "19",
           "awayScore": "24"
         },
         {
           "gameId": "132",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "MIA",
           "homeTeam": "ARI",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "MIA",
           "homeScore": "31",
           "awayScore": "34"
         },
         {
           "gameId": "133",
           "gameWeek": "9",
           "gameDate": "2020-11-08",
           "awayTeam": "NO",
           "homeTeam": "TB",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "NO",
           "homeScore": "3",
           "awayScore": "38"
         },
         {
           "gameId": "134",
           "gameWeek": "9",
           "gameDate": "2020-11-09",
           "awayTeam": "NE",
           "homeTeam": "NYJ",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "NE",
           "homeScore": "27",
           "awayScore": "30"
         },
         {
           "gameId": "135",
           "gameWeek": "10",
           "gameDate": "2020-11-12",
           "awayTeam": "IND",
           "homeTeam": "TEN",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "IND",
           "homeScore": "17",
           "awayScore": "34"
         },
         {
           "gameId": "136",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "HOU",
           "homeTeam": "CLE",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CLE",
           "homeScore": "10",
           "awayScore": "7"
         },
         {
           "gameId": "137",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "WAS",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "DET",
           "homeScore": "30",
           "awayScore": "27"
         },
         {
           "gameId": "138",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "JAC",
           "homeTeam": "GB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "GB",
           "homeScore": "24",
           "awayScore": "20"
         },
         {
           "gameId": "139",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "PHI",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NYG",
           "homeScore": "27",
           "awayScore": "17"
         },
         {
           "gameId": "140",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "CIN",
           "homeTeam": "PIT",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "PIT",
           "homeScore": "36",
           "awayScore": "10"
         },
         {
           "gameId": "141",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "TB",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "TB",
           "homeScore": "23",
           "awayScore": "46"
         },
         {
           "gameId": "142",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "DEN",
           "homeTeam": "LV",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "LV",
           "homeScore": "37",
           "awayScore": "12"
         },
         {
           "gameId": "143",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "LAC",
           "homeTeam": "MIA",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "MIA",
           "homeScore": "29",
           "awayScore": "21"
         },
         {
           "gameId": "144",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "BUF",
           "homeTeam": "ARI",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "ARI",
           "homeScore": "32",
           "awayScore": "30"
         },
         {
           "gameId": "145",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "SEA",
           "homeTeam": "LAR",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "LAR",
           "homeScore": "23",
           "awayScore": "16"
         },
         {
           "gameId": "146",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "SF",
           "homeTeam": "NO",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "27",
           "awayScore": "13"
         },
         {
           "gameId": "147",
           "gameWeek": "10",
           "gameDate": "2020-11-15",
           "awayTeam": "BAL",
           "homeTeam": "NE",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "NE",
           "homeScore": "23",
           "awayScore": "17"
         },
         {
           "gameId": "148",
           "gameWeek": "10",
           "gameDate": "2020-11-16",
           "awayTeam": "MIN",
           "homeTeam": "CHI",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "MIN",
           "homeScore": "13",
           "awayScore": "19"
         },
         {
           "gameId": "149",
           "gameWeek": "11",
           "gameDate": "2020-11-19",
           "awayTeam": "ARI",
           "homeTeam": "SEA",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "SEA",
           "homeScore": "28",
           "awayScore": "21"
         },
         {
           "gameId": "150",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "PHI",
           "homeTeam": "CLE",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CLE",
           "homeScore": "22",
           "awayScore": "17"
         },
         {
           "gameId": "151",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "GB",
           "homeTeam": "IND",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "IND",
           "homeScore": "34",
           "awayScore": "31"
         },
         {
           "gameId": "152",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "ATL",
           "homeTeam": "NO",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "NO",
           "homeScore": "24",
           "awayScore": "9"
         },
         {
           "gameId": "153",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "CIN",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "WAS",
           "homeScore": "20",
           "awayScore": "9"
         },
         {
           "gameId": "154",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "DET",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "CAR",
           "homeScore": "20",
           "awayScore": "0"
         },
         {
           "gameId": "155",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "PIT",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "PIT",
           "homeScore": "3",
           "awayScore": "27"
         },
         {
           "gameId": "156",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "TEN",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "TEN",
           "homeScore": "24",
           "awayScore": "30"
         },
         {
           "gameId": "157",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "NE",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "HOU",
           "homeScore": "27",
           "awayScore": "20"
         },
         {
           "gameId": "158",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "NYJ",
           "homeTeam": "LAC",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "LAC",
           "homeScore": "34",
           "awayScore": "28"
         },
         {
           "gameId": "159",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "DAL",
           "homeTeam": "MIN",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "DAL",
           "homeScore": "28",
           "awayScore": "31"
         },
         {
           "gameId": "160",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "KC",
           "homeTeam": "LV",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "KC",
           "homeScore": "31",
           "awayScore": "35"
         },
         {
           "gameId": "258",
           "gameWeek": "11",
           "gameDate": "2020-11-22",
           "awayTeam": "MIA",
           "homeTeam": "DEN",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "DEN",
           "homeScore": "20",
           "awayScore": "13"
         },
         {
           "gameId": "161",
           "gameWeek": "11",
           "gameDate": "2020-11-23",
           "awayTeam": "LAR",
           "homeTeam": "TB",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "162",
           "gameWeek": "12",
           "gameDate": "2020-11-26",
           "awayTeam": "HOU",
           "homeTeam": "DET",
           "gameTimeET": "12:30 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "163",
           "gameWeek": "12",
           "gameDate": "2020-11-26",
           "awayTeam": "WAS",
           "homeTeam": "DAL",
           "gameTimeET": "4:30 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "164",
           "gameWeek": "12",
           "gameDate": "2020-11-26",
           "awayTeam": "BAL",
           "homeTeam": "PIT",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "165",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "LV",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "166",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "LAC",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "167",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "NYG",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "168",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "TEN",
           "homeTeam": "IND",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "169",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "CAR",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "170",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "ARI",
           "homeTeam": "NE",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "171",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "MIA",
           "homeTeam": "NYJ",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "172",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "CLE",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "173",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "NO",
           "homeTeam": "DEN",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "174",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "SF",
           "homeTeam": "LAR",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "175",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "KC",
           "homeTeam": "TB",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "176",
           "gameWeek": "12",
           "gameDate": "2020-11-29",
           "awayTeam": "CHI",
           "homeTeam": "GB",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "177",
           "gameWeek": "12",
           "gameDate": "2020-11-30",
           "awayTeam": "SEA",
           "homeTeam": "PHI",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "178",
           "gameWeek": "13",
           "gameDate": "2020-12-03",
           "awayTeam": "DAL",
           "homeTeam": "BAL",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "179",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "NO",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "180",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "DET",
           "homeTeam": "CHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "181",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "CLE",
           "homeTeam": "TEN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "182",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "CIN",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "183",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "JAC",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "184",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "LV",
           "homeTeam": "NYJ",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "185",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "WAS",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "186",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "IND",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "187",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "LAR",
           "homeTeam": "ARI",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "188",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "NYG",
           "homeTeam": "SEA",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "189",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "PHI",
           "homeTeam": "GB",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "190",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "NE",
           "homeTeam": "LAC",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "191",
           "gameWeek": "13",
           "gameDate": "2020-12-06",
           "awayTeam": "DEN",
           "homeTeam": "KC",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "192",
           "gameWeek": "13",
           "gameDate": "2020-12-07",
           "awayTeam": "BUF",
           "homeTeam": "SF",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "193",
           "gameWeek": "14",
           "gameDate": "2020-12-10",
           "awayTeam": "NE",
           "homeTeam": "LAR",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "194",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "HOU",
           "homeTeam": "CHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "195",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "DAL",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "196",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "GB",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "197",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "KC",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "198",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "ARI",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "199",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "MIN",
           "homeTeam": "TB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "200",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "DEN",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "201",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "TEN",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "202",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "IND",
           "homeTeam": "LV",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "203",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "NYJ",
           "homeTeam": "SEA",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "204",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "NO",
           "homeTeam": "PHI",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "205",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "ATL",
           "homeTeam": "LAC",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "206",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "WAS",
           "homeTeam": "SF",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "207",
           "gameWeek": "14",
           "gameDate": "2020-12-13",
           "awayTeam": "PIT",
           "homeTeam": "BUF",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "208",
           "gameWeek": "14",
           "gameDate": "2020-12-14",
           "awayTeam": "BAL",
           "homeTeam": "CLE",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "209",
           "gameWeek": "15",
           "gameDate": "2020-12-17",
           "awayTeam": "LAC",
           "homeTeam": "LV",
           "gameTimeET": "8:20 PM",
           "tvStation": "FOX/NFL",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "210",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "BUF",
           "homeTeam": "DEN",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "211",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "CAR",
           "homeTeam": "GB",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "212",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "DET",
           "homeTeam": "TEN",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "213",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "HOU",
           "homeTeam": "IND",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "214",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "NYJ",
           "homeTeam": "LAR",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "215",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "TB",
           "homeTeam": "ATL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "216",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "NE",
           "homeTeam": "MIA",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "217",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "CHI",
           "homeTeam": "MIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "218",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "CLE",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "219",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "SEA",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "220",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "JAC",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "221",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "PHI",
           "homeTeam": "ARI",
           "gameTimeET": "4:05 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "222",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "KC",
           "homeTeam": "NO",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "223",
           "gameWeek": "15",
           "gameDate": "2020-12-20",
           "awayTeam": "SF",
           "homeTeam": "DAL",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "224",
           "gameWeek": "15",
           "gameDate": "2020-12-21",
           "awayTeam": "PIT",
           "homeTeam": "CIN",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "225",
           "gameWeek": "16",
           "gameDate": "2020-12-25",
           "awayTeam": "MIN",
           "homeTeam": "NO",
           "gameTimeET": "4:30 PM",
           "tvStation": "FOX/NFL",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "226",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "TB",
           "homeTeam": "DET",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "227",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "MIA",
           "homeTeam": "LV",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "228",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "CLE",
           "homeTeam": "NYJ",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "229",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "SF",
           "homeTeam": "ARI",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "230",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "DEN",
           "homeTeam": "LAC",
           "gameTimeET": "7:00 PM",
           "tvStation": "",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "231",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "ATL",
           "homeTeam": "KC",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "232",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "IND",
           "homeTeam": "PIT",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "233",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "CAR",
           "homeTeam": "WAS",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "234",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "CHI",
           "homeTeam": "JAC",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "235",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "NYG",
           "homeTeam": "BAL",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "236",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "CIN",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "237",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "LAR",
           "homeTeam": "SEA",
           "gameTimeET": "4:05 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "238",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "PHI",
           "homeTeam": "DAL",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "239",
           "gameWeek": "16",
           "gameDate": "2020-12-27",
           "awayTeam": "TEN",
           "homeTeam": "GB",
           "gameTimeET": "8:20 PM",
           "tvStation": "NBC",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "240",
           "gameWeek": "16",
           "gameDate": "2020-12-28",
           "awayTeam": "BUF",
           "homeTeam": "NE",
           "gameTimeET": "8:15 PM",
           "tvStation": "ESPN",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "241",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "MIA",
           "homeTeam": "BUF",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "242",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "GB",
           "homeTeam": "CHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "243",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "BAL",
           "homeTeam": "CIN",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "244",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "PIT",
           "homeTeam": "CLE",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "245",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "MIN",
           "homeTeam": "DET",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "246",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "JAC",
           "homeTeam": "IND",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "247",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "LAC",
           "homeTeam": "KC",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "248",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "NYJ",
           "homeTeam": "NE",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "249",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "DAL",
           "homeTeam": "NYG",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "250",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "WAS",
           "homeTeam": "PHI",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "251",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "ATL",
           "homeTeam": "TB",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "252",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "NO",
           "homeTeam": "CAR",
           "gameTimeET": "1:00 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "253",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "TEN",
           "homeTeam": "HOU",
           "gameTimeET": "1:00 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "254",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "LV",
           "homeTeam": "DEN",
           "gameTimeET": "4:25 PM",
           "tvStation": "CBS",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "255",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "ARI",
           "homeTeam": "LAR",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
         },
         {
           "gameId": "256",
           "gameWeek": "17",
           "gameDate": "2021-01-03",
           "awayTeam": "SEA",
           "homeTeam": "SF",
           "gameTimeET": "4:25 PM",
           "tvStation": "FOX",
           "winner": "",
           "homeScore": "0",
           "awayScore": "0"
        }]
     }
}

// Display data for the week selected
$("#getButton").click(displayData);

// All team info
var teams = [
        {
            abbr:"ARI",
            name:"Cardinals",
            imageURL:"images/Cardinals.png"
        }, 
        {
            abbr:"ATL",
            name:"Falcons",
            imageURL:"images/Falcons.png"
        },
        {
            abbr:"BAL",
            name:"Ravens",
            imageURL:"images/Ravens.png"
        },
        {
            abbr:"BUF",
            name:"Bills",
            imageURL:"images/Bills.png"
        },{
            abbr:"CAR",
            name:"Panthers",
            imageURL:"images/Panthers.png"
        },
        {
            abbr:"CHI",
            name:"Bears",
            imageURL:"images/Bears.png"
        },
        {
            abbr:"CIN",
            name:"Bengals",
            imageURL:"images/Bengals.png"
        },
        {
            abbr:"CLE",
            name:"Browns",
            imageURL:"images/Browns.png"
        },
        {
            abbr:"DAL",
            name:"Cowboys",
            imageURL:"images/Cowboys.png"
        },
        {
            abbr:"DEN",
            name:"Broncos",
            imageURL:"images/Broncos.png"
        },
        {
            abbr:"DET",
            name:"Lions",
            imageURL:"images/Lions.png"
        },
        {
            abbr:"GB",
            name:"Packers",
            imageURL:"images/Packers.png"
        },
        {
            abbr:"HOU",
            name:"Texans",
            imageURL:"images/Texans.png"
        },
        {
            abbr:"IND",
            name:"Colts",
            imageURL:"images/Colts.png"
        },
        {
            abbr:"JAC",
            name:"Jaguars",
            imageURL:"images/Jaguars.png"
        },
        {
            abbr:"KC",
            name:"Chiefs",
            imageURL:"images/Chiefs.png"
        },
        {
            abbr:"LAC",
            name:"Chargers",
            imageURL:"images/Chargers.png"
        },
        {
            abbr:"LAR",
            name:"Rams",
            imageURL:"images/Rams.png"
        },
        {
            abbr:"LV",
            name:"Raiders",
            imageURL:"images/Raiders.png"
        },
        {
            abbr:"MIA",
            name:"Dolphins",
            imageURL:"images/Dolphins.png"
        },
        {
            abbr:"MIN",
            name:"Vikings",
            imageURL:"images/Vikings.png"
        },
        {
            abbr:"NE",
            name:"Patriots",
            imageURL:"images/Patriots.png"
        },
        {
            abbr:"NO",
            name:"Saints",
            imageURL:"images/Saints.png"
        },
        {
            abbr:"NYG",
            name:"Giants",
            imageURL:"images/Giants.png"
        },
        {
            abbr:"NYJ",
            name:"Jets",
            imageURL:"images/Jets.png"
        },
        {
            abbr:"PHI",
            name:"Eagles",
            imageURL:"images/Eagles.png"
        },
        {
            abbr:"PIT",
            name:"Steelers",
            imageURL:"images/Steelers.png"
        },
         {
            abbr:"SEA",
            name:"Seahawks",
            imageURL:"images/Seahawks.png"
        },
        {
            abbr:"SF",
            name:"49ers",
            imageURL:"images/49ers.png"
        },
        {
            abbr:"TB",
            name:"Buccaneers",
            imageURL:"images/Bucs.png"
        },
        {
            abbr:"TEN",
            name:"Titans",
            imageURL:"images/Titans.png"
        },
        {
            abbr:"WAS",
            name:"Washington",
            imageURL:"images/Washington.png"
        },
        {
        	abbr:"TIE",
        	name:"Tie",
        	imageURL:"images/Tie.jpg"
        }
    ];

$(document).ready(getGameData);