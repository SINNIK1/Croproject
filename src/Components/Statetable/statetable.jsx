import React from 'react';
import './statetable.css';

const StateTable = () => {
    const states = [
        {
            "no": "1",
            "State": "Andhra Pradesh",
            "Capital": "Amaravati",
            "Zone": "Southern",
            "Population": "49,506,799",
            "Area": "162,975",
            "Officiallanguages": "Telugu",
            "Statecode": "AP"
        },
        {
            "no": "2",
            "State": "Arunachal Pradesh",
            "Capital": "Itanagar",
            "Zone": "North-Eastern",
            "Population": "1,383,727",
            "Area": "83,743",
            "Officiallanguages": "English",
            "Statecode": "AR"
        },
        {
            "no": "3",
            "State": "Assam",
            "Capital": "Dispur",
            "Zone": "North-Eastern",
            "Population": "31,205,576",
            "Area": "78,550",
            "Officiallanguages": "Assamese",
            "Statecode": "AS"
        },
        {
            "no": "4",
            "State": "Bihar",
            "Capital": "Patna",
            "Zone": "Eastern",
            "Population": "104,099,452",
            "Area": "94,163",
            "Officiallanguages": "Hindi",
            "Statecode": "BR"
        },
        {
            "no": "5",
            "State": "Chhattisgarh",
            "Capital": "Raipur",
            "Zone": "Central",
            "Population": "25,545,198",
            "Area": "135,194",
            "Officiallanguages": "Hindi",
            "Statecode": "CG"
        },
        {
            "no": "6",
            "State": "Goa",
            "Capital": "Panaji",
            "Zone": "Western",
            "Population": "1,458,545",
            "Area": "3,702",
            "Officiallanguages": "Konkani",
            "Statecode": "GA"
        },
        {
            "no": "7",
            "State": "Gujarat",
            "Capital": "Gandhinagar",
            "Zone": "Western",
            "Population": "60,439,692",
            "Area": "196,024",
            "Officiallanguages": "Gujarati",
            "Statecode": "GJ"
        },
        {
            "no": "8",
            "State": "Haryana",
            "Capital": "Chandigarh",
            "Zone": "Northern",
            "Population": "25,351,462",
            "Area": "44,212",
            "Officiallanguages": "Hindi",
            "Statecode": "HR"
        },
        {
            "no": "9",
            "State": "Himachal Pradesh",
            "Capital": "Shimla (Summer)\nDharamshala (Winter)",
            "Zone": "Northern",
            "Population": "6,864,602",
            "Area": "55,673",
            "Officiallanguages": "Hindi",
            "Statecode": "HP"
        },
        {
            "no": "10",
            "State": "Jharkhand",
            "Capital": "Ranchi",
            "Zone": "Eastern",
            "Population": "32,988,134",
            "Area": "79,716",
            "Officiallanguages": "Hindi",
            "Statecode": "JH"
        },
        {
            "no": "11",
            "State": "Karnataka",
            "Capital": "Bangalore",
            "Zone": "Southern",
            "Population": "61,095,297",
            "Area": "191,791",
            "Officiallanguages": "Kannada",
            "Statecode": "KA"
        },
        {
            "no": "12",
            "State": "Kerala",
            "Capital": "Thiruvananthapuram",
            "Zone": "Southern",
            "Population": "33,406,061",
            "Area": "38,863",
            "Officiallanguages": "Malayalam",
            "Statcode": "KL"
        },
        {
            "no": "13",
            "State": "Madhya Pradesh",
            "Capital": "Bhopal",
            "Zone": "Central",
            "Population": "72,626,809",
            "Area": "308,252",
            "Officiallanguages": "Hindi",
            "Statecode": "MP"
        },
        {
            "no": "14",
            "State": "Maharashtra",
            "Capital": "Mumbai (Summer)\nNagpur (Winter)",
            "Zone": "Western",
            "Population": "112,374,333",
            "Area": "307,713",
            "Officiallanguages": "Marathi",
            "Statecode": "MH"
        },
        {
            "no": "15",
            "State": "Manipur",
            "Capital": "Imphal",
            "Zone": "North-Eastern",
            "Population": "2,855,794",
            "Area": "22,347",
            "Officiallanguages": "Meitei",
            "Statecode": "MN"
        },
        {
            "no": "16",
            "State": "Meghalaya",
            "Capital": "Shillong",
            "Zone": "North-Eastern",
            "Population": "2,966,889",
            "Area": "22,720",
            "Officiallanguages": "English",
            "Statecode": "ML"
        },
        {
            "no": "17",
            "State": "Mizoram",
            "Capital": "Aizawl",
            "Zone": "North-Eastern",
            "Population": "1,097,206",
            "Area": "21,081",
            "Officiallanguages": "English, Hindi, Mizo",
            "Statecode": "MZ"
        },
        {
            "no": "18",
            "State": "Nagaland",
            "Capital": "Kohima",
            "Zone": "North-Eastern",
            "Population": "1,978,502",
            "Area": "16,579",
            "Officiallanguages": "English",
            "Statecode": "NL"
        },
        {
            "no": "19",
            "State": "Odisha",
            "Capital": "Bhubaneswar",
            "Zone": "Eastern",
            "Population": "41,974,218",
            "Area": "155,820",
            "Officiallanguages": "Odia",
            "Statecode": "OD"
        },
        {
            "no": "20",
            "State": "Punjab",
            "Capital": "Chandigarh",
            "Zone": "Northern",
            "Population": "27,743,338",
            "Area": "50,362",
            "Officiallanguages": "Punjabi",
            "Statecode": "PB"
        },
        {
            "no": "21",
            "State": "Rajasthan",
            "Capital": "Jaipur",
            "Zone": "Northern",
            "Population": "68,548,437",
            "Area": "342,269",
            "Officiallanguages": "Hindi",
            "Statecode": "RJ"
        },
        {
            "no": "22",
            "State": "Sikkim",
            "Capital": "Gangtok",
            "Zone": "North-Eastern",
            "Population": "610,577",
            "Area": "7,096",
            "Officiallanguages": "English, Nepali",
            "Statecode": "SK"
        },
        {
            "no": "23",
            "State": "Tamil Nadu",
            "Capital": "Chennai",
            "Zone": "Southern",
            "Population": "72,147,030",
            "Area": "130,058",
            "Officiallanguages": "Tamil",
            "Statecode": "TN"
        },
        {
            "no": "24",
            "State": "Telangana",
            "Capital": "Hyderabad",
            "Zone": "Southern",
            "Population": "35,193,978",
            "Area": "112,077",
            "Officiallanguages": "Telugu",
            "Statecode": "TS"
        },
        {
            "no": "25",
            "State": "Tripura",
            "Capital": "Agartala",
            "Zone": "North-Eastern",
            "Population": "3,673,917",
            "Area": "10,492",
            "Officiallanguages": "Bengali, English, Kokborok",
            "Statecode": "TR"
        },
        {
            "no": "26",
            "State": "Uttar Pradesh",
            "Capital": "Lucknow",
            "Zone": "Central",
            "Population": "199,812,341",
            "Area": "243,286",
            "Officiallanguages": "Hindi",
            "Statecode": "UP"
        },
        {
            "no": "27",
            "State": "Uttarakhand",
            "Capital": "Bhararisain (Summer)\nDehradun (Winter)",
            "Zone": "Central",
            "Population": "10,086,292",
            "Area": "53,483",
            "Officiallanguages": "Hindi",
            "Statecode": "UK"
        },
        {
            "no": "28",
            "State": "West Bengal",
            "Capital": "Kolkata",
            "Zone": "Eastern",
            "Population": "91,276,115",
            "Area": "88,752",
            "Officiallanguages": "Bengali, Nepali",
            "Statecode": "WB"
        },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>State</th>
                    <th>Capital</th>
                    <th>Zone</th>
                    <th>Population (2011)</th>
                    <th>Area (km2)</th>
                    <th>Official languages</th>
                    <th>State code</th>
                </tr>
            </thead>
            <tbody>
                {states.map((state, index) => (
                    <tr key={index}>
                        <td>{state.no}</td>
                        <td>{state.State}</td>
                        <td>{state.Capital}</td>
                        <td>{state.Zone}</td>
                        <td>{state.Population}</td>
                        <td>{state.Area}</td>
                        <td>{state.Officiallanguages}</td>
                        <td>{state.Statecode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StateTable;