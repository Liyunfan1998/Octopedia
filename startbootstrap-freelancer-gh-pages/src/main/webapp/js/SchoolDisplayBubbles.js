/**
 * Created by luke1998 on 2018/6/2.
 */
var chart = "apply";
var schoolNames = [{
    "value": "473",
    "label": "Harvard University (Cambridge, MA) Harvard",
    "short_name": "Harvard"
}, {
    "value": "474",
    "label": "Princeton University (Princeton, NJ) Princeton",
    "short_name": "Princeton"
}, {"value": "475", "label": "Yale University (New Haven, CT) Yale", "short_name": "Yale"}, {
    "value": "476",
    "label": "Columbia University (New York, NY) Columbia",
    "short_name": "Columbia"
}, {"value": "477", "label": "University of Chicago (Chicago, IL) UChicago", "short_name": "UChicago"}, {
    "value": "478",
    "label": "Massachusetts Institute of Technology (Cambridge, MA) MIT",
    "short_name": "MIT"
}, {"value": "479", "label": "Stanford University (Stanford, CA) Stanford", "short_name": "Stanford"}, {
    "value": "480",
    "label": "Duke University (Durham, NC) Duke",
    "short_name": "Duke"
}, {
    "value": "481",
    "label": "University of Pennsylvania (Philadelphia, PA) UPenn",
    "short_name": "UPenn"
}, {
    "value": "482",
    "label": "California Institute of Technology (Pasadena, CA) CalTech",
    "short_name": "CalTech"
}, {"value": "483", "label": "Dartmouth College (Hanover, NH) Dartmouth", "short_name": "Dartmouth"}, {
    "value": "484",
    "label": "Northwestern University (Evanston, IL) Northwestern",
    "short_name": "Northwestern"
}, {"value": "485", "label": "Johns Hopkins University (Baltimore, MD) JHU", "short_name": "JHU"}, {
    "value": "486",
    "label": "Washington University in St. Louis (St. Louis, MO) WashU",
    "short_name": "WashU"
}, {"value": "487", "label": "Brown University (Providence, RI) Brown", "short_name": "Brown"}, {
    "value": "488",
    "label": "Cornell University (Ithaca, NY) Cornell",
    "short_name": "Cornell"
}, {"value": "489", "label": "Rice University (Houston, TX) Rice", "short_name": "Rice"}, {
    "value": "490",
    "label": "University of Notre Dame (Notre Dame, IN) Notre Dame",
    "short_name": "Notre Dame"
}, {
    "value": "491",
    "label": "Vanderbilt University (Nashville, TN) Vanderbilt",
    "short_name": "Vanderbilt"
}, {"value": "492", "label": "Emory University (Atlanta, GA) Emory", "short_name": "Emory"}, {
    "value": "493",
    "label": "Georgetown University (Washington, DC) Georgetown",
    "short_name": "Georgetown"
}, {
    "value": "494",
    "label": "University of California - Berkeley (Berkeley, CA) UC Berkeley",
    "short_name": "UC Berkeley"
}, {"value": "495", "label": "Carnegie Mellon University (Pittsburgh, PA) CMU", "short_name": "CMU"}, {
    "value": "496",
    "label": "University of California - Los Angeles (Los Angeles, CA) UCLA",
    "short_name": "UCLA"
}, {
    "value": "497",
    "label": "University of Southern California (Los Angeles, CA) USC",
    "short_name": "USC"
}, {"value": "498", "label": "University of Virginia (Charlottesville, VA) UVA", "short_name": "UVA"}, {
    "value": "499",
    "label": "Wake Forest University (Winston-Salem, NC) Wake Forest",
    "short_name": "Wake Forest"
}, {"value": "500", "label": "Tufts University (Medford, MA) Tufts", "short_name": "Tufts"}, {
    "value": "501",
    "label": "University of Michigan - Ann Arbor (Ann Arbor, MI) UMich",
    "short_name": "UMich"
}, {
    "value": "502",
    "label": "University of North Carolina - Chapel Hill (Chapel Hill, NC) UNC",
    "short_name": "UNC"
}, {"value": "503", "label": "Boston College (Chestnut Hill, MA) BC", "short_name": "BC"}, {
    "value": "504",
    "label": "New York University (New York, NY) NYU",
    "short_name": "NYU"
}, {"value": "505", "label": "Brandeis University (Waltham, MA) Brandeis", "short_name": "Brandeis"}, {
    "value": "506",
    "label": "College of William and Mary (Williamsburg, VA) William & Mary",
    "short_name": "William & Mary"
}, {
    "value": "507",
    "label": "University of Rochester (Rochester, NY) Rochester",
    "short_name": "Rochester"
}, {
    "value": "508",
    "label": "Georgia Institute of Technology (Atlanta, GA) GA Tech",
    "short_name": "GA Tech"
}, {
    "value": "509",
    "label": "Case Western Reserve University (Cleveland, OH) Case",
    "short_name": "Case"
}, {"value": "510", "label": "Lehigh University (Bethlehem, PA) Lehigh", "short_name": "Lehigh"}, {
    "value": "511",
    "label": "University of California - Davis (Davis, CA) UC Davis",
    "short_name": "UC Davis"
}, {
    "value": "512",
    "label": "University of California - San Diego (La Jolla, CA) UCSD",
    "short_name": "UCSD"
}, {"value": "513", "label": "Rensselaer Polytechnic Institute (Troy, NY) RPI", "short_name": "RPI"}, {
    "value": "514",
    "label": "University of California - Santa Barbara (Santa Barbara, CA) UCSB",
    "short_name": "UCSB"
}, {
    "value": "515",
    "label": "University of Wisconsin - Madison (Madison, WI) Wisconsin",
    "short_name": "Wisconsin"
}, {
    "value": "516",
    "label": "University of California - Irvine (Irvine, CA) UC Irvine",
    "short_name": "UC Irvine"
}, {"value": "517", "label": "University of Miami (Coral Gables, FL) Miami", "short_name": "Miami"}, {
    "value": "518",
    "label": "Pennsylvania State University - University Park (University Park, PA) Penn State",
    "short_name": "Penn State"
}, {
    "value": "519",
    "label": "University of Illinois - Urbana-Champaign (Champaign, IL) Illinois",
    "short_name": "Illinois"
}, {
    "value": "520",
    "label": "University of Texas - Austin (Austin, TX) UT Austin",
    "short_name": "UT Austin"
}, {
    "value": "521",
    "label": "University of Washington (Seattle, WA) Washington",
    "short_name": "Washington"
}, {"value": "522", "label": "Yeshiva University (New York, NY) Yeshiva", "short_name": "Yeshiva"}, {
    "value": "523",
    "label": "Boston University (Boston, MA) BU",
    "short_name": "BU"
}, {"value": "524", "label": "Tulane University (New Orleans, LA) Tulane", "short_name": "Tulane"}, {
    "value": "525",
    "label": "Pepperdine University (Malibu, CA) Pepperdine",
    "short_name": "Pepperdine"
}, {
    "value": "526",
    "label": "University of Florida (Gainesville, FL) Florida",
    "short_name": "Florida"
}, {
    "value": "527",
    "label": "Northeastern University (Boston, MA) Northeastern",
    "short_name": "Northeastern"
}, {
    "value": "528",
    "label": "Ohio State University - Columbus (Columbus, Oh) Ohio State",
    "short_name": "Ohio State"
}, {"value": "529", "label": "Fordham University (New York, NY) Fordham", "short_name": "Fordham"}, {
    "value": "530",
    "label": "Southern Methodist University (Dallas, TX) SMU",
    "short_name": "SMU"
}, {"value": "531", "label": "Syracuse University (Syracuse, NY) Syracuse", "short_name": "Syracuse"}, {
    "value": "532",
    "label": "University of Maryland - College Park (College Park, MD) UMD",
    "short_name": "UMD"
}, {"value": "533", "label": "University of Pittsburgh (Pittsburgh, PA) Pitt", "short_name": "Pitt"}, {
    "value": "534",
    "label": "University of Connecticut (Storrs, CT) UConn",
    "short_name": "UConn"
}, {"value": "535", "label": "University of Georgia (Athens, GA) UGA", "short_name": "UGA"}, {
    "value": "536",
    "label": "Purdue University (West Lafayette, IN) Purdue",
    "short_name": "Purdue"
}, {
    "value": "537",
    "label": "Texas A&M University (College Station, TX) Texas A&M",
    "short_name": "Texas A&M"
}, {
    "value": "538",
    "label": "Worcester Polytechnic Institute (Worcester, MA) WPI",
    "short_name": "WPI"
}, {"value": "539", "label": "Brigham Young University (Provo, UT) BYU", "short_name": "BYU"}, {
    "value": "540",
    "label": "Clemson University (Clemson, SC) Clemson",
    "short_name": "Clemson"
}, {
    "value": "541",
    "label": "Rutgers, State University of New Jersey - New Brunswick (Piscataway, NJ) Rutgers",
    "short_name": "Rutgers"
}, {
    "value": "542",
    "label": "University of Minnesota - Twin Cities (Minneapolis, MN) U of Minnesota",
    "short_name": "U of Minnesota"
}, {"value": "543", "label": "Michigan State University (East Lansing, MI) MSU", "short_name": "MSU"}, {
    "value": "544",
    "label": "University of Iowa (Iowa City, IA) U Iowa",
    "short_name": "U Iowa"
}, {
    "value": "545",
    "label": "Virginia Polytechnic Institute and State University (Blacksburg, VA) VA Tech",
    "short_name": "VA Tech"
}, {
    "value": "546",
    "label": "Stevens Institute of Technology (Hoboken, NJ) Stevens",
    "short_name": "Stevens"
}, {"value": "547", "label": "University of Delaware (Newark, DE) UDel", "short_name": "UDel"}, {
    "value": "548",
    "label": "American University (Washington, DC) American",
    "short_name": "American"
}, {"value": "549", "label": "Baylor University (Waco, TX) Baylor", "short_name": "Baylor"}, {
    "value": "550",
    "label": "Colorado School of Mines (Golden, CO) Mines",
    "short_name": "Mines"
}, {
    "value": "551",
    "label": "SUNY College of Environmental Science and Forestry (Syracuse, NY) SUNY ESF",
    "short_name": "SUNY ESF"
}, {
    "value": "552",
    "label": "University of Alabama (Tuscaloosa, AL) Alabama",
    "short_name": "Alabama"
}, {
    "value": "553",
    "label": "University of California - Santa Cruz (Santa Cruz, CA) UCSC",
    "short_name": "UCSC"
}, {"value": "554", "label": "Clark University (Worcester, MA) Clark", "short_name": "Clark"}, {
    "value": "555",
    "label": "Drexel University (Philadelphia, PA) Drexel",
    "short_name": "Drexel"
}, {
    "value": "556",
    "label": "Indiana University - Bloomington (Bloomington, IN) Indiana",
    "short_name": "Indiana"
}, {
    "value": "557",
    "label": "Marquette University (Milwaukee, WI) Marquette",
    "short_name": "Marquette"
}, {"value": "558", "label": "University of Denver (Denver, CO) Denver U", "short_name": "Denver U"}, {
    "value": "559",
    "label": "University of Tulsa (Tulsa, OK) U Tulsa",
    "short_name": "U Tulsa"
}, {"value": "560", "label": "Auburn University (Auburn, AL) Auburn", "short_name": "Auburn"}, {
    "value": "561",
    "label": "Binghamton University - SUNY (Binghamton, NY) Binghamton",
    "short_name": "Binghamton"
}, {
    "value": "562",
    "label": "Miami University - Oxford (Oxford, OH) Miami OH",
    "short_name": "Miami OH"
}, {
    "value": "563",
    "label": "St. Louis University (St. Louis, MI) St. Louis U",
    "short_name": "St. Louis U"
}, {
    "value": "564",
    "label": "Stony Brook University - SUNY (Stony Brook, NY) Stony Brook",
    "short_name": "Stony Brook"
}, {
    "value": "565",
    "label": "Texas Christian University (Fort Worth, TX) Texas Christian",
    "short_name": "Texas Christian"
}, {
    "value": "566",
    "label": "University of San Diego (San Diego, CA) San Diego",
    "short_name": "San Diego"
}, {"value": "567", "label": "University of Vermont (Burlington, VT) UVM", "short_name": "UVM"}, {
    "value": "568",
    "label": "Florida State University (Tallahassee, FL) FSU",
    "short_name": "FSU"
}, {
    "value": "569",
    "label": "University of Colorado - Boulder (Boulder, CO) Colorado",
    "short_name": "Colorado"
}, {
    "value": "570",
    "label": "University of Massachusetts - Amherst (Amherst, MA) UMass",
    "short_name": "UMass"
}, {
    "value": "571",
    "label": "University of Missouri (Columbia, MO) Missouri",
    "short_name": "Missouri"
}, {
    "value": "572",
    "label": "Iowa State University (Ames, IA) Iowa State",
    "short_name": "Iowa State"
}, {
    "value": "573",
    "label": "University of California - Riverside (Riverside, CA) UC Riverside ",
    "short_name": "UC Riverside "
}, {
    "value": "574",
    "label": "University of Nebraska - Lincoln (Lincoln, NE) Nebraska",
    "short_name": "Nebraska"
}, {
    "value": "575",
    "label": "University of Oklahoma (Norman, OK) Oklahoma U",
    "short_name": "Oklahoma U"
}, {
    "value": "576",
    "label": "University of Tennessee (Knoxville, TN) Tennessee",
    "short_name": "Tennessee"
}, {
    "value": "577",
    "label": "Loyola University Chicago (Chicago, IL) Loyola U Chicago",
    "short_name": "Loyola U Chicago"
}, {
    "value": "578",
    "label": "North Carolina State University - Raleigh (Raleigh, NC) NC State",
    "short_name": "NC State"
}, {
    "value": "579",
    "label": "University at Buffalo - SUNY (Buffalo, NY) SUNY Buffalo",
    "short_name": "SUNY Buffalo"
}, {"value": "580", "label": "University of Kansas (Lawrence, KS) Kansas", "short_name": "Kansas"}, {
    "value": "581",
    "label": "University of New Hampshire (Durham, NH) UNH",
    "short_name": "UNH"
}, {
    "value": "582",
    "label": "University of San Francisco (San Francisco, CA) U San Fran",
    "short_name": "U San Fran"
}, {
    "value": "583",
    "label": "University of the Pacific (Stockton, CA) Pacific",
    "short_name": "Pacific"
}, {
    "value": "584",
    "label": "Illinois Institute of Technology (Chicago, IL) Illinois Tech",
    "short_name": "Illinois Tech"
}, {
    "value": "585",
    "label": "University of St. Thomas  (St. Paul, MN) St. Thomas",
    "short_name": "St. Thomas"
}, {"value": "586", "label": "Clarkson University (Potsdam, NY) Clarkson", "short_name": "Clarkson"}, {
    "value": "587",
    "label": "Rutgers, State University of New Jersey - Newark  (Newark, NJ) Rutgers",
    "short_name": "Rutgers"
}, {"value": "588", "label": "University of Dayton  (Dayton, OH) U Dayton", "short_name": "U Dayton"}, {
    "value": "589",
    "label": "University of Oregon (Eugene, OR) U Oregon",
    "short_name": "U Oregon"
}, {"value": "590", "label": "University of South Carolina (Columbia, SC) SC", "short_name": "SC"}, {
    "value": "591",
    "label": "Catholic University of America (Washington, DC) Catholic UA",
    "short_name": "Catholic UA"
}, {
    "value": "592",
    "label": "Duquesne University (Pittsburgh, PA) Duquesne",
    "short_name": "Duquesne"
}, {"value": "593", "label": "Howard University (Washington, DC) Howard", "short_name": "Howard"}, {
    "value": "594",
    "label": "Michigan Technological University  (Houghton, MI) Michigan Tech",
    "short_name": "Michigan Tech"
}, {"value": "595", "label": "University of Arizona (Tucson, AZ) Arizona", "short_name": "Arizona"}, {
    "value": "596",
    "label": "Missouri University of Science & Technology  (Rolla, MO) Missouri S&T",
    "short_name": "Missouri S&T"
}, {"value": "597", "label": "New School (New York, NY) New School", "short_name": "New School"}, {
    "value": "598",
    "label": "Temple University (Philadelphia, PA) Temple",
    "short_name": "Temple"
}, {
    "value": "599",
    "label": "University of Kentucky (Lexington, KY) UKentucky",
    "short_name": "UKentucky"
}, {"value": "600", "label": "University of Utah (Salt Lake City, UT) Utah", "short_name": "Utah"}, {
    "value": "601",
    "label": "Washington State University (Pullman, WA) Washington State",
    "short_name": "Washington State"
}, {"value": "602", "label": "Ohio University (Athens, OH) Ohio", "short_name": "Ohio"}, {
    "value": "603",
    "label": "Seton Hall University (South Orange, NJ) Seton Hall",
    "short_name": "Seton Hall"
}, {
    "value": "604",
    "label": "University at Albany - SUNY (Albany, NY) SUNY Albany",
    "short_name": "SUNY Albany"
}, {
    "value": "605",
    "label": "Colorado State University  (Fort Collins, CO) Colorado State",
    "short_name": "Colorado State"
}, {"value": "606", "label": "DePaul University (Chicago, IL) DePaul", "short_name": "DePaul"}, {
    "value": "607",
    "label": "Hofstra University (Hempstead, NY) Hofstra",
    "short_name": "Hofstra"
}, {
    "value": "608",
    "label": "Louisiana State University - Baton Rouge  (Baton Rouge, LA) LSU",
    "short_name": "LSU"
}, {"value": "609", "label": "University of Arkansas (Fayetteville, AR) UArk", "short_name": "UArk"}, {
    "value": "610",
    "label": "Arizona State University (Tempe, AZ) Arizona State",
    "short_name": "Arizona State"
}, {
    "value": "611",
    "label": "George Mason University (Fairfax, VA) George Mason",
    "short_name": "George Mason"
}, {
    "value": "612",
    "label": "Kansas State University (Manhattan, KS) Kansas State",
    "short_name": "Kansas State"
}, {
    "value": "613",
    "label": "New Jersey Institute of Technology (Newark, NJ) New Jersey IT",
    "short_name": "New Jersey IT"
}, {
    "value": "614",
    "label": "Oklahoma State University (Stillwater, OK) Oklahoma State",
    "short_name": "Oklahoma State"
}, {
    "value": "615",
    "label": "Oregon State University (Corvallis, OR) Oregon State",
    "short_name": "Oregon State"
}, {
    "value": "616",
    "label": "Polytechnic Institute of New York University  (Brooklyn, NY) NYU-Poly",
    "short_name": "NYU-Poly"
}, {
    "value": "617",
    "label": "University of Cincinnati (Cincinnati, OH) Cincinnati",
    "short_name": "Cincinnati"
}, {
    "value": "618",
    "label": "South Carolina State University  (Orangeburg, SC) SCSU",
    "short_name": "SCSU"
}, {
    "value": "619",
    "label": "St. John's University (Queens, NY) St. John's",
    "short_name": "St. John's"
}, {
    "value": "620",
    "label": "University of Illinois - Chicago  (Chicago, IL) U Illinois",
    "short_name": "U Illinois"
}, {"value": "621", "label": "University of Rhode Island (Kingston, RI) URI", "short_name": "URI"}, {
    "value": "622",
    "label": "St. John Fisher College  (Rochester, NY) SJFC",
    "short_name": "SJFC"
}, {
    "value": "623",
    "label": "University of Alabama - Birmingham  (Birmingham, AL) Alabama",
    "short_name": "Alabama"
}, {
    "value": "624",
    "label": "University of Mississippi (University, MS) Ole Miss",
    "short_name": "Ole Miss"
}, {
    "value": "625",
    "label": "University of Texas - Dallas (Richardson, TX) UTDallas",
    "short_name": "UTDallas"
}, {"value": "626", "label": "Adelphi University  (Garden City, NY) Adelphi", "short_name": "Adelphi"}, {
    "value": "627",
    "label": "Illinois State University (Normal, IL) Illinois State",
    "short_name": "Illinois State"
}, {
    "value": "628",
    "label": "University of Hawaii - Manoa  (Honolulu, HI) UHawaii",
    "short_name": "UHawaii"
}, {"value": "629", "label": "University of Maine (Orono, ME) UMaine", "short_name": "UMaine"}, {
    "value": "630",
    "label": "University of Wyoming (Laramie, WY) UWyo",
    "short_name": "UWyo"
}, {
    "value": "631",
    "label": "Florida Institute of Technology (Melbourne, FL) Florida Tech",
    "short_name": "Florida Tech"
}, {
    "value": "632",
    "label": "Maryville University of St. Louis (St. Louis, MI) Maryville",
    "short_name": "Maryville"
}, {
    "value": "633",
    "label": "Mississippi State University (Mississippi State, MS) MSState",
    "short_name": "MSState"
}, {
    "value": "634",
    "label": "University of Louisville (Louisville, KY) Louisville",
    "short_name": "Louisville"
}, {
    "value": "635",
    "label": "University of Maryland - Baltimore  (Baltimore, MD) UMBC",
    "short_name": "UMBC"
}, {"value": "636", "label": "San Diego State University (San Diego, CA) SDSU", "short_name": "SDSU"}, {
    "value": "637",
    "label": "Texas Tech University (Lubbock, TX) Texas Tech",
    "short_name": "Texas Tech"
}, {"value": "638", "label": "University of Idaho (Moscow, ID) UIdaho", "short_name": "UIdaho"}, {
    "value": "639",
    "label": "University of La Verne (La Verne, CA) La Verne",
    "short_name": "La Verne"
}, {"value": "640", "label": "West Virginia University (Morgantown, WV) WVU", "short_name": "WVU"}, {
    "value": "641",
    "label": "University of Massachusetts - Lowell  (Lowell, MA) UMass",
    "short_name": "UMass"
}, {"value": "642", "label": "University of North Dakota (Grand Forks, ND) UND", "short_name": "UND"}, {
    "value": "643",
    "label": "University of South Florida (Tampa, FL) USF",
    "short_name": "USF"
}, {
    "value": "644",
    "label": "Virginia Commonwealth University  (Richmond, VA) VCU",
    "short_name": "VCU"
}, {"value": "645", "label": "Biola University (La Mirada, CA) Biola", "short_name": "Biola"}, {
    "value": "646",
    "label": "Pace University (New York, NY) Pace",
    "short_name": "Pace"
}, {
    "value": "647",
    "label": "St. Mary's University of Minnesota (Winona, MN) St. Mary's Minn",
    "short_name": "St. Mary's Minn"
}, {"value": "648", "label": "University of Central Florida (Orlando, FL) UCF", "short_name": "UCF"}, {
    "value": "649",
    "label": "Utah State University  (Logan, UT) Utah State U",
    "short_name": "Utah State U"
}, {"value": "650", "label": "Azusa Pacific University (Azusa, CA) Azusa", "short_name": "Azusa"}, {
    "value": "651",
    "label": "Edgewood College  (Madison, WI) Edgewood",
    "short_name": "Edgewood"
}, {
    "value": "652",
    "label": "Southern Illinois University - Carbondale  (Carbondale, IL) Southern Illinois",
    "short_name": "Southern Illinois"
}, {
    "value": "653",
    "label": "University of Missouri - Kansas City  (Kansas City, MO) UMKC",
    "short_name": "UMKC"
}, {
    "value": "654",
    "label": "University of New Mexico (Albuquerque, NM) New Mexico",
    "short_name": "New Mexico"
}, {
    "value": "655",
    "label": "Ball State University (Muncie, IN) Ball State",
    "short_name": "Ball State"
}, {
    "value": "656",
    "label": "Bowling Green State University  (Bowling Green, OH) Bowling Green",
    "short_name": "Bowling Green"
}, {"value": "657", "label": "North Dakota State University (Fargo, ND) NDSU", "short_name": "NDSU"}, {
    "value": "658",
    "label": "University of Alabama - Huntsville  (Huntsville, AL) Alabama",
    "short_name": "Alabama"
}, {
    "value": "659",
    "label": "University of Houston  (Houston, TX) U of Houston",
    "short_name": "U of Houston"
}, {
    "value": "660",
    "label": "Andrews University  (Berrien Springs, MI) Andrews",
    "short_name": "Andrews"
}, {"value": "661", "label": "Ashland University (Ashland, OH) Ashland", "short_name": "Ashland"}, {
    "value": "662",
    "label": "Montana State University  (Bozeman, MT) Montana",
    "short_name": "Montana"
}, {
    "value": "663",
    "label": "New Mexico State University (Las Cruces, NM) NMSU",
    "short_name": "NMSU"
}, {"value": "664", "label": "Northern Illinois University (DeKalb, IL) NIU", "short_name": "NIU"}, {
    "value": "665",
    "label": "University of Colorado - Denver  (Denver, CO) UC Denver",
    "short_name": "UC Denver"
}, {
    "value": "666",
    "label": "University of Nevada - Reno  (Reno, NV) UN-Reno",
    "short_name": "UN-Reno"
}, {
    "value": "667",
    "label": "University of North Carolina - Greensboro (Greensboro, NC) UNC-Greensboro",
    "short_name": "UNC-Greensboro"
}, {
    "value": "668",
    "label": "Western Michigan University  (Kalamazoo, MI) WMich",
    "short_name": "WMich"
}, {"value": "669", "label": "Widener University (Chester, PA) Widener", "short_name": "Widener"}, {
    "value": "670",
    "label": "East Carolina University  (Greenville, NC) East Carolina",
    "short_name": "East Carolina"
}, {
    "value": "671",
    "label": "Louisiana Tech University (Ruston, LA) La Tech",
    "short_name": "La Tech"
}, {
    "value": "672",
    "label": "South Dakota State University (Brookings, SD) SD State",
    "short_name": "SD State"
}, {
    "value": "673",
    "label": "University of Montana  (Missoula, MT) U of Montana",
    "short_name": "U of Montana"
}, {
    "value": "674",
    "label": "University of North Carolina - Charlotte  (Charlotte, NC) UNC-Charlotte",
    "short_name": "UNC-Charlotte"
}, {"value": "675", "label": "University of South Dakota  (Vermillion, SD) USD", "short_name": "USD"}, {
    "value": "676",
    "label": "Villanova University (Villanova, PA) Villanova",
    "short_name": "Villanova"
}, {
    "value": "677",
    "label": "United States Military Academy at West Point (West Point, NY) West Point",
    "short_name": "West Point"
}, {
    "value": "678",
    "label": "United States Naval Academy (Annapolis, MD) Naval Academy",
    "short_name": "Naval Academy"
}, {
    "value": "679",
    "label": "United States Coast Guard Academy (New London, CT) Coast Guard Academy",
    "short_name": "Coast Guard Academy"
}, {
    "value": "681",
    "label": "United States Air Force Academy (Colorado Springs, CO) Air Force Academy",
    "short_name": "Air Force Academy"
}, {
    "value": "5856",
    "label": "Kent State University (Kent, OH) Kent State",
    "short_name": "Kent State"
}, {"value": "5857", "label": "Mills College (Oakland, CA) Mills", "short_name": "Mills"}, {
    "value": "5858",
    "label": "San Jose State University (San Jose, CA) San Jose State",
    "short_name": "San Jose State"
}, {
    "value": "5859",
    "label": "SUNY - New Paltz (New Paltz, NY) SUNY New Paltz",
    "short_name": "SUNY New Paltz"
}, {
    "value": "5860",
    "label": "California State University - Long Beach (Long Beach, CA) CSULB",
    "short_name": "CSULB"
}, {"value": "5861", "label": "College for Creative Studies  (Detroit, MI) CCS", "short_name": "CCS"}, {
    "value": "5862",
    "label": "Brooklyn College - CUNY (Brooklyn, NY) Brooklyn College",
    "short_name": "Brooklyn College"
}, {
    "value": "5863",
    "label": "City College - CUNY (New York, NY) CUNY City",
    "short_name": "CUNY City"
}, {
    "value": "6117",
    "label": "United States Merchant Marine Academy  (Kings Point, NY) Merchant Marine",
    "short_name": "Merchant Marine"
}, {"value": "6118", "label": "Hunter College - CUNY (New York, NY) Hunter", "short_name": "Hunter"}, {
    "value": "6119",
    "label": "Rochester Institute of Technology  (Rochester, NY) RIT",
    "short_name": "RIT"
}, {"value": "6120", "label": "Purchase College (Purchase, NY) Purchase", "short_name": "Purchase"}, {
    "value": "6121",
    "label": "Cooper Union (New York, NY) Cooper Union",
    "short_name": "Cooper Union"
}, {"value": "6122", "label": "Emerson College (Boston, MA) Emerson", "short_name": "Emerson"}, {
    "value": "6123",
    "label": "Rhode Island School of Design (RISD)  (Providence, RI) RISD",
    "short_name": "RISD"
}, {
    "value": "6124",
    "label": "School of the Art Institute of Chicago (Chicago, IL) SAIC",
    "short_name": "SAIC"
}, {
    "value": "6125",
    "label": "California Institute of the Arts  (Valencia, CA) Cal Arts",
    "short_name": "Cal Arts"
}, {
    "value": "6126",
    "label": "Maryland Institute College of Art (MICA) (Baltimore, MD) MICA",
    "short_name": "MICA"
}, {
    "value": "6127",
    "label": "California College of the Arts  (Oakland, CA) CCA",
    "short_name": "CCA"
}, {
    "value": "6128",
    "label": "Art Center College of Design  (Pasadena, CA) Art Center",
    "short_name": "Art Center"
}, {"value": "6129", "label": "School of Visual Arts  (New York, NY) SVA", "short_name": "SVA"}, {
    "value": "6130",
    "label": "Massachusetts College of Art  (Boston, MA) Mass Art",
    "short_name": "Mass Art"
}, {
    "value": "6131",
    "label": "Otis College of Art and Design  (Los Angeles, CA) Otis",
    "short_name": "Otis"
}, {"value": "6132", "label": "Pratt Institute (Brooklyn, NY) Pratt", "short_name": "Pratt"}, {
    "value": "6133",
    "label": "San Francisco Art Institute  (San Francisco, CA) SFAI",
    "short_name": "SFAI"
}, {
    "value": "6134",
    "label": "Minneapolis College of Art and Design (MCAD) (Minneapolis, MN) MCAD",
    "short_name": "MCAD"
}, {
    "value": "6135",
    "label": "New School - Parsons School of Design (New York, NY) New School",
    "short_name": "New School"
}, {
    "value": "6136",
    "label": "Herron School of Art & Design  (Indianapolis, IN) Herron",
    "short_name": "Herron"
}, {
    "value": "6137",
    "label": "University of the Arts (Philadelphia, PA) UArts",
    "short_name": "UArts"
}, {
    "value": "6138",
    "label": "Cleveland Institute of Art  (Cleveland, OH) Cleveland IA",
    "short_name": "Cleveland IA"
}, {
    "value": "6139",
    "label": "Pennsylvania Academy of the Fine Arts  (Philadelphia, PA) PAFA",
    "short_name": "PAFA"
}, {
    "value": "6140",
    "label": "Columbus College of Art and Design (CCAD)  (Columbus, OH) CCAD",
    "short_name": "CCAD"
}, {
    "value": "6141",
    "label": "Williams College (Williamstown, MA) Williams",
    "short_name": "Williams"
}, {"value": "6142", "label": "Amherst College (Amherst, MA) Amherst", "short_name": "Amherst"}, {
    "value": "6143",
    "label": "Swarthmore College (Swarthmore, PA) Swarthmore",
    "short_name": "Swarthmore"
}, {
    "value": "6144",
    "label": "Middlebury College (Middlebury, VT) Middlebury",
    "short_name": "Middlebury"
}, {"value": "6145", "label": "Pomona College (Claremont, CA) Pomona", "short_name": "Pomona"}, {
    "value": "6146",
    "label": "Bowdoin College (Brunswick, ME) Bowdoin",
    "short_name": "Bowdoin"
}, {
    "value": "6147",
    "label": "Wellesley College (Wellesley, MA) Wellesley",
    "short_name": "Wellesley"
}, {"value": "6148", "label": "Carleton College (Northfield, MN) Carleton", "short_name": "Carleton"}, {
    "value": "6149",
    "label": "Haverford College (Haverford, PA) Haverford",
    "short_name": "Haverford"
}, {
    "value": "6150",
    "label": "Claremont McKenna College (Claremont, CA) Claremont (CMC)",
    "short_name": "Claremont (CMC)"
}, {"value": "6151", "label": "Vassar College (Poughkeepsie, NY) Vassar", "short_name": "Vassar"}, {
    "value": "6152",
    "label": "Davidson College (Davidson, NC) Davidson",
    "short_name": "Davidson"
}, {"value": "6153", "label": "Harvey Mudd (Claremont, CA) Harvey Mudd", "short_name": "Harvey Mudd"}, {
    "value": "6154",
    "label": "Washington and Lee University (Lexington, VA) W&L U",
    "short_name": "W&L U"
}, {"value": "6155", "label": "Hamilton College (Clinton, NY) Hamilton", "short_name": "Hamilton"}, {
    "value": "6156",
    "label": "Wesleyan University (Middletown, CT) Wesleyan",
    "short_name": "Wesleyan"
}, {"value": "6157", "label": "Colby College (Waterville, ME) Colby", "short_name": "Colby"}, {
    "value": "6158",
    "label": "Colgate University (Hamilton, NY) Colgate",
    "short_name": "Colgate"
}, {"value": "6159", "label": "Smith College (Northampton, MA) Smith", "short_name": "Smith"}, {
    "value": "6160",
    "label": "Bates College (Lewiston, ME) Bates",
    "short_name": "Bates"
}, {"value": "6161", "label": "Grinnell College (Grinnell, IA) Grinnell", "short_name": "Grinnell"}, {
    "value": "6162",
    "label": "Macalester College (St. Paul, MN) Macalester",
    "short_name": "Macalester"
}, {"value": "6163", "label": "Scripps College (Claremont, CA) Scripps", "short_name": "Scripps"}, {
    "value": "6164",
    "label": "Bryn Mawr College (Bryn Mawr, PA) Bryn Mawr",
    "short_name": "Bryn Mawr"
}, {"value": "6165", "label": "Oberlin College (Oberlin, OH) Oberlin", "short_name": "Oberlin"}, {
    "value": "6166",
    "label": "Barnard College (New York, NY) Barnard",
    "short_name": "Barnard"
}, {
    "value": "6167",
    "label": "Colorado College (Colorado Springs, CO) ColoradoC",
    "short_name": "ColoradoC"
}, {
    "value": "6168",
    "label": "University of Richmond (Univ. of Richmond, VA) Richmond",
    "short_name": "Richmond"
}, {
    "value": "6169",
    "label": "Bucknell University (Lewisburg, PA) Bucknell",
    "short_name": "Bucknell"
}, {
    "value": "6170",
    "label": "College of the Holy Cross (Worcester, MA) Holy Cross",
    "short_name": "Holy Cross"
}, {"value": "6171", "label": "Kenyon College (Gambier, OH) Kenyon", "short_name": "Kenyon"}, {
    "value": "6172",
    "label": "Mount Holyoke College (South Hadley, MA) Holyoke",
    "short_name": "Holyoke"
}, {"value": "6173", "label": "Bard College (Annandale on Hudson, NY) Bard", "short_name": "Bard"}, {
    "value": "6174",
    "label": "Sewanee - University of the South (Sewanee, TN) Sewanee",
    "short_name": "Sewanee"
}, {"value": "6175", "label": "Trinity College (Hartford, CT) Trinity", "short_name": "Trinity"}, {
    "value": "6176",
    "label": "Lafayette College (Easton, PA) Lafayette",
    "short_name": "Lafayette"
}, {
    "value": "6177",
    "label": "Occidental College (Los Angeles, CA) Occidental",
    "short_name": "Occidental"
}, {
    "value": "6178",
    "label": "Connecticut College (New London, CT) ConnCollege",
    "short_name": "ConnCollege"
}, {"value": "6179", "label": "Union College (Schenectady, NY) Union", "short_name": "Union"}, {
    "value": "6180",
    "label": "Pitzer College (Claremont, CA) Pitzer",
    "short_name": "Pitzer"
}, {
    "value": "6181",
    "label": "Skidmore College (Saratoga Springs, NY) Skidmore",
    "short_name": "Skidmore"
}, {"value": "6182", "label": "Whitman College (Walla Walla, WA) Whitman", "short_name": "Whitman"}, {
    "value": "6183",
    "label": "Dickinson College (Carlisle, PA) Dickinson",
    "short_name": "Dickinson"
}, {
    "value": "6184",
    "label": "Franklin and Marshall College (Lancaster, PA) F&M",
    "short_name": "F&M"
}, {
    "value": "6185",
    "label": "Gettysburg College (Gettysburg, PA) Gettysburg",
    "short_name": "Gettysburg"
}, {"value": "6186", "label": "Denison University (Granville, OH) Denison", "short_name": "Denison"}, {
    "value": "6187",
    "label": "Furman University (Greenville, SC) Furman",
    "short_name": "Furman"
}, {
    "value": "6188",
    "label": "Soka University of America (Aliso Viejo, CA) Soka",
    "short_name": "Soka"
}, {"value": "6189", "label": "Centre College (Danville, KY) Centre", "short_name": "Centre"}, {
    "value": "6190",
    "label": "Rhodes College (Memphis, TN) Rhodes",
    "short_name": "Rhodes"
}, {"value": "6191", "label": "DePauw University (Greencastle, IN) DePauw", "short_name": "DePauw"}, {
    "value": "6192",
    "label": "St. Olaf College  (Northfield, MN) St. Olaf",
    "short_name": "St. Olaf"
}, {
    "value": "6193",
    "label": "Lawrence University (Appleton, WI) LawrenceU",
    "short_name": "LawrenceU"
}, {
    "value": "6194",
    "label": "St. Lawrence University (Canton, NY) St. Lawrence",
    "short_name": "St. Lawrence"
}, {"value": "6195", "label": "Wabash College (Crawfordsville, IN) Wabash", "short_name": "Wabash"}, {
    "value": "6196",
    "label": "Wheaton College  (Wheaton, IL) Wheaton",
    "short_name": "Wheaton"
}, {
    "value": "6197",
    "label": "Hobart and William Smith Colleges  (Geneva, NY) Hobart",
    "short_name": "Hobart"
}, {
    "value": "6198",
    "label": "Southwestern University  (Georgetown, TX) Southwestern",
    "short_name": "Southwestern"
}, {"value": "6199", "label": "Wheaton College (Norton, MA) Wheaton", "short_name": "Wheaton"}, {
    "value": "6443",
    "label": "Albany College of Pharmacy and Health Sciences (Albany, NY) ACPHS",
    "short_name": "ACPHS"
}, {
    "value": "6444",
    "label": "Massachusetts College of Pharmacy and Health Sciences (Boston, MA) MCPHSU",
    "short_name": "MCPHSU"
}, {"value": "6445", "label": "Juilliard School (New York, NY) Juilliard", "short_name": "Juilliard"}, {
    "value": "6446",
    "label": "Curtis Institute of Music (Philadelphia, PA) Curtis",
    "short_name": "Curtis"
}, {
    "value": "6447",
    "label": "New England Conservatory of Music (Boston, MA) NEC",
    "short_name": "NEC"
}, {
    "value": "6448",
    "label": "Oberlin College Conservatory (Oberlin, Ohio) Oberlin",
    "short_name": "Oberlin"
}, {"value": "6449", "label": "Manhattan School of Music (New York, NY) MSM", "short_name": "MSM"}, {
    "value": "6450",
    "label": "Cleveland Institute of Music (Cleveland, OH) CIM",
    "short_name": "CIM"
}, {
    "value": "6451",
    "label": "Mannes College The New School for Music (New York, NY) Mannes College",
    "short_name": "Mannes College"
}, {
    "value": "6452",
    "label": "San Francisco Conservatory of Music (San Francisco, CA) SF Conservatory",
    "short_name": "SF Conservatory"
}, {"value": "6458", "label": "Baruch College (New York, NY) Baruch", "short_name": "Baruch"}, {
    "value": "6460",
    "label": "CUNY - William E. Macaulay Honors College (New York, NY) Macaulay Honors",
    "short_name": "Macaulay Honors"
}, {
    "value": "6468",
    "label": "Muhlenberg College (Allentown, PA) Muhlenberg",
    "short_name": "Muhlenberg"
}, {
    "value": "6478",
    "label": "New York Institute of Technology (New York, NY) NYIT",
    "short_name": "NYIT"
}, {
    "value": "6482",
    "label": "University of the Sciences (Philadelphia, PA) USciences",
    "short_name": "USciences"
}, {
    "value": "6484",
    "label": "University at Geneseo - SUNY (Geneseo, NY) SUNY Geneseo",
    "short_name": "SUNY Geneseo"
}, {
    "value": "6491",
    "label": "The College of New Jersey - TCNJ (Ewing, NJ) College of NJ",
    "short_name": "College of NJ"
}, {"value": "6497", "label": "McGill University (Montreal, Canada) McGill", "short_name": "McGill"}, {
    "value": "6498",
    "label": "Queen's University (Kingston, Ontario, Canada) Queen's U",
    "short_name": "Queen's U"
}, {
    "value": "6499",
    "label": "University of Toronto (Toronto, Ontario, Canada) UToronto",
    "short_name": "UToronto"
}, {
    "value": "6500",
    "label": "University of Waterloo (Waterloo, Ontario, Canada) UWaterloo",
    "short_name": "UWaterloo"
}, {
    "value": "6501",
    "label": "University of Ottawa (Ottawa, Ontario, Canada) UOttawa",
    "short_name": "UOttawa"
}, {
    "value": "6502",
    "label": "McMaster University (Hamilton, Canada) McMaster",
    "short_name": "McMaster"
}, {
    "value": "6503",
    "label": "Dalhousie University (Nova Scotia, Canada) Dalhousie",
    "short_name": "Dalhousie"
}, {
    "value": "6504",
    "label": "University of Western Ontario (London, Ontario, Canada) Western Ontario",
    "short_name": "Western Ontario"
}, {
    "value": "6505",
    "label": "University of Alberta (Edmonton, Alberta, Canada) UAlberta",
    "short_name": "UAlberta"
}, {
    "value": "6506",
    "label": "University of Calgary (Calgary, Alberta, Canada) UCalgary",
    "short_name": "UCalgary"
}, {
    "value": "6507",
    "label": "University of British Columbia (British Columbia, Canada) UBC",
    "short_name": "UBC"
}, {"value": "6508", "label": "Oxford University (Oxford, England) Oxford", "short_name": "Oxford"}, {
    "value": "6509",
    "label": "Cambridge University (Cambridge, England) Cambridge",
    "short_name": "Cambridge"
}, {
    "value": "6510",
    "label": "George Washington University (Washington, DC) GWU",
    "short_name": "GWU"
}, {
    "value": "6640",
    "label": "University at Oneonta - SUNY (Oeonta, NY) SUNY Oneonta",
    "short_name": "SUNY Oneonta"
}, {"value": "6884", "label": "Babson College (Wellesley, MA) Babson", "short_name": "Babson"}, {
    "value": "6887",
    "label": "Queens College - CUNY (Queens, NY) Queens",
    "short_name": "Queens"
}, {
    "value": "7500",
    "label": "Ursinus College (Collegeville, PA) Ursinus",
    "short_name": "Ursinus"
}, {
    "value": "113092",
    "label": "California State University - East Bay (Hayward, CA) CSU East Bay",
    "short_name": "CSU East Bay"
}, {
    "value": "8142",
    "label": "Loyola Marymount University (Los Angeles, CA) LMU",
    "short_name": "LMU"
}, {"value": "8136", "label": "Bentley University (Waltham, MA) Bentley", "short_name": "Bentley"}, {
    "value": "9335",
    "label": "Spelman College (Atlanta, GA) Spelman",
    "short_name": "Spelman"
}, {"value": "9336", "label": "Morehouse College (Atlanta, GA) Morehouse", "short_name": "Morehouse"}, {
    "value": "9337",
    "label": "Fisk University (Nashville, TN) Fisk",
    "short_name": "Fisk"
}, {
    "value": "9338",
    "label": "Tuskegee University (Tuskegee, AL) Tuskegee",
    "short_name": "Tuskegee"
}, {
    "value": "9339",
    "label": "Xavier University of Louisiana (New Orleans, LA) XULA",
    "short_name": "XULA"
}, {"value": "9340", "label": "Claflin University (Orangeburg, SC) Claflin", "short_name": "Claflin"}, {
    "value": "9341",
    "label": "North Carolina A&T State University (Greensboro, NC) N.C. A&T",
    "short_name": "N.C. A&T"
}, {
    "value": "9342",
    "label": "Clark Atlanta University (Atlanta, GA) Clark Atlanta",
    "short_name": "Clark Atlanta"
}, {"value": "9343", "label": "Delaware State University (Dover, DE) DSU", "short_name": "DSU"}, {
    "value": "9344",
    "label": "Florida A&M University (Tallahassee, FL) FAMU",
    "short_name": "FAMU"
}, {
    "value": "9345",
    "label": "Dillard University (New Orleans, LA) Dillard",
    "short_name": "Dillard"
}, {
    "value": "9346",
    "label": "North Carolina Central University (Durham, NC) NCCU",
    "short_name": "NCCU"
}, {
    "value": "9347",
    "label": "Johnson C. Smith University (Charlotte, NC) JCSU",
    "short_name": "JCSU"
}, {"value": "9348", "label": "Tennessee State University (Nashville, TN) TSU", "short_name": "TSU"}, {
    "value": "9349",
    "label": "Tougaloo College (Tougaloo, MS) Tougaloo",
    "short_name": "Tougaloo"
}, {
    "value": "9350",
    "label": "Winston-Salem State University (Winston-Salem, NC) WSSU",
    "short_name": "WSSU"
}, {
    "value": "9351",
    "label": "Elizabeth City State University (Elizabeth City, NC) ECSU",
    "short_name": "ECSU"
}, {
    "value": "9352",
    "label": "Morgan State University (Baltimore, MD) Morgan",
    "short_name": "Morgan"
}, {
    "value": "9353",
    "label": "Alabama Agricultural and Mechanical University (Normal, AL) Alabama A&M",
    "short_name": "Alabama A&M"
}, {
    "value": "9354",
    "label": "Lincoln University (Lincoln University, PA) Lincoln",
    "short_name": "Lincoln"
}, {"value": "9355", "label": "Bennett College (Greensboro, NC) Bennett", "short_name": "Bennett"}, {
    "value": "9356",
    "label": "Oakwood University (Huntsville, AL) Oakwood",
    "short_name": "Oakwood"
}, {
    "value": "9357",
    "label": "Bowie State University (Bowie, MD) Bowie State",
    "short_name": "Bowie State"
}, {
    "value": "9358",
    "label": "Fayetteville State University (Fayetteville, NC) Fayetteville State",
    "short_name": "Fayetteville State"
}, {"value": "9359", "label": "Jackson State University (Jackson, MS) JSU", "short_name": "JSU"}, {
    "value": "9360",
    "label": "Kentucky State University (Frankfort, KY) KSU",
    "short_name": "KSU"
}, {"value": "9673", "label": "Ithaca College (Ithaca, NY) Ithaca", "short_name": "Ithaca"}, {
    "value": "10543",
    "label": "The University of Tennessee at Chattanooga (Chattanooga, TN) UT Chattanooga",
    "short_name": "UT Chattanooga"
}, {
    "value": "12515",
    "label": "Stevenson University (Stevenson, MD) Stevenson",
    "short_name": "Stevenson"
}, {
    "value": "24792",
    "label": "University of North Carolina - Wilmington (Wilmington, NC) UNC-Wilmington",
    "short_name": "UNC-Wilmington"
}, {
    "value": "13472",
    "label": "Santa Clara University (Santa Clara, CA) Santa Clara",
    "short_name": "Santa Clara"
}, {"value": "18015", "label": "Butler University Butler", "short_name": "Butler"}, {
    "value": "13742",
    "label": "Quinnipiac University (Hamden, CT) Quinnipiac",
    "short_name": "Quinnipiac"
}, {
    "value": "17003",
    "label": "University of Redlands (Redlands, CA) Redlands",
    "short_name": "Redlands"
}, {"value": "18016", "label": "Gonzaga University (Spokane, WA) Gonzaga", "short_name": "Gonzaga"}, {
    "value": "21571",
    "label": "Susquehanna University (Selinsgrove, PA) Susquehanna",
    "short_name": "Susquehanna"
}, {
    "value": "21572",
    "label": "University at Oswego - SUNY (Oswego, NY) SUNY Oswego",
    "short_name": "SUNY Oswego"
}, {
    "value": "21591",
    "label": "University of New Haven (West Haven, CT) New Haven",
    "short_name": "New Haven"
}, {"value": "22435", "label": "Xavier University (Cincinnati, OH) Xavier", "short_name": "Xavier"}, {
    "value": "22442",
    "label": "Grand Canyon University (Phoenix, AZ) GCU",
    "short_name": "GCU"
}, {"value": "22444", "label": "Elon University (Elon, NC) Elon ", "short_name": "Elon "}, {
    "value": "23660",
    "label": "Saint Augustine's University (Raleigh, NC) St. Augustine's ",
    "short_name": "St. Augustine's "
}, {
    "value": "23658",
    "label": "University of Texas - Arlington (Arlington, TX) UT Arlington ",
    "short_name": "UT Arlington "
}, {
    "value": "23655",
    "label": "University of Texas - San Antonio (San Antonio, TX) UT San Antonio",
    "short_name": "UT San Antonio"
}, {"value": "23653", "label": "Seattle University (Seattle, WA) SU", "short_name": "SU"}, {
    "value": "23654",
    "label": "University of Portland (Portland, OR) U of Portland ",
    "short_name": "U of Portland "
}, {
    "value": "23720",
    "label": "Full Sail University (Winter Park, FL) Full Sail",
    "short_name": "Full Sail"
}, {
    "value": "24133",
    "label": "Mercyhurst University (Erie, PA) Mercyhurst U",
    "short_name": "Mercyhurst U"
}, {
    "value": "24135",
    "label": "Lindenwood University (Saint Charles, MO) Lindenwood",
    "short_name": "Lindenwood"
}, {
    "value": "24136",
    "label": "University of Missouri - St. Louis (St Louis, MO) UMSL",
    "short_name": "UMSL"
}, {
    "value": "24357",
    "label": "California State University - Fullerton (Fullerton, CA) CSUF",
    "short_name": "CSUF"
}, {
    "value": "24358",
    "label": "Manhattan College (New York, NY) Manhattan College",
    "short_name": "Manhattan College"
}, {
    "value": "24789",
    "label": "Western Connecticut State University (Danbury, CT) Western CT ",
    "short_name": "Western CT "
}, {
    "value": "24909",
    "label": "Bridgewater State University (Bridgewater, MA) Bridgewater",
    "short_name": "Bridgewater"
}, {"value": "25593", "label": "Salem College (Winston-Salem, NC) Salem ", "short_name": "Salem "}, {
    "value": "25599",
    "label": "Franklin W. Olin College of Engineering (Needham, MA) Olin",
    "short_name": "Olin"
}, {
    "value": "187149",
    "label": "Rogue Community College (Grants Pass, OR) RCC",
    "short_name": "RCC"
}, {
    "value": "27150",
    "label": "California State Polytechnic University, Pomona (Pomona, CA) Cal Poly Pomona",
    "short_name": "Cal Poly Pomona"
}, {
    "value": "27151",
    "label": "California Polytechnic State University, San Luis Obispo (San Luis Obispo, CA) Cal Poly",
    "short_name": "Cal Poly"
}, {"value": "28816", "label": "Weber State University (Ogden, UT) Weber", "short_name": "Weber"}, {
    "value": "28819",
    "label": "Utah Valley University (Orem, Utah) UVU",
    "short_name": "UVU"
}, {
    "value": "28820",
    "label": "Snow College (Ephraim, Utah) Snow College ",
    "short_name": "Snow College "
}, {"value": "28821", "label": "Dixie State University (St George, UT) DSU", "short_name": "DSU"}, {
    "value": "28822",
    "label": "Southern Utah University (Cedar City, UT) SUU",
    "short_name": "SUU"
}, {
    "value": "28825",
    "label": "Brigham Young University - Idaho (Rexburg, ID) BYU-Idaho",
    "short_name": "BYU-Idaho"
}, {
    "value": "28839",
    "label": "Brigham Young University - Hawaii (Laie, HI) BYU-Hawaii ",
    "short_name": "BYU-Hawaii "
}, {
    "value": "29187",
    "label": "Montclair State University (Montclair, NJ) Montclair State",
    "short_name": "Montclair State"
}, {"value": "30487", "label": "Reed College (Portland, OR) Reed", "short_name": "Reed"}, {
    "value": "33483",
    "label": "Stockton University (Galloway Township, NJ) Stockton ",
    "short_name": "Stockton "
}, {
    "value": "33478",
    "label": "Albion College (Albion, MI) Albion College",
    "short_name": "Albion College"
}, {
    "value": "31174",
    "label": "Simpson College (Indianola, Iowa) Simpson ",
    "short_name": "Simpson "
}, {"value": "31966", "label": "Carroll University (Waukesha, WI) Caroll", "short_name": "Caroll"}, {
    "value": "31994",
    "label": "Kentucky Wesleyan College (Owensboro, KY) KWC",
    "short_name": "KWC"
}, {
    "value": "32189",
    "label": "Eastern Kentucky University (Richmond, KY) EKU",
    "short_name": "EKU"
}, {"value": "32387", "label": "SRK Institute of Technology (India) SRKIT", "short_name": "SRKIT"}, {
    "value": "32391",
    "label": "Saint Joseph\u2019s University (Philadelphia, PA) SJU",
    "short_name": "SJU"
}, {
    "value": "32605",
    "label": "Cedar Crest College (Allentown, Pennsylvania) Cedar Crest",
    "short_name": "Cedar Crest"
}, {
    "value": "32606",
    "label": "University of North Florida (Jacksonville, FL) UNF",
    "short_name": "UNF"
}, {"value": "32623", "label": "Sul Ross State University (Alpine, TX) SRSU", "short_name": "SRSU"}, {
    "value": "32898",
    "label": "Ripon College (Ripon, WI) Ripon College",
    "short_name": "Ripon College"
}, {
    "value": "32899",
    "label": "Earlham College (Richmond, IN) Earlham College ",
    "short_name": "Earlham College "
}, {
    "value": "32900",
    "label": "University of Michigan - Dearborn (Dearborn, MI) UMich - Dearborn ",
    "short_name": "UMich - Dearborn "
}, {
    "value": "32903",
    "label": "Texas State University (San Marcos, TX) Texas State",
    "short_name": "Texas State"
}, {
    "value": "32911",
    "label": "Milwaukee School of Engineering (Milwaukee, WI) MSOE",
    "short_name": "MSOE"
}, {
    "value": "32913",
    "label": "Illinois College (Jacksonville, IL) Illinois College",
    "short_name": "Illinois College"
}, {
    "value": "33473",
    "label": "Baker College of Allen Park (Allen Park, MI) Baker - Allen Park",
    "short_name": "Baker - Allen Park"
}, {
    "value": "33474",
    "label": "Northern Arizona University (Flagstaff, AZ) NAU",
    "short_name": "NAU"
}, {
    "value": "33482",
    "label": "Niagara University (Lewiston, NY) Niagara Univeristy",
    "short_name": "Niagara Univeristy"
}, {"value": "33484", "label": "Calvin College (Grand Rapis, MI) Calvin ", "short_name": "Calvin "}, {
    "value": "33485",
    "label": "Florida Southern College (Lakeland, FL) FL Southern",
    "short_name": "FL Southern"
}, {"value": "33486", "label": "Thomas College (Waterville, ME) Thomas", "short_name": "Thomas"}, {
    "value": "33491",
    "label": "Spartan College of Aeronautics and Technology (Tulsa, OK) Spartan",
    "short_name": "Spartan"
}, {
    "value": "33503",
    "label": "Florida Memorial University (Miami Gardens, FL) Florida Memorial",
    "short_name": "Florida Memorial"
}, {
    "value": "33700",
    "label": "Prairie View A&M University (Prairie View, TX) PVAMU",
    "short_name": "PVAMU"
}, {
    "value": "33701",
    "label": "Fairleigh Dickinson University (Teaneck, NJ) FDU",
    "short_name": "FDU"
}, {
    "value": "33718",
    "label": "Concordia University - Portland (Portland, OR) CU - Portland ",
    "short_name": "CU - Portland "
}, {
    "value": "33721",
    "label": "Academy of Art University (San Francisco, CA) Academy Art",
    "short_name": "Academy Art"
}, {
    "value": "33738",
    "label": "Miami Dade College (Miami, FL) MD College",
    "short_name": "MD College"
}, {"value": "33930", "label": "Carroll College (Helena, MT)  Carroll ", "short_name": "Carroll "}, {
    "value": "33937",
    "label": "Fortis College Fortis",
    "short_name": "Fortis"
}, {
    "value": "33938",
    "label": "Stevens\u2013Henager College (Ogden, UT) Stevens\u2013Henager",
    "short_name": "Stevens\u2013Henager"
}, {"value": "33939", "label": "Drake University (Des Moines, IA) Drake ", "short_name": "Drake "}, {
    "value": "33962",
    "label": "DeVry University (Downers Grove, IL) Devry ",
    "short_name": "Devry "
}, {
    "value": "34576",
    "label": "Otterbein University (Westerville, OH) Otterbein",
    "short_name": "Otterbein"
}, {"value": "34580", "label": "Ohio Valley University (Vienna, WV) OVU", "short_name": "OVU"}, {
    "value": "34581",
    "label": "California State University - Northridge (Los Angeles, CA) CSUN",
    "short_name": "CSUN"
}, {
    "value": "34583",
    "label": "Eastern Connecticut State University (Willimantic, CT) Eastern CT",
    "short_name": "Eastern CT"
}, {
    "value": "34585",
    "label": "Houston Community College (Houston, TX) Houston CC",
    "short_name": "Houston CC"
}, {"value": "38939", "label": "Chestnut Hill College (Philadelphia, PA) CHC", "short_name": "CHC"}, {
    "value": "35306",
    "label": "Finger Lakes Community College (Canandaigua, NY) FLCC",
    "short_name": "FLCC"
}, {
    "value": "35309",
    "label": "Stark State College (Jackson Township, OH) Stark State",
    "short_name": "Stark State"
}, {"value": "35312", "label": "Kaplan University (Davenport, IA) Kaplan", "short_name": "Kaplan"}, {
    "value": "35314",
    "label": "The Community College of Baltimore County (Baltimore, MD) CCBC",
    "short_name": "CCBC"
}, {
    "value": "35315",
    "label": "Flagler College (St. Augustine, FL) Flagler",
    "short_name": "Flagler"
}, {
    "value": "35316",
    "label": "Long Island University (Brookville, NY) LIU Post",
    "short_name": "LIU Post"
}, {
    "value": "35317",
    "label": "Long Island University - Brooklyn (Brooklyn, NY) LIU Brooklyn",
    "short_name": "LIU Brooklyn"
}, {
    "value": "35322",
    "label": "Hillsborough Community College (Tampa, FL) HCC",
    "short_name": "HCC"
}, {"value": "35324", "label": "Marlboro College (Marlboro, VT) Marlboro", "short_name": "Marlboro"}, {
    "value": "35325",
    "label": "Lewis-Clark State College (Lewiston, ID) LCSC",
    "short_name": "LCSC"
}, {
    "value": "35326",
    "label": "San Francisco State University (San Francisco, CA) SFSU",
    "short_name": "SFSU"
}, {
    "value": "36903",
    "label": "Baton Rouge Community College (Baton Rouge, LA) Baton Rouge CC",
    "short_name": "Baton Rouge CC"
}, {
    "value": "36904",
    "label": "Florida Gulf Coast University (Fort Myers, FL) FGCU",
    "short_name": "FGCU"
}, {
    "value": "36907",
    "label": "University of North Carolina - Asheville (Asheville, NC) UNC Asheville",
    "short_name": "UNC Asheville"
}, {
    "value": "35831",
    "label": "University of Great Falls (Great Falls, MT) UGF",
    "short_name": "UGF"
}, {
    "value": "35833",
    "label": "Capital University (Bexley, OH) Capital  ",
    "short_name": "Capital  "
}, {
    "value": "35835",
    "label": "Art Institute of Pittsburgh - Online Division (Pittsburgh, PA) AIPOD",
    "short_name": "AIPOD"
}, {
    "value": "35836",
    "label": "Southern Connecticut State University (New Haven, CT) Southern CT",
    "short_name": "Southern CT"
}, {
    "value": "35846",
    "label": "Broward College (Fort Lauderdale, FL) Broward ",
    "short_name": "Broward "
}, {
    "value": "35851",
    "label": "Stephen F. Austin State University (Nacogdoches, TX) SFA ",
    "short_name": "SFA "
}, {
    "value": "35858",
    "label": "High Point University (High Point, NC) High Point",
    "short_name": "High Point"
}, {"value": "35867", "label": "Saint Louis University (St. Louis, MO) SLU", "short_name": "SLU"}, {
    "value": "35969",
    "label": "Florida International University (Miami, FL) FIU",
    "short_name": "FIU"
}, {
    "value": "36499",
    "label": "Liberty University (Lynchburg, VA) Liberty",
    "short_name": "Liberty"
}, {
    "value": "36502",
    "label": "University of Technology, Jamaica (Kingston, JA) UTech - Jamaica",
    "short_name": "UTech - Jamaica"
}, {
    "value": "36758",
    "label": "Nebraska Wesleyan University (Lincoln, NE) NWU",
    "short_name": "NWU"
}, {
    "value": "36759",
    "label": "California State University - Monterey Bay (Seaside, CA) CSUMB",
    "short_name": "CSUMB"
}, {
    "value": "36760",
    "label": "California State University, Chico (Chico, CA) CSU Chico",
    "short_name": "CSU Chico"
}, {
    "value": "36763",
    "label": "The Art Institute of Las Vegas (Las Vegas, NV) AI - Las Vegas ",
    "short_name": "AI - Las Vegas "
}, {
    "value": "36897",
    "label": "Fashion Institute of Technology (New York, NY) FIT",
    "short_name": "FIT"
}, {
    "value": "37057",
    "label": "Humboldt State University (Arcata, CA)  Humboldt",
    "short_name": "Humboldt"
}, {
    "value": "37069",
    "label": "University of Alaska Anchorage (Anchorage, AK) UAA",
    "short_name": "UAA"
}, {"value": "37176", "label": "Minnesota State University (Mankato, MN) MSU", "short_name": "MSU"}, {
    "value": "37352",
    "label": "Texas A&M University - Kingsville (Kingsville, TX) Texas A&M Kingsville",
    "short_name": "Texas A&M Kingsville"
}, {
    "value": "37624",
    "label": "Argosy University - Phoenix (Phoenix, AZ) Argosy - Phoenix ",
    "short_name": "Argosy - Phoenix "
}, {"value": "37621", "label": "Sweet Briar College (Sweet Briar, VA) SBC", "short_name": "SBC"}, {
    "value": "37674",
    "label": "University of Advancing Technology (Tempe, AZ) UAT",
    "short_name": "UAT"
}, {"value": "37809", "label": "Portland State University (Portland, OR) PSU", "short_name": "PSU"}, {
    "value": "38133",
    "label": "Indiana Institute of Technology (Fort Wayne, IN) Indiana Tech",
    "short_name": "Indiana Tech"
}, {
    "value": "38134",
    "label": "Chatham University (Pittsburgh, PA) Chatham",
    "short_name": "Chatham"
}, {
    "value": "38135",
    "label": "Seminole State College (Seminole, OK) Seminole State ",
    "short_name": "Seminole State "
}, {
    "value": "38136",
    "label": "Oklahoma State University Institute of Technology (Okmulgee, OK) OSUIT",
    "short_name": "OSUIT"
}, {
    "value": "38137",
    "label": "The Art Institute of Dallas (Dallas, TX) AI - Dallas",
    "short_name": "AI - Dallas"
}, {"value": "38138", "label": "Virginia College (Spartanburg, SC) VC", "short_name": "VC"}, {
    "value": "38371",
    "label": "MiraCosta College (Oceanside, CA) MiraCosta ",
    "short_name": "MiraCosta "
}, {
    "value": "38379",
    "label": "Sam Houston State University (Huntsville, TX) SHSU",
    "short_name": "SHSU"
}, {
    "value": "38370",
    "label": "Mount Saint Mary College (Newburgh, NY) MSMC ",
    "short_name": "MSMC "
}, {
    "value": "38377",
    "label": "University of West Florida (Pensacola, FL) UWF",
    "short_name": "UWF"
}, {
    "value": "38380",
    "label": "Northwestern State University (Natchitoches, LA) NSULA",
    "short_name": "NSULA"
}, {
    "value": "38382",
    "label": "Molloy College (Rockville Centre, NY) Molloy",
    "short_name": "Molloy"
}, {
    "value": "38389",
    "label": "Oklahoma Baptist University (Shawnee, OK) OKBU",
    "short_name": "OKBU"
}, {"value": "38488", "label": "Valencia College (Orlando, FL) Valencia", "short_name": "Valencia"}, {
    "value": "38495",
    "label": "University of Central Missouri (Warrensburg, MO) UCMO",
    "short_name": "UCMO"
}, {
    "value": "38497",
    "label": "Lewis & Clark College (Portland, OR) Lewis & Clark",
    "short_name": "Lewis & Clark"
}, {
    "value": "38515",
    "label": "Washington College (Chestertown, MD)  Wash Coll",
    "short_name": "Wash Coll"
}, {
    "value": "38516",
    "label": "California State University - Dominguez Hills (Carson, CA) CSUDH",
    "short_name": "CSUDH"
}, {
    "value": "38519",
    "label": "National American University (Rapid City, SD) NAU",
    "short_name": "NAU"
}, {
    "value": "38936",
    "label": "American Public University Systems (Charles Town, WV) AMU",
    "short_name": "AMU"
}, {
    "value": "38938",
    "label": "Chesapeake College (Wye Mills, MD) Chesapeake ",
    "short_name": "Chesapeake "
}, {"value": "38946", "label": "Stetson University (DeLand, FL) Stetson ", "short_name": "Stetson "}, {
    "value": "39281",
    "label": "Fullerton College (Fullerton, CA) Fullerton",
    "short_name": "Fullerton"
}, {
    "value": "39282",
    "label": "The Art Institute of San Diego (San Diego, CA) AI San Diego",
    "short_name": "AI San Diego"
}, {
    "value": "39283",
    "label": "Lee University (Cleveland, TN) Lee University",
    "short_name": "Lee University"
}, {
    "value": "39285",
    "label": "University of New Orleans (New Orleans, LA) UNO",
    "short_name": "UNO"
}, {
    "value": "39286",
    "label": "Fort Valley State University (Fort Valley, GA) FVSU",
    "short_name": "FVSU"
}, {
    "value": "39289",
    "label": "Columbus Technical College (Columbus, GA)  Columbus Tech",
    "short_name": "Columbus Tech"
}, {
    "value": "39290",
    "label": "Valdosta State University (Valdosta, GA) Valdosta State ",
    "short_name": "Valdosta State "
}, {"value": "39312", "label": "New Saint Andrews College (Moscow, ID) NSA", "short_name": "NSA"}, {
    "value": "39314",
    "label": "Massachusetts College of Liberal Arts (North Adams, MA) MCLA",
    "short_name": "MCLA"
}, {
    "value": "39315",
    "label": "Kwame Nkrumah University of Science and Technology (Ghana) KNUST",
    "short_name": "KNUST"
}, {"value": "39316", "label": "University of Phoenix (Tempe, AZ) Phoenix", "short_name": "Phoenix"}, {
    "value": "39360",
    "label": "South Dakota School of Mines and Technology (Rapid City, SD) SDSM&T",
    "short_name": "SDSM&T"
}, {
    "value": "39361",
    "label": "Davenport University (Grand Rapids, MI) Davenport ",
    "short_name": "Davenport "
}, {
    "value": "39529",
    "label": "University of Maine - Presque Isle (Presque Isle, ME) UMPI",
    "short_name": "UMPI"
}, {
    "value": "39532",
    "label": "Indiana University - Purdue University Fort Wayne (Fort Wayne, IN) IPFW",
    "short_name": "IPFW"
}, {
    "value": "39533",
    "label": "Ivy Tech Community College (Fort Wayne, IN) Ivy Tech",
    "short_name": "Ivy Tech"
}, {"value": "39534", "label": "Taylor University (Upland, IN) Taylor ", "short_name": "Taylor "}, {
    "value": "39535",
    "label": "University of Saint Francis (Fort Wayne, IN) St. Francis",
    "short_name": "St. Francis"
}, {"value": "39538", "label": "University of Tampa (Tampa, FL) Tampa", "short_name": "Tampa"}, {
    "value": "39594",
    "label": "Vet Tech Institute of Houston (Houston, TX) VT Institute Houston",
    "short_name": "VT Institute Houston"
}, {
    "value": "39733",
    "label": "The College of Saint Rose (Albany, NY) St. Rose",
    "short_name": "St. Rose"
}, {
    "value": "39735",
    "label": "Centenary College (Hackettstown, NJ) Centenary ",
    "short_name": "Centenary "
}, {"value": "39736", "label": "Tidewater Community College (Norfolk, VA) TCC", "short_name": "TCC"}, {
    "value": "39756",
    "label": "Ohio Northern University (Ada, OH) ONU",
    "short_name": "ONU"
}, {
    "value": "39887",
    "label": "Belmont University (Nashville, TN) Belmont ",
    "short_name": "Belmont "
}, {
    "value": "39907",
    "label": "Indiana University South Bend (South Bend, IN) IUSB ",
    "short_name": "IUSB "
}, {
    "value": "39912",
    "label": "Florida State College at Jacksonville (Jacksonville, FL) FSCJ",
    "short_name": "FSCJ"
}, {
    "value": "40050",
    "label": "St. Catherine University (Saint Paul, MN) St. Kate's",
    "short_name": "St. Kate's"
}, {
    "value": "40125",
    "label": "Southeastern Community College (Whiteville, NC) SCC ",
    "short_name": "SCC "
}, {
    "value": "40282",
    "label": "Jacksonville State University (Jacksonville, AL) JSU",
    "short_name": "JSU"
}, {"value": "40283", "label": "East Central University (Ada, OK) ECU ", "short_name": "ECU "}, {
    "value": "40287",
    "label": "University of New Mexico - Gallup (Gallup, NM) UNM - Gallup",
    "short_name": "UNM - Gallup"
}, {
    "value": "40288",
    "label": "University of New Mexico - Valencia (Los Lunas, NM) UNM - Valencia",
    "short_name": "UNM - Valencia"
}, {
    "value": "40289",
    "label": "University of New Mexico - Taos (Ranchos de Taos, NM) UNM - Taos",
    "short_name": "UNM - Taos"
}, {
    "value": "40291",
    "label": "University of New Mexico - Los Alamos (Los Alamos, NM) UNM - Los Alamos",
    "short_name": "UNM - Los Alamos"
}, {
    "value": "40293",
    "label": "Southern New Hampshire University (Manchester, NH) SNHU",
    "short_name": "SNHU"
}, {
    "value": "40295",
    "label": "Boise State University (Boise, ID) Boise State",
    "short_name": "Boise State"
}, {
    "value": "40297",
    "label": "Reinhardt University (Waleska, GA) Reinhardt",
    "short_name": "Reinhardt"
}, {
    "value": "40308",
    "label": "Elmhurst College (Elmhurst, IL) Elmhurst ",
    "short_name": "Elmhurst "
}, {
    "value": "40300",
    "label": "University of California - Merced (Merced, CA) UC Merced",
    "short_name": "UC Merced"
}, {
    "value": "40430",
    "label": "Thomas Aquinas College (Santa Paula, CA) Thomas Aquinas ",
    "short_name": "Thomas Aquinas "
}, {
    "value": "40431",
    "label": "Chowan University (Murfreesboro, NC) Chowan",
    "short_name": "Chowan"
}, {
    "value": "40432",
    "label": "Southeast Missouri State University (Cape Girardeau, MO) SMSU",
    "short_name": "SMSU"
}, {
    "value": "40590",
    "label": "West Virginia University - Parkersburg (Parkersburg, WV) WVU Parkersburg",
    "short_name": "WVU Parkersburg"
}, {
    "value": "40591",
    "label": "Webster University (Saint Louis, MO) Webster",
    "short_name": "Webster"
}, {
    "value": "40592",
    "label": "University of Maryland University College (Adelphi, MD) UMUC",
    "short_name": "UMUC"
}, {
    "value": "40891",
    "label": "Carrington College - Mesa (Mesa, AZ) Carrington - Mesa ",
    "short_name": "Carrington - Mesa "
}, {
    "value": "40814",
    "label": "North Hennepin Community College (Brooklyn Park, MN) NHCC",
    "short_name": "NHCC"
}, {
    "value": "40890",
    "label": "Agnes Scott College (Decatur, GA) Agnes Scott",
    "short_name": "Agnes Scott"
}, {
    "value": "40893",
    "label": "Columbia College Chicago (Chicago, IL) Columbia Chicago",
    "short_name": "Columbia Chicago"
}, {"value": "40897", "label": "Concordia University Irvine (Irvine, CA)  CUI", "short_name": "CUI"}, {
    "value": "41126",
    "label": "Radford University (Radford, VA) Radford",
    "short_name": "Radford"
}, {"value": "41114", "label": "University of South Alabama (Mobile, AL) USA", "short_name": "USA"}, {
    "value": "41117",
    "label": "Texas Southern University (Houston, TX) Texas Southern",
    "short_name": "Texas Southern"
}, {
    "value": "41119",
    "label": "College of Biblical Studies (Houston, TX) CBS Houston",
    "short_name": "CBS Houston"
}, {
    "value": "41124",
    "label": "Martin University (Indianapolis, IN) Martin",
    "short_name": "Martin"
}, {
    "value": "41681",
    "label": "Texas State Technical College (Waco, TX) TSTC",
    "short_name": "TSTC"
}, {
    "value": "41683",
    "label": "Kansas City Kansas Community College (Kansas City, KS) KCKCC",
    "short_name": "KCKCC"
}, {
    "value": "41685",
    "label": "Colorado Technical University (Colorado Springs, CO) Colorado Tech",
    "short_name": "Colorado Tech"
}, {
    "value": "41709",
    "label": "Flathead Valley Community College (Kalispell, MT) FVCC",
    "short_name": "FVCC"
}, {"value": "41719", "label": "Jacksonville University (Jacksonville, FL) JU", "short_name": "JU"}, {
    "value": "41720",
    "label": "Creighton University (Omaha, NE) Creighton ",
    "short_name": "Creighton "
}, {
    "value": "41722",
    "label": "Regent University (Virginia Beach, VA) Regent",
    "short_name": "Regent"
}, {
    "value": "41723",
    "label": "Eastern University (St. Davids, PA) Eastern",
    "short_name": "Eastern"
}, {
    "value": "41731",
    "label": "Lindsey Wilson College (Columbia, KY) Lindsey Wilson  ",
    "short_name": "Lindsey Wilson  "
}, {
    "value": "41732",
    "label": "Texas A&M University - Commerce (Commerce, TX) Texas A&M Commerce ",
    "short_name": "Texas A&M Commerce "
}, {
    "value": "41762",
    "label": "The Art Institute of California - Los Angeles (Santa Monica, CA) AI - LA",
    "short_name": "AI - LA"
}, {
    "value": "42444",
    "label": "Prince Georges Community College (Largo, MD) PGCC",
    "short_name": "PGCC"
}, {
    "value": "42432",
    "label": "Kutztown University of Pennsylvania (Kutztown, PA) Kutztown ",
    "short_name": "Kutztown "
}, {
    "value": "42433",
    "label": "East Tennessee State University (Johnson City, TN) ETSU",
    "short_name": "ETSU"
}, {
    "value": "42434",
    "label": "Metropolitan Community College - Maple Woods (Kansas City, MO) MCC - Maple Woods",
    "short_name": "MCC - Maple Woods"
}, {"value": "42439", "label": "University of Akron (Akron, OH) UAkron", "short_name": "UAkron"}, {
    "value": "42446",
    "label": "Arkansas Northeastern College (Paragould, AR) ANC",
    "short_name": "ANC"
}, {
    "value": "42447",
    "label": "Arkansas State University (Jonesboro, AR) Arkansas State",
    "short_name": "Arkansas State"
}, {
    "value": "42448",
    "label": "Vanguard University of Southern California (Costa Mesa, CA) Vanguard",
    "short_name": "Vanguard"
}, {
    "value": "42449",
    "label": "Middle Tennessee State University (Murfreesboro, TN) MTSU",
    "short_name": "MTSU"
}, {"value": "42450", "label": "Monterey Peninsula College (Monterey, CA) MPC", "short_name": "MPC"}, {
    "value": "42451",
    "label": "Fairmont State University (Fairmont, WV) Fairmont State",
    "short_name": "Fairmont State"
}, {
    "value": "42501",
    "label": "West Chester University of Pennsylvania (West Chester, PA) WCUPA",
    "short_name": "WCUPA"
}, {
    "value": "42756",
    "label": "Palm Beach Atlantic University (West Palm Beach, FL) PBA",
    "short_name": "PBA"
}, {"value": "42758", "label": "Berry College (Mount Berry, GA) Berry ", "short_name": "Berry "}, {
    "value": "42759",
    "label": "Hampton University (Hampton, VA) Hampton ",
    "short_name": "Hampton "
}, {
    "value": "42760",
    "label": "Georgia Southwestern State University (Americus, GA) GSW",
    "short_name": "GSW"
}, {
    "value": "42761",
    "label": "Cazenovia College (Cazenovia, NY) Cazenovia College ",
    "short_name": "Cazenovia College "
}, {
    "value": "42764",
    "label": "Sarah Lawrence College (Bronxville, NY) Sarah Lawrence",
    "short_name": "Sarah Lawrence"
}, {
    "value": "42765",
    "label": "Cerritos College (Norwalk, CA) Cerritos College ",
    "short_name": "Cerritos College "
}, {
    "value": "42767",
    "label": "Central Michigan University (Mount Pleasant, MI) Central Michigan",
    "short_name": "Central Michigan"
}, {"value": "42769", "label": "Hiram College (Hiram, OH) Hiram ", "short_name": "Hiram "}, {
    "value": "43022",
    "label": "University of Southern Maine (Portland, ME) USM",
    "short_name": "USM"
}, {
    "value": "43045",
    "label": "Chamberlain College of Nursing (North Brunswick Township, NJ) Chamberlain",
    "short_name": "Chamberlain"
}, {
    "value": "43047",
    "label": "Ohio Wesleyan University (Delaware, OH) Ohio Wesleyan",
    "short_name": "Ohio Wesleyan"
}, {
    "value": "43061",
    "label": "California State University of Channel Islands (Camarillo, CA) CI",
    "short_name": "CI"
}, {
    "value": "43062",
    "label": "Embry-Riddle Aeronautical University (Daytona Beach, FL) ERAU",
    "short_name": "ERAU"
}, {
    "value": "43179",
    "label": "Anoka-Ramsey Community College (Coon Rapids, MN) Anoka-Ramsey",
    "short_name": "Anoka-Ramsey"
}, {
    "value": "43313",
    "label": "Everest University (Tampa, FL) Everest U",
    "short_name": "Everest U"
}, {"value": "43319", "label": "Yale-NUS College (Singapore) Yale-NUS", "short_name": "Yale-NUS"}, {
    "value": "43424",
    "label": "Missouri Southern State University (Joplin, MO) MSSU",
    "short_name": "MSSU"
}, {
    "value": "43891",
    "label": "Weatherford College (Weatherfold, TX) Weatherfold",
    "short_name": "Weatherfold"
}, {
    "value": "43893",
    "label": "University of Texas of the Permian Basin (Odessa, TX) UTPB",
    "short_name": "UTPB"
}, {
    "value": "44040",
    "label": "Hawaii Community College (Hilo, HI) Hawaii CC",
    "short_name": "Hawaii CC"
}, {"value": "44042", "label": "Idaho State University (Pocatello, ID) ISU ", "short_name": "ISU "}, {
    "value": "44044",
    "label": "Hillsdale College (Hillsdale, MI) Hillsdale",
    "short_name": "Hillsdale"
}, {"value": "44054", "label": "Southwestern College (Chula Vista, CA) SWC", "short_name": "SWC"}, {
    "value": "44055",
    "label": "San Diego City College (San Diego, CA) SD City",
    "short_name": "SD City"
}, {"value": "44056", "label": "Lake Erie College (Painesville, OH) LEC", "short_name": "LEC"}, {
    "value": "44057",
    "label": "Cornerstone University (Grand Rapids, MI) Cornerstone",
    "short_name": "Cornerstone"
}, {
    "value": "44060",
    "label": "William Paterson University of New Jersey (Wayne, NJ) WPU",
    "short_name": "WPU"
}, {
    "value": "44065",
    "label": "Yakima Valley Community College (Yakima, WA) YVCC",
    "short_name": "YVCC"
}, {"value": "44079", "label": "College of DuPage (Addison, IL) COD", "short_name": "COD"}, {
    "value": "44794",
    "label": "Nova Southeastern University (Fort Lauderdale, FL) NSU",
    "short_name": "NSU"
}, {
    "value": "46206",
    "label": "Kennesaw State University (Kennesaw, GA) Kennesaw State",
    "short_name": "Kennesaw State"
}, {"value": "46207", "label": "Diablo Valley College (Pleasant Hill, CA) DVC", "short_name": "DVC"}, {
    "value": "46208",
    "label": "Nazareth College (Rochester, NY) Nazareth",
    "short_name": "Nazareth"
}, {"value": "46209", "label": "Pierce Community College (Lakewood, WA) PCC", "short_name": "PCC"}, {
    "value": "46211",
    "label": "California University of Pennsylvania (California, PA) CalU",
    "short_name": "CalU"
}, {
    "value": "46214",
    "label": "Eastern Michigan University (Ypsilanti, MI) EMU",
    "short_name": "EMU"
}, {
    "value": "46215",
    "label": "Truman State University (Kirksville, MO) Truman State",
    "short_name": "Truman State"
}, {
    "value": "46216",
    "label": "Roane State Community College (Harriman, TN) RSCC",
    "short_name": "RSCC"
}, {
    "value": "46219",
    "label": "Coastal Carolina Community College (Jacksonville, NC) CCCC",
    "short_name": "CCCC"
}, {"value": "46226", "label": "Texas Woman's University (Denton, TX) TWU", "short_name": "TWU"}, {
    "value": "46229",
    "label": "St. Mary's College (Notre Dame, IN) St. Mary's",
    "short_name": "St. Mary's"
}, {
    "value": "46231",
    "label": "Longwood University (Farmville, VA) Longwood",
    "short_name": "Longwood"
}, {
    "value": "46232",
    "label": "University of Mount Union (Alliance, OH) Mount Union ",
    "short_name": "Mount Union "
}, {
    "value": "46233",
    "label": "Word of Life Bible institute (Pottersville, NY) WOLBI",
    "short_name": "WOLBI"
}, {
    "value": "46234",
    "label": "University of Memphis (Memphis, TN) Memphis",
    "short_name": "Memphis"
}, {"value": "46235", "label": "Oral Roberts University (Tulsa, OK) ORU", "short_name": "ORU"}, {
    "value": "46236",
    "label": "Pueblo Community College (Pueblo, CO) Pueblo CC",
    "short_name": "Pueblo CC"
}, {
    "value": "46237",
    "label": "California State University - San Marcos (San Marcos, CA) CSUSM",
    "short_name": "CSUSM"
}, {"value": "46238", "label": "Lane Community College (Eugene, OR) LCC", "short_name": "LCC"}, {
    "value": "46239",
    "label": "California State University - Stanislaus (Turlock, CA) CSU Stanislaus",
    "short_name": "CSU Stanislaus"
}, {"value": "46240", "label": "Indiana Wesleyan University (Marion, IN) IWU", "short_name": "IWU"}, {
    "value": "46241",
    "label": "Argosy University - San Francisco (Alameda, CA) AUSF",
    "short_name": "AUSF"
}, {
    "value": "46245",
    "label": "Concordia University - Saint Paul (Saint Paul, MN) CUSP",
    "short_name": "CUSP"
}, {
    "value": "48305",
    "label": "Georgia Southern University (Statesboro, GA) GSU",
    "short_name": "GSU"
}, {
    "value": "48308",
    "label": "North Greenville University (Tigerville, SC) NGU",
    "short_name": "NGU"
}, {
    "value": "48310",
    "label": "Holy Family University (Philadelphia, PA) Holy Family",
    "short_name": "Holy Family"
}, {"value": "48311", "label": "Walden University (Minneapolis, MN) Walden", "short_name": "Walden"}, {
    "value": "48312",
    "label": "Northern Michigan University (Marquette, MI) NMU",
    "short_name": "NMU"
}, {
    "value": "48313",
    "label": "Northwest Missouri State University (Maryville, MO) NW Missouri",
    "short_name": "NW Missouri"
}, {
    "value": "48316",
    "label": "Mt. San Antonio College (Walnut, CA) Mt. SAC",
    "short_name": "Mt. SAC"
}, {
    "value": "48317",
    "label": "Northeastern Oklahoma A&M College (Miami, OK) NEO",
    "short_name": "NEO"
}, {
    "value": "48321",
    "label": "Lake Forest College (Lake Forest, IL) Lake Forest",
    "short_name": "Lake Forest"
}, {
    "value": "48324",
    "label": "University of Louisiana - Lafayette (Lafayette, LA) ULL",
    "short_name": "ULL"
}, {"value": "48325", "label": "Davis & Elkins College (Elkins, WV) D&E", "short_name": "D&E"}, {
    "value": "48326",
    "label": "Central New Mexico Community College (Albuquerque, NM) CNMCC ",
    "short_name": "CNMCC "
}, {"value": "48331", "label": "Virginia Union University (Richmond, VA) VUU", "short_name": "VUU"}, {
    "value": "48332",
    "label": "Slippery Rock University of Pennsylvania (Slippery Rock, PA) SRU",
    "short_name": "SRU"
}, {"value": "48333", "label": "Ashford University (Clinton, IA) Ashford", "short_name": "Ashford"}, {
    "value": "48335",
    "label": "Suffolk University (Boston, MA) Suffolk",
    "short_name": "Suffolk"
}, {"value": "48337", "label": "Benedict College (Columbia, SC) Benedict", "short_name": "Benedict"}, {
    "value": "48338",
    "label": "Palm Beach State College (Lake Worth, FL) PBSC",
    "short_name": "PBSC"
}, {"value": "48339", "label": "Wesley College (Dover, DE) Wesley", "short_name": "Wesley"}, {
    "value": "48340",
    "label": "Juniata College (Huntingdon, PA) Juniata",
    "short_name": "Juniata"
}, {
    "value": "48341",
    "label": "Langston University (Langston, OK) Langston",
    "short_name": "Langston"
}, {
    "value": "48346",
    "label": "Johnson and Wales University (Providence, RI) JWU",
    "short_name": "JWU"
}, {
    "value": "48353",
    "label": "Lynchburg College (Lynchburg, VA) Lynchburg",
    "short_name": "Lynchburg"
}, {"value": "48358", "label": "York College - CUNY (Jamaica, NY) York", "short_name": "York"}, {
    "value": "48359",
    "label": "University of West Alabama (Livingston, AL) UWA",
    "short_name": "UWA"
}, {
    "value": "48360",
    "label": "Corning Community College (Corning, NY) Corning",
    "short_name": "Corning"
}, {
    "value": "48362",
    "label": "Tompkins Cortland Community College (Dryden, NY) TC3",
    "short_name": "TC3"
}, {"value": "48363", "label": "Western Nevada College (Carson City, NV) WNC", "short_name": "WNC"}, {
    "value": "48365",
    "label": "Coastal Carolina University (Conway, SC) CCU",
    "short_name": "CCU"
}, {"value": "48366", "label": "Gordon College (Wenham, MA) Gordon ", "short_name": "Gordon "}, {
    "value": "48367",
    "label": "Wiley College (Marshall, TX) Wiley",
    "short_name": "Wiley"
}, {
    "value": "48368",
    "label": "Minnesota State University - Moorhead (Moorhead, MN) MSU Moorhead",
    "short_name": "MSU Moorhead"
}, {
    "value": "48370",
    "label": "Campbell University (Buies Creek, NC) Campbell",
    "short_name": "Campbell"
}, {
    "value": "48394",
    "label": "St. Mary's University of San Antonio (San Antonio, TX) St. Mary's SA",
    "short_name": "St. Mary's SA"
}, {"value": "48396", "label": "Arcadia University (Glenside, PA) Arcadia", "short_name": "Arcadia"}, {
    "value": "48397",
    "label": "SUNY College of Agriculture and Technology - Cobleskill (Cobleskill, NY) SUNY Cobleskill",
    "short_name": "SUNY Cobleskill"
}, {"value": "48398", "label": "Community College of Denver (Denver, CO) CCD", "short_name": "CCD"}, {
    "value": "48400",
    "label": "College of New Rochelle (New Rochelle, NY) New Rochelle",
    "short_name": "New Rochelle"
}, {
    "value": "48408",
    "label": "Northern Kentucky University (Highland Heights, KY) NKU",
    "short_name": "NKU"
}, {
    "value": "48411",
    "label": "Mount Saint Mary's University (Los Angeles, CA) MSMU",
    "short_name": "MSMU"
}, {
    "value": "48412",
    "label": "Southern Adventist University (Collegedale, TN) SAU",
    "short_name": "SAU"
}, {
    "value": "48414",
    "label": "Westminster College (Salt Lake City, UT) Westminister",
    "short_name": "Westminister"
}, {
    "value": "48420",
    "label": "West Liberty University (West Liberty, WV) WVU",
    "short_name": "WVU"
}, {"value": "48421", "label": "Troy University (Troy, AL) Troy", "short_name": "Troy"}, {
    "value": "48423",
    "label": "Darton State College (Albany, GA) DSC",
    "short_name": "DSC"
}, {
    "value": "48424",
    "label": "Pima Community College (Tucson, AZ) Pima CC",
    "short_name": "Pima CC"
}, {
    "value": "48426",
    "label": "University of Nevada - Las Vegas (Las Vegas, NV) UNLV",
    "short_name": "UNLV"
}, {
    "value": "48427",
    "label": "Florida SouthWestern State College (Fort Myers, FL) FSWSC",
    "short_name": "FSWSC"
}, {"value": "48428", "label": "Spring Hill College (Mobile, AL) SHC", "short_name": "SHC"}, {
    "value": "48429",
    "label": "Maryville College (Maryville, TN) Maryville",
    "short_name": "Maryville"
}, {
    "value": "49408",
    "label": "Sonoma State University (Rohnert Park, CA) SSU",
    "short_name": "SSU"
}, {
    "value": "49409",
    "label": "Willamette University (Salem, OR) Willamette",
    "short_name": "Willamette"
}, {"value": "49410", "label": "Georgia Regents University (Augusta, GA) GRU", "short_name": "GRU"}, {
    "value": "49417",
    "label": "Dalton State College (Dalton, GA) DSC",
    "short_name": "DSC"
}, {
    "value": "49419",
    "label": "Georgia Gwinnett College (Lawrenceville, GA) GGC",
    "short_name": "GGC"
}, {"value": "49422", "label": "Mercer University (Macon, GA) Mercer", "short_name": "Mercer"}, {
    "value": "49425",
    "label": "The College of The Bahamas (Bahamas) COB",
    "short_name": "COB"
}, {"value": "49446", "label": "Albright College (Reading, PA) Albright", "short_name": "Albright"}, {
    "value": "49461",
    "label": "Huntington University (Huntington, IN) Huntington",
    "short_name": "Huntington"
}, {
    "value": "49462",
    "label": "University of Southern Mississippi (Hattiesburg, MS) USM",
    "short_name": "USM"
}, {
    "value": "49464",
    "label": "Western Washington University (Bellingham, WA) WWU",
    "short_name": "WWU"
}, {
    "value": "49467",
    "label": "SUNY College - Potsdam (Potsdam, NY) SUNY Potsdam",
    "short_name": "SUNY Potsdam"
}, {"value": "49469", "label": "Georgia Perimeter College (Decatur, GA) GPC ", "short_name": "GPC "}, {
    "value": "49471",
    "label": "Johnson County Community College (Overland Park, KS) JCCC",
    "short_name": "JCCC"
}, {"value": "49473", "label": "Southern Oregon University (Ashland, OR) SOU", "short_name": "SOU"}, {
    "value": "49482",
    "label": "Texas A&M University - Corpus Christi (Corpus Christi, TX) Texas A&M - CC",
    "short_name": "Texas A&M - CC"
}, {
    "value": "49487",
    "label": "California Lutheran University (Thousand Oaks, CA) CLU",
    "short_name": "CLU"
}, {
    "value": "49502",
    "label": "St. Mary's College of Maryland (St. Mary's City, MD) St. Mary's MD",
    "short_name": "St. Mary's MD"
}, {
    "value": "49504",
    "label": "James Madison University (Harrisonburg, VA) JMU",
    "short_name": "JMU"
}, {"value": "49507", "label": "Alfred University (Alfred, NY) Alfred", "short_name": "Alfred"}, {
    "value": "49512",
    "label": "Loyola University New Orleans (New Orleans, LA) LUNO",
    "short_name": "LUNO"
}, {
    "value": "49517",
    "label": "Georgia State University (Atlanta, GA) Georgia State",
    "short_name": "Georgia State"
}, {
    "value": "49524",
    "label": "University of Houston - Victoria (Victoria, TX) UH - Victoria",
    "short_name": "UH - Victoria"
}, {"value": "49527", "label": "New College of Florida (Sarasota, FL) NCF", "short_name": "NCF"}, {
    "value": "50627",
    "label": "University of Puerto Rico (San Juan, Puerto Rico) Puerto Rico",
    "short_name": "Puerto Rico"
}, {
    "value": "50673",
    "label": "Normandale Community College (Bloomington, MN) NCC",
    "short_name": "NCC"
}, {
    "value": "50679",
    "label": "Salt Lake Community College (Salt Lake City, UT) SLCC",
    "short_name": "SLCC"
}, {"value": "50681", "label": "Oakland University (Rochester, MI) OU", "short_name": "OU"}, {
    "value": "50682",
    "label": "California Baptist University (Riverside, CA)  CBU",
    "short_name": "CBU"
}, {
    "value": "50683",
    "label": "Concordia University Wisconsin (Mequon, WI) CUW",
    "short_name": "CUW"
}, {
    "value": "50685",
    "label": "University of Texas - Rio Grande Valley (Edinburg, TX) UTRGV",
    "short_name": "UTRGV"
}, {
    "value": "50687",
    "label": "Carson-Newman University (Jefferson City, TN) CNU",
    "short_name": "CNU"
}, {
    "value": "50705",
    "label": "Community College of Allegheny County (Monroeville, PA) CCAC",
    "short_name": "CCAC"
}, {"value": "50714", "label": "San Juan College (Farmington, NM) SJC", "short_name": "SJC"}, {
    "value": "50715",
    "label": "Unity College (Unity, NM) Unity College",
    "short_name": "Unity College"
}, {"value": "50744", "label": "Franklin Pierce University (Rindge, NH) FPU", "short_name": "FPU"}, {
    "value": "50751",
    "label": "Saint Francis College (Brooklyn Heights, NY) St. Francis",
    "short_name": "St. Francis"
}, {
    "value": "50816",
    "label": "Wittenberg University (Springfield, OH) Wittenberg ",
    "short_name": "Wittenberg "
}, {"value": "50888", "label": "Fort Lewis College (Durango, CO) FLC", "short_name": "FLC"}, {
    "value": "50890",
    "label": "Franklin University (Columbus, OH) Franklin",
    "short_name": "Franklin"
}, {
    "value": "51031",
    "label": "University of Puerto Rico - Mayaguez (Mayaguez, Puerto Rico) UPR Mayaguez",
    "short_name": "UPR Mayaguez"
}, {
    "value": "51049",
    "label": "Lipscomb University (Nashville, TN) Lipscomb",
    "short_name": "Lipscomb"
}, {
    "value": "51074",
    "label": "SUNY Maritime College (Throggs Neck, NY) SUNY Maritime",
    "short_name": "SUNY Maritime"
}, {
    "value": "51100",
    "label": "Art Academy of Cincinnati (Cincinnati, OH) Art Academy Cincinnati",
    "short_name": "Art Academy Cincinnati"
}, {"value": "54068", "label": "Seattle Pacific University (Seattle, WA) SPU", "short_name": "SPU"}, {
    "value": "51677",
    "label": "Victoria College (Victoria, TX) Victoria",
    "short_name": "Victoria"
}, {
    "value": "51680",
    "label": "Misericordia University (Dallas, PA) Misericordia",
    "short_name": "Misericordia"
}, {
    "value": "51681",
    "label": "Adventist University of Health Sciences (Orlando, FL) AUHS",
    "short_name": "AUHS"
}, {
    "value": "54151",
    "label": "Daytona State College (Daytona Beach, FL) Daytona State",
    "short_name": "Daytona State"
}, {
    "value": "51969",
    "label": "Tennessee Technological University (Cookeville, TN) TTU",
    "short_name": "TTU"
}, {"value": "187153", "label": "Yavapai College (Prescott, AZ) Yavapai", "short_name": "Yavapai"}, {
    "value": "54389",
    "label": "American University of Paris (Paris, France) AU Paris",
    "short_name": "AU Paris"
}, {
    "value": "53085",
    "label": "Cardinal Stritch University (Milwaukee, WI) Cardinal Stritch",
    "short_name": "Cardinal Stritch"
}, {
    "value": "53086",
    "label": "Waukesha County Technical College (Pewaukee, WI) WCTC",
    "short_name": "WCTC"
}, {
    "value": "53511",
    "label": "Wentworth Institute of Technology (Boston, MA) WIT ",
    "short_name": "WIT "
}, {"value": "53562", "label": "Baldwin Wallace University (Berea, OH) BWU", "short_name": "BWU"}, {
    "value": "53570",
    "label": "Wright State University (Dayton, OH)  WSU",
    "short_name": "WSU"
}, {
    "value": "53583",
    "label": "Russell Sage College (Troy, NY) Russell Sage",
    "short_name": "Russell Sage"
}, {
    "value": "53608",
    "label": "Allegheny College (Meadville, PA) Allegheny",
    "short_name": "Allegheny"
}, {
    "value": "53613",
    "label": "Randolph-Macon College (Ashland, VA) Randolph-Macon",
    "short_name": "Randolph-Macon"
}, {"value": "53621", "label": "Dominican University Dominican", "short_name": "Dominican"}, {
    "value": "53633",
    "label": "Georgetown College (Georgetown, KY) Georgetown College",
    "short_name": "Georgetown College"
}, {
    "value": "53659",
    "label": "California State University - San Bernardino (San Bernardino, CA) CSUSB",
    "short_name": "CSUSB"
}, {
    "value": "53726",
    "label": "Point Loma Nazarene University (San Diego, CA) PLNU",
    "short_name": "PLNU"
}, {
    "value": "53727",
    "label": "Northern State University (Aberdeen, SD) Northern SU",
    "short_name": "Northern SU"
}, {
    "value": "53729",
    "label": "SUNY College - Cortland (Cortland, NY) SUNY Cortland",
    "short_name": "SUNY Cortland"
}, {
    "value": "53974",
    "label": "SUNY College of Technology - Delhi (Delhi, NY) SUNY Delhi",
    "short_name": "SUNY Delhi"
}, {
    "value": "53991",
    "label": "McKendree University (Lebanon, IL) McKendree",
    "short_name": "McKendree"
}, {
    "value": "54053",
    "label": "Westfield State University (Westfield, MA) Westfield",
    "short_name": "Westfield"
}, {
    "value": "54064",
    "label": "Oregon Health and Science University (Portland, OR) OHSU",
    "short_name": "OHSU"
}, {"value": "54067", "label": "Richland College (Dallas, TX) Richland", "short_name": "Richland"}, {
    "value": "54070",
    "label": "Northeastern State University (Tahlequah, OK) Northeastern SU",
    "short_name": "Northeastern SU"
}, {
    "value": "54186",
    "label": "University of Indianapolis (Indianapolis, IN) Indianapolis",
    "short_name": "Indianapolis"
}, {
    "value": "54188",
    "label": "Columbus State University  (Columbus, GA) Columbus State",
    "short_name": "Columbus State"
}, {
    "value": "54191",
    "label": "Florida Atlantic University (Boca Raton, FL) FAU",
    "short_name": "FAU"
}, {
    "value": "54204",
    "label": "University of Bristol (Bristol, UK) Bristol",
    "short_name": "Bristol"
}, {"value": "54312", "label": "Gainesville State College (Oakwood, GA) GSC", "short_name": "GSC"}, {
    "value": "54316",
    "label": "University of North Georgia (Dahlonega, GA) UNG",
    "short_name": "UNG"
}, {"value": "54395", "label": "Paine College (Augusta, GA) Paine", "short_name": "Paine"}, {
    "value": "54556",
    "label": "University of Wisconsin - Green Bay (Green Bay, WI) UWGB",
    "short_name": "UWGB"
}, {
    "value": "54602",
    "label": "Loyola University Maryland (Baltimore, MD) LUM",
    "short_name": "LUM"
}, {
    "value": "55283",
    "label": "Seminole State College of Florida (Sanford, FL) SSCF",
    "short_name": "SSCF"
}, {"value": "55285", "label": "Presbyterian College (Clinton, SC) Presby", "short_name": "Presby"}, {
    "value": "55288",
    "label": "Birmingham\u2013Southern College (Birmingham, AL) Birmingham-Southern",
    "short_name": "Birmingham-Southern"
}, {
    "value": "55289",
    "label": "Capella University (Minneapolis, MN) Capella",
    "short_name": "Capella"
}, {
    "value": "55290",
    "label": "The Art Institute of Philadelphia (Philadelphia, PA) AI Philly",
    "short_name": "AI Philly"
}, {
    "value": "55296",
    "label": "Unity College (Unity, ME) Unity College",
    "short_name": "Unity College"
}, {
    "value": "55297",
    "label": "Gateway Community and Technical College (Florence, KY) GC&T",
    "short_name": "GC&T"
}, {"value": "55298", "label": "Gustavus Adolphus College (St. Peter, MN) GAC", "short_name": "GAC"}, {
    "value": "55317",
    "label": "Beloit College (Beloit, WI) Beloit",
    "short_name": "Beloit"
}, {
    "value": "55320",
    "label": "Alvernia University (Reading, PA) Alvernia",
    "short_name": "Alvernia"
}, {"value": "55327", "label": "Clarke University (Dubuque, IA) Clarke", "short_name": "Clarke"}, {
    "value": "55328",
    "label": "Funda\u00e7\u00e3o Armando Alvares Penteado (SP, Brazil) FAAP",
    "short_name": "FAAP"
}, {
    "value": "55331",
    "label": "Albany State University (Albany, GA) Albany State",
    "short_name": "Albany State"
}, {"value": "55333", "label": "Daymar College (Owensboro, KY) Daymar ", "short_name": "Daymar "}, {
    "value": "55335",
    "label": "California State University - Fresno (Fresno, CA) CSU Fresno",
    "short_name": "CSU Fresno"
}, {"value": "55336", "label": "University of North Texas (Denton, TX) UNT", "short_name": "UNT"}, {
    "value": "55337",
    "label": "University of Texas - El Paso (El Paso, TX) UT El Paso",
    "short_name": "UT El Paso"
}, {
    "value": "55341",
    "label": "East Los Angeles College (Monterey Park, CA) ELAC",
    "short_name": "ELAC"
}, {
    "value": "55342",
    "label": "Federal University of Technology Akure (Akure, Nigeria) FUTA",
    "short_name": "FUTA"
}, {
    "value": "55376",
    "label": "California State University - Los Angeles (Los Angeles, CA) CSULA",
    "short_name": "CSULA"
}, {
    "value": "55378",
    "label": "Linfield College (McMinnville, OR) Linfield",
    "short_name": "Linfield"
}, {"value": "55379", "label": "Ohio Dominican University (Columbus, OH) ODU", "short_name": "ODU"}, {
    "value": "55380",
    "label": "Indiana University - Purdue University Indianapolis (Indianapolis, IN) IUPUI",
    "short_name": "IUPUI"
}, {
    "value": "55381",
    "label": "Bethune-Cookman University (Daytona Beach, FL) BCU",
    "short_name": "BCU"
}, {"value": "55382", "label": "Lamar University (Beaumont, TX) Lamar", "short_name": "Lamar"}, {
    "value": "55383",
    "label": "Lebanon Valley College (Annville, PA) LVC",
    "short_name": "LVC"
}, {
    "value": "55385",
    "label": "Madison Area Technical College (Madison, WI) MATC",
    "short_name": "MATC"
}, {
    "value": "55387",
    "label": "Merrimack College (North Andover, MA) Merrimack",
    "short_name": "Merrimack"
}, {
    "value": "55388",
    "label": "Whitworth University (Spokane, WA) Whitworth",
    "short_name": "Whitworth"
}, {"value": "55389", "label": "Lewis University (Romeoville, IL) Lewis", "short_name": "Lewis"}, {
    "value": "55390",
    "label": "Clinton Community College (Plattsburgh, NY) Clinton CC",
    "short_name": "Clinton CC"
}, {
    "value": "55391",
    "label": "Southeastern University (Lakeland, FL) Southeastern",
    "short_name": "Southeastern"
}, {
    "value": "55393",
    "label": "Guilford College (Greensboro, NC) Guilford",
    "short_name": "Guilford"
}, {
    "value": "55396",
    "label": "Henry Ford Community College (Dearborn, MI) HFCC",
    "short_name": "HFCC"
}, {
    "value": "55399",
    "label": "Sacred Heart University (Fairfield, CT) Sacred Heart",
    "short_name": "Sacred Heart"
}, {
    "value": "55402",
    "label": "Pacific Lutheran University (Tacoma, WA) Pacific Lutheran",
    "short_name": "Pacific Lutheran"
}, {
    "value": "55404",
    "label": "Suffolk County Community College (Selden, NY) SCCC",
    "short_name": "SCCC"
}, {
    "value": "55422",
    "label": "Valparaiso University (Valparaiso, IN) Valparaiso",
    "short_name": "Valparaiso"
}, {
    "value": "55417",
    "label": "Kankakee Community College (Kankakee, IL) Kankakee CC",
    "short_name": "Kankakee CC"
}, {"value": "55421", "label": "Wagner College (Staten Island, NY) Wagner", "short_name": "Wagner"}, {
    "value": "55424",
    "label": "East Stroudsburg University (East Stroudsburg, PA) East Stroudsburg",
    "short_name": "East Stroudsburg"
}, {
    "value": "55425",
    "label": "Muskingum University (New Concord, OH) Muskingum",
    "short_name": "Muskingum"
}, {
    "value": "55430",
    "label": "St. Mary's College of California (Moraga, CA) St. Mary's CA",
    "short_name": "St. Mary's CA"
}, {"value": "55437", "label": "Marist College (Poughkeepsie, NY) Marist", "short_name": "Marist"}, {
    "value": "55438",
    "label": "Stonehill College (Easton, MA) Stonehill",
    "short_name": "Stonehill"
}, {"value": "55439", "label": "Drew University (Madison, NJ) Drew", "short_name": "Drew"}, {
    "value": "55440",
    "label": "Thomas University (Thomasville, GA) Thomas",
    "short_name": "Thomas"
}, {
    "value": "55441",
    "label": "University of North Carolina - Pembroke (Pembroke, NC) UNC Pembroke",
    "short_name": "UNC Pembroke"
}, {
    "value": "55443",
    "label": "Eastern Illinois University (Charleston, IL) Eastern Illinois",
    "short_name": "Eastern Illinois"
}, {
    "value": "55444",
    "label": "Southern Illinois University - Edwardsville (Edwardsville, IL) Southern Illinois",
    "short_name": "Southern Illinois"
}, {
    "value": "55445",
    "label": "Hostos Community College (New York, NY) Hostos CC",
    "short_name": "Hostos CC"
}, {
    "value": "55450",
    "label": "SUNY College - Old Westbury (Old Westbury, NY) SUNY Old Westbury",
    "short_name": "SUNY Old Westbury"
}, {"value": "55452", "label": "Siena College (Loudonville, NY) Siena", "short_name": "Siena"}, {
    "value": "55453",
    "label": "Coe College (Cedar Rapids, IA) Coe",
    "short_name": "Coe"
}, {
    "value": "162560",
    "label": "Ultimate Medical Academy (Clearwater, FL) UMA",
    "short_name": "UMA"
}, {
    "value": "216571",
    "label": "Blackburn College (Carlinville, IL) Blackburn",
    "short_name": "Blackburn"
}, {"value": "216572", "label": "Walsh University (North Canton, OH) Walsh", "short_name": "Walsh"}, {
    "value": "68270",
    "label": "Gulf Coast State College (Panama City, FL) GCSC",
    "short_name": "GCSC"
}, {
    "value": "58705",
    "label": "University of Colorado - Colorado Springs (Colorado Springs, CO) UCCS",
    "short_name": "UCCS"
}, {
    "value": "216575",
    "label": "Carrington College (Reno, NV) Carrington",
    "short_name": "Carrington"
}, {
    "value": "216578",
    "label": "Toccoa Falls College (Toccoa, GA) Toccoa Falls ",
    "short_name": "Toccoa Falls "
}, {
    "value": "216579",
    "label": "Clayton State University (Morrow, GA) Clayton State",
    "short_name": "Clayton State"
}, {
    "value": "216582",
    "label": "California State University - Bakersfield (Bakersfield, CA) CSU Bakersfield",
    "short_name": "CSU Bakersfield"
}, {
    "value": "59692",
    "label": "St. Charles Community College (St. Louis, MO)  SCC",
    "short_name": "SCC"
}, {"value": "59699", "label": "Bay Path University (Longmeadow, MA)  BPU", "short_name": "BPU"}, {
    "value": "59707",
    "label": "John Carrol University (University Heights, OH) JCU",
    "short_name": "JCU"
}, {"value": "59710", "label": "Benedictine University (Lisle, IL)  BenU", "short_name": "BenU"}, {
    "value": "59714",
    "label": "Wesleyan College (Macon, GA) Wesleyan GA",
    "short_name": "Wesleyan GA"
}, {
    "value": "59716",
    "label": "Trinity International University (Deerfield, IL) TIU ",
    "short_name": "TIU "
}, {"value": "59720", "label": "National College (Madison, TN) NC ", "short_name": "NC "}, {
    "value": "59722",
    "label": "University of Wisconsin (Milwaukee, WI) UWM",
    "short_name": "UWM"
}, {
    "value": "59733",
    "label": "Colorado State University-Global Campus (Greenwood, CO) CSU ",
    "short_name": "CSU "
}, {
    "value": "59734",
    "label": "University of Northern Colorado (Greeley, CO) UNC",
    "short_name": "UNC"
}, {
    "value": "59750",
    "label": "Northwest Nazarene University (Nampa, ID) NNU ",
    "short_name": "NNU "
}, {"value": "59761", "label": "Old Dominion University (Norfolk, VA) ODU ", "short_name": "ODU "}, {
    "value": "59773",
    "label": "Southeastern Louisiana University (Hammond, LA) SLU",
    "short_name": "SLU"
}, {
    "value": "59780",
    "label": "Governors State University (University Park, IL) GSU",
    "short_name": "GSU"
}, {"value": "59783", "label": "Central Texas College (Killeen,TX) CTC", "short_name": "CTC"}, {
    "value": "59785",
    "label": "University of Northwestern (Lima, OH) UN",
    "short_name": "UN"
}, {"value": "59803", "label": "Lamar Community College (Lamar, CO) LCC", "short_name": "LCC"}, {
    "value": "59873",
    "label": "Arapahoe Community College (Littleton, CO) ACC",
    "short_name": "ACC"
}, {
    "value": "59878",
    "label": "Manipal College of Pharmaceutical Sciences (Karnataka, India) MCOPS ",
    "short_name": "MCOPS "
}, {"value": "59892", "label": "Florida Technical College (Kissimmee, FL) FTC", "short_name": "FTC"}, {
    "value": "59897",
    "label": "University of Agriculture, Makurdi (Makurdi, Nigeria)  UAM",
    "short_name": "UAM"
}, {
    "value": "59899",
    "label": "Culinary Institute of America (New York, NY) CIA ",
    "short_name": "CIA "
}, {"value": "59914", "label": "Texas Lutheran University (Seguin, TX) TLU", "short_name": "TLU"}, {
    "value": "59921",
    "label": "Emmanuel College (Boston, MA) EC",
    "short_name": "EC"
}, {
    "value": "59931",
    "label": "University of Louisiana at Monroe (Monroe, LA)  ULM",
    "short_name": "ULM"
}, {"value": "59948", "label": "SUNY Polytechnic Institute (Utica, NY) SUNY", "short_name": "SUNY"}, {
    "value": "60276",
    "label": "Catawba College (Salisbury, NC) CAT-U",
    "short_name": "CAT-U"
}, {"value": "60281", "label": "University of Guyana (Georgetown, Guyana)  UG", "short_name": "UG"}, {
    "value": "60283",
    "label": "University of the West Indies (Kingston, Jamaica)  UWI",
    "short_name": "UWI"
}, {
    "value": "60287",
    "label": "Wesleyan College (Norfolk, VA) Wesleyan VA",
    "short_name": "Wesleyan VA"
}, {"value": "60321", "label": "Husson University (Bangor, ME) HU", "short_name": "HU"}, {
    "value": "60324",
    "label": "Eastern Arizona College (Thatcher, AZ) EAC",
    "short_name": "EAC"
}, {
    "value": "60328",
    "label": "Virginia State University (Petersburg, Virginia) VSU",
    "short_name": "VSU"
}, {
    "value": "60504",
    "label": "Queensborough Community College (Queens, New York) QCC",
    "short_name": "QCC"
}, {"value": "60507", "label": "Chapman University (Orange, CA) CU", "short_name": "CU"}, {
    "value": "60509",
    "label": " Messiah College (Mechanicsburg, PA) MC",
    "short_name": "MC"
}, {
    "value": "61793",
    "label": "University of Wisconsin - Stout (Menomonie, WI) UWS",
    "short_name": "UWS"
}, {"value": "61797", "label": "Salisbury University (Salisbury, MD) SU", "short_name": "SU"}, {
    "value": "61799",
    "label": "Pitt Community College (Winterville, NC) PCC",
    "short_name": "PCC"
}, {"value": "61801", "label": "Savannah State University (Savannah, GA) SSU", "short_name": "SSU"}, {
    "value": "61802",
    "label": "Northwest Arkansas Community College (Bentonville, AR) NACC",
    "short_name": "NACC"
}, {
    "value": "61805",
    "label": "Webber International University (Babson Park, FL) WIU",
    "short_name": "WIU"
}, {
    "value": "61806",
    "label": "American Intercontinental University (Atlanta, GA) AIU ",
    "short_name": "AIU "
}, {
    "value": "61821",
    "label": "DigiPen Institute of Technology (Redmond, WA) DigiPen",
    "short_name": "DigiPen"
}, {
    "value": "61823",
    "label": "Eastern Washington University (Cheney, WA) EWU",
    "short_name": "EWU"
}, {
    "value": "61830",
    "label": "College of Southern Nevada (Las Vegas, NV) CSN",
    "short_name": "CSN"
}, {"value": "61831", "label": "Dakota State University (Madison, SD) DSU", "short_name": "DSU"}, {
    "value": "61837",
    "label": "University of Central Arkansas (Conway, AR) UCA",
    "short_name": "UCA"
}, {
    "value": "61838",
    "label": "Louisiana State University - Alexandria (Alexandria, LA) LSU",
    "short_name": "LSU"
}, {"value": "61843", "label": "Rider University (Lawrenceville, NJ) RU", "short_name": "RU"}, {
    "value": "61845",
    "label": "Nirma University of Science and Technology (Ahmedabad, India) NUST",
    "short_name": "NUST"
}, {"value": "61846", "label": "Nichols College (Dudley, MA) NC", "short_name": "NC"}, {
    "value": "61847",
    "label": "Cleveland State University (Cleveland, OH) CSU",
    "short_name": "CSU"
}, {"value": "61848", "label": "Simmons College (Boston, MA) SC", "short_name": "SC"}, {
    "value": "61850",
    "label": "Augustana College (Rock Island, IL) AC",
    "short_name": "AC"
}, {
    "value": "61854",
    "label": "Central State University (Wilberforce, OH) CSU",
    "short_name": "CSU"
}, {"value": "61862", "label": "Millikin University (Decatur, IL) MU", "short_name": "MU"}, {
    "value": "61865",
    "label": "Metropolitan State University of Denver (Denver, CO) MSUD",
    "short_name": "MSUD"
}, {
    "value": "61868",
    "label": "University of Wisconsin - River Falls (River Falls, WI) UWRF",
    "short_name": "UWRF"
}, {
    "value": "61872",
    "label": "Central Connecticut State University (New Britain, CT) CCSU",
    "short_name": "CCSU"
}, {"value": "61878", "label": "Keiser University (Ft. Lauderdale, FL) KU", "short_name": "KU"}, {
    "value": "61880",
    "label": "Red Rocks Community College (Lakewood, CO) RRCC",
    "short_name": "RRCC"
}, {
    "value": "61884",
    "label": "California State University - Sacramento (Sacramento, CA) CSUS",
    "short_name": "CSUS"
}, {
    "value": "61889",
    "label": "University of Alaska - Fairbanks (Fairbanks, AK) UAF",
    "short_name": "UAF"
}, {"value": "61891", "label": "Winthrop University (Rock Hill, SC) WU", "short_name": "WU"}, {
    "value": "61893",
    "label": "Eastern Florida State College (Cocoa, FL) EFSC",
    "short_name": "EFSC"
}, {
    "value": "61896",
    "label": "South University - Savannah (Savannah, GA) SUS",
    "short_name": "SUS"
}, {
    "value": "61900",
    "label": "Central Carolina Technical College (Sumter, SC) CCTC",
    "short_name": "CCTC"
}, {"value": "61903", "label": "Iona College (New Rochelle, NY) LC", "short_name": "LC"}, {
    "value": "61906",
    "label": "Norwich University (Northfield, VT) NU",
    "short_name": "NU"
}, {"value": "62267", "label": "Strayer University - Morrow (Morrow, GA) SUM", "short_name": "SUM"}, {
    "value": "62273",
    "label": "Meridath College (Raleigh, NC) MC",
    "short_name": "MC"
}, {
    "value": "62293",
    "label": "Frostburg State University (Frostburg, MD) FSU",
    "short_name": "FSU"
}, {
    "value": "62312",
    "label": "Ivy Tech Community College (Indianapolis, IN) ITCC ",
    "short_name": "ITCC "
}, {"value": "62313", "label": "McLennan Community College (Waco, TX) MCC", "short_name": "MCC"}, {
    "value": "62321",
    "label": "University of Wisconsin - Eau Claire (Eau Claire, WI)  UWEC",
    "short_name": "UWEC"
}, {
    "value": "62852",
    "label": "The University of Hartford (West Hartford, CT) UH ",
    "short_name": "UH "
}, {
    "value": "62856",
    "label": "University of Central Oklahoma (Edmond, OK) UCO",
    "short_name": "UCO"
}, {"value": "62859", "label": "Evangel University (Springfield, MO) EU", "short_name": "EU"}, {
    "value": "62863",
    "label": "University of Maryland Eastern Shore (Princess Anne, MD) UMES ",
    "short_name": "UMES "
}, {
    "value": "62904",
    "label": "Austin Peay State University (Clarksville, TN) APSU ",
    "short_name": "APSU "
}, {"value": "62897", "label": "DeSales University (CenterValley, PA) DU", "short_name": "DU"}, {
    "value": "62903",
    "label": "Northwestern Michigan College (Traverse City, MI) NMC",
    "short_name": "NMC"
}, {
    "value": "62909",
    "label": "Summit University of Pennsylvania (Clarks Summit, PA) SummitU",
    "short_name": "SummitU"
}, {"value": "62910", "label": "SUNY - Fredonia (Fredonia, NY) SUNY", "short_name": "SUNY"}, {
    "value": "62911",
    "label": "La Sierra University (Riverside, CA) LSU",
    "short_name": "LSU"
}, {
    "value": "62917",
    "label": "Universal Technical Institute (Scottsdale, AZ) UTI",
    "short_name": "UTI"
}, {
    "value": "62952",
    "label": "University of North Texas - Dallas (Dallas, TX) UNTD",
    "short_name": "UNTD"
}, {
    "value": "62959",
    "label": "Motlow State Community College (McMinnville, TN) MSCC",
    "short_name": "MSCC"
}, {
    "value": "62963",
    "label": "Strayer University Charleston (North Charleston, SC) SUC",
    "short_name": "SUC"
}, {"value": "62964", "label": "Memphis College of Art (Memphis, TN) MCA", "short_name": "MCA"}, {
    "value": "62967",
    "label": "University of the Incarnate Word (San Antonio, TX) UIW",
    "short_name": "UIW"
}, {"value": "62973", "label": "University of Mumbai (Mumbai, India) UM", "short_name": "UM"}, {
    "value": "62972",
    "label": " Siena Heights University (Adrian, MI) SHU",
    "short_name": "SHU"
}, {"value": "62974", "label": "Evergreen Valley College (San Jose, CA) EVC", "short_name": "EVC"}, {
    "value": "62976",
    "label": "Rockhurst University (Kansas City, MO) RU",
    "short_name": "RU"
}, {
    "value": "62984",
    "label": "Christian Brothers University (Memphis, TN) CBU",
    "short_name": "CBU"
}, {"value": "62987", "label": "St. Norbert College (De Pere, WI) SNC", "short_name": "SNC"}, {
    "value": "63704",
    "label": "University of Mary (Bismarck, ND) UMary ",
    "short_name": "UMary "
}, {
    "value": "63292",
    "label": "Parkland Community College (Champaign, IL) PCC",
    "short_name": "PCC"
}, {
    "value": "63296",
    "label": "Southern Illinois University (Edwardsville, IL) SIU",
    "short_name": "SIU"
}, {"value": "63312", "label": "Richard Bland College (Petersburg, VA) RBC", "short_name": "RBC"}, {
    "value": "63316",
    "label": "Bloomfield College (Bloomfield, NJ) BC",
    "short_name": "BC"
}, {"value": "63325", "label": "Bob Jones University (Greenville, SC) BJU", "short_name": "BJU"}, {
    "value": "63326",
    "label": "Tarrant County College (Fort Worth, TX) TCC",
    "short_name": "TCC"
}, {"value": "63328", "label": "Monroe Collere (Bronx, NY) MC", "short_name": "MC"}, {
    "value": "63329",
    "label": "University of Saint Joseph (West Hartford, CT) USJ",
    "short_name": "USJ"
}, {
    "value": "63798",
    "label": "Saginaw Valley State University (University Center, MI) SVSU",
    "short_name": "SVSU"
}, {
    "value": "63799",
    "label": "Northwest Florida State College (Niceville, FL) NFSC",
    "short_name": "NFSC"
}, {"value": "63800", "label": " Lone Star College System (Houston, TX) LSCS", "short_name": "LSCS"}, {
    "value": "63808",
    "label": "Kauai Community College (Lihue, HI) KCC",
    "short_name": "KCC"
}, {
    "value": "63814",
    "label": "Worcester State University (Worcester, MA) WSU",
    "short_name": "WSU"
}, {"value": "63823", "label": " Chicago State University (Chicago, IL) CSU", "short_name": "CSU"}, {
    "value": "65731",
    "label": "Savannah College of Art and Design (Savannah, GA) SCAD",
    "short_name": "SCAD"
}, {
    "value": "65734",
    "label": "St. Johns River State College (Orange Park, FL) SJR State ",
    "short_name": "SJR State "
}, {"value": "65736", "label": "Philander Smith College (Little Rock, AR) PSC", "short_name": "PSC"}, {
    "value": "65738",
    "label": "Mount Ida College (Newton, MA) MIC",
    "short_name": "MIC"
}, {"value": "65743", "label": "Chadron State College (Chadron, NE) CSC", "short_name": "CSC"}, {
    "value": "65744",
    "label": "ASA College (New York, NY) ASA",
    "short_name": "ASA"
}, {
    "value": "65746",
    "label": "John Jay College of Criminal Justice (Manhattan, NY) JJay",
    "short_name": "JJay"
}, {"value": "65751", "label": "Hesston College (Hesston, KS) HC", "short_name": "HC"}, {
    "value": "65755",
    "label": "Ferrum College (Ferrum, VA) FC",
    "short_name": "FC"
}, {
    "value": "67092",
    "label": "University of Texas-Pan American (Edinburg, TX) UTPA",
    "short_name": "UTPA"
}, {"value": "66216", "label": "Mount Mary University (Milwaukee, WI) MMU", "short_name": "MMU"}, {
    "value": "66247",
    "label": "SUNY Empire state College (Saratoga Springs, NY) SUNY",
    "short_name": "SUNY"
}, {"value": "66249", "label": "Argosy University Tampa (Tampa, FL) AUT", "short_name": "AUT"}, {
    "value": "66255",
    "label": "Atlantic Cape Community College (Hamilton, NJ) ACCC",
    "short_name": "ACCC"
}, {"value": "66448", "label": "Saint Xavier University (Chicago, IL) SXU", "short_name": "SXU"}, {
    "value": "66451",
    "label": "Napa Valley College (Napa, CA) NVC",
    "short_name": "NVC"
}, {
    "value": "66453",
    "label": "Los Angeles Pierce College (Los Angeles, CA) LAPC",
    "short_name": "LAPC"
}, {"value": "66459", "label": "Saint Martin's University (Lacey, WA) SMU", "short_name": "SMU"}, {
    "value": "66465",
    "label": "College of Lake County (Grayslake, IL) CLC",
    "short_name": "CLC"
}, {"value": "66469", "label": "Middlesex University (London, England) UM", "short_name": "UM"}, {
    "value": "66471",
    "label": "Benedictine College (Atchison, KS) BC",
    "short_name": "BC"
}, {"value": "66482", "label": "Touro College (New York, NY) Touro", "short_name": "Touro"}, {
    "value": "66484",
    "label": "Brazosport College (Lake Jackson, TX) BC",
    "short_name": "BC"
}, {
    "value": "67032",
    "label": "Lawrence Technological University (Southfield, MI) LTU",
    "short_name": "LTU"
}, {
    "value": "67033",
    "label": "Indian Institute of Technology (Varanasi, India) IIT",
    "short_name": "IIT"
}, {
    "value": "67035",
    "label": "University of St. Gallen (St. Gallen, Switzerland) USG",
    "short_name": "USG"
}, {
    "value": "67039",
    "label": "Motithang Higher Secondary School (Thimphu, Bhutan) MHSS",
    "short_name": "MHSS"
}, {
    "value": "67042",
    "label": "Marymount Manhattan College (New York, NY) MMC",
    "short_name": "MMC"
}, {"value": "67046", "label": "University of Maine Augusta (Augusta, ME) UMA", "short_name": "UMA"}, {
    "value": "67049",
    "label": "Western New England University (Springfield, MA) WNE",
    "short_name": "WNE"
}, {"value": "67051", "label": "Art Institute of Portland, (Portland, OR) AIP", "short_name": "AIP"}, {
    "value": "67064",
    "label": "Sandhills Community College (Pinehurst, NC) SCC",
    "short_name": "SCC"
}, {"value": "67078", "label": "Mary Baldwin College (Staunton, VA) MBC", "short_name": "MBC"}, {
    "value": "67097",
    "label": "University of Massachusetts Dartmouth (North Dartmouth, MA) UMD",
    "short_name": "UMD"
}, {"value": "67183", "label": "Glendale Community College (Glendale, AZ) GCC", "short_name": "GCC"}, {
    "value": "67218",
    "label": "Hampshire College (Amherst, MA) HC",
    "short_name": "HC"
}, {"value": "67224", "label": "Saint Olaf College (Northfied, MN) SOC", "short_name": "SOC"}, {
    "value": "67884",
    "label": "James Sprunt Community College (Kenansville, NC) JSCC",
    "short_name": "JSCC"
}, {
    "value": "67887",
    "label": "Framingham State University (Framingham, MA) FSU",
    "short_name": "FSU"
}, {"value": "67889", "label": "Lasell College (Auburndale, MA) LC", "short_name": "LC"}, {
    "value": "67894",
    "label": "Central Maine Community College (Auburn, ME)  CMCC",
    "short_name": "CMCC"
}, {"value": "68148", "label": "Hamline University (St. Paul, MN) HU", "short_name": "HU"}, {
    "value": "68161",
    "label": "Carthage College (Kenosha, WI) CC",
    "short_name": "CC"
}, {
    "value": "68218",
    "label": "Saint Leo University (Saint Leo, FL) Saint Leo",
    "short_name": "Saint Leo"
}, {
    "value": "68257",
    "label": "Uttar Pradesh Technical University (Uttar Pradesh, India)  UPT",
    "short_name": "UPT"
}, {
    "value": "69140",
    "label": "University of Northern Iowa (Cedar Falls, IA) UNI",
    "short_name": "UNI"
}, {"value": "69143", "label": "Shaw University (Raleigh, NC) Shaw", "short_name": "Shaw"}, {
    "value": "69385",
    "label": "University of New Brunswick (Fredericton, Canada)  UNB",
    "short_name": "UNB"
}, {"value": "69382", "label": "Wayne Community College (Goldsboro, NC) WCC", "short_name": "WCC"}, {
    "value": "69530",
    "label": "Providence College  (Providence, RI) Providence",
    "short_name": "Providence"
}, {
    "value": "69536",
    "label": "Northeast Iowa Community College (Calmar, IA) NICC",
    "short_name": "NICC"
}, {
    "value": "70486",
    "label": "Green River Community College (Auburn, WA) GRCC",
    "short_name": "GRCC"
}, {
    "value": "70493",
    "label": "Walla Walla University (College Place, WA) WWU",
    "short_name": "WWU"
}, {"value": "70518", "label": " Elmira College (Elmira, NY) EC", "short_name": "EC"}, {
    "value": "70531",
    "label": "Shoreline Community College (Shoreline, WA) SCC",
    "short_name": "SCC"
}, {
    "value": "70670",
    "label": "Blackhawk Technical College (Janesville, WI) BTC",
    "short_name": "BTC"
}, {"value": "70672", "label": "Ave Maria University (Ave Maria, FL) AMU", "short_name": "AMU"}, {
    "value": "70673",
    "label": "State College of Florida (Bradenton, FL) SCF",
    "short_name": "SCF"
}, {"value": "70676", "label": "The King's College (New York, NY) TKC", "short_name": "TKC"}, {
    "value": "71389",
    "label": "College of Southern Idaho (Twin Falls, ID) CSI",
    "short_name": "CSI"
}, {
    "value": "71405",
    "label": "College of Saint Benedict (Collegeville, MN) CSB",
    "short_name": "CSB"
}, {
    "value": "71407",
    "label": "Texas State Technical College (Waco, TX) TSTC",
    "short_name": "TSTC"
}, {"value": "71414", "label": "Long Island University (Brooklyn, NY) LIU", "short_name": "LIU"}, {
    "value": "71431",
    "label": "St. Andrews University (Laurinberg, NC) SAU",
    "short_name": "SAU"
}, {
    "value": "71432",
    "label": "Augsburg College (Minneapolis, MN) Augsburg",
    "short_name": "Augsburg"
}, {
    "value": "71560",
    "label": "St. Cloud State University (St. Cloud, MN) STC",
    "short_name": "STC"
}, {"value": "71569", "label": "Independence University (Online) IU", "short_name": "IU"}, {
    "value": "76568",
    "label": "Mongolian International University (Ulaanbaatar, Mongolia) MIU",
    "short_name": "MIU"
}, {
    "value": "79131",
    "label": "University of Wisconsin Oshkosh (Oshkosh, WI) UWOsh",
    "short_name": "UWOsh"
}, {"value": "79202", "label": "Hartwick College (Oneonta, NY) HC", "short_name": "HC"}, {
    "value": "82079",
    "label": "Western Kentucky University (Bowling Green, KY) WKU ",
    "short_name": "WKU "
}, {
    "value": "82082",
    "label": "Scottsdale Community College (Scottsdale, AZ) SCC",
    "short_name": "SCC"
}, {
    "value": "82085",
    "label": "Indiana University of Pennsylvania (Indiana, PA) IUP",
    "short_name": "IUP"
}, {
    "value": "82088",
    "label": "Minerva Schools at KGI (San Francisco, CA) Minerva ",
    "short_name": "Minerva "
}, {"value": "82092", "label": "Drury University (Springfield, MO) DU", "short_name": "DU"}, {
    "value": "82104",
    "label": "University of St Andrews (Fife, England) St. Andrews",
    "short_name": "St. Andrews"
}, {
    "value": "82107",
    "label": "University of Warwick (Coventry, England) Warwick",
    "short_name": "Warwick"
}, {
    "value": "82109",
    "label": "University College London (London, England) UCL ",
    "short_name": "UCL "
}, {"value": "82111", "label": "King's College London (London, England) KCL ", "short_name": "KCL "}, {
    "value": "82127",
    "label": "Vinayaka Missions Homoeopathic Medical College (Salem, India) VMHMC",
    "short_name": "VMHMC"
}, {
    "value": "82128",
    "label": "West Texas A&M University (Canyon, TX) WTAMU",
    "short_name": "WTAMU"
}, {"value": "83164", "label": "Post University (Waterbury, CT) Post", "short_name": "Post"}, {
    "value": "205842",
    "label": "George Fox University (Newberg, OR) GFU",
    "short_name": "GFU"
}, {"value": "86705", "label": "Alvin Community College (Alvin, TX) Alvin ", "short_name": "Alvin "}, {
    "value": "86706",
    "label": "Saint Louis Community College - Wildwood (St. Louis, MO)  SLCC",
    "short_name": "SLCC"
}, {
    "value": "86707",
    "label": "Saint Louis Community College - Mermace (St. Louis, MO) SLCC",
    "short_name": "SLCC"
}, {
    "value": "86708",
    "label": "Saint Louis Community College - Forest Park (St. Louis, MO) SLCC",
    "short_name": "SLCC"
}, {
    "value": "86709",
    "label": "Saint Louis Community College - Florissant Valley (St. Louis, MO) SLCC",
    "short_name": "SLCC"
}, {
    "value": "87472",
    "label": "Trident Technical College (North Charleston, SC) Trident ",
    "short_name": "Trident "
}, {
    "value": "88141",
    "label": "Saint Joseph's College (Standish, ME) Saint Joseph's ",
    "short_name": "Saint Joseph's "
}, {
    "value": "88142",
    "label": "Gda\u0144sk University of Technology (Gda\u0144sk, Poland) Gda\u0144sk ",
    "short_name": "Gda\u0144sk "
}, {
    "value": "88144",
    "label": "Milwaukee Area Technical College (Milwaukee, WI) Milwaukee Technical ",
    "short_name": "Milwaukee Technical "
}, {
    "value": "88152",
    "label": "Southern University A&M College (Baton Rouge, LA) Southern A&M",
    "short_name": "Southern A&M"
}, {
    "value": "88155",
    "label": "Edinboro University (Edinboro, PA) Edinboro ",
    "short_name": "Edinboro "
}, {
    "value": "88160",
    "label": " Ozark Technical Community College (Springfield, MO) Ozark ",
    "short_name": "Ozark "
}, {"value": "88171", "label": "Midway University (Midway, KY) Midway ", "short_name": "Midway "}, {
    "value": "88176",
    "label": "North Idaho College (Coeur d'Alene, ID) North Idaho ",
    "short_name": "North Idaho "
}, {"value": "89272", "label": "Cameron University (Lawton, OK) Cameron", "short_name": "Cameron"}, {
    "value": "89281",
    "label": "Keiser University - Miami (Miami, FL) Keiser ",
    "short_name": "Keiser "
}, {
    "value": "91110",
    "label": " Front Range Community College, (Westminster, CO) Front Range ",
    "short_name": "Front Range "
}, {
    "value": "91111",
    "label": "Le Cordon Bleu College of Culinary Arts (San Francisco, CA) Le Cordon Bleu",
    "short_name": "Le Cordon Bleu"
}, {
    "value": "91114",
    "label": "San Antonio Community College (San Antonio, TX) SACC",
    "short_name": "SACC"
}, {
    "value": "91117",
    "label": "Kansas City Art Institute (Kansas City, MO) KCAI",
    "short_name": "KCAI"
}, {
    "value": "91122",
    "label": "Father Saturnino Urios University (Butuan, Philippines) Father Saturnino ",
    "short_name": "Father Saturnino "
}, {
    "value": "91123",
    "label": "St. Louis College Valenzuela (Valenzuela, Philippines)  St. Louis ",
    "short_name": "St. Louis "
}, {
    "value": "91501",
    "label": "University of North Carolina School of the Arts (Winston-Salem, NC) UNC School of Arts",
    "short_name": "UNC School of Arts"
}, {"value": "91503", "label": "York College of Pennsylvania (York, PA)  YCP", "short_name": "YCP"}, {
    "value": "91504",
    "label": "Berkeley College (New York, NY) Berkeley College ",
    "short_name": "Berkeley College "
}, {
    "value": "94858",
    "label": "Belhaven University (Jackson, MS) Belhaven ",
    "short_name": "Belhaven "
}, {
    "value": "94864",
    "label": "Holyoke Community College (Holyoke, MA) Holyoke CC",
    "short_name": "Holyoke CC"
}, {"value": "94865", "label": "Hawaii Pacific University (Honolulu, HI) HPU", "short_name": "HPU"}, {
    "value": "98197",
    "label": "Columbia College (Columbia, MO) CCIS",
    "short_name": "CCIS"
}, {
    "value": "98201",
    "label": "Missouri Valley College (Marshall, MO) Moval ",
    "short_name": "Moval "
}, {
    "value": "98202",
    "label": "Missouri State University (Springfield, MO) MSU",
    "short_name": "MSU"
}, {
    "value": "98204",
    "label": "Missouri State University (Springfield, MO) MSU",
    "short_name": "MSU"
}, {"value": "98209", "label": "Park University (Parkville, MO) Park ", "short_name": "Park "}, {
    "value": "98213",
    "label": "Missouri Western State University (Saint Joseph, MO) MWSU",
    "short_name": "MWSU"
}, {"value": "98217", "label": "Cincinnati State (Cincinnati, OH) CSTCC", "short_name": "CSTCC"}, {
    "value": "98220",
    "label": "Wilmington College (Wilmington, OH) Wilmington ",
    "short_name": "Wilmington "
}, {
    "value": "98863",
    "label": "Roxbury Community College (Roxbury, MA) Roxbury ",
    "short_name": "Roxbury "
}, {
    "value": "98864",
    "label": "Sir M. Visvesvaraya Institute of Technology (Bengaluru, India) SIRMVIT",
    "short_name": "SIRMVIT"
}, {"value": "98868", "label": "Riverside City College (Riverside, CA) RCC", "short_name": "RCC"}, {
    "value": "98871",
    "label": "Central Washington University (Ellensburg, WA) CWU",
    "short_name": "CWU"
}, {
    "value": "98874",
    "label": "Wofford College (Spartanburg, SC) Wofford",
    "short_name": "Wofford"
}, {"value": "230181", "label": "Shorter University (Rome, GA) Shorter", "short_name": "Shorter"}, {
    "value": "98978",
    "label": "Wheeling Jesuit University (Wheeling, WV) WJU",
    "short_name": "WJU"
}, {"value": "98982", "label": "Bacone College (Muskogee, OK) Bacone ", "short_name": "Bacone "}, {
    "value": "98989",
    "label": "Art Institute of Washington (Arlington, VA) AIW ",
    "short_name": "AIW "
}, {
    "value": "99384",
    "label": "Guilford Technical Community College (Jamestown, NC) GTCC",
    "short_name": "GTCC"
}, {
    "value": "99389",
    "label": "University of Illinois - Springfield (Springfield, IL) UIS",
    "short_name": "UIS"
}, {
    "value": "99391",
    "label": "Saurashtra University - Rajkot (Gujarat, India) Saurashtra ",
    "short_name": "Saurashtra "
}, {
    "value": "99400",
    "label": "Rutgers, State University of New Jersey - Camden (Camden, NJ) Camden ",
    "short_name": "Camden "
}, {
    "value": "99520",
    "label": "William Peace University (Raleigh, NC) Peace",
    "short_name": "Peace"
}, {"value": "101610", "label": "Point Park University (Pittsburgh, PA) PPU", "short_name": "PPU"}, {
    "value": "101613",
    "label": "Burlington College (Burlington, VT) Burlington",
    "short_name": "Burlington"
}, {
    "value": "103639",
    "label": "Texas A&M International University (Laredo, TX) TAM IU",
    "short_name": "TAM IU"
}, {
    "value": "103644",
    "label": "El Camino College (Torrence, CA) El Camino ",
    "short_name": "El Camino "
}, {
    "value": "103647",
    "label": "North Central University (Minneapolis, MN) North Central",
    "short_name": "North Central"
}, {
    "value": "103648",
    "label": "Texas A&M University - Galveston (Galveston, TX) TA&M Galveston",
    "short_name": "TA&M Galveston"
}, {
    "value": "103670",
    "label": "Rocky Mountain College (Billings, MT) Rocky",
    "short_name": "Rocky"
}, {
    "value": "103671",
    "label": "Hampden-Sydney College (Hampden-Sydney, VA) HSC",
    "short_name": "HSC"
}, {"value": "103674", "label": "Curry College (Milton, MA) Curry", "short_name": "Curry"}, {
    "value": "103675",
    "label": " Rollins College (Winter Park, FL)  Rollins",
    "short_name": "Rollins"
}, {
    "value": "103677",
    "label": "Goucher College (Baltimore, MD) Goucher ",
    "short_name": "Goucher "
}, {
    "value": "103679",
    "label": "Bemidji State University (Bemidji, MN) Bemidji State",
    "short_name": "Bemidji State"
}, {
    "value": "103681",
    "label": "Anderson University (Anderson, IN) Anderson",
    "short_name": "Anderson"
}, {
    "value": "103683",
    "label": "University of San Carlos (Cebu, Philippines) U of San Carlos ",
    "short_name": "U of San Carlos "
}, {
    "value": "103684",
    "label": "Charter College (Anchorage, AK) Charter ",
    "short_name": "Charter "
}, {
    "value": "104648",
    "label": "National University (La Jolla, CA) National",
    "short_name": "National"
}, {
    "value": "105023",
    "label": "Truett-McConnell College (Cleveland, GA) TMC ",
    "short_name": "TMC "
}, {
    "value": "105025",
    "label": "Whittier College (Whittier, CA) Whittier ",
    "short_name": "Whittier "
}, {
    "value": "105026",
    "label": "Wayne State University (Detroit, MI) Wayne State ",
    "short_name": "Wayne State "
}, {
    "value": "105338",
    "label": "Appalachian State University (Boone, NC) App State ",
    "short_name": "App State "
}, {
    "value": "105340",
    "label": "Lehigh Carbon Community College (Schnecksville, PA) LCCC",
    "short_name": "LCCC"
}, {
    "value": "105344",
    "label": "Bethel University (Saint Paul, MN) Bethel ",
    "short_name": "Bethel "
}, {
    "value": "105346",
    "label": "University of South Carolina Upstate (Spartanburg, SC) USC Upstate ",
    "short_name": "USC Upstate "
}, {
    "value": "105348",
    "label": "Northern Marianas College (Saipan, Northern Mariana Islands) Marianas ",
    "short_name": "Marianas "
}, {
    "value": "105349",
    "label": "Indiana State University (Terre Huate, IN) ISU",
    "short_name": "ISU"
}, {
    "value": "106225",
    "label": "Carl Sandburg College (Galesburg, IL) Sandburg ",
    "short_name": "Sandburg "
}, {
    "value": "107445",
    "label": "College of Alameda (Alameda, CA) Alameda",
    "short_name": "Alameda"
}, {
    "value": "107450",
    "label": "Humphreys College (Stockton, CA) Humphreys",
    "short_name": "Humphreys"
}, {"value": "107451", "label": "Laney College (Oakland, CA) Laney", "short_name": "Laney"}, {
    "value": "107452",
    "label": "Merritt College (Oakland, CA) Merritt",
    "short_name": "Merritt"
}, {
    "value": "107459",
    "label": "Saint Mary's College (Notre Dame, IN) Saint Mary's",
    "short_name": "Saint Mary's"
}, {"value": "107466", "label": "Medgar Evers College (Brooklyn, NY) CUNY", "short_name": "CUNY"}, {
    "value": "107468",
    "label": "Everglades University (Boca Raton, FL) Everglades University ",
    "short_name": "Everglades University "
}, {
    "value": "107473",
    "label": "Northwest Vista College (San Antonio, TX) Alamo",
    "short_name": "Alamo"
}, {
    "value": "107475",
    "label": "Oklahoma Christian University (Edmond, OK) OCU",
    "short_name": "OCU"
}, {"value": "107476", "label": "Thiel College (Greenville, PA) Thiel", "short_name": "Thiel"}, {
    "value": "107477",
    "label": "Lansing Community College (Lansing, MI) LCC",
    "short_name": "LCC"
}, {
    "value": "107479",
    "label": "Bluefield State College (Bluefield, WV) Bluefield State",
    "short_name": "Bluefield State"
}, {
    "value": "108543",
    "label": "San Diego Mesa College (San Diego, CA) Mesa",
    "short_name": "Mesa"
}, {
    "value": "109045",
    "label": "Copiah-Lincoln Community College (Wssonn, MS) Colin",
    "short_name": "Colin"
}, {"value": "109049", "label": "Kean University (Union, NJ) Kean", "short_name": "Kean"}, {
    "value": "109062",
    "label": "Delta State University (Cleveland, MS) Delta State",
    "short_name": "Delta State"
}, {
    "value": "109068",
    "label": "Wilkes University (Wilkes-Barre, PA) Wilkes",
    "short_name": "Wilkes"
}, {
    "value": "109067",
    "label": "University of Dallas (Irving, TX) UDallas",
    "short_name": "UDallas"
}, {
    "value": "109074",
    "label": "Little Big Horn College (Crow Agency, MT) LBHC",
    "short_name": "LBHC"
}, {
    "value": "109076",
    "label": "Moravian College (Bethlehem, PA) Moravian ",
    "short_name": "Moravian "
}, {
    "value": "109268",
    "label": "University of the Philippines (Quezo City,Philippines ) UP",
    "short_name": "UP"
}, {
    "value": "109272",
    "label": "University of Hong Kong (Pokfulam, Hong Kong) HKO",
    "short_name": "HKO"
}, {
    "value": "109273",
    "label": "Indian Institute of Information Technology (Allahabad, India) iiit",
    "short_name": "iiit"
}, {
    "value": "111263",
    "label": " Inter American University of Puerto Rico - Arecibo (Arecibo, PR) Inter American",
    "short_name": "Inter American"
}, {"value": "112154", "label": "Pine Manor College (Chestnut Hill, MA) PMC", "short_name": "PMC"}, {
    "value": "112163",
    "label": "Grantham University (Lenexa, KS) Grantham",
    "short_name": "Grantham"
}, {"value": "112164", "label": "Eureka College (Eureka, IL) Eureka", "short_name": "Eureka"}, {
    "value": "113085",
    "label": "University of Delhi (New Delhi, India) DU",
    "short_name": "DU"
}, {"value": "113088", "label": "Kirori Mal College (New Delhi, India)  KM", "short_name": "KM"}, {
    "value": "113089",
    "label": "Neumann University (Aston, PA) Neumann ",
    "short_name": "Neumann "
}, {"value": "113091", "label": "Barton College (Wilson, NC) Barton ", "short_name": "Barton "}, {
    "value": "113093",
    "label": "D'Youville College (Buffalo, NY) DYC",
    "short_name": "DYC"
}, {
    "value": "115381",
    "label": "Nakamura Gakuen University (Fukuoka, Japan) Nakamura ",
    "short_name": "Nakamura "
}, {
    "value": "115394",
    "label": "Life Pacific College (San Dimas, CA) Life Pacific",
    "short_name": "Life Pacific"
}, {"value": "115411", "label": "Tyler Junior College (Tyler, TX) TJC", "short_name": "TJC"}, {
    "value": "117369",
    "label": "Newman University (Wichita, KS) Newman",
    "short_name": "Newman"
}, {
    "value": "117378",
    "label": "Millersville University ( Millersville, PA) Millersville",
    "short_name": "Millersville"
}, {
    "value": "117391",
    "label": "Isothermal Community College (Spindale, NC) Isothermal",
    "short_name": "Isothermal"
}, {
    "value": "117402",
    "label": "Gardner-Webb University (Boiling Springs, NC) Gardner-Webb",
    "short_name": "Gardner-Webb"
}, {
    "value": "117412",
    "label": " Francis Marion University (Florence, SC) Fmarion",
    "short_name": "Fmarion"
}, {
    "value": "117420",
    "label": "Florence Darlington Technical College (Florence, SC) FDTC",
    "short_name": "FDTC"
}, {
    "value": "117668",
    "label": "Berklee College of Music (Boston, MA) Berklee",
    "short_name": "Berklee"
}, {"value": "117695", "label": "Malcolm X College.( Chicago, IL) CCC", "short_name": "CCC"}, {
    "value": "117699",
    "label": "Ohio Technical College (Cleveland, OH) OhioTech",
    "short_name": "OhioTech"
}, {
    "value": "117713",
    "label": "El Centro College (Dallas, TX) El Centro ",
    "short_name": "El Centro "
}, {
    "value": "117723",
    "label": "Le Cordon Bleu College of Culinary Arts (Dallas,Texas) Le Cordon Bleu",
    "short_name": "Le Cordon Bleu"
}, {
    "value": "117736",
    "label": "Johnson and Wales University (Denver, CO) JWU",
    "short_name": "JWU"
}, {
    "value": "117746",
    "label": "Austin Community College (Austin, TX) AustinCC",
    "short_name": "AustinCC"
}, {
    "value": "117754",
    "label": "San Jacinto College-South Campus (Houston, TX) SanJac",
    "short_name": "SanJac"
}, {
    "value": "117759",
    "label": "Culinary Institute of America (San Antonio, TX) CiaChef",
    "short_name": "CiaChef"
}, {
    "value": "119718",
    "label": "Jefferson Community and Technical College (Louisville, KY) Jefferson",
    "short_name": "Jefferson"
}, {
    "value": "119726",
    "label": "Central Louisiana Technical Community College (Winnfield, LA) CLTCC",
    "short_name": "CLTCC"
}, {"value": "119743", "label": "Berea College (Berea, KY) Berea ", "short_name": "Berea "}, {
    "value": "124166",
    "label": "Randolph Community College (Asheboro, NC) Randolph",
    "short_name": "Randolph"
}, {
    "value": "127510",
    "label": "University of Toledo (Toledo, OH) UToledo",
    "short_name": "UToledo"
}, {"value": "127528", "label": "National Louis University (Chicago, IL) NL", "short_name": "NL"}, {
    "value": "127530",
    "label": "Eastern New Mexico University (Portales, NM) ENMU",
    "short_name": "ENMU"
}, {
    "value": "127538",
    "label": "Grand Rapids Community College (Grand Rapids, MI) GRCC",
    "short_name": "GRCC"
}, {
    "value": "127553",
    "label": "Harrison  College Downtown (Indianapolis, IN) Harrison  ",
    "short_name": "Harrison  "
}, {
    "value": "127558",
    "label": "Linn-Benton Community College (Albany, OR) Linnbenton",
    "short_name": "Linnbenton"
}, {
    "value": "127581",
    "label": " Ivy Tech Community College-Northwest (Gary, IN) Ivytech",
    "short_name": "Ivytech"
}, {
    "value": "127596",
    "label": "University of Wisconsin - Platteville (Platteville, WI) Uwplatt",
    "short_name": "Uwplatt"
}, {
    "value": "127605",
    "label": "Asheville\u2013Buncombe Technical Community College (Asheville, NC) ABtech",
    "short_name": "ABtech"
}, {
    "value": "127621",
    "label": "Strayer University - District of Columbia (Washington, DC) Strayer ",
    "short_name": "Strayer "
}, {
    "value": "127646",
    "label": "Lander University (Greenwood, SC) Lander ",
    "short_name": "Lander "
}, {
    "value": "127654",
    "label": "The Art Institute of California - San Francisco (San Francisco, CA) AI SF",
    "short_name": "AI SF"
}, {
    "value": "127665",
    "label": "University of Texas at Dallas (Richardson, TX) UTDallas",
    "short_name": "UTDallas"
}, {
    "value": "127671",
    "label": "Stone Child College (Box Elder, MT) Stone Child",
    "short_name": "Stone Child"
}, {
    "value": "127675",
    "label": "Madison Media Institute (Madison, WI) Media Institute",
    "short_name": "Media Institute"
}, {
    "value": "127687",
    "label": " Marshall University (Huntington, WV)  Marshall ",
    "short_name": " Marshall "
}, {
    "value": "127955",
    "label": "Howard Payne University (Brownwood, TX) HPUTX",
    "short_name": "HPUTX"
}, {
    "value": "127975",
    "label": "City University of New York (New York, NY) CUNY",
    "short_name": "CUNY"
}, {
    "value": "127997",
    "label": "Borough of Manhattan Community College (New York, NY) BMCC",
    "short_name": "BMCC"
}, {"value": "130649", "label": "Polk State College (Lakeland, FL) Polk", "short_name": "Polk"}, {
    "value": "130656",
    "label": "Tallahassee Community College (Tallahassee, FL) TCC",
    "short_name": "TCC"
}, {
    "value": "130753",
    "label": "Central Arizona College(Coolidge, AZ) CentralAZ",
    "short_name": "CentralAZ"
}, {"value": "130788", "label": "Towson University (Towson, MD) TU", "short_name": "TU"}, {
    "value": "134176",
    "label": "Universitas Padjadjaran (Bandung, Indonesia)  Unpad",
    "short_name": "Unpad"
}, {
    "value": "134187",
    "label": "Telkom University (Bandung, Indonesia)  Telkom",
    "short_name": "Telkom"
}, {
    "value": "134196",
    "label": "Universitas Madura (Raya Panglegur, Indonesia)  UNIRA",
    "short_name": "UNIRA"
}, {
    "value": "134206",
    "label": "Hollins University (Roanoke, VA) Hollins",
    "short_name": "Hollins"
}, {
    "value": "134632",
    "label": "Niger Delta University (Amassama, Nigeria)  NDU",
    "short_name": "NDU"
}, {
    "value": "134637",
    "label": "Northern Virginia Community College (Springfield, VA) NOVA",
    "short_name": "NOVA"
}, {
    "value": "135825",
    "label": "Arkansas Tech University (Russellville, AR) Ark Tech",
    "short_name": "Ark Tech"
}, {
    "value": "136149",
    "label": "Roosevelt University (Chicago, IL) Roosevelt ",
    "short_name": "Roosevelt "
}, {"value": "136154", "label": "Harold Washington College (Chicago, IL) HWC", "short_name": "HWC"}, {
    "value": "136194",
    "label": "Williams Baptist College (Walnut Ridge, AR) WB College ",
    "short_name": "WB College "
}, {
    "value": "136200",
    "label": "University of Arkansas Community College - Batesville (Batesville, AR) UACCB",
    "short_name": "UACCB"
}, {"value": "136203", "label": "Lyon College (Batesville, AR) Lyon", "short_name": "Lyon"}, {
    "value": "136206",
    "label": "Ozarka College (Melbourne, AR) Ozarka ",
    "short_name": "Ozarka "
}, {
    "value": "137050",
    "label": "Northeastern Illinois University (Chicago, IL) NEIU",
    "short_name": "NEIU"
}, {
    "value": "137060",
    "label": "Seton Hill University (Greensburg, PA) Seton Hill",
    "short_name": "Seton Hill"
}, {
    "value": "137079",
    "label": "Universitas Bina Darma (Sumatera Selatan, Indonesia)   Bina Darma",
    "short_name": "Bina Darma"
}, {
    "value": "137080",
    "label": "Washburn University (Topeka, KS) Washburn",
    "short_name": "Washburn"
}, {
    "value": "137087",
    "label": "University of Bridgeport (Bridgeport, CT) Bridgeport",
    "short_name": "Bridgeport"
}, {
    "value": "137093",
    "label": "Hill College (Hillsboro, TX) Hill College",
    "short_name": "Hill College"
}, {"value": "137102", "label": "Oglala Lakota College (Kyle, SD) OLC", "short_name": "OLC"}, {
    "value": "137107",
    "label": "Virginia College Online (Birmingham, AL) VC",
    "short_name": "VC"
}, {
    "value": "137168",
    "label": " South Texas College (McAllen,TX)  South Texas College",
    "short_name": " South Texas College"
}, {
    "value": "139064",
    "label": "Chaffey College (Rancho Cucamonga, CA) Chaffey ",
    "short_name": "Chaffey "
}, {
    "value": "141130",
    "label": "Cedarville University ( Cedarville, OH) Cedarville ",
    "short_name": "Cedarville "
}, {
    "value": "141135",
    "label": "Dyersburg State Community College (Dyersburg, TN) DSCC",
    "short_name": "DSCC"
}, {
    "value": "141169",
    "label": "Salem State University (Salem, MA) Salem State",
    "short_name": "Salem State"
}, {
    "value": "141172",
    "label": "Oklahoma City University (Oklahoma City, OK) OKCU",
    "short_name": "OKCU"
}, {
    "value": "141181",
    "label": "Edison State Community College (Piqua, OH) Edison Ohio",
    "short_name": "Edison Ohio"
}, {
    "value": "141190",
    "label": "Western Governors University (Salt Lake City,UT)  WGU",
    "short_name": "WGU"
}, {
    "value": "164611",
    "label": "Olivet Nazarene University (Bourbonnais, IL) Olivet ",
    "short_name": "Olivet "
}, {
    "value": "142924",
    "label": "North Central College (Naperville, IL) North Central College ",
    "short_name": "North Central College "
}, {
    "value": "142933",
    "label": " El Paso Community College (El Paso, TX) EPCC",
    "short_name": "EPCC"
}, {
    "value": "142938",
    "label": "SUNY Broome Community College (Binghamton, NY) SUNY Broome",
    "short_name": "SUNY Broome"
}, {
    "value": "142944",
    "label": "Brown Mackie College (Albuquerque, NM) Brown Mackie College ",
    "short_name": "Brown Mackie College "
}, {
    "value": "142948",
    "label": "Finger Lakes Health (Geneva, NY) FL Health",
    "short_name": "FL Health"
}, {
    "value": "144167",
    "label": "Western Carolina University (Cullowhee, NC) WCU",
    "short_name": "WCU"
}, {
    "value": "144260",
    "label": "University of Wisconsin - Whitewater (Whitewater, WI) U Wisc",
    "short_name": "U Wisc"
}, {"value": "144797", "label": "North Park University (Chicago, IL) NPU", "short_name": "NPU"}, {
    "value": "144801",
    "label": "Illinois Wesleyan University (Bloomington, IL) IWU",
    "short_name": "IWU"
}, {
    "value": "145375",
    "label": "Bryant and Stratton College-Albany Campus (Albany,NY) Bryant and Stratton ",
    "short_name": "Bryant and Stratton "
}, {
    "value": "145383",
    "label": "Fairfield University (Fairfield, CT) Fairfield ",
    "short_name": "Fairfield "
}, {"value": "145390", "label": "Dean College (Franklin, MA) Dean", "short_name": "Dean"}, {
    "value": "145394",
    "label": "Welch College (Nashville, TN) Welch",
    "short_name": "Welch"
}, {
    "value": "147758",
    "label": "McPherson College (McPherson, KS) McPherson",
    "short_name": "McPherson"
}, {
    "value": "147760",
    "label": "Metropolitan State University of St Paul (St Paul, MN) Metro State",
    "short_name": "Metro State"
}, {
    "value": "148952",
    "label": "Shasta College (Redding, CA) Shasta College",
    "short_name": "Shasta College"
}, {
    "value": "148954",
    "label": "Santa Rosa Junior College (Santa Rosa, CA) Santa Rosa ",
    "short_name": "Santa Rosa "
}, {
    "value": "148958",
    "label": "Community College of Rhode Island (Warwick, RI) CCRI",
    "short_name": "CCRI"
}, {"value": "148963", "label": "Fresno Pacific University (Fresno, CA) FPU", "short_name": "FPU"}, {
    "value": "148974",
    "label": "University of East London (London, United Kingdom)  UEL",
    "short_name": "UEL"
}, {
    "value": "148978",
    "label": "University of Minnesota-Duluth (Duluth,MN) UMN",
    "short_name": "UMN"
}, {
    "value": "148987",
    "label": "University of Wisconsin - La Crosse (La Crosse, WI) UWLAX",
    "short_name": "UWLAX"
}, {
    "value": "148993",
    "label": " Lincoln University (Jefferson City, MO) Lincoln",
    "short_name": "Lincoln"
}, {"value": "150574", "label": " Norfolk State University (Norfolk, VA) NSU", "short_name": "NSU"}, {
    "value": "150577",
    "label": "Bryant University (Smithfield, RI) Bryant",
    "short_name": "Bryant"
}, {
    "value": "150588",
    "label": "Augustana University (Sioux Falls, SD) Augie",
    "short_name": "Augie"
}, {
    "value": "152526",
    "label": " Mississippi University for Women (Columbus, MS) MUW",
    "short_name": "MUW"
}, {
    "value": "152538",
    "label": "Portland Community College (Portland, OR) PCC",
    "short_name": "PCC"
}, {
    "value": "152548",
    "label": "Asnuntuck Community College (Enfield, CT) Asnuntuck ",
    "short_name": "Asnuntuck "
}, {
    "value": "155562",
    "label": "Huntingdon College (Montgomery, AL) Huntingdon ",
    "short_name": "Huntingdon "
}, {"value": "155604", "label": "Lenoir Rhyne University (Hickory, NC) LR", "short_name": "LR"}, {
    "value": "162532",
    "label": "Keene State College (Keene, NH) Keene ",
    "short_name": "Keene "
}, {
    "value": "162538",
    "label": "Mount St. Mary's University (Emmitsburg, MD) MSMary",
    "short_name": "MSMary"
}, {"value": "162569", "label": "Bastyr University (Kenmore, WA) Bastyr ", "short_name": "Bastyr "}, {
    "value": "162580",
    "label": "Medaille College (Buffalo, NY) Medaille ",
    "short_name": "Medaille "
}, {
    "value": "162585",
    "label": "Health Polytechnic Semarang (Semarang City, Indonesia)  Semarang",
    "short_name": "Semarang"
}, {
    "value": "162591",
    "label": "College of Idaho (Caldwell, ID) College of Idaho ",
    "short_name": "College of Idaho "
}, {
    "value": "162599",
    "label": "Saint Edward's University (Austin, TX) ST Edwards ",
    "short_name": "ST Edwards "
}, {
    "value": "162605",
    "label": " New Mexico State University-Alamogordo (Alamogordo, NM) NMSU",
    "short_name": "NMSU"
}, {
    "value": "162611",
    "label": "Lake Tahoe Community College (South Lake Tahoe, CA) LTCC",
    "short_name": "LTCC"
}, {
    "value": "162613",
    "label": "Central Piedmont Community College (Charlotte, NC) CPCC",
    "short_name": "CPCC"
}, {
    "value": "162618",
    "label": "University of Evansville (Evansville, IN) Evansville",
    "short_name": "Evansville"
}, {
    "value": "164608",
    "label": "Springfield College (Springfield, MA) Springfield",
    "short_name": "Springfield"
}, {
    "value": "166646",
    "label": "Sinclair Community College (Dayton, OH) Dayton",
    "short_name": "Dayton"
}, {
    "value": "170355",
    "label": "Montana Tech of the University (Butte, MT) MTech",
    "short_name": "MTech"
}, {
    "value": "170811",
    "label": "Diponegoro University (Semarang, Indonesia) UNDIP",
    "short_name": "UNDIP"
}, {
    "value": "172156",
    "label": "Philadelphia University (Philadelphia, PA) Philau",
    "short_name": "Philau"
}, {
    "value": "173921",
    "label": "University of Mary Washington (Fredericksburg, VA) UMW ",
    "short_name": "UMW "
}, {"value": "173928", "label": "Roanoke College (Salem,VA) Roanoke", "short_name": "Roanoke"}, {
    "value": "173931",
    "label": "St. Bonaventure University (Bonaventure, NY) SBU",
    "short_name": "SBU"
}, {
    "value": "176732",
    "label": "York Technical College (Rock Hill, SC) York Tech",
    "short_name": "York Tech"
}, {
    "value": "176757",
    "label": "Assumption College (Worcester, MA) Assumption ",
    "short_name": "Assumption "
}, {
    "value": "176758",
    "label": "Saint Anselm College (Manchester, NH) Anselm",
    "short_name": "Anselm"
}, {
    "value": "176759",
    "label": "Saint Michael's College (Colchester, VT) SMCVT",
    "short_name": "SMCVT"
}, {
    "value": "184600",
    "label": " Brewton-Parker College (Mt Vernon, GA) BPC ",
    "short_name": "BPC "
}, {
    "value": "184601",
    "label": "Plymouth State University (Plymouth, NH) Plymouth",
    "short_name": "Plymouth"
}, {"value": "184602", "label": "Albany Medical College (Albany, NY) AMC", "short_name": "AMC"}, {
    "value": "185881",
    "label": "University of Massachusetts - Boston (Boston, MA) UMB ",
    "short_name": "UMB "
}, {
    "value": "185883",
    "label": "Kalamazoo College (Kalamazoo, MI) K College ",
    "short_name": "K College "
}, {
    "value": "186538",
    "label": "Thomas Edison State University (Trenton, NJ) TESU",
    "short_name": "TESU"
}, {
    "value": "187159",
    "label": "Bryan College (Dayton, TN) Bryan College",
    "short_name": "Bryan College"
}, {
    "value": "187168",
    "label": "Utica College (Utica, NY) Utica College",
    "short_name": "Utica College"
}, {
    "value": "187182",
    "label": "North Essex Community College (Haverhill, MA) NECC",
    "short_name": "NECC"
}, {
    "value": "187363",
    "label": "Columbia Southern University (Orange Beach, AL) CSU",
    "short_name": "CSU"
}, {
    "value": "187364",
    "label": "H. Councill Trenholm State Technical College (Montgomery, AL) Trenholm State ",
    "short_name": "Trenholm State "
}, {"value": "187366", "label": "Alma College (Alma, MI) Alma ", "short_name": "Alma "}, {
    "value": "187367",
    "label": "Hendrix College (Conway, AR)  Hendrix ",
    "short_name": "Hendrix "
}, {
    "value": "187374",
    "label": "New River Technology and Community College (Lewisburg, WV) New River ",
    "short_name": "New River "
}, {
    "value": "187375",
    "label": "Staten Island College - CUNY (Staten Island, NY) CSI CUNY ",
    "short_name": "CSI CUNY "
}, {
    "value": "187376",
    "label": "University of Dubuque (Dubuque, IA) Dubuque ",
    "short_name": "Dubuque "
}, {
    "value": "188383",
    "label": "University of Detroit Mercy (Detroit, MI) Detroit Mercy",
    "short_name": "Detroit Mercy"
}, {"value": "189211", "label": "Irvine Valley College (Irvine, CA) IVC", "short_name": "IVC"}, {
    "value": "191286",
    "label": "Martin Luther College (New Ulm, MN) MLC",
    "short_name": "MLC"
}, {
    "value": "191287",
    "label": "Pacific Northwest College of Art (Portland, OR) PNCA ",
    "short_name": "PNCA "
}, {
    "value": "191288",
    "label": "Washington County Community College (Calais, ME)  WCCC",
    "short_name": "WCCC"
}, {
    "value": "192309",
    "label": "Rose-Hulman Institute of Technology (Terre Haute, IN) Rose-Hulman",
    "short_name": "Rose-Hulman"
}, {"value": "192311", "label": "Lynn University (Baco Raton, FL) Lynn", "short_name": "Lynn"}, {
    "value": "192372",
    "label": "Cabrini College (Radnor, PA) Cabrini",
    "short_name": "Cabrini"
}, {
    "value": "192376",
    "label": "Georgia College & State University (Milledgeville, GA) GCSU",
    "short_name": "GCSU"
}, {
    "value": "193943",
    "label": "Sussex County Community College (Newton, NJ) Sussex County CC",
    "short_name": "Sussex County CC"
}, {
    "value": "197299",
    "label": "Rockford University (Rockford, IL) Rockford ",
    "short_name": "Rockford "
}, {"value": "197303", "label": "Eastern Nazarene College (Quincy, MA) ENC", "short_name": "ENC"}, {
    "value": "197307",
    "label": "University of Mary Hardin-Baylor (Belton, Texas) UMHB",
    "short_name": "UMHB"
}, {"value": "197313", "label": "Rose State College (Midwest City, OK) Rose", "short_name": "Rose"}, {
    "value": "197317",
    "label": "St. John's College (Annapolis, MD) SJC",
    "short_name": "SJC"
}, {
    "value": "198602",
    "label": "Aquinas College (Grand Rapids, MI) Aquinas",
    "short_name": "Aquinas"
}, {
    "value": "198614",
    "label": "Wartburg College (Waverly, IA) Wartburg ",
    "short_name": "Wartburg "
}, {
    "value": "198991",
    "label": "Five Branches University (Santa Cruz, CA) Five Branches ",
    "short_name": "Five Branches "
}, {
    "value": "198994",
    "label": "Abilene Christian University (Abilene, TX) ACU",
    "short_name": "ACU"
}, {"value": "198996", "label": "Union University (Jackson, TN) UU", "short_name": "UU"}, {
    "value": "198998",
    "label": "McNeese State University (Lake Charles, LA) McNeese ",
    "short_name": "McNeese "
}, {
    "value": "198999",
    "label": "Bellingham Technical College (Bellingham, WA) BTC",
    "short_name": "BTC"
}, {
    "value": "204635",
    "label": "University of Southern Indiana (Evansville, IN) USI",
    "short_name": "USI"
}, {
    "value": "206015",
    "label": "Rowan College of Burlington County (Pemberton, NJ) RCBC",
    "short_name": "RCBC"
}, {"value": "206137", "label": "Tiffin University (Tiffin, OH) Tiffin", "short_name": "Tiffin"}, {
    "value": "206138",
    "label": "Heidelberg University (Tiffin, OH) Heidelberg",
    "short_name": "Heidelberg"
}, {
    "value": "208736",
    "label": "Angelo State University (San Angelo, TX) Angelo ",
    "short_name": "Angelo "
}, {
    "value": "208738",
    "label": "Cumberland County College (Vineland, NJ) CCCNJ",
    "short_name": "CCCNJ"
}, {
    "value": "208743",
    "label": "Asia Pacific Institute of Information Technology (Kuala Lumpur, Malaysia) APIIT ",
    "short_name": "APIIT "
}, {
    "value": "208744",
    "label": "Montgomery College (Rockville, MD) Montgomery ",
    "short_name": "Montgomery "
}, {
    "value": "208746",
    "label": " Methodist University (Fayetteville, NC) Methodist ",
    "short_name": "Methodist "
}, {
    "value": "208992",
    "label": "Mississippi Gulf Coast Community College (Perkinston, MS) MGCCC",
    "short_name": "MGCCC"
}, {"value": "209701", "label": "Montcalm Community College (Sidney, MI) MCC", "short_name": "MCC"}, {
    "value": "211148",
    "label": "Crown College (St Bonifacius, MN) Crown College",
    "short_name": "Crown College"
}, {
    "value": "211151",
    "label": "College of Saint Elizabeth (Morristown, NJ) CSE",
    "short_name": "CSE"
}, {
    "value": "211173",
    "label": "Vermont Technical College (Randolph Center, VT) VTC",
    "short_name": "VTC"
}, {
    "value": "211945",
    "label": "Alverno College (Milwaukee, WI) Alverno ",
    "short_name": "Alverno "
}, {
    "value": "212021",
    "label": "The Art Institute of California - Sacramento (Sacramento, CA) AI",
    "short_name": "AI"
}, {"value": "212023", "label": "Norwalk Community College (Norwalk, CT) NCC", "short_name": "NCC"}, {
    "value": "212029",
    "label": "Aurora University (Aurora, IL) AU",
    "short_name": "AU"
}, {
    "value": "212041",
    "label": "San Bernardino Valley College (San Bernardino, CA) SBVC",
    "short_name": "SBVC"
}, {
    "value": "212045",
    "label": " Dakota College at Bottineau (Bottineau, ND) Dakota College Bottineau",
    "short_name": "Dakota College Bottineau"
}, {
    "value": "212050",
    "label": "Western Illinois University (Macomb, IL) WIU",
    "short_name": "WIU"
}, {
    "value": "212051",
    "label": "Universidad de los Andes (M\u00e9rida, Venezuela) ULA",
    "short_name": "ULA"
}, {"value": "213253", "label": "Not Listed Not Listed", "short_name": "Not Listed"}, {
    "value": "213475",
    "label": "Bucks County Community College (Newtown, PA) BCCC",
    "short_name": "BCCC"
}, {
    "value": "213479",
    "label": "Santa Barbara City College (Santa Barbara, CA) SBCC",
    "short_name": "SBCC"
}, {
    "value": "214626",
    "label": "North Seattle Community College (Seattle, WA) NSCC",
    "short_name": "NSCC"
}, {
    "value": "214700",
    "label": "Louisiana State University - Shreveport (Shreveport, LA)  LSUS",
    "short_name": "LSUS"
}, {
    "value": "214708",
    "label": "Faith Evangelical College & Seminary (Tacoma, WA) Faith Evangelical",
    "short_name": "Faith Evangelical"
}, {"value": "214716", "label": "SUNY Canton (Canton, NY) Canton", "short_name": "Canton"}, {
    "value": "214723",
    "label": "New England College (Henniker, NH) New England",
    "short_name": "New England"
}, {
    "value": "215483",
    "label": "Evergreen State College (Olympia, WA) Evergreen State",
    "short_name": "Evergreen State"
}, {
    "value": "216564",
    "label": "Western Oregon University (Monmouth, OR) WOU",
    "short_name": "WOU"
}, {
    "value": "216567",
    "label": "Talladega College (Talladega, AL) Talladega",
    "short_name": "Talladega"
}, {
    "value": "216855",
    "label": "University of Alaska Southeast (Juneau, AK) UAS",
    "short_name": "UAS"
}, {
    "value": "216857",
    "label": "Art Institute of California - Hollywood (North Hollywood, CA) AI",
    "short_name": "AI"
}, {
    "value": "218703",
    "label": "Gateway Community College (New Haven, CT) Gateway",
    "short_name": "Gateway"
}, {
    "value": "219419",
    "label": "Columbia College South Carolina (Columbia, SC) CC ",
    "short_name": "CC "
}, {"value": "219422", "label": "Bradley University (Peoria, IL) BU ", "short_name": "BU "}, {
    "value": "219425",
    "label": "Lakeland College (Plymouth, WI) Lakeland ",
    "short_name": "Lakeland "
}, {
    "value": "219426",
    "label": "Our Lady of the Lake University (San Antonio, TX) OLL ",
    "short_name": "OLL "
}, {
    "value": "221026",
    "label": "University of Puget Sound (Tacoma, WA) Puget Soung",
    "short_name": "Puget Soung"
}, {
    "value": "221151",
    "label": "MacEwan University (Edmonton, AB, Canada) MacEwan",
    "short_name": "MacEwan"
}, {"value": "226989", "label": "Northern Oklahoma College (Tonkawa, OK) NOC", "short_name": "NOC"}, {
    "value": "226990",
    "label": "Meridian Technology Center (Stillwater, OK) MTC",
    "short_name": "MTC"
}, {"value": "232087", "label": "Blinn College (Bryan, TX)  Blinn", "short_name": "Blinn"}, {
    "value": "235667",
    "label": "La Salle University (Philadelphia, PA) La Salle",
    "short_name": "La Salle"
}, {
    "value": "235668",
    "label": "University of West Georgia (Carrollton, GA) UWG",
    "short_name": "UWG"
}, {
    "value": "235669",
    "label": "Middle Georgia State University (Macon, GA) MGSU",
    "short_name": "MGSU"
}, {
    "value": "235670",
    "label": "Bellarmine University (Louisville, KY) Bellarmine",
    "short_name": "Bellarmine"
}, {
    "value": "235671",
    "label": "Pacific University (Forest Grove, OR) Pacific University",
    "short_name": "Pacific University"
}, {
    "value": "238207",
    "label": "Berkeley College, Middlesex (Woodbridge, NJ) Berkeley - Middlesex ",
    "short_name": "Berkeley - Middlesex "
}, {
    "value": "240858",
    "label": "University of Madison - Superior (Superior, WI) UM Superior",
    "short_name": "UM Superior"
}, {
    "value": "242671",
    "label": "Navajo Technical University (Crownpoint, NM) NTU",
    "short_name": "NTU"
}, {
    "value": "249286",
    "label": "Wichita State University (Wichita, KS) Wichita",
    "short_name": "Wichita"
}, {
    "value": "331729",
    "label": "Wingate University (Wingate, NC) Wingate",
    "short_name": "Wingate"
}, {
    "value": "331731",
    "label": "Tennessee Wesleyan University (Athens, TN) TWU",
    "short_name": "TWU"
}, {
    "value": "331733",
    "label": "Oglethorpe University (Atlanta, GA) Oglethorpe",
    "short_name": "Oglethorpe"
}, {
    "value": "334958",
    "label": "University of Minnesota - Morris (Morris, MN) UM Morris",
    "short_name": "UM Morris"
}, {
    "value": "334959",
    "label": "New York City College of Technology (Brooklyn, NY) City Tech",
    "short_name": "City Tech"
}, {
    "value": "343472",
    "label": "Trinity University (San Antonio, TX) Trinity U",
    "short_name": "Trinity U"
}, {
    "value": "392784",
    "label": "Tusculum University (Tusculum, TN) Tusculum",
    "short_name": "Tusculum"
}, {"value": "393363", "label": "Carnegie Mellon University in Qatar (Qatar) CMUQ", "short_name": "CMUQ"}];

