$(document).ready( () => {
    let to;
    let from;
    let loc;
    let currentInfo;
    let price;
    let email;
    let trEmailed;
    let csToComplete;
    let shipSpeed;

    const addressInfo = {
        Kent_Corp_HQ: {
            cname: "Kent Corporation Headquarters",
            st: "2905 U.S. Highway 61 North",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        Kent_Conference_Center: {
            cname: "Kent Conference Center",
            st: "1600 Oregon St",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        Kent_Marketing_Services: {
            cname: "Marketing Services",
            st: "1420 Park Avenue",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        MEC_Distribution_Center: {
            cname: "Distribution Center (MEC)",
            st: "1250 S 300 West",
            city: "Washington",
            stZip: "IN 47501"
        },
        Kent_Innovation_Center: {
            cname: "Kent Innovation Center",
            st: "2501 N. Loop Drive, Suite 1800 Building 1",
            city: "Ames",
            stZip: "IA 50010"
        },
        GSTC_Distribution_Center: {
            cname: "Distribution Center (GSTC)",
            st: "4815 55th Ave West",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        GPC_HQ_and_Plant: {
            cname: "GPCM",
            st: "1600 Oregon St",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        GPC_Washington_In: {
            cname: "GPC Washington",
            st: "1443 S 300 W",
            city: "Washington",
            stZip: "IN 47501"
        },
        Kent_Grain: {
            cname: "Kent Grain",
            st: "40 Main St",
            city: "Plainville",
            stZip: "IN, 47568"
        },
        KNG_HQ: {
            cname: "KNG HQ",
            st: "2905 U.S. Highway 61 North",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        KNG_Altoona_IA: {
            cname: "KNG Altoona, IA Plant",
            st: "203 1st Avenue North",
            city: "Altoona",
            stZip: "IA 50009"
        },
        KNG_Arcade_NY: {
            cname: "KNG Arcade NY",
            st: "50 William St",
            city: "Arcade",
            stZip: "NY 14009"
        },
        KNG_Bangor_Maine: {
            cname: "Bangor, Maine Store",
            st: "876 Stillwater Ave.",
            city: "Bangor",
            stZip: "ME 04401"
        },
        KNG_Beardstown_IL: {
            cname: "KNG Beardstown, Illinois",
            st: "8679 Kent Feed Rd",
            city: "Beardstown",
            stZip: "IL 62618"
        },
        KNG_Bow_NH_Plant: {
            cname: "Bow, New Hampshire Plant",
            st: "520 Hall St",
            city: "Bow",
            stZip: "NH 03304"
        },
        KNG_Bow_NH_Store: {
            cname: "Bow, New Hampshire Store",
            st: "520 Hall St",
            city: "Bow",
            stZip: "NH 03304"
        },
        sheldonMS: {
            cname: "Kent Nutrition Group",
            st: "1500 RMT Ave",
            city: "Sheldon",
            stZip: "IA 51201"
        },
        columbus: {
            cname: "Kent Corp",
            st: "1409 Highway 45 S",
            city: "Columbus",
            stZip: "MS 39701"
        }
        //Left off at Brandon, Vermont on https://kent365.sharepoint.com/SitePages/Our-Locations.aspx?xsdata=MDV8MDF8fDY5YmEzOGU3YTI3MDRjYjE5ZTNjMDhkYWJlNzgzMGI2fDE4ZjNlZjc1YTYwZTQ1ODE4MzM5MTYwOGUzNGFhZDRkfDF8MHw2MzgwMzE3MjA2NDg5NzM4ODR8R29vZHxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVGs2TjJRM1lUa3lOV0k1TURNME5Ea3dORGszTmpSaE4yUTNNMlExWlRGallqWkFkR2h5WldGa0xuWXl8fA%3D%3D&sdata=NldGSUp2RjlQWmpkU3ZFZGZZa1BFRzhoQmMwRTJDYURPK0ZFdHhMMUVRcz0%3D&ovuser=18f3ef75-a60e-4581-8339-1608e34aad4d%2Crlvela%40kentww.com&OR=Teams-HL&CT=1667576819113&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D
    }

    for (const location in addressInfo) {
        if (Object.hasOwnProperty.call(addressInfo, location)) {
            const element = addressInfo[location];
            $("#locList").append($("<option>").attr('value', location));
        }
    }

    $('#address_form').submit( (evt) => {
        to = $('#to').val();
        from = $('#from').val();
        price = $('#price').val();
        email = $('#email').val();
        loc = $('#location').val();
        currentInfo = addressInfo[loc];

        trEmailed = ($('#trEmailed').is(':checked')) ? "YES" : "NO";
        csToComplete = ($('#csToComplete').is(':checked')) ? "YES" : "NO";
        
        if ($('#overnight').is(':checked')) {
            shipSpeed = "OVERNIGHT";
        } else if ($('#twoDay').is(':checked')) {
            shipSpeed = "TWO DAY";
        } else {
            shipSpeed = "GROUND"
        }

        $('.output').empty();

        $('.output').append("<h1><b>UPS Label</b></h1><br>")
            .append(`<b>Company Name:</b> ${currentInfo.cname}<br>`)
            .append(`<b>Attn To:</b> ${to}<br>`)
            .append(`<b>Address:</b> ${currentInfo.st}<br>`)
            .append(`<b>City:</b> ${currentInfo.city}<br>`)
            .append(`<b>State/Zip</b> ${currentInfo.stZip}<br>`)
            .append('<b>Dept to Charge</b> Kent IT<br>')
            .append(`<b>From:</b> ${from}<br><br>`)
            .append(`<b>Central Stores to Complete Packaging?:</b> ${csToComplete}<br>`)
            .append(`<b>Shipping Speed:</b> ${shipSpeed}<br>`)
            .append(`<b>Tracking Number Emailed?</b> ${trEmailed}<br><br>`)
            .append(`<b>Value: </b>$${price}<br>`)
            .append(`<b>Comments:</b> ${email}`);
        
        if (loc !== "personal") {
            $('#address_form').hide();
            print();
            $('#address_form').show();
        } 
        evt.preventDefault();
    })
})