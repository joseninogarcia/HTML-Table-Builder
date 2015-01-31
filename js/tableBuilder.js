/*
    Table Builder Plugin
    Date: 1-31-2015
    Developer: Jose Nino N. Garcia
    Project: AY
    Description: Table builder is use to split the output from the server side. This can be use for the 
*/

(function ($) {

    $.fn.tableBuilder = function (options) {

        var headers = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'];

        //Get the options from the user
        var settings = $.extend({
            //These are the defaults
            headers: headers,
            dataTable: "test1[]test2[]test3[]test4[]test5[]test6,test7[]test8[]test9[]test10[]test11[]test12,test13[]test14[]test15[]test16[]test17[]test18,|8|10"
        }, options);

       //Split first all of the data before place on the HTML table
       var test_p = settings.dataTable;

       //Gets the data from the server output
       var first_sp = test_p.split("|");

       //Splits all of the results
       var second_sp = first_sp[0].split(",");             

       //Initiate Array
       var arr = [];                                       

        //Loop the values
       for (var i = 0; i < second_sp.length - 1; i++) {    
            arr.push(second_sp[i]);
       }

       //second array to be pull out
       var arr2 = [];
       var converted_sub = "";

       for (var k = 0; k < arr.length; k++) {
           arr2.push(arr[k].split("[]"));
       }

       //Build the table and populate the data from the server
       var strTable = "<table>";

       strTable += "<thead>";
       
       for (var j = 0; j < settings.headers.length; j++) {
           strTable += "<th>" + settings.headers[j] + "</th>";
       }

       strTable += "</thead>";

       strTable += "<tbody>";

       for (var i = 0; i < arr2.length; i++) {

           strTable += "<tr>";
           
           for (var k = 0; k < arr2[i].length; k++) {
               strTable += "<td>" + arr2[i][k] + "</td>";
           }

           strTable += "</tr>";
       }

       strTable += "</tbody>";
       strTable += "</table>";

       return this.html(strTable);
    };
}(jQuery));