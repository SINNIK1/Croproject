import React from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react'; // React Hook for Functional Components

const StateTable = () => {

    const [rowData, setRowData] = useState([
        {
            "No": "1",
            "State": "Andhra Pradesh",
            "Capital": "Amaravati",
            "Zone": "Southern",
            "Population": "49,506,799",
            "Area": "162,975",
            "Officiallanguages": "Telugu",
            "StateCode": "AP"
        },        
        {
            "No": "2",
            "State": "Arunachal Pradesh",
            "Capital": "Itanagar",
            "Zone": "North-Eastern",
            "Population": "1,383,727",
            "Area": "83,743",
            "Officiallanguages": "English",
            "StateCode": "AR"
        },
        {
            "No": "3",
            "State": "Assam",
            "Capital": "Dispur",
            "Zone": "North-Eastern",
            "Population": "31,205,576",
            "Area": "78,550",
            "Officiallanguages": "Assamese",
            "StateCode": "AS"
        },
        {
            "No": "4",
            "State": "Bihar",
            "Capital": "Patna",
            "Zone": "Eastern",
            "Population": "104,099,452",
            "Area": "94,163",
            "Officiallanguages": "Hindi",
            "StateCode": "BR"
        },
        {
            "No": "5",
            "State": "Chhattisgarh",
            "Capital": "Raipur",
            "Zone": "Central",
            "Population": "25,545,198",
            "Area": "135,194",
            "Officiallanguages": "Hindi",
            "StateCode": "CG"
        },
        {
            "No": "6",
            "State": "Goa",
            "Capital": "Panaji",
            "Zone": "Western",
            "Population": "1,458,545",
            "Area": "3,702",
            "Officiallanguages": "Konkani",
            "StateCode": "GA"
        },
        {
            "No": "7",
            "State": "Gujarat",
            "Capital": "Gandhinagar",
            "Zone": "Western",
            "Population": "60,439,692",
            "Area": "196,024",
            "Officiallanguages": "Gujarati",
            "StateCode": "GJ"
        },
        {
            "No": "8",
            "State": "Haryana",
            "Capital": "Chandigarh",
            "Zone": "Northern",
            "Population": "25,351,462",
            "Area": "44,212",
            "Officiallanguages": "Hindi",
            "StateCode": "HR"
        },
        {
            "No": "9",
            "State": "Himachal Pradesh",
            "Capital": "Shimla",
            "Zone": "Northern",
            "Population": "6,864,602",
            "Area": "55,673",
            "Officiallanguages": "Hindi",
            "StateCode": "HP"
        },
        {
            "No": "10",
            "State": "Jharkhand",
            "Capital": "Ranchi",
            "Zone": "Eastern",
            "Population": "32,966,238",
            "Area": "79,714",
            "Officiallanguages": "Hindi",
            "StateCode": "JH"
        },
        {
            "No": "11",
            "State": "Karnataka",
            "Capital": "Bangalore",
            "Zone": "Southern",
            "Population": "61,095,297",
            "Area": "191,791",
            "Officiallanguages": "Kannada",
            "StateCode": "KA"
        },
        {
            "No": "12",
            "State": "Kerala",
            "Capital": "Thiruvananthapuram",
            "Zone": "Southern",
            "Population": "33,406,061",
            "Area": "38,863",
            "Officiallanguages": "Malayalam",
            "StateCode": "KL"
        },
        {
            "No": "13",
            "State": "Madhya Pradesh",
            "Capital": "Bhopal",
            "Zone": "Central",
            "Population": "72,626,809",
            "Area": "308,252",
            "Officiallanguages": "Hindi",
            "StateCode": "MP"
        },
        {
            "No": "14",
            "State": "Maharashtra",
            "Capital": "Mumbai (Summer)\nNagpur (Winter)",
            "Zone": "Western",
            "Population": "112,374,333",
            "Area": "307,713",
            "Officiallanguages": "Marathi",
            "StateCode": "MH"
        },
        {
            "No": "15",
            "State": "Manipur",
            "Capital": "Imphal",
            "Zone": "North-Eastern",
            "Population": "2,855,794",
            "Area": "22,347",
            "Officiallanguages": "Meitei",
            "StateCode": "MN"
        },
        {
            "No": "16",
            "State": "Meghalaya",
            "Capital": "Shillong",
            "Zone": "North-Eastern",
            "Population": "2,966,889",
            "Area": "22,720",
            "Officiallanguages": "English",
            "StateCode": "ML"
        },
        {
            "No": "17",
            "State": "Mizoram",
            "Capital": "Aizawl",
            "Zone": "North-Eastern",
            "Population": "1,097,206",
            "Area": "21,081",
            "Officiallanguages": "English, Hindi, Mizo",
            "StateCode": "MZ"
        },
        {
            "No": "18",
            "State": "Nagaland",
            "Capital": "Kohima",
            "Zone": "North-Eastern",
            "Population": "1,978,502",
            "Area": "16,579",
            "Officiallanguages": "English",
            "StateCode": "NL"
        },
        {
            "No": "19",
            "State": "Odisha",
            "Capital": "Bhubaneswar",
            "Zone": "Eastern",
            "Population": "41,974,218",
            "Area": "155,820",
            "Officiallanguages": "Odia",
            "StateCode": "OD"
        },
        {
            "No": "20",
            "State": "Punjab",
            "Capital": "Chandigarh",
            "Zone": "Northern",
            "Population": "27,743,338",
            "Area": "50,362",
            "Officiallanguages": "Punjabi",
            "StateCode": "PB"
        },
        {
            "No": "21",
            "State": "Rajasthan",
            "Capital": "Jaipur",
            "Zone": "Northern",
            "Population": "68,548,437",
            "Area": "342,269",
            "Officiallanguages": "Hindi",
            "StateCode": "RJ"
        },
        {
            "No": "22",
            "State": "Sikkim",
            "Capital": "Gangtok",
            "Zone": "North-Eastern",
            "Population": "610,577",
            "Area": "7,096",
            "Officiallanguages": "English, Nepali",
            "StateCode": "SK"
        },
        {
            "No": "23",
            "State": "Tamil Nadu",
            "Capital": "Chennai",
            "Zone": "Southern",
            "Population": "72,147,030",
            "Area": "130,058",
            "Officiallanguages": "Tamil",
            "StateCode": "TN"
        },
        {
            "No": "24",
            "State": "Telangana",
            "Capital": "Hyderabad",
            "Zone": "Southern",
            "Population": "35,193,978",
            "Area": "112,077",
            "Officiallanguages": "Telugu",
            "StateCode": "TS"
        },
        {
            "No": "25",
            "State": "Tripura",
            "Capital": "Agartala",
            "Zone": "North-Eastern",
            "Population": "3,673,917",
            "Area": "10,492",
            "Officiallanguages": "Bengali, English, Kokborok",
            "StateCode": "TR"
        },
        {
            "No": "26",
            "State": "Uttar Pradesh",
            "Capital": "Lucknow",
            "Zone": "Central",
            "Population": "199,812,341",
            "Area": "243,286",
            "Officiallanguages": "Hindi",
            "StateCode": "UP"
        },
        {
            "No": "27",
            "State": "Uttarakhand",
            "Capital": "Bhararisain (Summer)\nDehradun (Winter)",
            "Zone": "Central",
            "Population": "10,086,292",
            "Area": "53,483",
            "Officiallanguages": "Hindi",
            "StateCode": "UK"
        },
        {
            "No": "28",
            "State": "West Bengal",
            "Capital": "Kolkata",
            "Zone": "Eastern",
            "Population": "91,276,115",
            "Area": "88,752",
            "Officiallanguages": "Bengali, Nepali",
            "StateCode": "WB"
        }
    ]);
      
      // Column Definitions: Defines the columns to be displayed.
      const [colDefs, setColDefs] = useState([
        { field: "No"},
        { field: "State"},
        { field: "Capital" },
        { field: "Zone" },
        { field: "Population" },
        { field: "Area" },
        { field: "Officiallanguages" },
        { field: "StateCode" }
      ]);
    return (
        <div className='ag-theme-quartz' style = {{height: 500}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
}

export default StateTable;




